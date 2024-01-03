# Availabile Commands to use under KudaApiToken

# Banking API
const bankcontroller = require("kudaopenapi/src/controller/BankController");

- name_enquiry
- getBankList
- create_virtual_account
- update_virtual_account
- disable_virtual_account
- enable_virtual_account
- getadminbalance
- retrieve_all_virtual_account
- retrieve_virtual_account
- retrieve_virtual_account_balance
- admin_main_account_transaction
- retrieve_virtual_account_transaction
- withdraw_virtual_account
- webhook
- single_fund_transfer
- virtual_fund_transfer
- fund_virtual_account


# Bill/Utility API
const billcontroller = require("kudaopenapi/src/controller/BillController");

- get_biller_type
- verify_bill_customer
- admin_purchase_bill
- purchase_bill
- bill_tsq
- admin_get_purchased_bills
- get_purchased_bills


# GiftCard API
use Giftbalogun\Kudaapitoken\Controllers\GiftCardController;

- getgiftcard
- admin_buygiftcard
- buygiftcard
- giftcard_tsq
