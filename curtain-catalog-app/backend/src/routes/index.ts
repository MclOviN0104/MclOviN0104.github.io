import { Router } from 'express';
import { getCurtains, calculateBudget } from '../controllers';

const router = Router();

router.get('/curtains', getCurtains);
router.post('/calculate-budget', calculateBudget);

export default router;