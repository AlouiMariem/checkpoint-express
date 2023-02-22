const path = require("path");
const date = new Date();
const hour = date.getHours();
const day = date.getDay();

const workingtime = function (request, response, next) {
  if (hour > 9 && hour < 18 && day > 0 && day < 6) {
    next();
  } else {
    response.status(400);
    

    response.sendFile(path.join(__dirname, "../pages", "close.html"));
  }
};

module.exports = workingtime;