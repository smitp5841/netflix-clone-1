import { user } from "../models/user.model.js";

export async function signup(req, res){
    try{
        const {email, password,username} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({message: "Please fill in all fields."});

        }
        
        
        if(password.lenght < 6){
            return res.status(400).json({success :false,message:"password must be least 6 charactees"});
        }

        const existngUserByEmail = await user.findOne({email:email})

        if(existngUserByEmail){
            return res.status(400).json({success:false, message: "Email already in use."});
        }

        const existngUserByUsername = await user.findOne({username:username})

    
        if(existngUserByUsername){
            return res.status(400).json({success:false, message: "username already in use."});
        }

        const PROFILE_PICS =["/img1.png","/img2.png","/img3.png"]

        const image  = PROFILE_PICS[Math.floor(math.rander() * PROFILE_PICS.length)];
        const newUser = new user({
            email,
            password,
            username,
            image
        });

        await newUser.save();

        res.status(201).json({success:true,user :{
            ...newUser._doc,
            password:""
        },
    });
    }catch(error){
        console.log("error in singup controller" , error);
        
        res.status(500).json({success:false , message:"internal server error"});
    }
}

export async function login (req,res){
    res.send("login router");
}

export async function logout(req, res){
    res.send("logout router");
}