import { CreateItemController } from "./../modules/items/useCases/createItem/CreateItemController";
import { Router } from "express";
import { ImportItemsController } from "../modules/items/useCases/importItems/ImportItemsController";
import multer from "multer";
import { FindItemsByDescriptionController } from "../modules/items/useCases/findItemsByDescription/FIndItemsByDescriptionController";

export const itemsRoutes = Router();

const createItemController = new CreateItemController();
const importItemsController = new ImportItemsController();
const findItemsByDescriptionController = new FindItemsByDescriptionController();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

itemsRoutes.post("/", createItemController.handle);
itemsRoutes.get("/", findItemsByDescriptionController.handle);
itemsRoutes.post(
  "/upload",
  upload.single("xlsx"),
  importItemsController.handle
);
