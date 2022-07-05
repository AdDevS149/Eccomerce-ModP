import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { listProducts } from '../action/productAction';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Loading from '../components/Loading';
import 'antd/dist/antd.min.css';
import { Pagination } from 'antd';

const PageNav = () => {
  const { productId } = useParams();
 

  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, count, page /*error*/ } = productList;

  useEffect(() => {
    dispatch(listProducts(pageNumber, productId));
  }, [dispatch, pageNumber, page, productId]);

  return (
    <>
      <Menu />

      {/* <Header /> */}

      <div className='container  justify-content-center mb-50'>
        {/* <h2>Latest Product</h2> */}

        <div className='row' style={{ paddingTop: '102px' }}>
          {loading ? (
            <Loading />
          ) : products && products.length === 0 ? (
            <>
              <h2>{`No result found for your search query: "${productId}"`}</h2>
            </>
          ) : (
            products && products.map((product) => <Card key={product._id} product={product} id={product._id} countStock={product.countStock} rating={product.rating} numReviews={product.numReviews} />)
          )}
        </div>

        <div className='container text-center pt-5'>
          <Pagination current={pageNumber} total={typeof keyword !== 'undefined' ? products.length : count} onChange={(value) => setPageNumber(value)} pageSize={8} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PageNav;
