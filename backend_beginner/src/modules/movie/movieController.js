const helperWrapper = require("../../config/wrapper");

module.exports = {
  // eslint-disable-next-line consistent-return
  gethello: async (request, response) => {
    try {
      return helperWrapper.response(
        response,
        200,
        "succes get data",
        "hello world"
      );
    } catch (error) {
      console.log(error);
    }
  },
};
