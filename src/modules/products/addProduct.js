import express from "express"
import { query } from "../../../database/dbConnection.js";
const router = express.Router();
// addProduct;
router.post("/products", (req, res)=>{
    query.execute(`insert into product (name, price, description) values ('${req.body.name}', '${req.body.price}', '${req.body.description}')`)
    res.json({message:"product Added Successfully"});
});
export default router;