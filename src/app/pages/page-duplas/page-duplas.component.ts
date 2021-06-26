import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/api-local/api-local.service';

@Component({
  selector: 'app-page-duplas',
  templateUrl: './page-duplas.component.html',
  styleUrls: ['./page-duplas.component.scss'],
})
export class PageDuplasComponent implements OnInit {
  DUPLAS_IDS: any[] = [];
  DUPLAS: any[] = [];
  PARTICIPANTES: any[] = [];

  constructor(
    private apiLocal: ApiLocalService,
    private toastr: ToastrService
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
      this.DUPLAS_IDS = data;
      this.montaDuplas();
    });
  }

  montaDuplas() {
    for (var i = 0; i < this.DUPLAS_IDS.length; i++) {
      let dupla = [];
      dupla.push(
        this.PARTICIPANTES.find(
          (x) => x.id == this.DUPLAS_IDS[i].participantes[0]
        )
      );
      dupla.push(
        this.PARTICIPANTES.find(
          (x) => x.id == this.DUPLAS_IDS[i].participantes[1]
        )
      );

      this.DUPLAS.push({ nomes: dupla });
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
}
