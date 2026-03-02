import { createSlice } from '@reduxjs/toolkit'

type Billing = 'monthly' | 'annual'

interface PricingState {
  billing: Billing
}

const initialState: PricingState = {
  billing: 'monthly',
}

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    toggleBilling(state) {
      state.billing = state.billing === 'monthly' ? 'annual' : 'monthly'
    },
  },
})

export const { toggleBilling } = pricingSlice.actions
export default pricingSlice.reducer
