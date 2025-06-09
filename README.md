# 📰 NewsExplorer – Frontend

This is the frontend application for **NewsExplorer**, a responsive React web app that allows users to search for and save news articles using the News API.

🔗 [NewsExplorer](https://finalproject.crabdance.com/)
🔗 [View the repository](https://github.com/Dmc4u/news_explorer_frontend)

## 📦 Tech Stack

- ⚛️ React (with Vite)
- 🎨 CSS using BEM methodology
- 🌐 React Router DOM
- 📰 News API (for fetching articles)

## 📋 Features

- 🔍 Keyword-based search with real-time news fetching
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🔒 Protected route for saved articles (visible after login)
- 🧩 Modular & reusable components (cards, buttons, modals, loaders)
- 💾 LocalStorage caching for saved articles and search results

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone git@github.com:Dmc4u/news_explorer_frontend.git
cd news_explorer_frontend

### 2️⃣ Create Project with Vite
npm create vite@latest . --template react Or npm create vite@latest .

###  3️⃣ Install Dependencies
npm install

### 4️⃣ Run the Development Server
npm run dev


git init
git add .
git commit -m "Initial commit: set up Vite + React project"

🌿 5. Create and Switch to Stage Branches
git checkout -b stage-1-frontend-and-api

📤 6. Push to GitHub

git push -u origin stage-1-frontend-and-api

📦 Additional Dependencies
Install React Router DOM:
npm install react-router-dom

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.


🚀 Deploying a Vite App to GitHub Pages
Follow these exact steps in your terminal and project files:

1️⃣ Install gh-pages

npm install gh-pages --save-dev

2️⃣ Update vite.config.js
Add the base field with your repository name:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/news_explorer_frontend/',
  plugins: [react()],
});


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/news_explorer_frontend/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

3️⃣ Add homepage to package.json

"homepage": "https://dmc4u.github.io/news_explorer_frontend/"

4️⃣ Add deploy scripts to package.json
Inside your "scripts" section:

"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

Example full "scripts":
"scripts": {
  "dev": "vite --open",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"

5️⃣ Deploy the App
Run the commands below in your terminal:

npm run predeploy
npm run deploy

6️⃣ Enable GitHub Pages
1. Go to your repo:
https://github.com/Dmc4u/news_explorer_frontend

2. Click Settings > Pages

3. Under "Source", select:
  - Branch: gh-pages
  - Folder: / (root)

4. Click Save

✅ Your app will be live shortly at:
👉 https://dmc4u.github.io/news_explorer_frontend/


## After a successful merge

1. Switch to main branch and pull the latest changes:
bash
git checkout main
git pull origin main

## Delete the branch you checked out from. e.g stage-1-frontend-and-api
 Run: git checkout -d stage-1-frontend-and-api

## To  see all your branches:

git branch -a
Run: git branch //to see the current branch.


2. Install any new dependencies (in case new packages were added):
bash
npm install

Run: npm run dev

## Deploy the frontend to the Google Cloud Server.
# Make a directory on VM 
run:  mkdir /home/dmsesbiz2005/final-project-frontend

# Update the package.json script to:"deploy": "npm run build && scp -r ./dist/* dmsesbiz2005@34.165.62.57:/home/dmsesbiz2005/news_explorer_frontend
/"

Run: npm run deploy on the LM 
- This will:
1. 🏗️ Build your React app locally (npm run build)
2. 📤 Copy the built files to your VM server via scp
3. 🌐 Make your app available at https://finalproject.crabdance.com


## Fix the permission for the user to be able to read the files in the assets directory?
run on VM: chmod 755 /home/dmsesbiz2005/news_explorer_frontend/assets

# 🧠 Optional: Automate This in npm run deploy
If you want to avoid manual chown/chmod in the future, you can modify your deploy script in package.json like this:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "npm run build && scp -r ./dist/* dmsesbiz2005@finalproject.crabdance.com:/home/dmsesbiz2005/news_explorer_frontend && ssh dmsesbiz2005@finalproject.crabdance.com 'sudo chown -R www-data:www-data /home/dmsesbiz2005/news_explorer_frontend && sudo chmod -R 755 /home/dmsesbiz2005/news_explorer_frontend'"
}
