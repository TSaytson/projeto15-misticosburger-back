import db from '../database/db.js';
import { ObjectId } from 'mongodb';

export async function getUsers(req, res) {
    try {
        const users = await db.collection('users').find().toArray();
        return res.status(200).send(users);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Server error!');
    }
}