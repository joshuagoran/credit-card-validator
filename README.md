# credit-card-validator

This was originally a solution for an open-ended interview exercise, but I since expanded on it. Built using Parcel!

`validateCreditCard.ts` & `validateCreditCard.test.ts` are the substantive files. Tests are written using Jest.

## UI

As a self-directed mini-exercise, I started on a simple form (`Form.tsx`) that a user might encounter that includes a text field that uses the `validateCreditCard` function to both handle an error state and to indicate the type of card entered based on the function response.

To view it:

```
yarn start
```

To run tests:

```
yarn test
```

then navigate to http://localhost:1234!
