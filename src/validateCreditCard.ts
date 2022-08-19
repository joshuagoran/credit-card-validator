export type ValidateCreditCardResponse = { valid: boolean; cardType: string | null }

export const VALIDATION_RESPONSES = {
  INVALID: {
    valid: false,
    cardType: null,
  },
  VISA: {
    valid: true,
    cardType: 'Visa',
  },
  MASTERCARD: {
    valid: true,
    cardType: 'MasterCard',
  },
  AMERICAN_EXPRESS: {
    valid: true,
    cardType: 'American Express',
  },
}

export default function validateCreditCard(creditCardNumber: string): ValidateCreditCardResponse {
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
  const mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/
  const americanExpressRegex = /^3[47][0-9]{13}$/

  const standardizedCreditCardNumber = creditCardNumber.replace(/\s+/g, '')

  if (visaRegex.test(standardizedCreditCardNumber)) {
    return VALIDATION_RESPONSES.VISA
  } else if (mastercardRegex.test(standardizedCreditCardNumber)) {
    return VALIDATION_RESPONSES.MASTERCARD
  } else if (americanExpressRegex.test(standardizedCreditCardNumber)) {
    return VALIDATION_RESPONSES.AMERICAN_EXPRESS
  } else return VALIDATION_RESPONSES.INVALID
}
