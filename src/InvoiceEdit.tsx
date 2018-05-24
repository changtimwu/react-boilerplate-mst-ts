import * as React from 'react';
import { observer } from 'mobx-react'
import { InvoiceType } from './models/invoice'
import { ItemType } from './models/item'
import Item from './item'

interface Props {
    invoice: InvoiceType
}

@observer
class InvoiceEdit extends React.Component<Props, ItemType> {
    private nameInput: HTMLInputElement
    onSubmit() {
        this.props.invoice.itemList.add(this.state)
    }

    onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ name: e.target.value })
    }
    onChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ quantity: parseInt(e.target.value, 10) })
    }
    onChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ price: parseInt(e.target.value, 10) })
    }

    render() {
        const { invoice } = this.props
        return (
            <div>
                <h1>invoice is {invoice.status()}</h1>
                <h2>currency = {invoice.currency}</h2>
                <button onClick={invoice.markPaid}>Pay</button>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        this.onSubmit()
                        const elform = e.target as HTMLFormElement
                        elform.reset()
                        this.nameInput.focus()
                    }}
                >
                    <label htmlFor="name">
                        Name
                        <input
                            type="text"
                            onChange={e => this.onChangeName(e)}
                            ref={(input) => { this.nameInput = input as HTMLInputElement; }}
                        />
                    </label>
                    <label htmlFor="quantity">
                        Quantity
                        <input
                            type="number"
                            id="quantity"
                            onChange={e => this.onChangeQuantity(e)}
                        />
                    </label>
                    <label htmlFor="price">
                        Price
                        <input
                            type="number"
                            id="price"
                            onChange={e => this.onChangePrice(e)}
                        />
                    </label>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {invoice.itemList.items.map((item, i) => (
                        <Item item={item} key={i} />
                    ))}
                </ul>
                <h2> {invoice.itemList.len} items and total is ${invoice.itemList.total.toFixed}</h2>
            </div>
        );
    }
}

export default InvoiceEdit;