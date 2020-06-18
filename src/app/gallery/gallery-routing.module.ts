import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { DetailsComponent } from './details/details.component';

const galleryRoutes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    children: [
      {
        path: ':aid',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
