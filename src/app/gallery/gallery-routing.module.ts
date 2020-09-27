import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';

const galleryRoutes: Routes = [
  {
    path: 'articles',
    component: PanelComponent,
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(galleryRoutes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
