import { Component } from '@angular/core';
import { product } from '../../components/productmodal';
import { DataService } from '../../services/dataServe';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data:any|product[]
  constructor(private api:DataService){}
  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts(){
    this.api.getProducts().subscribe(res =>{
      this.data = res;
      console.log(res)
    })
  
  }

}
