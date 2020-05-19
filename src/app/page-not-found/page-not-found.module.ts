import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule
  ]
})
export class PageNotFoundModule { }
