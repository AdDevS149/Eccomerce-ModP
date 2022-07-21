import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { PrimaryButton } from './CommonStyled';

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { useGetAdminProductQuery, useEditAdminProductMutation, useGetAdminProductsQuery  } from '../../features/api/adminProductApiSlice';

const EditProduct = ({ prodId }) => {
  const { productId } = useParams();
  const navigate = useNavigate();


  const { data: item } = useGetAdminProductQuery(productId);
  const { data: product } = useGetAdminProductsQuery();
  const [editAdminProduct, { isLoading }] = useEditAdminProductMutation();


  console.log('data', product);

  const handleClickOpen = () => {
    setOpen(true);

    let selectedProd = product?.filter((item) => item._id === prodId);

    selectedProd = selectedProd[0];

    // setCurrentProd(selectedProd);
    setPreviewImg(selectedProd.image.url);
    setProductImg('');
    setBrand(selectedProd.brand);
    setName(selectedProd.name);
    setPrice(selectedProd.price);
    setDesc(selectedProd.desc);
  };

  const handleClose = () => {
    setOpen(false);
  };



  // const { editStatus } = useSelector((state) => state.products);
  const [open, setOpen] = React.useState(false);
  const [previewImg, setPreviewImg] = useState(item?.previewImg);
//   const [currentProd, setCurrentProd] = useState(product?.currentProd);

  const [productImg, setProductImg] = useState(item?.productImg);
  const [brand, setBrand] = useState(item?.brand);
  const [name, setName] = useState(item?.name);
  const [price, setPrice] = useState(item?.price);
  const [desc, setDesc] = useState(item?.desc);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
        setPreviewImg(reader.result);
      };
    } else {
      setProductImg();
    }
  };

 


  const onNameChanged = (e) => setName(e.target.value);
  const onBrandChanged = (e) => setBrand(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onDescChanged = (e) => setDesc(e.target.value);



  const canSave = [name, brand, price, desc, productImg].every(Boolean) && !isLoading;

  const onSaveProduct = async () => {
    if (canSave) {
      try {
        await editAdminProduct({ id: productId, name, brand, price, desc, image: productImg }).unwrap();

        // setName('');
        // setBrand('');
        // setPrice('');
        // setDesc('');
        // setProductImg('');
        navigate(`/admin/products/${productId}`);
      } catch (err) {
        console.error('Failed to save product', err);
      }
    }
  };

  const spinner = isLoading ? <Spinner text='Saving...' /> : null;

  return (
    <div>
      <Edit onClick={handleClickOpen}>Edit</Edit>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'md'}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <StyledEditProduct>
            <StyledForm>
              <h3>Edit Product</h3>
              <input id='imgUpload' accept='image/*' type='file' onChange={handleProductImageUpload} />
              <select onChange={onBrandChanged} value={brand} required>
                <option value=''>Select Brand</option>
                <option value='clothier'>Clothier</option>
                <option value='shomier'>Shomier</option>
                <option value='crysin'>Crysin</option>
                <option value='other'>Other</option>
              </select>
              <input type='text' placeholder='Name' value={name} onChange={onNameChanged} required />
              <input type='number' placeholder='Price' value={price} onChange={onPriceChanged} required />
              <input type='text' placeholder='Description' value={desc} onChange={onDescChanged} required />

              {/* <PrimaryButton type='submit'>{editStatus === 'pending' ? 'Submitting' : 'Submit'}</PrimaryButton> */}
              <PrimaryButton type='button' onClick={onSaveProduct}>
                Save Edit Product
              </PrimaryButton>
            </StyledForm>
            <ImagePreview>
              {previewImg ? (
                <>
                  <img src={previewImg} alt='error!' />
                </>
              ) : (
                <p>Product image upload preview will appear here!</p>
              )}
            </ImagePreview>
               {spinner}
          </StyledEditProduct>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
   
    </div>
  );
};

export default EditProduct;

const Edit = styled.button`
  border: none;
  outline: none;

  padding: 3px 5px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  background-color: #4b70e2;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledEditProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
