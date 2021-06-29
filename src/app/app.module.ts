import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// SERVICES
import { ApiLocalService } from './services/api-local/api-local.service';

// LAYOUT
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutMenuComponent } from './layout/layout-menu/layout-menu.component';

// PAGES
import { PageParticipantesComponent } from './pages/page-participantes/page-participantes.component';
import { PageDuplasComponent } from './pages/page-duplas/page-duplas.component';
import { PageParticipanteNovoComponent } from './pages/page-participante-novo/page-participante-novo.component';
import { PageDuplaNovaComponent } from './pages/page-dupla-nova/page-dupla-nova.component';
import { PagePartidasComponent } from './pages/page-partidas/page-partidas.component';

@NgModule({
  declarations: [
    AppComponent,

    // LAYOUT
    LayoutHeaderComponent,
    LayoutMenuComponent,
    LayoutContentComponent,

    // PAGES
    PageParticipantesComponent,
    PageParticipanteNovoComponent,
    PageDuplasComponent,
    PageDuplaNovaComponent,
    PagePartidasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      maxOpened: 2,
      autoDismiss: true,
    }),
  ],
  providers: [ApiLocalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
