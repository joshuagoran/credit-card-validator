import * as React from 'react'
import { useState } from 'react'
import validateCreditCard, { ValidateCreditCardResponse } from './validateCreditCard'
import { Box, Button, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

export default function Form() {
  const [creditCardNumber, setCreditCardNumber] = useState(undefined)
  const [validationResponse, setValidationResponse] = useState<ValidateCreditCardResponse>()

  function handleChange(event) {
    const formValue = event.target.value
    setCreditCardNumber(formValue)
    setValidationResponse(validateCreditCard(formValue))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('Credit card number', creditCardNumber)
    console.log('validationResponse', validationResponse)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4">Mock Credit Card Validator</Typography>
        <TextField error={validationResponse?.valid === false} label="Card #" onChange={handleChange} />

        <ToggleButtonGroup disabled value={validationResponse?.cardType} style={{ paddingBottom: 10, paddingTop: 10 }}>
          <ToggleButton value="Visa">Visa</ToggleButton>
          <ToggleButton value="MasterCard">MasterCard</ToggleButton>
          <ToggleButton value="American Express">American Express</ToggleButton>
        </ToggleButtonGroup>
        <Button type="submit" variant="contained" color="primary" style={{ width: 100 }}>
          Submit
        </Button>
      </Box>
    </form>
  )
}
