/*
Kuda Bank Open API wrapper
@author Gift Balogun <@giftbalogun>
*/

const Kuda = require('../kuda');
const ServiceTypes = require('../ServiceTypes');

class GiftCardController {
    constructor() {
        this.kuda = new Kuda();
    }

    async getgiftcard(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.GET_GIFT_CARD,
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
                Request: 'Unable to get GiftCards',
            };
        }
    }

    async admin_buygiftcard(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_BUY_GIFT_CARD,
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
                Request: 'Admin Cannot buy GiftCard',
            };
        }
    }

    async buygiftcard(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.BUY_GIFT_CARD,
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

    async giftcard_tsq(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.GIFT_CARD_TSQ,
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
}

// Create an instance of the controller
const KudaGiftCardController = new GiftCardController();

// Export the router
module.exports = KudaGiftCardController;
