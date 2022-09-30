import { createReducer, on } from "@ngrx/store";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "../actions/product.actions";
import { ProductState } from "../model/product-state";

export const initialState: ProductState = {
    products: [],
    error: null,
    status: 'pending',
}; 

export const productReducer = createReducer(
    // Supply the initial state
    initialState,
  
    // Trigger loading the products
    on(loadProducts, (state) => ({ ...state, status: 'loading' })),

   
    
    // Handle successfully loaded products
    on(loadProductsSuccess, (state, { product }) => ({
      ...state,
      products: product,
      error: null,
      status: 'success',
    })),
    // Handle products load failure
    on(loadProductsFailure, (state, { error }) => ({
      ...state,
      error: error,
      status: 'error',
    }))
);