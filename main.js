let news = [];

const getLatestNews = async () => {
  const url = new URL(`https://deluxe-cupcake-9fea9e.netlify.app/`);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("dddd", news);
};

getLatestNews();
