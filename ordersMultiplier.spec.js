const ordersMultiplier = require('./ordersMultiplier');

describe('ordersMultiplier', () => {
    it('for empty orders return empty array', () => {
        const modifiedOrders = ordersMultiplier(2, []);
        expect(modifiedOrders).toEqual([]);
    })
    it('for an order with one element, double that price when multiplier is 2', () => {
        const modifiedOrders = ordersMultiplier(2, [{
            price: 10
        }]);
        expect(modifiedOrders).toEqual([ {
            price: 10,
            newPrice: 20
        }]);
    })
    it('for an order with one element, triple the price when multiplier is 3', () => {
        const modifiedOrders = ordersMultiplier(3, [{
            price: 10
        }, {
            price: 20
        }]);
        expect(modifiedOrders).toEqual([ {
            price: 10,
            newPrice: 30
        }, {
            price: 20,
            newPrice: 60
        }]);
    })
})