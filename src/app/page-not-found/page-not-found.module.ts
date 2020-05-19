import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    MatRippleModule
  ]
})
export class PageNotFoundModule { }
