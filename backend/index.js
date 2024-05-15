const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const { Schema } = mongoose;

const productSchema = new Schema({
  imgSrc: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
const productGallery = new Schema({
  imgSrc: {
    type: String,
    require: true,
  },
});

const Product = mongoose.model("Product", productSchema);
const Gallery = mongoose.model("Gallery", productGallery);


app.post("/products", async (req, res) => {
  try {
    const { imgSrc, title, price, description } = req.body;
    const product = new Product({
      imgSrc,
      title,
      price,
      description,
    });
    await  product.save();

    res.status(201).send(product);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

app.post("/gallery", async (req, res) => {
  try {
    const { imgSrc } = req.body;
    const product = new Gallery({
      imgSrc
    });
    await  product.save();

    res.status(201).send(product);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});
app.get("/gallery", async (req, res)=> {
  try {
     const products= await Gallery.find({})
  
      res.status(200).send(products);
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }

});
app.get("/products", async (req, res)=> {
    try {
       const products= await Product.find({})
    
        res.status(200).send(products);
      } catch (err) {
        res.status(500).json({
          message: err,
        });
      }
 
});
const PORT = process.env.PORT;
const DB = process.env.DB_URL;
mongoose.connect(DB).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(PORT);
});
