import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PanelComponent } from './panel/panel.component';

const galleryRoutes: Routes = [
  {
    path: 'articles',
    component: PanelComponent,
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
