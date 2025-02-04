import { createClient } from "pexels";

const PEXELS_API_KEY =
  "ZppFcwbX01jtHKdt5HHWz54Xfdo02pkKp1ajmVEZKaOVPsSKN7uPOF3f";

class PEXELS {
  constructor() {
    this.client = createClient(PEXELS_API_KEY);
  }

  async search({ query, per_page = 15, page = 1 }) {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}$page=${page}`,
        {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        }
      );

      if (response) {
        const data = response.json();
        return data;
      }
    } catch (error) {
      console.log("Search Error", error);
    }
  }

  async nextPage({ nextURL }) {
    try {
      const response = await fetch(`${nextURL}`, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      if (response) {
        const data = response.json();
        return data;
      }
    } catch (error) {
      console.log("Search Error", error);
    }
  }
}

const pexels = new PEXELS();

export default pexels;
