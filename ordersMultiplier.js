const ordersMultiplier = (multiplier, orders) => {
    return orders.map(order => {
        return {
            ...order, newPrice: order.price * multiplier
        }
    });
}

module.exports = ordersMultiplier;