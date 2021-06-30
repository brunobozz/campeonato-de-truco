import { Component, OnInit } from '@angular/core';
import { ApiLocalService } from 'src/app/services/api-local/api-local.service';

@Component({
  selector: 'app-page-tabelas',
  templateUrl: './page-tabelas.component.html',
  styleUrls: ['./page-tabelas.component.scss'],
})
export class PageTabelasComponent implements OnInit {
  DUPLAS: any[] = [];
  PARTICIPANTES: any[] = [];
  TURNOS: any[] = [];
  turno: number = 0;

  constructor(private apiLocal: ApiLocalService) {}

  ngOnInit(): void {
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

  trocaTurno(value: number) {
    this.turno = value;
    this.sortTabela();
  }

  sortTabela() {
    this.DUPLAS = this.DUPLAS.sort(
      (a, b) => b.turno[this.turno].saldo - a.turno[this.turno].saldo
    );
    this.DUPLAS = this.DUPLAS.sort(
      (a, b) => b.turno[this.turno].vitorias - a.turno[this.turno].vitorias
    );
    this.DUPLAS = this.DUPLAS.sort(
      (a, b) => b.turno[this.turno].pontos - a.turno[this.turno].pontos
    );
  }

  montaTabela() {
    for (var i = 0; i < this.TURNOS.length; i++) {
      for (var j = 0; j < this.TURNOS[i].partidas.length; j++) {
        if (
          this.TURNOS[i].partidas[j].duplas[0].pontos >
          this.TURNOS[i].partidas[j].duplas[1].pontos
        ) {
          // PONTOS
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
          ).turno[i].pontos =
            this.DUPLAS.find(
              (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
            ).turno[i].pontos + 2;

          // VITORIAS
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
          ).turno[i].vitorias =
            this.DUPLAS.find(
              (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
            ).turno[i].vitorias + 1;

          // DERROTAS
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
          ).turno[i].derrotas =
            this.DUPLAS.find(
              (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
            ).turno[i].derrotas + 1;
        }

        if (
          this.TURNOS[i].partidas[j].duplas[0].pontos <
          this.TURNOS[i].partidas[j].duplas[1].pontos
        ) {
          // PONTOS
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
          ).turno[i].pontos =
            this.DUPLAS.find(
              (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
            ).turno[i].pontos + 2;

          // VITORIAS
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
          ).turno[i].vitorias =
            this.DUPLAS.find(
              (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
            ).turno[i].vitorias + 1;

          // DERROTAS
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
          ).turno[i].derrotas =
            this.DUPLAS.find(
              (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
            ).turno[i].derrotas + 1;
        }

        // TENTOS FEITOS D1
        this.DUPLAS.find(
          (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
        ).turno[i].tentos_f =
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
          ).turno[i].tentos_f + this.TURNOS[i].partidas[j].duplas[0].pontos;

        // TENTOS TOMADOS D1
        this.DUPLAS.find(
          (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
        ).turno[i].tentos_t =
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
          ).turno[i].tentos_t + this.TURNOS[i].partidas[j].duplas[1].pontos;

        // SALDO D1
        this.DUPLAS.find(
          (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
        ).turno[i].saldo =
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[0].dupla_id
          ).turno[i].saldo +
          (this.TURNOS[i].partidas[j].duplas[0].pontos -
            this.TURNOS[i].partidas[j].duplas[1].pontos);

        // TENTOS FEITOS D2
        this.DUPLAS.find(
          (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
        ).turno[i].tentos_f =
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
          ).turno[i].tentos_f + this.TURNOS[i].partidas[j].duplas[1].pontos;

        // TENTOS TOMADOS D2
        this.DUPLAS.find(
          (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
        ).turno[i].tentos_t =
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
          ).turno[i].tentos_t + this.TURNOS[i].partidas[j].duplas[0].pontos;

        // SALDO D2
        this.DUPLAS.find(
          (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
        ).turno[i].saldo =
          this.DUPLAS.find(
            (x: any) => x.id == this.TURNOS[i].partidas[j].duplas[1].dupla_id
          ).turno[i].saldo +
          (this.TURNOS[i].partidas[j].duplas[1].pontos -
            this.TURNOS[i].partidas[j].duplas[0].pontos);
      }
    }
    this.sortTabela();
  }
}
