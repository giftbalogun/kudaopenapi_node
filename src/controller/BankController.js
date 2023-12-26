/*
Kuda Bank Open API wrapper
@author Gift Balogun <@giftbalogun>
*/

const Kuda = require('../kuda');
const ServiceTypes = require('../ServiceTypes');

class KudaBankController {
    constructor() {
        this.kuda = new Kuda();
    }

    // Kuda API NAME NAME_ENQUIRY
    // https://kudabank.gitbook.io/kudabank/single-fund-transfer/name-enquiry
    async name_enquiry(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.NAME_ENQUIRY,
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

    // Kuda LIST OF NIGERIA BANKS supported by NIBSS
    // https://kudabank.gitbook.io/kudabank/single-fund-transfer/bank-list
    async getBankList(requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.BANK_LIST,
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

    async createVirtualAccount(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_CREATE_VIRTUAL_ACCOUNT,
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

    async updateVirtualAccount(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_UPDATE_VIRTUAL_ACCOUNT,
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

    async disableVirtualAccount(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_DISABLE_VIRTUAL_ACCOUNT,
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

    async enableVirtualAccount(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_ENABLE_VIRTUAL_ACCOUNT,
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

    async getVirtualAccount(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.RETRIEVE_SINGLE_VIRTUAL_ACCOUNT,
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

    async adminVirtualAccounts(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_VIRTUAL_ACCOUNTS,
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
                Message: error.message,
                Request: 'unable to adminVirtualAccount',
            };
        }
    }

    async singleFundTransfer(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.SINGLE_FUND_TRANSFER,
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

    async virtualAccountFundTransfer(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.VIRTUAL_ACCOUNT_FUND_TRANSFER,
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

    async transactionStatusQuery(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.TRANSACTION_STATUS_QUERY,
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

    async retrieveVirtualAccountBalance(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.RETRIEVE_VIRTUAL_ACCOUNT_BALANCE,
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

    async admin_main_account_transaction(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_MAIN_ACCOUNT_TRANSACTIONS,
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

    async admin_main_account_filtered_transaction(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_MAIN_ACCOUNT_FILTERED_TRANSACTIONS,
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

    async admin_virtual_account_transaction(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_VIRTUAL_ACCOUNT_TRANSACTIONS,
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

    async admin_virtual_account_filtered_transaction(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_VIRTUAL_ACCOUNT_FILTERED_TRANSACTIONS,
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

    async fundVirtualAccount(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.FUND_VIRTUAL_ACCOUNT,
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

    async wothdrawVirtualAccount(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.WITHDRAW_VIRTUAL_ACCOUNT,
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

    async adminRetrieveAccountBalance(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.ADMIN_RETRIEVE_MAIN_ACCOUNT_BALANCE,
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

    async retrieveTransactionLogs(payload, requestRef = null) {
        try {
            const result = await this.kuda.makeRequest(
                ServiceTypes.RETRIEVE_TRANSACTION_LOGS,
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
const kudaBankController = new KudaBankController();

// Export the router
module.exports = kudaBankController;
