const statusMessages = {
  200: "OK",
  201: "Created",
  202: "Accepted",
  204: "No Content",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  409: "Conflict",
  500: "Internal Server Error",
};


exports.success = function (req, res, message, status) {
  let statusCode = status;
  let statusMessage = message;
  if (!statusCode) {
    statusCode = 200;
  }
  if (!message) {
    statusMessage = statusMessages[status];
  }
  res.status(statusCode).send({
    error: "",
    body: statusMessage,
  });
};

exports.error = function (req, res, message, status, details) {
  let statusCode = status;
  let statusMessage = message;
  if (!statusCode) {
    statusCode = 500;
  }
  if (!message) {
    statusMessage = statusMessages[status];
  }
  res.status(statusCode).send({
    error: statusMessage,
    body: details,
  });
}