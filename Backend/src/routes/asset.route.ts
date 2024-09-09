import express from 'express';
import AssetController from '../controllers/asset.controller';
import validate from '../middlewares/validate.middleware';
import { createSchema } from '../schemas/asset.schema';
const { createAsset, getAAsset, getAllAsset, deleteAsset, payOut } = new AssetController();
const router = express.Router();

//create asset
router.post("/", validate(createSchema), createAsset);

//get a asset details
router.get("/:id", getAAsset);

//get all assets
router.get("/", getAllAsset);

//pay creators
router.patch("/pay/:id", payOut);

//delete a asset
router.delete("/:id", deleteAsset);

export default router;