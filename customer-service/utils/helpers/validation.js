import joi from 'joi';

/**
 * contains validation helpers
 *
 * @class ValidationHelper
 */
class ValidationHelper {
   /**
    * It validates a number.
    * @static
    * @memberof ValidationHelper
    * @returns {Boolean}
    */
   static numberCheck(param, min = 1) {
      return joi
         .number()
         .required()
         .min(min)
         .messages({
            'any.required': `${param} is a required field`,
            'number.base': `${param} must be a number`,
            'number.empty': `${param} cannot be an empty field`,
            'number.min': `${param} can not be lesser than ${min}`
         });
   }

   /**
    * It validates a account number.
    * @static
    * @memberof ValidationHelper
    * @returns {Boolean}
    */
   static accountNumberCheck() {
      return joi.string().pattern(new RegExp('^[0-9]{10}$')).required().messages({
         'string.pattern.base':
            'Account Number must be 10 digits',
         'string.empty': 'Account Number must not be an empty field',
         'any.required': 'Account Number is a required field'
      });
   }
}

export default ValidationHelper;