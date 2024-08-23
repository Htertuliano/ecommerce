import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
   { path: 'home', component: HomeComponent},
   { path: 'Products', component: ProductsComponent },
   { path: 'about', component: AboutComponent, },
   {path: 'contact', component: ContactComponent},
   {path: 'login', component: LoginComponent},
   {path: 'registration', component: RegistrationComponent},
   {path: 'product-detail/:productid', component: ProductDetailComponent},
   {path: 'cart-details', component: CartComponent },
   {path: "**", component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
