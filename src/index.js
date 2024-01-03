/*
Kuda Bank Open API wrapper
@author Gift Balogun <@giftbalogun>
*/

const bankcontroller = require('./controller/BankController');
const billcontrolmod = require('./controller/BillController');
const giftcardcontrolmod = require('./controller/GiftCardController');

module.exports = {bankcontroller, billcontrolmod, giftcardcontrolmod};