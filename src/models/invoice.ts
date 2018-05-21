import { types } from 'mobx-state-tree'
import ItemList from './itemlist'
const Invoice = types.model('Invoice', {
    currency: types.string,
    is_paid: false,
    itemList: types.optional(ItemList, { items: [] })
}).actions(self => ({
    markPaid() {
        self.is_paid = true
    }
})).views(self => ({
    status() {
        return self.is_paid ? 'Paid' : 'Not Paid'
    }
}))

type _InvoiceType = typeof Invoice.Type
export interface InvoiceType extends _InvoiceType { }
export default Invoice