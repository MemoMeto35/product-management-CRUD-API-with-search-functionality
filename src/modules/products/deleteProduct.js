import { query } from "../../../database/dbConnection.js";
import express from "express"
const router = express.Router();
router.delete("/products", (req, res)=>{
    query.execute(
        `delete from product where id = ${req.body.id}`
    );
    res.json({message:"product deleted"});
})
export default router;