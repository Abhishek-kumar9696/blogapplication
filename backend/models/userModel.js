    // import mongoose from "mongoose";

    // const userSchema = mongoose.Schema({
    //     userName:{
    //         type:String,
    //         required:true
    //     },
    //     email:{
    //         type:String,
    //         required:true
    //     },
    //     password:{
    //         type:String,
    //         required:true
    //     }
    // },timestamp=true)

    // const User = mongoose.model('User',userSchema);
    // module.exports = User;

    import mongoose from 'mongoose';

    const userSchema = mongoose.Schema({
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }, { timestamps: true });

    const User = mongoose.model('User', userSchema);

    export default User; // Use ES6 export syntax