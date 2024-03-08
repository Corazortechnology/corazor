
import UserModel from '../models/userModel.js'; // Assuming this is the path to your user model

const registerController = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if the user already exists
        let existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            // User exists, update the message
            existingUser.message.push({message});
            await existingUser.save();
            res.status(200).json({ success: true, message: 'User message updated' });
        } else {
            // User doesn't exist, create a new user
             const newuser = {name, email, message:{message:message}}
             const user = await new UserModel(newuser).save();

            res.status(201).json({ success: true, message: 'User registered successfully', user: newuser });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default registerController;
