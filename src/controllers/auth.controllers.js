import db from "../database/db.js";
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';
import { ObjectId } from 'mongodb';

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    try {
        const emailRegistered = await db.collection("users").findOne({ email });
        if (emailRegistered) return res.status(409).send("Email already registered");

        const newUser = {
            name,
            email,
            password: bcrypt.hashSync(password, 10),

        };

        await db.collection("users").insertOne(newUser);
        return res.status(201).send("New user successfully registered");

    } catch (err) {
        return res.status(500).send(err);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        
        if (!user) return res.status(400).send('E-mail ou senha inválidos');

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) return res.status(400).send('E-mail ou senha inválidos');

        const userToken = await db.collection("sessions").findOne({ userId: user._id })
        if (userToken) {
            return res.status(200).send({ name: user.name, token: userToken.token, userId: user._id, user })
        }

        const token = uuid();
        await db.collection("sessions").insertOne({
            userId: user._id,
            token
        
        })

        res.status(200).send({ token, name: user.name, userId: user._id , user});

    } catch (err) {
        return res.status(500).send(err);
    }
}