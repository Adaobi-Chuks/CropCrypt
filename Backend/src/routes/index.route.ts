import { Router, Request, Response, Application } from 'express';
import assetRoute from "./asset.route";
import submissionRoute from "./submission.route";
import uploadRoute from './upload.route';
import { OK } from '../utils/statusCodes.util';
const router: Router = Router();
import CustomResponse from "../utils/helpers/response.util";

/**API base route */
router.get("/", (req: Request, res: Response) => {
    return new CustomResponse(OK, true, "Welcome, ensure to go through the API docs before using this service", res);
});

router.use("/asset", assetRoute);
router.use("/submission", submissionRoute);
router.use('/upload', uploadRoute);

export default router;