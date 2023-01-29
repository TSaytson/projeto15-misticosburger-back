import db from "../database/db.js";
import { ObjectId } from "mongodb";

export async function addProduct(req, res){

    const { name, description, value, urlImage, type }= req.body;

    try {

        await db.collection("products").insertOne({name, description, value, urlImage, type});
        return res.status(201).send("New product successfully registered");
        
    } catch (error) {

            console.log(error);

            res.status(500).send(`Erro no servidor!`)
    }
}

export async function getProducts(req, res){
    
        try {
    
            const products = await db.collection("products").find().toArray();
            return res.status(200).send(products);
            
        } catch (error) {
    
                console.log(error);
    
                res.status(500).send(`Erro no servidor!`)
        }
}

export async function deleteProduct(req, res){

    const { id } = req.params;

    try {

        await db.collection("products").deleteOne({_id: ObjectId(id)});
        return res.status(200).send("Product successfully deleted");
        
    } catch (error) {

            console.log(error);

            res.status(500).send(`Erro no servidor!`)
    }
}

