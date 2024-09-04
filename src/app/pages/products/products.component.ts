import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { product } from '../../components/productmodal';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductComponent implements OnInit {
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
