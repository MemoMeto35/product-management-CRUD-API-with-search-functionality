import express from "express"
import cors from "cors"
const app = express()
const port = 3000
app.use(express.json());
app.use(cors());
import getAllProduct from "./src/modules/products/getAllProduct.js";
import addProduct from "./src/modules/products/addProduct.js";
import searchProduct from "./src/modules/products/searchProduct.js";
import getOneProduct from "./src/modules/products/getOneProduct.js";
import deleteProduct from "./src/modules/products/deleteProduct.js";
import updateProduct from "./src/modules/products/updateProduct.js";

app.use(getAllProduct);
app.use(addProduct);
app.use(searchProduct);
app.use(getOneProduct);
app.use(deleteProduct);
app.use(updateProduct);

app.get('/', (req, res) => res.send('Server is Running!'))
app.listen(port, () => console.log(`app is working on Port ${port}!`))

