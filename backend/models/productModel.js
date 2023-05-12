const Product = require('../schemas/productSchema');


// Create new product

exports.addProduct = async (req, res) => {

  const { name, description, price, imageURL } = req.body;

  if(!name) res.staus(400).json({ message: 'You need to give the product a name' });
  if(!description) res.staus(400).json({ message: 'You need to give the product a description' });
  if(!price) res.staus(400).json({ message: 'You need to give the product a price' });
  if(!imageURL) res.staus(400).json({ message: 'You need to give the product a imageURL' });

  const product = await Product.create({ name, description, price, imageURL });

  if(!product) res.status(500).json({ message: 'Something went wrong when creating new product' });

  res.status(201).json(product)
}


// Get all products

exports.getProducts = async (req, res) => {

  const products = await Product.find();

  if(!products) res.status(500).json({ message: 'Something went wrong when getting products' });

  res.status(200).json(products)
}

// Get specific order by id

exports.getProductById = async (req, res) => {

  const product = await Product.findById(req.params.id)

  if(!product) res.status(404).json({ message: 'Could not find product' });

  res.status(200).json(product)
}


// Update a product

exports.updateProduct = async (req, res) => {

  // Finding product by id and displaying updated version
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

  if(!product) res.status(404).json({ message: 'Could not find product' });

  res.status(200).json(product)
}


// Delete product

exports.deleteProduct = async (req, res) => {

  const product = await Product.findByIdAndDelete(req.params.id)

  if(!product) res.status(404).json({ message: 'Could not find product' });

  res.status(204).json({ message: 'Product deleted' })
}