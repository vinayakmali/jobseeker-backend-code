const express = require("express");
const controller = require("../controller");
module.exports.routes = () => {
  const router = express.Router();
  router.get("/profile/getall", controller.getAllProfile);
  router.post("/save/profile", controller.saveProfile);

  // seminar update route solution
//  router.put("/seminar/publish/:seminarId", controller.publishSeminar);
  // seminar update route solution

  return router;
};
