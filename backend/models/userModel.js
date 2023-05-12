const User = require('../schemas/userSchema');
// const bcrypt = require('bcryptjs');
// const { generateToken } = require('../authentication/auth');


// Add new user

exports.addUser = async (req, res) => {
  const { email, password } = req.body;

  if(!email) res.status(400).json({ message: 'You need to enter an email address' });
  if(!password) res.status(400).json({ message: 'You need to enter a password' });

  // // Hashing password
  // const salt = await bcrypt.genSalt(10);
  // const hash = await bcrypt.hash(password, salt)

  // Creating new user with hashed password on database
  // const _user = new User.create({ email, passwordHash: hash })
  const user = new User.create({ email, password })
  // const user = await _user.save()

  if(!user) res.status(500).json({ message: 'Something went wrong when creating new user' });

  // Generating token
  // res.status(201).json(generateToken(user))
  res.status(201).json(user)
}


// Log in

exports.login = async (req, res) => {
  
  const { email, password } = req.body;

  if(!email || !password) res.status(400).json({ message: 'You need to enter an email address and a password' })

  // Checking if input email exists as saved user email
  const user = await User.findOne({ email });
  if(!user) res.status(401).json({ message: 'Incorrect credentials' });

  // Comparing entered password with decrypted saved password
  // const result = await bcrypt.compare(password, user.passwordHash);
  // if(!result) res.status(401).json({ message: 'Incorrect credentials' });

  // Generating token
  // res.status(200).json(generateToken(user))
  res.status(200).json(user)
}

