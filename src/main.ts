import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';

declare global {
  interface CustomError extends Error {
    status?: number;
  }
}

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    throw new Error('mongoDB connection failed');
  }

  app.listen(8080, () => {
    console.log('Server running on port 8080');
  });
};

start();
