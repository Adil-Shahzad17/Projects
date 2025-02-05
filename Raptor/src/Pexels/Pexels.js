import config from "../Appwrite/config";

const PEXELS_API_KEY = config.pexels_api_key;

class PEXELS {
  async search({ query, per_page = 15, page = 1 }) {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}&page=${page}`,
        {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log("Search Error", error);
      return null;
    }
  }

  async nextPage({ nextURL }) {
    try {
      const response = await fetch(nextURL, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.log("Search Error", error);
      return null;
    }
  }
}

const pexels = new PEXELS();

export default pexels;
