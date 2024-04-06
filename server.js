const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@users.ioistre.mongodb.net/prepai', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// Define MongoDB Schema
const userSchema = new mongoose.Schema({
  uname: String,
  email: String,
  password: String,
  phone: String
});




const User = mongoose.model('User', userSchema);

// Register Route
app.post('/register', async (req, res) => {
    //console.log(req.body)
  const { uname, email, password, phone } = req.body;
  
  // Create a new user
  console.log(uname, email, password, phone)
  const user = new User({ uname, email, password, phone });
  try {
    // Save the user to MongoDB
    await user.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Login Route
app.post('/login', async (req, res) => {
    console.log(req.body)
  const { email, password } = req.body;
  console.log(email,password)
  
  try {
    // Find the user by email and password
    const user = await User.findOne({ email, password });
    console.log(user)
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
