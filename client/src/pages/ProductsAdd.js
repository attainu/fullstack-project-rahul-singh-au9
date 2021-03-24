
import {useState, useContext, useEffect} from 'react'

import {imageUpload} from '../utils/imageUpload'

import {DataContext} from '../store/GlobalState'
import {postData, getData, putData} from '../utils/fetchData'

import { useSelector,useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { createProducts } from '../redux/actions/Products.actions'

import '../styles/products_manager.css'


const ProductsManager = () => {
    const initialState = {
        title: '',
        price: 0,
        inStock: 0,
        description: '',
        content: '',
        category: ''
    }

   
 
    const {id} = useParams()

    const product = useSelector(state => state.ProductState )
    const disspatch = useDispatch()
    const [products, setProduct] = useState(initialState)
    const {title, price, inStock, description, content, category} = products

    const [images, setImages] = useState([])


    const [onEdit, setOnEdit] = useState(false)
    const {state, dispatch} = useContext(DataContext)

    useEffect(() => {
        if(id){
            setOnEdit(true)
            getData(`product/${id}`).then(res => {
                setProduct(res.product)
                setImages(res.product.images)
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages([])
        }
    },[id])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setProduct({...products, [name]:value})
    }

    const handleUploadInput = e => {
        let newImages = []
        let num = 0
        let err = ''
        const files = [...e.target.files]

        if(files.length === 0) 
        return dispatch({type: 'NOTIFY', payload: {error: 'Files does not exist.'}})

        files.forEach(file => {
            if(file.size > 1024 * 1024)
            return err = 'The largest image size is 1mb'

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
            return err = 'Image format is incorrect.'

            num += 1;
            if(num <= 5) newImages.push(file)
            return newImages;
        })

        if(err) dispatch({type: 'NOTIFY', payload: {error: err}})

        const imgCount = images.length
        if(imgCount + newImages.length > 5)
        return dispatch({type: 'NOTIFY', payload: {error: 'Select up to 5 images.'}})
        setImages([...images, ...newImages])
    }

    const deleteImage = index => {
        const newArr = [...images]
        newArr.splice(index, 1)
        setImages(newArr)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        // if(auth.user.role !== 'admin') 
        // return dispatch({type: 'NOTIFY', payload: {error: 'Authentication is not valid.'}})

        // if(!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0)
        // return dispatch({type: 'NOTIFY', payload: {error: 'Please add all the fields.'}})


    
    
     


         
    
        dispatch({type: 'NOTIFY', payload: {loading: true}})
        let media = []
        const imgNewURL = images.filter(img => !img.url)
        const imgOldURL = images.filter(img => img.url)

        if(imgNewURL.length > 0) media = await imageUpload(imgNewURL)
      

       

        let res;
        if(onEdit){
            res = await putData(`product/${id}`, {...product, images: [...imgOldURL, ...media]})
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        }else{
            // res = await postData('product', {...product, images: [...imgOldURL, ...media]})
           const productss ={...products, images: [...imgOldURL, ...media]}
                 return disspatch(createProducts(productss))
        
            console.log( productss)
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        }
       

        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})
        
    }

    return(
        <div className="products_manager" style={{color:"black"}}  >
          
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    
                    <input style={{borderColor:"black"}}type="text" name="title" value={title}
                    placeholder="Title" className="d-block my-4 w-100 p-2"
                    onChange={handleChangeInput} />

                    <div className="row">
                        <div className="col-sm-6">
                            <label style={{color:"black"}} htmlFor="price">Price</label>
                            <input style={{borderColor:"black"}} type="number" name="price" value={price}
                            placeholder="Price" className="d-block w-100 p-2"
                            onChange={handleChangeInput}  />
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="price">In Stock</label>
                            <input style={{borderColor:"black"}} type="number" name="inStock" value={inStock}
                            placeholder="inStock" className="d-block w-100 p-2"
                            onChange={handleChangeInput} 
                            />
                        </div>
                    </div>

                    <textarea name="description" id="description" cols="30" rows="4"
                    placeholder="Description" 
                    onChange={handleChangeInput}
                    className="d-block my-4 w-100 p-2" value={description} />

                    <textarea name="content" id="content" cols="30" rows="6"
                    placeholder="Content"
                     onChange={handleChangeInput}
                    className="d-block my-4 w-100 p-2" value={content} />

                    <div className="input-group-prepend px-0 my-2">
                        <select name="category" id="category" value={category}
                        onChange={handleChangeInput}
                         className="custom-select text-capitalize">
                            <option value="all">All Products</option>
                            
                                
                                    <option  value={"store"}>
                                      store
                                    </option>
                                    <option  value={"Electronics"}>
                                    Electronics
                                    </option>
                                    <option  value={"Mens"}>
                                     Mens
                                    </option>
                                    <option  value={"women"}>
                                    women
                                    </option>
                                    <option  value={"Clothing"}>
                                    Clothing
                                    </option>
                            
                        </select>
                    </div>

                    <button type="submit" className="btn btn-info my-2 px-4">
                        {onEdit ? 'Update': 'Create'}
                    </button>

                </div>

                <div className="col-md-6 my-4">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Upload</span>
                        </div>
                        <div className="custom-file border rounded">
                            <input type="file" className="custom-file-input"
                            onChange={handleUploadInput}
                             multiple accept="image/*"
                              />
                        </div>

                    </div> 

                    <div className="row img-up mx-0">
                        {
                            images.map((img, index) => (
                                <div key={index} className="file_img my-1">
                                    <img src={img.url ? img.url : URL.createObjectURL(img)}
                                     alt="" className="img-thumbnail rounded" />

                                     <span onClick={() => deleteImage(index)}>X</span>
                                </div>
                            ))
                        }
                    </div>
                        

                </div>

               
            </form>

            
        </div>
    )
}

export default ProductsManager