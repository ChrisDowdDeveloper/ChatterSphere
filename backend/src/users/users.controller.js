const userService = require('./users.service');
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Middleware
const VALID_FIELDS = [
    "username",
    "email",
    "password"
];

const usernameExists = async (req, res, next) => {
    const { username } = req.body;
    try {
      const user = await userService.read(username);
      if (!user) {
        return next();
      }
      next({
        status: 400,
        message: `${username} already exists`,
      });
    } catch (error) {
      next(error);
    }
  };
  

const emailExists = async (req, res, next) => {
    const { email } = req.body;
    try {
        const emailAddress = await userService.readEmail(email)
        if(!emailAddress) {
            return next();
        }
        next( {
            status: 400,
            message: `${email} already exists`
        })
    } catch (error) {
        next(error)
    }
}

function validatePassword(req, res, next) {
    // Regular expressions to check for at least 1 special character and 1 capital letter
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
    const capitalLetterRegex = /[A-Z]/;
    const { password } = req.body;
  
    // Check if the password contains at least 1 special character and 1 capital letter
    const hasSpecialCharacter = specialCharacterRegex.test(password);
    const hasCapitalLetter = capitalLetterRegex.test(password);
  
    // Return true if both conditions are met
    if(hasSpecialCharacter && hasCapitalLetter) {
        return next();
    }
    next({
        status: 400,
        message: "Password does not meet the requirements"
    })
  }
  

const userExists = (req, res, next) => {
    const { username } = req.body.username;
    const user = userService.read(username);
    if(user) {
        res.locals.users = user;
        return next();
    }
    throw {
        status: 404,
        message: `${username} not found`
    }; 
}

const passwordMatch = async(req, res, next) => {
    let password = req.body.password;
    const userRetrieved = await userService.readPassword(req.body.username);
    console.log(userRetrieved);
    if(password === userRetrieved.password) {
        return next();
    }
    throw {
            status: 400, 
            message: `Password was incorrect`
        }
}

// CRUD functions

const createUser = async(req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch(err) {
        res.status(400).json({ message: err.message });
    };
};

const loginUser = async (req, res) => {
    let username = req.body.username;
    try {
        const user = await userService.read(username);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch(e) {
        res.status(400).json({ message: e.message });
    };
};

const updateUser = async(req, res) => {
    try {
        const query = { username: req.params.username }
        const updatedUser = await userService.updateUser(query, req.body);
        res.status(201).json(updatedUser);
    } catch(err) {
        res.status(400).json({ message: err.message });
    };
};

const deleteUser = async(req, res) => {
    try {
        const user = await userService.deleteUser(req.params.username);
        res.status(200).json({ user });
    } catch(e) {
        res.status(400).json({ message: e.message });
    };
};

module.exports = { 
    createUser: [
        usernameExists,
        emailExists,
        validatePassword,
        asyncErrorBoundary(createUser)
    ], 
    loginUser: [
        userExists,
        passwordMatch,
        asyncErrorBoundary(loginUser)
    ], 
    updateUser, 
    deleteUser
};  
