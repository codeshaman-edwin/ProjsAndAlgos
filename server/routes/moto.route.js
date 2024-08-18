import { Router } from "express";
import {
  createMoto,
  getAllMotos,
  getOneMoto,
  updateOneMoto,
  deleteOneMoto,
} from "../controllers/moto.controller.js";


const router = Router();
router.route("/motos").get(getAllMotos).post(createMoto);
router
  .route("/motos/:id")
  .get(getOneMoto)
  .put(updateOneMoto)
  .delete(deleteOneMoto);

export default router;