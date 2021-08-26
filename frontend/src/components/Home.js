import React from 'react'
import { Fragment,useEffect } from 'react';
import MetaData from './layouts/MetaData';
import { useAlert } from 'react-alert';
import {useDispatch, useSelector} from 'react-redux'
import {getProduct} from '../actions/productActions'
import Product from '../components/product/Product'



const Home = ()=>{
  const alert = useAlert();
  const dispatch=useDispatch();
  const {loading,products,error,productsCount}=useSelector(state=>state.products) //redux store e je data ache niye asteci
  

  useEffect(()=>{
    if(error){
     return alert.error(error)
    }
    dispatch(getProduct());
  },[dispatch,alert,error])

    
  return(
       <Fragment>
          
          {loading?<h1 className="loader"></h1>:(
            <Fragment>
                <MetaData title={'All New Product'} />
                <section id="products" className="container mt-5" style={{background:'black'}}>
                  <div className="row">
                    {products && products.map(products=>(

                        <Product key={products._id} products={products} />        

                    ))}
              
                  </div>
                </section>
            </Fragment>
          )}
    
     </Fragment>
    )
}

export default Home;