import ErrorFactory from '../utils/helpers/efactory.js';
import AccountService from '../services/account.js';

const { getAccount } = AccountService;



export default class AccountMiddleware {
   /**
      * Checks if account exists
      * @static
      * @param {Request} req - The request from the endpoint.
      * @param {Response} res - The response returned by the method.
      * @param {Next} next - The function that calls the next handler.
      * @memberof FormMiddleware
      * @returns { JSON } - Returns the details of the account
      */
   static async checkAccountExists(req, res, next) {
     try {
       const accountNumber = getAccount(req.body.accountNumber);
       req.account = accountNumber;
       return res.send('yes');
      } catch (e) {
       const error = ErrorFactory.resolveError({ ...e, resource: 'Account' });
       next(error);
     }
   }
 }
 