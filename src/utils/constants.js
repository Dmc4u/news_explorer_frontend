export const apiKey = "eb0ffbab117e48f7849ea05c72990556";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const formatDate = (date) => date.toISOString().split("T")[0];
