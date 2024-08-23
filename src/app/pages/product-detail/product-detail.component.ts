import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { DataService } from '../../services/dataServe';
import { product } from '../../components/productmodal';



@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NavComponent, RouterLink, RouterLinkActive, RouterModule, HomeComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  productdata:any|product;
  constructor(private api:DataService, private activatedroute:ActivatedRoute){}

  ngOnInit(): void {
  let productid = this.activatedroute.snapshot.paramMap.get('productid');
 // console.log("product id is "+ productid )
 productid && this.api.getProductbyid(productid).subscribe((res) =>{
  this.productdata = res;
  console.log(res)
 })
  }


}
