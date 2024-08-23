import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/dataServe';
import { product } from '../../components/productmodal';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  showproduct:any=[];
  constructor(private api:DataService){}
  ngOnInit(): void{
  //  this.api.products().subscribe((res: any) =>{
  //    this.showproduct =res;
   // }) 
  }
  deleteitem(item:product){
  //  this.api.removecartitiem(item)
  }

}
