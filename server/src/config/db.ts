import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB

mongoose.connect(process.env.DATABASE!, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connect');
    })
    .catch(error => {
        console.log('Connection error', error);
    });
