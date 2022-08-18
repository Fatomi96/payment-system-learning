import joi from 'joi';
import ValidationHelper from '../utils/helpers/validation.js';

const { numberCheck, accountNumberCheck } = ValidationHelper;

export const fundAccountSchema = joi.object({
   accountNumber: accountNumberCheck('Account Number'),
   amount: numberCheck('Amount')
 });
 