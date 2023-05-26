import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../store/features/orders/orderSlice';


const OrderList = () => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders);
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getAllOrders());
    }, []);


    return (
      <div>
            <h1>Previous orders</h1>
            {orders && orders.map((order) => (
                <div key={order._id}>
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


