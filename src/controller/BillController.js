/*
Kuda Bank Open API wrapper
@author Gift Balogun <@giftbalogun>
*/

const Kuda = require('../kuda');
const ServiceTypes = require('../ServiceTypes');

class BillController {
    constructor() {
        this.kuda = new Kuda();
    }

    // The list of available biller type are:
    // airtime , betting , internet Data, electricity, cableTv. 
    async get_biller_type(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.GET_BILLERS_BY_TYPE,
                payload,
                requestRef
            );
            // Handle the result as needed
            return result;
        } catch (error) {
            // Handle errors
            console.error(error);
            return {
                Status: false,
                Message: error,
                Request: 'Unable to make name_enquiry',
            };
        }
    }

    async verify_bill_customer(requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.VERIFY_BILL_CUSTOMER,
                [],
                requestRef
            );
            // Handle the result as needed
            return result;
        } catch (error) {
            // Handle errors
            console.error(error);
            return {
                Status: false,
                Message: error,
                Request: 'unable to get bank list',
            };
        }
    }

    async admin_purchase_bill(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_PURCHASE_BILL,
                payload,
                requestRef
            );
            // Handle the result as needed
            return result;
        } catch (error) {
            // Handle errors
            console.error(error);
            return {
                Status: false,
                Message: error,
                Request: 'unable to create virtual account',
            };
        }
    }

    async purchase_bill(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.PURCHASE_BILL,
                payload,
                requestRef
            );
            // Handle the result as needed
            return result;
        } catch (error) {
            // Handle errors
            console.error(error);
            return {
                Status: false,
                Message: error,
                Request: 'unable to create virtual account',
            };
        }
    }

    async bill_tsq(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.BILL_TSQ,
                payload,
                requestRef
            );
            // Handle the result as needed
            return result;
        } catch (error) {
            // Handle errors
            console.error(error);
            return {
                Status: false,
                Message: error,
                Request: 'unable to disableVirtualAccount',
            };
        }
    }

    async admin_get_purchased_bills(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_GET_PURCHASED_BILLS,
                payload,
                requestRef
            );
            // Handle the result as needed
            return result;
        } catch (error) {
            // Handle errors
            console.error(error);
            return {
                Status: false,
                Message: error,
                Request: 'unable to enableVirtualAccount',
            };
        }
    }

    async get_purchased_bills(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.GET_PURCHASED_BILLS,
                payload,
                requestRef
            );
            // Handle the result as needed
            return result;
        } catch (error) {
            // Handle errors
            console.error(error);
            return {
                Status: false,
                Message: error,
                Request: 'unable to getVirtualAccount',
            };
        }
    }

}

// Create an instance of the controller
const KudaBillController = new BillController();

// Export the router
module.exports = KudaBillController;
