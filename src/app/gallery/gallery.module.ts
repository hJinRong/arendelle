import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { ToggleService } from './toggle.service';
import { RequestArticlesService } from './request-articles.service';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [PanelComponent, ArticleCardComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatDividerModule,
    DetailsModule,
  ],
  providers: [ToggleService, RequestArticlesService],
})
export class GalleryModule {}
