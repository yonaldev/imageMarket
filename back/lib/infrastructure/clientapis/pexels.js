const axios = require("axios");

module.exports = {
  getImageRelated(titleProduct) {
    return new Promise(async (resolve, reject) => {
      try {
        const keyAPI = process.env.KEY_PEXELS;
        const url = `https://api.pexels.com/v1/search?query=${titleProduct}`;

        const images = await axios.get(url, {
          Headers: {
            Authorization: keyAPI,
          },
        });

        const firstPhoto = images.data.photos[0].src.original;

        resolve(firstPhoto);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  },
};
