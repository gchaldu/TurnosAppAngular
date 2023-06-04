import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  nombre: string='';
  fecha!: Date;
  hora: string='';
  sintomas: string='';
  form:boolean=false;
  @Output() citaOutPut = new EventEmitter<Cita>();
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  chequearForm():boolean{
    if(this.fecha ===null || this.nombre==='' || this.hora==='' || this.sintomas===''){
      const div:Element | null = document.querySelector('#mensaje');
      const mensaje = document.createElement('p');
      mensaje.textContent="Formulario incompleto";
      mensaje.classList.add('bg', 'bg-danger');
      div?.appendChild(mensaje);

      setTimeout(()=>{
        div?.removeChild(mensaje);  
      }, 3000);
      return true;
    }
    return this.form;
  }
  crearCita(){
    if(this.chequearForm()===false){
      let cita = new Cita()
      cita.nombre = this.nombre;
      cita.sintomas = this.sintomas;
      cita.fecha = this.fecha;
      cita.hora = this.hora;
      this.citaOutPut.emit(cita);
      this.limpiarHtml();  
    }
  }

  limpiarHtml()
  {
    this.nombre ='';
    this.fecha;
    this.hora='';
    this.sintomas='';
  }

}
