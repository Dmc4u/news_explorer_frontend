import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import SavedNewsPage from "../SavedNewsPage/SavedNewsPage";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import SignupSuccessModal from "../SignupSuccessModal/SignupSuccessModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { fetchNewsArticles } from "../../utils/newsApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import keyboardImg from "../../assets/images/keyboard-img.png";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSavedNews = location.pathname === "/saved-news";

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "" });
  const [isAppReady, setAppReady] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [savedArticles, setSavedArticles] = useState(() => {
    const stored = localStorage.getItem("savedArticles");
    return stored ? JSON.parse(stored) : [];
  });

  const [activeModal, setActiveModal] = useState(null);
  const handleClose = () => setActiveModal(null);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("currentUser");
    const lastSearch = localStorage.getItem("lastSearchQuery");

    if (storedLogin === "true" && storedUser) {
      setLoggedIn(true);
      setCurrentUser(JSON.parse(storedUser));
    }

    if (lastSearch) {
      const cached = localStorage.getItem(`newsCache-${lastSearch}`);
      if (cached) {
        setArticles(JSON.parse(cached));
        setSearchQuery(lastSearch);
        setVisibleCards(3);
      }
    }

    setAppReady(true);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isAppReady) return null;

  const handleSearch = (query) => {
    if (!query.trim()) {
      setErrorMessage("Please enter a keyword");
      return;
    }

    localStorage.setItem("lastSearchQuery", query);
    const cached = localStorage.getItem(`newsCache-${query}`);

    if (cached) {
      setArticles(JSON.parse(cached));
      setVisibleCards(3);
      setSearchQuery(query);
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    setArticles([]);
    setSearchQuery(query);

    fetchNewsArticles(query)
      .then((articles) => {
        if (articles.length === 0) {
          setErrorMessage("Nothing Found");
        } else {
          setArticles(articles);
          localStorage.setItem(`newsCache-${query}`, JSON.stringify(articles));
          setVisibleCards(3);
        }
      })
      .catch(() => {
        setErrorMessage(
          "Sorry, something went wrong during the request. Please try again later."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { name, email, password, _id: "user" + Date.now() };
        localStorage.setItem("registeredUser", JSON.stringify(newUser));
        setActiveModal("success");
        resolve();
      }, 1000);
    });
  };

  const handleLogin = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const storedUser = localStorage.getItem("registeredUser");
        if (!storedUser) return reject("No registered user found");

        const user = JSON.parse(storedUser);
        if (user.email !== email || user.password !== password) {
          return reject("Invalid credentials");
        }

        setLoggedIn(true);
        setCurrentUser(user);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));

        setActiveModal(null);
        navigate("/saved-news");
        resolve();
      }, 1000);
    }).catch((err) => {
      console.error("Login failed:", err);
      alert(err);
    });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser({ name: "" });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleSaveArticle = (article) => {
    const keyword = searchQuery.trim();
    const updated = [
      ...savedArticles,
      { ...article, keyword, owner: currentUser._id },
    ];
    setSavedArticles(updated);
    localStorage.setItem("savedArticles", JSON.stringify(updated));
  };

  const handleDeleteArticle = (article) => {
    const updated = savedArticles.filter((a) => a.title !== article.title);
    setSavedArticles(updated);
    localStorage.setItem("savedArticles", JSON.stringify(updated));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="intro-background">
                  <Header
                    isSavedNews={isSavedNews}
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                    onLogin={() => setActiveModal("login")}
                    onLogout={handleLogout}
                    activeModal={activeModal}
                    onClose={handleClose}
                  />
                    <SearchForm onSearch={handleSearch} />
                </div>

                <Main
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  articles={articles}
                  visibleCards={visibleCards}
                  setVisibleCards={setVisibleCards}
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  onSave={handleSaveArticle}
                  onDelete={handleDeleteArticle}
                />

                <About />

                {/* ✅ Keyboard image for exactly 768px when login modal is open and user not logged in */}
                {!isLoggedIn &&
                  activeModal === "login" &&
                  screenWidth === 768 && (
                    <img
                      src={keyboardImg}
                      alt="Mobile keyboard"
                      className="app__keyboard-img"
                    />
                  )}

                <Footer />
              </>
            }
          />

          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <div className="saved-background">
                  <Header
                    isSavedNews={isSavedNews}
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
                    onLogin={() => setActiveModal("login")}
                    onLogout={handleLogout}
                    activeModal={activeModal}
                    onClose={handleClose}
                  />
                  <SavedNewsPage
                    currentUser={currentUser}
                    savedArticles={savedArticles}
                    onDelete={handleDeleteArticle}
                  />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Modals */}
        <RegisterModal
          isOpen={activeModal === "register"}
          onRegister={handleRegister}
          onClose={handleClose}
          onSwitchToLogin={() => setActiveModal("login")}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          onLogin={handleLogin}
          onClose={handleClose}
          onSwitchToRegister={() => setActiveModal("register")}
        />
        <SignupSuccessModal
          isOpen={activeModal === "success"}
          onClose={handleClose}
          onSignInClick={() => setActiveModal("login")}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
