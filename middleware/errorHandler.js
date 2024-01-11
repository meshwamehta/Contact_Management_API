const { constants } = require("../contstants");
const errorHandler = (error, request, response, next) => {
  //here Statuscode is fetched from contactController if there is no status code
  //attched then it will assign statuscode=500
  const statusCode = response.statusCode ? response.statusCode : 500;
  //switch function will provide json response based on satus code
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      response.json({
        title: "Validation Error",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.NOT_FOUND:
      response.json({
        title: "Not Found!!",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.FORBIDDEN:
      response.json({
        title: "Forbidden!!",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      response.json({
        title: "Unauthorized",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.SERVER_ERROR:
      response.json({
        title: "Server Error",
        message: error.message,
        stackTrace: error.stack,
      });
      break;

    default:
      console.log("No Error, All Good");
      break;
  }
};
module.exports = errorHandler;
