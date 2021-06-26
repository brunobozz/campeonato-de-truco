import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/api-local/api-local.service';

@Component({
  selector: 'app-page-participantes',
  templateUrl: './page-participantes.component.html',
  styleUrls: ['./page-participantes.component.scss'],
})
export class PageParticipantesComponent implements OnInit {
  PARTICIPANTES: any[] = [];

  constructor(
    private apiLocal: ApiLocalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getParticipantes();
  }

  getParticipantes() {
    this.apiLocal.getInfo('participantes').subscribe((data) => {
      this.PARTICIPANTES = data;
    });
  }

  deleteParticipante(id: number, nome: string) {
    if (confirm('Tem certeza que deseja apagar o participante ' + nome + '?')) {
      this.apiLocal.deleteItem(id, 'participantes/').subscribe(() => {
        this.getParticipantes();
        this.toastr.error('Excluído com sucesso!', nome);
      });
    }
  }
}
