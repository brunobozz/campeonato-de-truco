import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/api-local/api-local.service';

@Component({
  selector: 'app-page-partidas',
  templateUrl: './page-partidas.component.html',
  styleUrls: ['./page-partidas.component.scss'],
})
export class PagePartidasComponent implements OnInit {
  DUPLAS: any[] = [];
  PARTICIPANTES: any[] = [];
  TURNOS: any[] = [];
  TURNOS_PONTOS: any[] = [];

  constructor(
    private apiLocal: ApiLocalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTurnosPontos();
    this.getParticipantes();
    this.getDuplas();
    this.getTurnos();
  }

  getParticipantes() {
    this.apiLocal.getInfo('participantes').subscribe((data) => {
      this.PARTICIPANTES = data;
    });
  }

  getDuplas() {
    this.apiLocal.getInfo('duplas').subscribe((data) => {
      this.DUPLAS = data;
      this.montaDuplas();
    });
  }

  getTurnos() {
    this.apiLocal.getInfo('turnos').subscribe((data) => {
      this.TURNOS = data;
      this.montaPartidas();
    });
  }

  getTurnosPontos() {
    this.apiLocal.getInfo('turnos').subscribe((data) => {
      this.TURNOS_PONTOS = data;
    });
  }

  montaDuplas() {
    for (var i = 0; i < this.DUPLAS.length; i++) {
      for (var d = 0; d < this.DUPLAS[i].participantes.length; d++) {
        this.DUPLAS[i].participantes[d] = this.PARTICIPANTES.find(
          (x) => x.id == this.DUPLAS[i].participantes[d]
        );
      }
    }
  }

  montaPartidas() {
    this.TURNOS.map((turno) => {
      for (var i = 0; i < turno.partidas.length; i++) {
        for (var j = 0; j < turno.partidas[i].duplas.length; j++) {
          turno.partidas[i].duplas[j].dupla_id = this.DUPLAS.find(
            (x) => x.id == turno.partidas[i].duplas[j].dupla_id
          );
        }
      }
    });
  }

  alteraPartida(
    value: string,
    turnoId: number,
    partidaId: number,
    duplaId: number
  ): void {
    this.TURNOS_PONTOS.find((x) => x.id == turnoId).partidas[partidaId].duplas[
      duplaId
    ].pontos = +value;

    this.apiLocal
      .patchItem(
        'turnos',
        turnoId,
        this.TURNOS_PONTOS.find((x) => x.id == turnoId)
      )
      .subscribe(() => {
        this.toastr.success('Partidas atualizadas!', 'Feito!!');
      });
  }
}
