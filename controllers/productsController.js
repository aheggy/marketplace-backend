const { Router, response } = require("express")
const {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
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

productsController.get("/:id", async(request, response) => {
    const { id } = request.params
    try{
        const product = await getOneProduct(id)
        response.status(200).json({data: product})
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

productsController.put("/:id", async(request, response) =>{
    const {id } = request.params
    const product = request.body;
    try{
        const existingProduct = await getOneProduct(id)
        if (!existingProduct) {
            response.status.apply(404).json({error: 'Product is not found'})
            return
        }
        const updatedProduct = await updateProduct(id, product)
        response.status(200).json({data: updatedProduct})
    }catch (err){
        response.status(500).json({error: err.message})
    }
})

productsController.delete("/:id", async(request, response) => {
    const {id} = request.params

    try {
        const existingProduct = await getOneProduct(id)
        if(!existingProduct){
            response.status(404).json({error: 'product not found'})
            return
        }
        const deletedProduct = await deleteProduct(id)
        response.status(200).json({data: deletedProduct})
    } catch (err) {
        response.status(500).json({error: err.message})
    }
})

module.exports = productsController