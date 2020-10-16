import { Router } from "express";
import multer from "multer";
import OrphanageController from "./controllers/OrphanagesController";
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanageController.index);
routes.get("/orphanages/:id", OrphanageController.show);
routes.post("/orphanages", upload.array('files'), OrphanageController.create);

export default routes;
