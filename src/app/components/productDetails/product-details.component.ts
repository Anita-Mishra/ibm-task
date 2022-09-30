import {Component, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/entity/product-entity';
import { getProductById } from 'src/app/store/selectors/product.selector';


@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  
    product:any;
  constructor(private store: Store,private activatedRoute: ActivatedRoute,private route:Router){
    
  }

  ngOnInit(){
   // this.store.dispatch(loadProducts());
   const id = this.activatedRoute.snapshot;
   console.log(id);
    this.store.select(getProductById(id)).subscribe({
        next: (item:any) => {
            this.product = item;
        },
        error:err=>{
            console.log("not found"+err);
        }
    });
  }

  navigateToHome(){
      this.route.navigate(['']);
  }
}
