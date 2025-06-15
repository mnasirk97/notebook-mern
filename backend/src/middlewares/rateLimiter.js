import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-rate-limit");

        if (!success) {
            console.warn("Rate limit exceeded for IP:", req.ip);
            return res.status(429).json({ 
                message: "Too many requests, please try again later." 
            });
        }

        next(); // Call the next middleware or route handler if the request is allowed
    } catch (error) {
        console.error("Rate limiting error:", error);
        // return res.status(500).json({ message: "Internal server error" });
        next(error); // Pass the error to the next middleware for centralized error handling
    }
}

export default rateLimiter