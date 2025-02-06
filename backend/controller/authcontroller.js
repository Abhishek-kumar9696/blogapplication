import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Blogs from '../models/blogModel.js';

// Register a new user
export const registercontroller = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save(); // Ensure this line is executed
        console.log('New user:', newUser);

        res.status(201).json({ message: 'User registered successfully',newUser });
    } catch (error) {
        console.error('Error during registration:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Server error' });
    }
};
// Login a user
export const logincontroller = async (req, res) => {
    const {username, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log("User detail: ", user);
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '1d' });
        console.log('Token:', token);

        res.status(200).json({ token ,user});
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// // Create a new blog
// export const createBlog = async (req, res) => {
//     const { title, content,author,image, user } = req.body;
//     console.log('Request Body:', req.user);
//     // Assuming userId is set in the request by middleware
//      //console.log('content: ', title, content, user);

//     try {
//         const newBlog = new Blogs({
//             title,
//             content,
//             author: req.user.username,
//             image,
//             user: req.user.userId,
//             //image:req.user.image
//         });
//       //  console.log('content: ', title, content, user);

        
//         await newBlog.save();
//         console.log('New Blog:', newBlog);

//         res.status(201).json({ message: 'Blog created successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };
// Create a new blog
export const createBlog = async (req, res) => {
    const { title, content, imageUrl } = req.body;
    console.log('Request Body:', req.body); // Debugging log

    try {
        const newBlog = new Blogs({
            title,
            content,
            author: req.user.username, // Automatically assign the logged-in user
            image: imageUrl, // Ensure we use imageUrl, not image
            user: req.user.userId, // Store user ID from middleware
        });

        await newBlog.save();
        console.log('New Blog:', newBlog);

        res.status(201).json({ message: 'Blog created successfully' });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };

  export const logoutController = async (req, res) => {
    try {
        res.status(200).json({ message: 'Logged out successfully', token: null });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
export const getblogs = async (req, res) => {
    try {
        //console.log("hello ji");
        const blogs = await Blogs.find({});
        res.json(blogs);
    }
    catch (error) {
        console.log(error);
        res.send({ error });
    }
}


