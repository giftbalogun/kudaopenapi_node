class ServiceTypes {
    // LIST OF API SERVICES OFFERED BY KUDA
    static ADMIN_CREATE_VIRTUAL_ACCOUNT = 'ADMIN_CREATE_VIRTUAL_ACCOUNT';
    static ADMIN_UPDATE_VIRTUAL_ACCOUNT = 'ADMIN_UPDATE_VIRTUAL_ACCOUNT';
    static ADMIN_DISABLE_VIRTUAL_ACCOUNT = 'ADMIN_DISABLE_VIRTUAL_ACCOUNT';
    static ADMIN_ENABLE_VIRTUAL_ACCOUNT = 'ADMIN_ENABLE_VIRTUAL_ACCOUNT';
    static RETRIEVE_SINGLE_VIRTUAL_ACCOUNT = 'ADMIN_RETRIEVE_SINGLE_VIRTUAL_ACCOUNT';
    static BANK_LIST = 'BANK_LIST';
    static ADMIN_VIRTUAL_ACCOUNTS = 'ADMIN_VIRTUAL_ACCOUNTS';
    static NAME_ENQUIRY = 'NAME_ENQUIRY';
    static SINGLE_FUND_TRANSFER = 'SINGLE_FUND_TRANSFER';
    static VIRTUAL_ACCOUNT_FUND_TRANSFER = 'VIRTUAL_ACCOUNT_FUND_TRANSFER';
    static TRANSACTION_STATUS_QUERY = 'TRANSACTION_STATUS_QUERY';
    static RETRIEVE_VIRTUAL_ACCOUNT_BALANCE = 'RETRIEVE_VIRTUAL_ACCOUNT_BALANCE';
    static ADMIN_MAIN_ACCOUNT_TRANSACTIONS = 'ADMIN_MAIN_ACCOUNT_TRANSACTIONS';
    static ADMIN_MAIN_ACCOUNT_FILTERED_TRANSACTIONS = 'ADMIN_MAIN_ACCOUNT_FILTERED_TRANSACTIONS';
    static ADMIN_VIRTUAL_ACCOUNT_TRANSACTIONS = 'ADMIN_VIRTUAL_ACCOUNT_TRANSACTIONS';
    static ADMIN_VIRTUAL_ACCOUNT_FILTERED_TRANSACTIONS = 'ADMIN_VIRTUAL_ACCOUNT_FILTERED_TRANSACTIONS';
    static FUND_VIRTUAL_ACCOUNT = 'FUND_VIRTUAL_ACCOUNT';
    static WITHDRAW_VIRTUAL_ACCOUNT = 'WITHDRAW_VIRTUAL_ACCOUNT';
    static ADMIN_RETRIEVE_MAIN_ACCOUNT_BALANCE = 'ADMIN_RETRIEVE_MAIN_ACCOUNT_BALANCE';
    static RETRIEVE_TRANSACTION_LOGS = 'RETRIEVE_TRANSACTION_LOGS';

    // KUDA SAVING API
    static RETRIEVE_SPEND_AND_SAVE_TRANSACTIONS = 'RETRIEVE_SPEND_AND_SAVE_TRANSACTIONS';
    static CREATE_PLAIN_SAVINGS = 'CREATE_PLAIN_SAVINGS';
    static GET_PLAIN_SAVINGS = 'GET_PLAIN_SAVINGS';
    static CREATE_OPEN_FLEXIBLE_SAVE = 'CREATE_OPEN_FLEXIBLE_SAVE';
    static CREATE_CLOSED_FLEXIBLE_SAVE = 'CREATE_CLOSED_FLEXIBLE_SAVE';
    static GET_ALL_CUSTOMER_PLAIN_SAVINGS = 'GET_ALL_CUSTOMER_PLAIN_SAVINGS';
    static GET_ALL_PLAIN_SAVINGS = 'GET_ALL_PLAIN_SAVINGS';
    static UPDATE_PLAIN_SAVINGS = 'UPDATE_PLAIN_SAVINGS';
    static PLAIN_SAVINGS_TRANSACTIONS = 'PLAIN_SAVINGS_TRANSACTIONS';
    static RETRIEVE_PLAIN_SAVINGS_TRANSACTIONS = 'RETRIEVE_PLAIN_SAVINGS_TRANSACTIONS';

    // Kuda Bill Payment & Betting Services API
    static GET_BILLERS_BY_TYPE = 'GET_BILLERS_BY_TYPE';
    static VERIFY_BILL_CUSTOMER = 'VERIFY_BILL_CUSTOMER';
    static ADMIN_PURCHASE_BILL = 'ADMIN_PURCHASE_BILL';
    static PURCHASE_BILL = 'PURCHASE_BILL';
    static BILL_TSQ = 'BILL_TSQ';
    static ADMIN_GET_PURCHASED_BILLS = 'ADMIN_GET_PURCHASED_BILLS';
    static GET_PURCHASED_BILLS = 'GET_PURCHASED_BILLS';

    // GiftCards
    static GET_GIFT_CARD = 'GET_GIFT_CARD';
    static ADMIN_BUY_GIFT_CARD = 'ADMIN_BUY_GIFT_CARD';
    static BUY_GIFT_CARD = 'BUY_GIFT_CARD';
    static GIFT_CARD_TSQ = 'GIFT_CARD_TSQ';

    // Kuda Cards
    static REQUEST_CARD = 'REQUEST_CARD';
    static GET_CUSTOMER_CARDS = 'GET_CUSTOMER_CARDS';
    static ACTIVATE_CARD = 'ACTIVATE_CARD';
    static DEACTIVATE_CARD = 'DEACTIVATE_CARD';
    static MANAGE_CARD_TRANSACTION_LIMIT = 'MANAGE_CARD_TRANSACTION_LIMIT';
    static MANAGE_CARD_CHANNEL = 'MANAGE_CARD_CHANNEL';
    static GET_CARD_PIN = 'GET_CARD_PIN';
    static CHANGE_CARD_PIN = 'CHANGE_CARD_PIN';
    static BLOCK_CARD = 'BLOCK_CARD';
    static UNBLOCK_CARD = 'UNBLOCK_CARD';
}

module.exports = ServiceTypes;
