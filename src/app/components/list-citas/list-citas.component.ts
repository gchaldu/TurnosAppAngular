import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  @Input() listCitas:any;
  citas: Cita[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listCitas)
    this.citas = this.listCitas;
    this.citas.forEach((item,i)=>{
      console.log("Item: "+ i + " -- " + item._nombre)
    })
    
  }

  deleteCita(id:number, nombre: string){
    this.citas = this.listCitas;
    this.citas.splice(id,1);
    localStorage.setItem("citas", JSON.stringify(this.citas));
  }

}
