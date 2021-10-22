import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadesService } from './services/ciudades/ciudades.service';
import { DepartamentosService } from './services/departamentos/departamentos.service';
import { PersonaService } from './services/persona/persona.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  personaForm: FormGroup;
  departamento: any;

  constructor(
    public fb: FormBuilder,
    public ciudadesService: CiudadesService,
    public departamentosService: DepartamentosService,
    public personaService: PersonaService
  ) {

  }
  ngOnInit(): void {

      this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],

    });

    this.departamentosService.getAllDepartamentos().subscribe(resp=>{
      this.departamento = resp;
      console.log(resp);

    },
    error=>{console.error(error)}
    )

  }

  guardar(): void {

  }
}
