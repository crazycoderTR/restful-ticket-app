import mongoose from 'mongoose';

module.exports = () => {
    mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});

    mongoose.connection.on('open', () => {
        //Connection is successful
        console.log('Connection is Successful');
    });
    mongoose.connection.on('error', err => {
        console.log('MongoDB Error: ', err);
    });

    mongoose.Promise = global.Promise;
};