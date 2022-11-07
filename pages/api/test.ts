import type { NextApiRequest, NextApiResponse } from 'next'

import { Schema, model, connect } from 'mongoose'

interface IUser {
    name: string;
    email: string;
    avatar?: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});
const User = model<IUser>('User', userSchema);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await connect('mongodb+srv://adrianlach:n96lHIvopZtwM7Y7@cluster0.acwteza.mongodb.net/?retryWrites=true&w=majority')

    const user = new User({
        name: 'Bill',
        email: 'bill@initech.com',
        avatar: 'https://i.imgur.com/dM7Thhn.png'
    });
    const response = await user.save();

    res.status(200).json({ response })
}
