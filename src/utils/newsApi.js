import { newsApiUrl, apiKey, formatDate } from "./constants";

// Fetch articles from NewsAPI for the past 7 days
export const fetchNewsArticles = async (query) => {
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const url = `${newsApiUrl}?q=${encodeURIComponent(query)}&from=${formatDate(
    
    sevenDaysAgo
  )}&to=${formatDate(today)}&pageSize=100&apiKey=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("News API request failed");

  }

  const data = await response.json();
  return data.articles;
};

