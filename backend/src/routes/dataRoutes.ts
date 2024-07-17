import { Router } from 'express';
import { getCoinData } from '../controllers/coinController';

const router = Router();

router.get('/:code', getCoinData);

export default router;
