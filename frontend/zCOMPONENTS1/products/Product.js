// import {useState} from 'react'
// import ProductItem from './ProductItem'
// import EditProduct from './EditProductForm'
// import {useDeleteProductMutation} from '../../services/productApi'
// import {useUpdateProductMutation} from '../../services/productApi'


// function Product({id, title, description, completed}) {

//   const [checked, setChecked] = useState(completed)
//   const [open, setOpen] = useState({edit:false, view:false})
//   const [deleteProduct] = useDeleteProductMutation()
//   const [updateProduct] = useUpdateProductMutation()


//   const handleClose = () => {
//     setOpen({edit:false, view:false})
//   }

//   const handleDeleteProduct = (e) => {
//     e.preventDefault()
//     deleteProduct(id)
//     handleClose()
//   }

  
// const handleUpdateProduct = (e) => {
//   e.preventDefault()
//   const product = {
//     title,
//     description,
//     featured: checked,
//     id
//   }
//   updateProduct(product)
// }

//   return (
//     <div className={`product ${checked && 'product--borderColor'}`}>
//       <div>
//         <input 
//           id={`checkbox-${id}`} 
//           className='checkbox-custom'
//           name="checkbox" 
//           checked={checked} 
//           onChange={handleUpdateProduct}
//           type="checkbox" />
//         <label 
//           htmlFor={`checkbox-${id}`} 
//           className="checkbox-custom-label" 
//           onClick={() => setChecked(!checked)} ></label>
//       </div>
//       <div className='product__body'>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <div className='product__buttons'>
//           <div className='product__deleteNedit'>
//             <button 
//               className='product__editButton' 
//               onClick={() => setOpen({...open, edit: true})}>
//               Edit
//             </button>
//             <button className='product__deleteButton' onClick={handleDeleteProduct}>Delete</button>
//           </div>
//           <button 
//             onClick={() => setOpen({...open, view: true})}>
//             View
//           </button>
//         </div>
//       </div>

//       {open.view &&
//         <ProductItem 
//           onClose={handleClose} 
//           title={title} 
//           description={description} 
//           open={open.view} />
//       }

//       {open.edit &&
//         <EditProduct 
//           onClose={handleClose} 
//           toEditTitle={title} 
//           toEditDescription={description} 
//           open={open.edit}
//           id={id} />
//       }

//     </div>
//   )
// }

// export default Product