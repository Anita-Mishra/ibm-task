import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';
import {  ProductState } from '../model/product-state';

export const selectProducts:any = (state: AppState) => state.products;
export const selectAllProducts:any = createSelector(
    selectProducts,
  (state: ProductState) => state.products
);


//export const getProductById:any = (id:any) => createSelector(selectProducts, (state: ProductState,id:number) => state.products.filter(x=> x.id === id));

export const getProductById:any = (prop:any) => createSelector(selectProducts, (allItems:ProductState) => {
  if (allItems) {
    //console.log(allItems);
    return allItems.products.find((item:any) => {
      return item.id == prop.params.id;
    });
  } else {
    return {};
  }
});
