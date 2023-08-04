const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
const { multerUpload } = require("../../middlewares");

//router.patch("/themes", usersController.updateTheme);

router.patch(
  "/avatar",
  multerUpload.single("newAvatar"),
  usersController.uploadAvatar
);

//router.patch("/help", usersController.helpRequest);

//router.patch("/", usersController.updateUser);

module.exports = router;
