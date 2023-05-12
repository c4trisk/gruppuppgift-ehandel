const mongoose = require('mongoose');

const orderRowSchema = mongoose.Schema({
  product: { type: mongoose.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number }
})

const orderSchema = mongoose.Schema({
  customerId: { type: mongoose.Types.ObjectId, ref: 'User', },
  orderRow: { type: [orderRowSchema] }
})

module.exports = mongoose.model('Order', orderSchema)
