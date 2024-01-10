// errorMiddleware.js

const errorMiddleware = (error, req, res, next) => {
//   console.error(error);

  // You can customize the error response based on your requirements
  const errorMessage = "Internal Server Error";
  res.status(500).json({ status: false, message: errorMessage });
};

module.exports = errorMiddleware;
