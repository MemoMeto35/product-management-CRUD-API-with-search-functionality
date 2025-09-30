import express from "express"
import { query } from "../../../database/dbConnection.js";
const router = express.Router();
// getOneProduct;
router.get("/products/:id", (req, res)=>{
    query.execute(
        `select * from product where id = ${req.params.id}`, 
        (err, data)=>{
            if(err) res.json(err);
            else res.json(data);
        }
    );
})
export default router;