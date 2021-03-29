const express = require("express");
const { createProduct, getProducts, getProduct, userProductBookings } = require("../controllers/productController");
// const auth = require("../middleware/auth");
const {requireSignin, serviceOwner} = require("../middleware/requireSignin");

const productRouter = express.Router();

productRouter.post("/create-product", createProduct);
productRouter.get("/products", getProducts);
productRouter.get("/product/:productId", getProduct);
productRouter.get("/user-product-bookings", requireSignin, userProductBookings);

module.exports = productRouter;
