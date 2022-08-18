import BillingService from '../services';
import { ErrorFactory, Helper } from '../utils';

const { addBilling } = BillingService;

const {successResponse} = Helper;

export default class BillingController {
/**
   * @static
   * @param {Request} req - The request from the endpoint.
   * @param {Response} res - The response returned by the method.
   * @param {Next} next
   * @memberof BillingController
   */
  static async addBilling(req, res, next) {
     try {
        const { customerId, amount, type } = req.body;
        const result = await addBilling(customerId, amount, type);
        return successResponse(res, {
           message: 'Transaction added',
           data: result
         });
      } catch (err) {
      console.log(err)
      res.status(500).json({ status: "error", message: "error occured!" })
   }
 }
}