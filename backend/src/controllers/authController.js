import User from "../models/User.js"; 
import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcrypt'; 

// signup controller 
export const signupController = async (req,res) => {
    try{
        const {email, password, name} = req.body; // object destructuring 

        // validating the feilds 
        if(!email || !password || !name) return res.status(400).json({msg : "All fields are required"}); 

        // checking if the user already exists 
        const existingUser = await User.findOne({email}); 
        if(existingUser) return res.status(400).json({msg : "User already Exists"}); 

        // hashing the password using bcrypt with 10 salting rounds 
        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = await User.create({ // creating a new user entry 
            name,
            email,
            password: hashedPassword
          }); 
        
        console.log("SignUp Successfull");
        return res.status(201).json({ message: 'Signup successful!' });
        

    }catch(err){
        console.error("Signup Failed", error); 
        return res.status(500).json({msg : "Signup unsucessfull"});
    }
};

// signin controller 
export const signinController = async (req,res) => {
    try{

        const {email, password} = req.body; 

        // validating the input fields 
        if(!email || !password) return res.status(400).json({msg : "All fields are required"}) ; 

        // check if the user exists 
        const user = await User.findOne({email}); // this returns the object 
        if(!user) return res.status(400).json({msg : "User has not Signed Up!!"}); 

        //now we comapare with the password given 
        const response = await bcrypt.compare(password, user.password); // user.password is hashed 
        if(!response) return res.status(400).json({msg : "Incorrect Credentials"}); 

        // generate jwt token  
        try{
            const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : "7d"}); 
            console.log("User Signed In!!");
            return res.status(200).json({token}); 
        }catch(error){
            console.log({msg : "Token generation failed", error : error}); 
            return res.status(500).json({msg : "Token generation failed"}); 
        }


    }catch(err){
        console.error("Signin Error : ", error); 
        return res.status(500).json({msg : "Signin Unsuccessfull"}); 
    }
}; 