import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { productDelete } from '../../../slices/productsSlice';
import EditProduct from '../EditProduct';

import { useGetPublicProductQuery } from '../../../features/api/productApiSlice';

const ProductsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data = [] } = useGetPublicProductQuery();

  let rows = data && data?.map((item) => {
      return {
        id: item._id,
        imageUrl: item.image.url,
        pName: item.name,
        pDesc: item.desc,
        price: item.price.toLocaleString(),
      };
    });

  const columns = [
    { field: 'id', headerName: 'ID', width: 220 },
    {
      field: 'imageUrl',
      headerName: 'Image',
      width: 80,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.imageUrl} alt='' />
          </ImageContainer>
        );
      },
    },
    { field: 'pName', headerName: 'Name', width: 130 },
    { field: 'pDesc', headerName: 'Description', width: 130 },
    {
      field: 'price',
      headerName: 'Price($)',
      width: 80,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 170,
      renderCell: (params) => {
        return (
          <Actions>
            <Delete onClick={() => handleDelete(params.row.id)}>Delete</Delete>
            <EditProduct prodId={params.row.id} />
            <View onClick={() => navigate(`/admin/product/${params.row.id}`)}>View</View>
          </Actions>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    dispatch(productDelete(id));
  };

  return (
    <div style={{ height: 400, width: '100%', marginTop: '2rem' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick />
    </div>
  );
}

export default ProductsList;

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    outline: none;

    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`;
const View = styled.button`
  background-color: rgb(114, 225, 40);
`;
