const Product = require('../models/Product');


async function listProducts(req, res) {
    try {
        const results = await Product.find()
        res.json({
            results: results
        })
    } catch (error) {
        res.json({
            errors: error.message
        })
    }
}

const addProduct = async (req, res) => {
    try {
        const thisProduct = new Product(res.body);
        await thisProduct.save();
        res.json({
            results: [thisProduct]
        });
    } catch (error) {
        res.json({
            errors: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({
            delete: true
        });
    } catch (error) {
        res.json({
            errors: error.message
        })
    }

}

const updateProduct = async (req, res) => {
    try {
        await Product.findOneAndUpdate({
            _id: req.params.id
        }, req.body);
        res.json({
            modify: Product
        });
    } catch (error) {
        res.json({
            error: error.message
        });
    }
}


module.exports = {
    listProducts,
    addProduct,
    deleteProduct,
    updateProduct
}