import express from "express"
import { query } from "../../../database/dbConnection.js";
const router = express.Router();
router.put("/products", (req, res)=>{
    query.execute(
        `update product set name = '${req.body.name}', price = '${req.body.price}', description = '${req.body.description}' where id = ${req.body.id}`
    );
    res.json({message:"product updated successfully"});
})
export default router;