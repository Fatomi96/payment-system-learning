import db from '../db/setup/postgres.js';
import findAccount from '../db/queries/account.js';

export default class AccountService {
   /**
    * Fetches an account
    * @memberof AccountService
    * @param {string} accountNumber  - The account number of the customer
    * @returns { Promise<Object | Error> } A promise that resolves or rejects
    * with an Object of the account resource or an Error.
    */
   static async getAccount(accountNumber) {
      return db.one(findAccount.findAccount, accountNumber);
   }
}
 