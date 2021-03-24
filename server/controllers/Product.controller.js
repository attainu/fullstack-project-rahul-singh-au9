const Product = require('../models/productModel')




  const getProducts = async(req, res) => {
        try {
            const products = await Product.find({})

            return res.status(200).json({ message: 'Success', data: products })

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    const createProducts = async (req, res) => {

        try {
        

            const products = await Product.create({ ...req.body })
            console.log(products)
            // if (req.file) {
            //     let ProdPic = bufferConversion(req.file.originalname, req.file.buffer);
            //     let imgResponse = await cloudinary.uploader.upload(ProodPic);
            //     Product.ProdPicture = imgResponse.secure_url;
            // }

          

            await products.save()


            return res.status(200).json({ message: 'Success', data: Product })

        } catch (error) {

            return res.status(500).json({ message: error.message })

        }

        
  
    }

    const getProductDetail = async(req, res) => {

      const  { id } = req.params
        try {
            const products = await Product.findById(id)
    
            return res.status(200).json({  product: products })
    
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }



module.exports ={ getProducts,createProducts, getProductDetail }