import * as React from 'react'
import { shallow } from "enzyme"

import InvoiceEdit from '../InvoiceEdit'
import Invoice from '../models/invoice'

describe("Invoice", () => {
  const invoice = Invoice.create({ currency: 'TWD' })
  const w = shallow(<InvoiceEdit invoice={invoice} />);
  describe("Render", () => {
    it("Pay button is there", () => {
      let t = w.find('button').first()
      expect(t.contains('Pay')).toBeTruthy()
    })
  })
  describe('Change Price', () => {
  })
  describe('Change Quantity', () => {
  })
})