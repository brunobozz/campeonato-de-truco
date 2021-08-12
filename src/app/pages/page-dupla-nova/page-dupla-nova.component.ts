import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/api-local/api-local.service';

@Component({
  selector: 'app-page-dupla-nova',
  templateUrl: './page-dupla-nova.component.html',
  styleUrls: ['./page-dupla-nova.component.scss'],
})
export class PageDuplaNovaComponent implements OnInit {
  PARTICIPANTES: any[] = [];
  public loading: boolean = false;
  public duplaForm: FormGroup = this.formBuilder.group({
    participante1: [null, [Validators.required]],
    participante2: [null, [Validators.required]],
    cor: [null, [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private apiLocal: ApiLocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParticipantes();
  }

  submitDupla() {
    if (
      this.duplaForm.value.participante1 != null &&
      this.duplaForm.value.participante2 != null
    ) {
      this.loading = true;
      let dupla = {
        cor: this.duplaForm.value.cor,
        participantes: [
          this.duplaForm.value.participante1,
          this.duplaForm.value.participante2,
        ],
        turno: [
          {
            id: 1,
            vitorias: 0,
            derrotas: 0,
            tentos_f: 0,
            tentos_t: 0,
            saldo: 0,
          },
          {
            id: 2,
            vitorias: 0,
            derrotas: 0,
            tentos_f: 0,
            tentos_t: 0,
            saldo: 0,
          },
        ],
      };
      this.postDupla(dupla);
    } else {
      this.toastr.error('Preencha todos os campos obrigatórios');
    }
  }

  private postDupla(dupla: any) {
    this.apiLocal.postItem('duplas', dupla).subscribe(() => {
      this.toastr.success('Dupla Criada', 'Dalhe!!');
      this.router.navigate(['/duplas']);
    });
  }

  public validaCampo(campo: any) {
    return (
      this.duplaForm.get(campo)?.invalid && this.duplaForm.get(campo)?.touched
    );
  }

  getParticipantes() {
    this.apiLocal.getInfo('participantes').subscribe((data) => {
      this.PARTICIPANTES = data;
    });
  }
}
