import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applySnapshot, getSnapshot, onSnapshot } from 'mobx-state-tree'
import Invoice, { InvoiceType } from './models/invoice'
import InvoiceEdit from './InvoiceEdit'

/*
import { onPatch } from 'mobx-state-tree'
onPatch(invoice, patch => {
  console.log(patch)
})
*/
// import makeInspectable from 'mobx-devtools-mst'
// makeInspectable(invoice)
let initialState: object = { currency: 'TWD' }
if (localStorage.getItem('invoiceApp')) {
    const json = JSON.parse(localStorage.getItem('invoiceApp') as string)
    if (Invoice.is(json)) {
        initialState = json
    }
}

const invoice = Invoice.create(initialState)
onSnapshot(invoice, snapshot => {
    localStorage.setItem('invoiceApp', JSON.stringify(snapshot))
})

interface Props {
    ssInvoices: InvoiceType[]
}
class InvoiceMgr extends React.Component<Props> {
    traceInvoice() {
        console.log(getSnapshot(invoice))
    }
    saveSnapshot() {
        this.props.ssInvoices.push(getSnapshot(invoice))
        console.log('ssInvoices length=', this.props.ssInvoices.length)
        this.forceUpdate()
    }
    restoreSnapshot() {
        const ilist = this.props.ssInvoices.pop()
        if (ilist) {
            // this.props.invoice.itemList = ilist
            applySnapshot(invoice, ilist)
            this.forceUpdate()
        }
    }
    render() {
        const ss = this.props.ssInvoices
        return (
            <div>
                <button onClick={e => this.traceInvoice()}>Trace</button>
                <button onClick={e => this.saveSnapshot()}>Save Cart {ss.length}</button>
                <button
                    onClick={e => this.restoreSnapshot()}
                    disabled={ss.length === 0}
                >
                    Restore Cart
                </button>
            </div>
        )
    }
}

const ssInvoices: InvoiceType[] = []
const InvoiceApp = () => (
    <div>
        <InvoiceMgr ssInvoices={ssInvoices} />
        <InvoiceEdit invoice={invoice} />
    </div>
)

export default InvoiceApp