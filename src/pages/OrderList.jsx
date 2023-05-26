import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../store/features/orders/orderSlice';
import CartItem from '../components/ShoppingCart/CartItem'


const OrderList = () => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders);
    const products = useSelector((state) => state.products.products);
    const { cart, totalAmount } = useSelector(state => state.shoppingCart)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getAllOrders());
    }, []);


    return (
      <div>

        <h1>Current orders</h1>
        <div className="current-order">
        { cart.length < 1 && (
          <p>You have no items in your shopping cart</p>
        ) }
        { cart.map(item => <CartItem key={'user-cart' + item.product._id} item={item} />) }
        <p className='price'>Total Price: ${totalAmount},00</p>
       
      </div>
            <h1>Previous orders</h1>
            {orders && orders.map((order) => (
                <div className='prevOrderCard' key={order._id}>
                    {order.orderRow.map((row) => (
                        <div key={row._id}>
                            <p className='ordernumber'>Ordernumber: {order._id}</p>
                            <img src={row.product.imageURL} alt={row.product.name} className='orderRowImg'/>
                            <p>Product: {row.product.name}</p>
                            <p>Quantity: {row.quantity}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );


}

export default OrderList


