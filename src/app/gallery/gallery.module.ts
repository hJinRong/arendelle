import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { PanelComponent } from './panel/panel.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { DetailsComponent } from './details/details.component';
import { ToggleService } from './toggle.service';
import { RequestArticlesService } from './request-articles.service';

@NgModule({
  declarations: [PanelComponent, ArticleCardComponent, DetailsComponent],
  imports: [CommonModule, GalleryRoutingModule, MatDividerModule],
  providers: [ToggleService, RequestArticlesService],
})
export class GalleryModule {}
