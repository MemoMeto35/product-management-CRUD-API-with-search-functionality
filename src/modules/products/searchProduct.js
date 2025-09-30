import express from "express"
import { query } from "../../../database/dbConnection.js";
const router = express.Router();
router.get("/products/search", (req, res)=>{ // search first then try the id route;
    const searchQuery = req.query.name;
    console.log(searchQuery);
    query.execute(
        `SELECT * from product WHERE name LIKE '%${searchQuery}%'`,
        (err, data)=>{
            if(err) res.json({message: "error ", err});
            else res.json(data);
        }
    )
})  
export default router