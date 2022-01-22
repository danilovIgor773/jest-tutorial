const axios = require("axios");

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error("async error"));
        }
      }, 2000);
    });
  }
  static async get() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error while fetching data, error: ${error}`);
    }
  }
}

module.exports = Ajax;
