export class AddCreditCardFormObject {
    creditCardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    securityCode: string;

    constructor(creditCard: string, expMonth: string, expYear: string, secCode: string) {
        this.creditCardNumber = creditCard;
        this.expirationMonth = expMonth;
        this.expirationYear = expYear;
        this.securityCode = secCode;
    }
}