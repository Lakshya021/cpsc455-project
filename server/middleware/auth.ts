import jwt from "jsonwebtoken";
import User from "../models/user.model";


/**
 * *
 Middleware to prevent user from accessing unauthorized routes. Make protect the first middleware function
 to be called and only users who have logged in and acquired the token will be able to access that route.
 */

export const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }
    if (!token) {
        return res.status(401).json({
            message: "Not authorized to access this route.",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(404).json({
                message: "No user found with this id.",
            });
        }

        req.user = user;
        next();

    } catch (err) {
        return res.status(401).json({
            message: "Not authorized to access this route.",
        });

    }
}

