import validateCreditCard, { VALIDATION_RESPONSES } from './validateCreditCard'

test('returns invalid response for non-numeric value', () => {
  expect(validateCreditCard('BadCCNumber')).toStrictEqual(VALIDATION_RESPONSES.INVALID)
})

test('returns invalid response for MasterCard-like value', () => {
  expect(validateCreditCard('5100000000')).toStrictEqual(VALIDATION_RESPONSES.INVALID)
})

test('returns invalid response for Visa-like value', () => {
  expect(validateCreditCard('40000000000000B')).toStrictEqual(VALIDATION_RESPONSES.INVALID)
})

test('returns invalid response for American Express-like value', () => {
  expect(validateCreditCard('3400000000000000000')).toStrictEqual(VALIDATION_RESPONSES.INVALID)
})

test('returns valid response for valid MasterCard value', () => {
  expect(validateCreditCard('5100000000000000')).toStrictEqual(VALIDATION_RESPONSES.MASTERCARD)
})

test('returns valid response for valid Visa value', () => {
  /* 
    NOTE: I modified the expected value from what is listed in the exercise instructions as I believe it was a typo to include a 15-digit value
    If it was intentional to allow the 15-digit '400000000000000', the regex used in the function could easily be modified to accommodate!
   */
  expect(validateCreditCard('4000000000000000')).toStrictEqual(VALIDATION_RESPONSES.VISA)
})

test('returns valid response for valid American Express value', () => {
  expect(validateCreditCard('340000000000000')).toStrictEqual(VALIDATION_RESPONSES.AMERICAN_EXPRESS)
})

test('removes spaces from credit card number', () => {
  expect(validateCreditCard('34000 00000 00000')).toStrictEqual(VALIDATION_RESPONSES.AMERICAN_EXPRESS)
})
