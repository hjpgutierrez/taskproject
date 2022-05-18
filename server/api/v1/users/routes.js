const express = require("express");
// eslint-disable-next-line
const router = express.Router();
const controller = require("./controller");

/*
 * /api/v1/users     POST   Create
 * /api/v1/users     GET    All
 * /api/v1/users/:id PUT    Update
 */

router.route("/signup").post(controller.create);
router.route("/signin").post(controller.signin);

router.param("id", controller.id);

router.route("/:id").patch(controller.update).put(controller.update);

module.exports = router;
