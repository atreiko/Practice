import Role from "../models/Role";

class authController {
    async signup(req, res) {
        try {
            console.log('server work');
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Signup error'})
        }        
    }

    async login(req, res) {
        try {
            
        } catch (error) {
            console.log(error);
            res.status(400).json({message: 'Login error'})
        }
    }

    async getUsers(req, res) {
        try {
            // const userRole = new Role()
            // const adminRole = new Role({value: 'ADMIN'})
            // await userRole.save()
            // await adminRole.save()
        } catch (error) {
            console.log(error);
        }
    }
}

export default new authController()

