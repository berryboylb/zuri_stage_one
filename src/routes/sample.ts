import express, { Request } from "express";
import SampleController from "../controllers/sampleController";
const router = express.Router();
router.post("/", SampleController.sampleRequest);

export default router;
