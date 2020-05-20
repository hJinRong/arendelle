import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { PanelComponent } from './panel/panel.component';

const galleryRoutes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    // children: [
    //   {
    //     path: '',
    //     component: PanelComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
