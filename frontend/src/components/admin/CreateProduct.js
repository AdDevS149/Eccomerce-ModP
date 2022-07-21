import { useState } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from './CommonStyled';
// import { productsCreate } from '../../slices2/productsSlice';
import { Spinner } from '../../components/Spinner';

import { useCreateAdminProductMutation } from '../../features/api/adminProductApiSlice';

const CreateProduct = () => {
  const [productImg, setProductImg] = useState('');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

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
      };
    } else {
      setProductImg('');
    }
  };

  const [createProduct, { isLoading }] = useCreateAdminProductMutation();

  const onNameChanged = (e) => setName(e.target.value);
  const onBrandChanged = (e) => setBrand(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onDescChanged = (e) => setDesc(e.target.value);


  const canSave = [name, brand, price, desc, productImg].every(Boolean) && !isLoading;

  const onSaveButton = async () => {
    if (canSave) {
      try {
        await createProduct({ name, brand, price, desc, image: productImg }).unwrap();

        setName('');
        setBrand('');
        setPrice('');
        setDesc('');
        setProductImg('');
        //  navigate('/')
      } catch (err) {
        console.error('Failed to save Product', err);
      }
    }
  };

  const spinner = isLoading ? <Spinner size='30px' /> : null;

  return (
    <StyledCreateProduct>
      <StyledForm>
        <h3>Create a Product</h3>
        <input id='imgUpload' accept='image/*' type='file' onChange={handleProductImageUpload} required />
        <select onChange={onBrandChanged} required>
          <option value=''>Select Brand</option>
          <option value='clothier'>Clothier</option>
          <option value='shomier'>Shomier</option>
          <option value='crysin'>Crysin</option>
          <option value='other'>Other</option>
        </select>
        <input type='text' placeholder='Name' onChange={onNameChanged} required />

        <input type='number' placeholder='Price' onChange={onPriceChanged} required />
        <input type='text' placeholder='Description' onChange={onDescChanged} required />

        <PrimaryButton type='button' onClick={onSaveButton}>
          Save New Product
        </PrimaryButton>
      </StyledForm>
      <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt='error!' />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview>
      {spinner}
    </StyledCreateProduct>
  );
};

export default CreateProduct;

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

const StyledCreateProduct = styled.div`
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
