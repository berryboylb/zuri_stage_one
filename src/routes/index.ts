import { Request, Response, Router } from "express";
const router: Router = Router();

// Sample APIs
import sampleRouter from './sample';
router.use('/samples', sampleRouter)

// Health-check Endpoint
router.get('/health', (_req: Request, res: Response) => { res.send('200') })

export default router;