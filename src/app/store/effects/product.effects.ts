import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product-service';
import { dummyAction, loadProducts, loadProductsFailure, loadProductsSuccess } from '../actions/product.actions';
import { selectAllProducts, selectProducts } from '../selectors/product.selector';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store
  ) {}

  // Run this code when a loadProducts action is dispatched
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      withLatestFrom(this.store.select(selectProducts)),
      
      switchMap((action:any) =>{
        if(action[1].products.length==0 ){
          return from(this.productService.getProducts()).pipe(
            // Take the returned value and return a new success action containing the Products
            map((products: any) => loadProductsSuccess({ product: products })),
            // Or... if it errors return a new failure action containing the error
            catchError((error) => of(loadProductsFailure({ error })))
          );
        }
        return of(dummyAction());
        
      } 
      )
    )
  );
}