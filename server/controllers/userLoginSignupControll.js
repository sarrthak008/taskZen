import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const signup = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let reqiredFilds = ["name", "email", "password"]

        reqiredFilds.forEach((element) => {
            if (!(req.body[element])) {
                return res.json({
                    data: null,
                    message: `${element} is required`
                })
            }
        })

        let isUserExist = await User.findOne({ email: email });

        if (isUserExist) {
            return res.json({
                data: null,
                message: " email already exist please login"
            })
        }

        let hasedPass = await bcrypt.hash(password, 10);
        let createdUser = await User.create({
            userName: name,
            email: email,
            password: hasedPass
        })

        let savedUser = await createdUser.save();
        if (savedUser) {
            return res.json({
                data: savedUser,
                message: "account created successfully now login"
            })
        } else {
            return res.json({
                data: null,
                message: "something went wrong"
            })
        }

    } catch (error) {
        return res.json({
            data: null,
            message: error
        })
    }
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                data: null,
                message: "email and password is required"
            })
        }

        let isUserExist = await User.findOne({ email });
        if (!isUserExist) {
            return res.json({
                data: null,
                message: "user not found , create your account"
            })
        }

        let isPassMatch = await bcrypt.compare(password, isUserExist?.password)

        if (!isPassMatch) {
            return res.json({
                data: null,
                message: "invalid credentials"
            })
        }

        let data = {
            email: isUserExist.email,
            _id: isUserExist._id

        }

        let token = jwt.sign(data, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        req.session.token = token;
    
        return res.json({
            data: token,
            message: "login successfully"
        })

    } catch (error) {
        return res.json({
            data: null,
            message: error
        })
    }
}

export { signup, login }