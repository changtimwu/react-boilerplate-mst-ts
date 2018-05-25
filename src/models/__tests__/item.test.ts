import Item from "../item"
describe("Item model", () => {
    let item: typeof Item.Type
    beforeEach(() => {
        item = Item.create({
            quantity: 2,
            price: 10,
            name: 'apple'
        })
    })
    describe("actions", () => {
        it("increase quantity", () => {
            item.increment()
            expect(item.quantity).toEqual(3)
            expect(item.total()).toEqual(30)
        })
        it("decrease quantity", () => {
            item.decrement()
            expect(item.quantity).toEqual(1)
            expect(item.total()).toEqual(10)
        })
    })
})
