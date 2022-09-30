import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/entity/product-entity';
import { loadProducts } from 'src/app/store/actions/product.actions';
import { selectAllProducts } from 'src/app/store/selectors/product.selector';

@Component({
  selector: 'product-list',
  templateUrl: './product-component.html'
})
export class ProductComponent {
  displayedColumns: string[] = ['blend_name', 'intensifier', 'notes', 'origin','variety'];
  tableData:any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private store: Store,private cdr: ChangeDetectorRef){}

  ngOnInit(){
    
    this.store.select(selectAllProducts).subscribe((res:any)=>{
      console.log(JSON.stringify(res)+ "Hello tatatat");
      this.cdr.detectChanges();
        this.tableData=new MatTableDataSource<Product>(res);
        this.tableData.paginator = this.paginator;
    });
    this.store.dispatch(loadProducts());
  }
}
