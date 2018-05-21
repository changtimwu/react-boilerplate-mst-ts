import { types } from 'mobx-state-tree'
import Item, { ItemType } from './item'
const ItemList = types.model('ItemList', {
    items: types.array(Item),
}).actions(self => ({
    add(item: ItemType) {
        self.items.push(item)
    },
    remove(item: ItemType) {
        self.items.splice(self.items.indexOf(item), 1)
    }
})).views(self => ({
    get len() {
        return self.items.length
    },
    get total() {
        return self.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }
}))

type _ItemListType = typeof ItemList.Type
export interface ItemListType extends _ItemListType { }
export default ItemList