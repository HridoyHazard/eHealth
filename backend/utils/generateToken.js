import Jwt from "jsonwebtoken";

const generateToken = (id) => {
    return Jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
export default generateToken