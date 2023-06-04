import { Component, Input } from '@angular/core';
import { Cita } from './models/cita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list: Cita[] = [];

  constructor() {
    this.initStorage();
  }

  initStorage() {
    const objetoGuardado = localStorage.getItem('citas');
    if (objetoGuardado !== null) {
      const citasParseadas = JSON.parse(objetoGuardado);
      console.log(citasParseadas);
      // Ejemplo: Recorrer el array de citas
      citasParseadas.forEach((cita: any) => {
        this.list.push(cita);
      });
    } else {
      console.log('No se encontró ningún valor para la clave "objeto"');
    }
  }
  agregarLocalStorage() {
    localStorage.setItem("citas", JSON.stringify(this.list));
  }
  agregarCita(cita: Cita) {
    this.list.push(cita);
    this.agregarLocalStorage();
  }
}
