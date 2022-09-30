import { Product } from "src/app/entity/product-entity";

export interface ProductState {
    products: Product[];
    error: any;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export interface ProductDetailState {
    product: Product;
    error: any;
    status: 'pending' | 'loading' | 'error' | 'success';
}
  
/* export const initialState: ProductState = {
    products: [],
    error: null,
    status: 'pending',
}; */