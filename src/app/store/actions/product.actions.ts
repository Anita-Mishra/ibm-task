import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/entity/product-entity';


export const loadProducts = createAction('[Product Page] Load Products');

export const loadProductsSuccess = createAction(
  '[Product API] Product Load Success',
  props<{ product: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Product Load Failure',
  props<{ error: string }>()
);

export const dummyAction = createAction('[dummy action]');