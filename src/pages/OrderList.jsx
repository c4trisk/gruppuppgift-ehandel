import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../store/features/orders/orderSlice';
import CartItem from '../components/ShoppingCart/CartItem'


const OrderList = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { orders } = useSelector(state => state.orders);
    const { cart, totalAmount } = useSelector(state => state.shoppingCart)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getAllOrders(user._id));
    }, []);


    // console.log(orders[0])
    console.log(orders.orderRow)

    return (
      <div className='allOrders'>
        <div className='curOrders'>

        <h1>Current orders</h1>
        <div className="current-order">
        { cart.length < 1 && (
          <p>You have no items in your shopping cart</p>
        ) }
        { cart.map(item => <CartItem key={'user-cart' + item.product._id} item={item} />) }
        <p className='price'>Total Price: ${totalAmount},00</p>
        </div>
       
      
      <div className='prevOrders'>
            <h1>Previous orders</h1>
            {orders && orders.map((order) => (
                <div key={order._id} className='order-wrapper'>
                    <p className='ordernumber'><b>Ordernumber:</b> {order._id}</p>
                    {order.orderRow.map((row) => (
                        
                        <div key={row._id} className='row-wrapper'>
                            
                            <img src={row.product.imageURL} alt={row.product.name} className='orderRowImg'/>
                            <p><b>Product:</b> {row.product.name}</p>
                            <p><b>Quantity:</b> {row.quantity}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </div>
        </div>
    );


}

export default OrderList


