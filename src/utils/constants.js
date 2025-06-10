// constants.js

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.newsarticle.crabdance.com"
    : "http://localhost:3002";

// External News API endpoint
export const newsApiUrl = process.env.NODE_ENV === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

// Your API key for NewsAPI
export const apiKey = "eb0ffbab117e48f7849ea05c72990556";

// Date formatter for NewsAPI
export const formatDate = (date) => date.toISOString().split("T")[0];

