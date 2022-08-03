const express  = require("express");
const planController = require( "../controllers/plan-controller.js");

const planRouter = express.Router();
//plans
planRouter.get("/", planController.plansList);
planRouter.post("/", planController.planAdding);
planRouter.delete("/:id", planController.planDeleting)
planRouter.put("/:id", planController.planEditing)
planRouter.get("/event-page/:id", planController.getEventPage);
//items
planRouter.post("/event-page/:id/items", planController.itemAdding)
planRouter.put("/event-page/:id/items", planController.itemEditing)
planRouter.delete("/event-page/:id/items", planController.itemDeleting)

//fetch plans and items for event
planRouter.get("/events", planController.fetchPlans)
module.exports =  planRouter;