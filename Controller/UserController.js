const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, "your_secret_key_here", { expiresIn: "1h" }); // Change your_secret_key_here with a secure secret key
};

exports.signup = async (req, res) => {
  try {
    const { Nom, email, password, Prenom } = req.body;
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return res.status(400).send({ errors: [{ msg: "Email should be unique" }] });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;
    await newUser.save();

    // Generate token for the newly registered user
    const token = generateToken(newUser._id);

    return res.status(200).send({ msg: "User registered successfully", token });
  } catch (error) {
    return res.status(400).send({ msg: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "Bad credentials" }] });
    }
    if (!foundUser.approved) {
        return res.status(401).json({ error: 'User not approved yet' });
      }
      


    const validPassword = await bcrypt.compare(password, foundUser.password);

    if (!validPassword) {
      return res.status(400).send({ errors: [{ msg: "Bad credentials" }] });
    }

    // Generate token for the authenticated user
    const token = generateToken(foundUser._id);

    return res.status(200).send({ msg: "Login success", token });
  } catch (error) {
    return res.status(400).send({ msg: "Login failed" });
  }
};



exports.getUser = async (req, res) => {
    try {
      await User.find().then((result) => {
        res.send(result);
      });
    } catch (err) {
      console.log(err);
    }
  };



  exports.uprove = async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.approved = true;
      await user.save();
      res.status(200).json({ message: 'User approved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to approve user' });
    }
  };


  
  
// Route pour supprimer un utilisateur spécifique
exports.DeleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  };
  

  exports.getUserOfId = 
  (async (req, res) => {
      try{
        console.log(req.params._id)
        const UserOfId = await User.findById(req.params._id)
      res.json(UserOfId);
     }
  catch(err){
      console.log(err);
  }
});
