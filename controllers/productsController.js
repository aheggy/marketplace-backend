const { Router, response } = require("express")
const {
    getAllProducts,
    createProduct,
} = require("../queries/productsQueries")

const productsController = Router()

productsController.get("/", async(request, response) => {
    try{
        const products = await getAllProducts()
        response.status(200).json({data: products})
    } catch (err){
        response.status(500).json({error: err.message})
    }
})

productsController.post("/", async(request, response) => {
    try{
        const product = request.body;
        const createdProduct = await createProduct(product)
        response.status(201).json({data: createdProduct})
    } catch(err){
        response.status(500).json({error: err.message})
    }
})

module.exports = productsController