const mongoose = require('mongoose')

const connectDB = () => {
    if(mongoose.connections[0].readyState){
        console.log('Already connected.')
        // console.log(process.env.MONGODB_URL);
        return;
    }
    mongoose.connect("mongodb+srv://rahulsg1:Rahul@123@cluster0.wqmoi.mongodb.net/urban-services?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) throw err;
        console.log('Connected to mongodb.')
    })
}


module.exports=connectDB