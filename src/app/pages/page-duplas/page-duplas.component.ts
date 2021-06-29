import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/api-local/api-local.service';

@Component({
  selector: 'app-page-duplas',
  templateUrl: './page-duplas.component.html',
  styleUrls: ['./page-duplas.component.scss'],
})
export class PageDuplasComponent implements OnInit {
  DUPLAS: any[] = [];
  PARTICIPANTES: any[] = [];

  constructor(
    private apiLocal: ApiLocalService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParticipantes();
    this.getDuplas();
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

  montaDuplas() {
    for (var i = 0; i < this.DUPLAS.length; i++) {
      for (var d = 0; d < this.DUPLAS[i].participantes.length; d++) {
        this.DUPLAS[i].participantes[d] = this.PARTICIPANTES.find(
          (x) => x.id == this.DUPLAS[i].participantes[d]
        );
      }
    }
  }

  deleteDupla(id: number) {
    console.log(id);
    if (confirm('Tem certeza que deseja apagar essa dupla?')) {
      this.apiLocal.deleteItem(id, 'duplas/').subscribe(() => {
        this.getDuplas();
        this.getParticipantes();
        this.toastr.error('Dupla excluída!', 'Já era!');
      });
    }
  }

  gerarPartidas() {
    let partidas = [];
    let p = 0;
    for (var i = 0; i < this.DUPLAS.length; i++) {
      for (var j = i; j < this.DUPLAS.length; j++) {
        if (i !== j) {
          let duplas = [];
          duplas.push({ pontos: 0, dupla_id: this.DUPLAS[i].id });
          duplas.push({ pontos: 0, dupla_id: this.DUPLAS[j].id });
          partidas.push({ id: p, duplas: duplas });
          p++;
        }
      }
    }
    this.postPartidas(partidas);
    this.postPartidas(partidas);
  }

  postPartidas(partidas: any) {
    const turno = {
      partidas,
    };
    this.apiLocal.postItem('turnos', turno).subscribe(() => {
      this.toastr.success('Partidas criadas', 'Feito!!');
      this.router.navigate(['/partidas']);
    });
  }

  // public deletarartidas() {
  //   this.PARTIDAS.map((data) => {
  //     this.localApi.deleteItem(data.id, 'votacao/').subscribe(() => {
  //       this.getVotacao();
  //     });
  //   });
  //   this.toastr.error('Votação zerada!');
  // }
}
