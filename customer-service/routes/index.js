import { Router } from "express";
import { ValidationMiddleware, AccountMiddleware } from '../middlewares/index.js';
import { fundAccountSchema } from "../validations/customer.js";

const { checkAccountExists } = AccountMiddleware;
const { validate } = ValidationMiddleware;

const router = Router();

router.post('/', validate(fundAccountSchema), checkAccountExists )

export default router;