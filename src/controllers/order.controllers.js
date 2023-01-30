import db from '../database/db.js';
import { ObjectId } from 'mongodb';

export async function addOrder(req, res){

    const { newCart , total, userId }= req.body;

    try {

        await db.collection("orders").insertOne({newCart, total, userId: ObjectId(req.userId)});
        return res.status(201).send("New order successfully registered");
        
    } catch (error) {

            console.log(error);

            res.status(500).send(`Server error!`)
    }
}

export async function getOrders(req, res){
    
        try {
    
            const orders = await db.collection("orders").find().toArray();
            return res.status(200).send(orders);
            
        } catch (error) {
    
                console.log(error);
    
                res.status(500).send(`Server error!`)
        }
}