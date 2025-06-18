const ProductsModel = require('../models/products.model');

const productsController = {};

productsController.getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductsModel.find();
    return res.status(200).send(allProducts);
  } catch (error) {
    return res.status(500).send({ error: 'Error reading database' + error });
  }
};

productsController.updateProduct = async (req, res) => {
  const products = req.body;
  console.log(products);

  try {
    const updates = products.map(product => ({
      updateOne: {
        filter: { _id: product._id },
        update: { $inc: { stock: -product.quantity } }
      }
    }));

    await ProductsModel.bulkWrite(updates);

    const allElements = await ProductsModel.find();
    return res.status(200).send(allElements);
  } catch (error) {
    return res.status(500).send({ error: 'Error reading database' + error });
  }
};

module.exports = productsController;
