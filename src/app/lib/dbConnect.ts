import mongoose, { ConnectOptions } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
    throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

declare global {
    var mongoose: {
        conn: mongoose.Connection | null;
        promise: Promise<mongoose.Connection> | null;
    };
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<mongoose.Connection> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts: ConnectOptions = {};

        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            return mongoose.connection;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
