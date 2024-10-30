import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrincipalService } from 'src/app/service/principal.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  options = [
    { name: "Estudante Universitário" },
    { name: "Estudante Ensino Médio" },
    { name: "Professor"},
    { name: "Tutor"}
  ]
  pessoas: any = []

  form: FormGroup;

  constructor( 
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private service: PrincipalService
  ) {

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      cargo: [null, ],
      curso: [null, ],
      dataNascimento: [null, ]
    })
  }

  salvarPessoa(){
    this.pessoas.push(this.form.value);
    this.form.reset();
  }

  enviarForm(){
    // sessionStorage.setItem('pessoas', JSON.stringify(this.pessoas));
    this.service.updateData(this.pessoas);
    this.router.navigate(['/tabela'])
  }


}
