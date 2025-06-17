const mongoose = require('mongoose');

//esquema por cada colección de MongoDB
const productSchema = new mongoose.Schema(
  {
    //required: para valores obligatorios
    //type: String, Number, Boolean, Arrays...
    name: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imgMobile: { type: String, required: true },
    imgTablet: String,
    imgDesktop: String,
    imgThumbnail: { type: String, required: true },
    alt: { type: String, required: true }
  },
  {
    //genera createAt y UpdateAt automático
    timestamps: true,
    collection: 'productsCollection'
  }
);

//js no sabe leer el esquema, el modelo compila el esquema
const ProductsModel = mongoose.model('User', productSchema);

module.exports = ProductsModel;
