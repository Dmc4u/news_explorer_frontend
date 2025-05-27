// It is a React component that displays saved news articles. It allows users to view, delete, and search through their saved articles. The component uses the useState and useEffect hooks to manage state and side effects, and it utilizes the NewsCard component to render individual articles.

// useEffect(() => {
//   const storedLogin = localStorage.getItem("isLoggedIn");
//   const storedUser = localStorage.getItem("currentUser");
//   const lastSearch = localStorage.getItem("lastSearchQuery");

//   if (storedLogin === "true" && storedUser) {
//     setLoggedIn(true);
//     setCurrentUser(JSON.parse(storedUser));
//   }

//   // ✅ auto-restore search results
//   if (lastSearch) {
//     const cached = localStorage.getItem(`newsCache-${lastSearch}`);
//     if (cached) {
//       setArticles(JSON.parse(cached));
//       setSearchQuery(lastSearch);
//       setVisibleCards(3);
//     }
//   }

//   setAppReady(true);
// }, []);
