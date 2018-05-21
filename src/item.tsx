import * as React from 'react';
import { ItemType } from './models/item'
import { observer } from 'mobx-react'

interface Prop {
    item: ItemType
}

@observer
class ItemComponent extends React.Component<Prop> {
    render() {
        const item = this.props.item
        return (
            <li>
                {item.name}: ${item.price.toFixed(2)} * {item.quantity} = ${item.total().toFixed(2)}
                <button onClick={item.increment}>+</button>
                <button onClick={item.decrement}>-</button>
                <button onClick={item.remove}>X</button>
            </li >
        )
    }
}
export default ItemComponent
