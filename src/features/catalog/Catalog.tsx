import { error } from "console";
import agent from "../../app/api/agent";
import LoadingComponents from "../../app/layout/LoadingComponents";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";
import { productSelectors, fetchProductsAsync } from "./catalogSlice";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const dispatch = useAppDispatch();
  const {productsLoaded, status} = useAppSelector(state => state.catalog);

    
    useEffect(() => {
      if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

    if (status.includes('pending')) return <LoadingComponents message='Loading products...' />
    return(
        <>
          <ProductList products={products}/>
        </>
    )
}