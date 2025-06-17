const { v4 } = require('uuid');
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
  const { id } = req.params;
  const { counter } = req.body;
  //counter, la cantidad que se selecciona

  try {
    const selectedProduct = await ProductsModel.findById(id);

    if (!selectedProduct) {
      return res.status(409).send({ error: 'Product not exists' });
    }

    await ProductsModel.updateOne({ _id: id }, { $inc: {} });

    const allElements = await ProductsModel.find();
    return res.status(200).send(selectedProduct);
  } catch (error) {
    return res.status(500).send({ error: 'Error reading database' + error });
  }
};

// elementController.createElement = async (req, res) => {
//   const { info } = req.body;
//   if (!info) return res.status(400).send({ error: 'Bad request' + error });

//   try {
//     const element = await ElementModel.findById(req.params.id);

//     if (element) return res.status(409).send({ error: 'User exists' });

//     const newElement = new ElementModel({
//       _id: v4(),
//       info
//     });

//     await newElement.save();

//     const allElements = await ElementModel.find();
//     return res.status(200).send(allElements);
//   } catch (error) {
//     return res.status(500).send({ error: 'Error reading database' + error });
//   }
// };

// elementController.updateElement = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const element = await ElementModel.findById(id);

//     if (!element) {
//       return res.status(409).send({ error: 'User not exists' });
//     }

//     await ElementModel.updateOne({ _id: id }, { $set: { ...req.body } });

//     const allElements = await ElementModel.find();
//     return res.status(200).send(allElements);
//   } catch (error) {
//     return res.status(500).send({ error: 'Error reading database' + error });
//   }
// };

// elementController.deleteElement = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const element = await ElementModel.findById(id);

//     if (!element) return res.status(409).send({ error: 'User not exists' });

//     await ElementModel.deleteOne({ _id: id });
//     const allElements = await ElementModel.find();

//     return res.send(200).send(allElements);
//   } catch (error) {
//     return res.status(500).send({ error: 'Error reading database' + error });
//   }
// };

module.exports = productsController;
