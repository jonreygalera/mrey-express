import { Router } from 'express';
import { landingPage } from '../app/controllers/landingPage.controller';

const router = Router();
router.get('/', landingPage);

export default router;
