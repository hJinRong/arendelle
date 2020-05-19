import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryRoutingModule } from './gallery-routing.module';


@NgModule({
  declarations: [NavbarComponent, ArticlesComponent],
  imports: [
    CommonModule, GalleryRoutingModule
  ],
})
export class GalleryModule { }
