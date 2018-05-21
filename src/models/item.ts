import { types, getParent } from 'mobx-state-tree'

const Item = types.model('Item', {
    quantity: types.number,
    price: types.number,
    name: types.string
}).actions(self => ({
    increment() {
        self.quantity += 1
    },
    decrement() {
        self.quantity -= 1
    },
    remove() {
        getParent(self, 2).remove(self)
    }
})).views(self => ({
    total() {
        return self.price * self.quantity
    }
}))

type _ItemType = typeof Item.Type
export interface ItemType extends _ItemType { }
export default Item