const express  = require("express");
const planController = require( "../controllers/plan-controller.js");

const planRouter = express.Router();

planRouter.get("/", planController.plansList);
planRouter.post("/", planController.planAdding);
planRouter.delete("/:id", planController.planDeleting)
planRouter.put("/:id", planController.planEditing)

module.exports =  planRouter;