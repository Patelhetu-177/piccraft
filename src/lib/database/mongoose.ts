import mongoose from 'mongoose';

let initialized = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (initialized) {
    console.log('MongoDB already connected');
    return;
  }

  const mongoUrl = process.env.MONGODB_URL;
  
  if (!mongoUrl) {
    throw new Error('MONGODB_URL is not defined in environment variables');
  }

  try {
    await mongoose.connect(mongoUrl, {
      dbName: 'piccraft',
      bufferCommands: false 
    });
    console.log('MongoDB connected');
    initialized = true;
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};
