// getAllProduct
import { query } from "../../../database/dbConnection.js";
import express from "express"
const router = express.Router();

router.get("/products", (req, res)=>{
    query.execute(`SELECT * from product`, (err, data)=>{
        if(err) res.json({message: "Error ", err});
        else res.json(data);
    });
});
export default router;