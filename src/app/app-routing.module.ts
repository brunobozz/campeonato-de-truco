import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDuplaNovaComponent } from './pages/page-dupla-nova/page-dupla-nova.component';
import { PageDuplasComponent } from './pages/page-duplas/page-duplas.component';
import { PageParticipanteNovoComponent } from './pages/page-participante-novo/page-participante-novo.component';
import { PageParticipantesComponent } from './pages/page-participantes/page-participantes.component';

const routes: Routes = [
  {
    path: '',
    component: PageParticipantesComponent,
  },
  {
    path: 'participantes',
    children: [
      {
        path: '',
        component: PageParticipantesComponent,
      },
      {
        path: 'participante-novo',
        component: PageParticipanteNovoComponent,
      },
    ],
  },
  {
    path: 'duplas',
    children: [
      {
        path: '',
        component: PageDuplasComponent,
      },
      {
        path: 'dupla-nova',
        component: PageDuplaNovaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
