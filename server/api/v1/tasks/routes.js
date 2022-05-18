const express = require("express");
// eslint-disable-next-line
const router = express.Router();
const controller = require("./controller");

/*
 * /api/v1/tasks     POST   Create
 * /api/v1/tasks     GET    Read all
 * /api/v1/tasks/:id GET    Read
 * /api/v1/tasks/:id PUT    Update
 * /api/v1/tasks/:id DELETE Delete
 */

router.route("/tasks/:userid").get(controller.all);
router.route("/").post(controller.create);

router.param("id", controller.id);

router
  .route("/:id")
  .get(controller.read)
  .patch(controller.update)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
