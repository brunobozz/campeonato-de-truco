import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiLocalService } from 'src/app/services/api-local/api-local.service';

@Component({
  selector: 'app-page-participante-novo',
  templateUrl: './page-participante-novo.component.html',
  styleUrls: ['./page-participante-novo.component.scss'],
})
export class PageParticipanteNovoComponent implements OnInit {
  public loading: boolean = false;
  public participanteForm: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3)]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private apiLocal: ApiLocalService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitParticipante() {
    if (this.participanteForm.valid) {
      this.loading = true;
      this.postParticipante();
    } else {
      this.toastr.error('Preencha todos os campos obrigatórios');
    }
  }

  private postParticipante() {
    this.apiLocal
      .postItem('participantes', this.participanteForm.value)
      .subscribe(() => {
        this.toastr.success('Participante adicionado', 'Feito!!');
        this.router.navigate(['/participantes']);
      });
  }

  public validaCampo(campo: any) {
    return (
      this.participanteForm.get(campo)?.invalid &&
      this.participanteForm.get(campo)?.touched
    );
  }
}
