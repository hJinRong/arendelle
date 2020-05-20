import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    NavbarComponent,
    ArticlesComponent,
    PanelComponent,
    ArticleCardComponent,
  ],
  imports: [CommonModule, GalleryRoutingModule, MatDividerModule],
})
export class GalleryModule {}
