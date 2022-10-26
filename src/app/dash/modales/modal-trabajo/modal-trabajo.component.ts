import { Component, OnInit,Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-trabajo',
  templateUrl: './modal-trabajo.component.html',
  styleUrls: ['./modal-trabajo.component.css']
})
export class ModalTrabajoComponent implements OnInit {
empresa:string=""
inicio:any
fin:any
icono:string=""
descripcion:string=""
@Input() mje:string=""
experiencias:any


  constructor(private experiencia:PortfolioService) { }
  


  ngOnInit(): void {
    this.experiencia.obtenerDatos().subscribe(data =>{
      this.empresa= data.empresa;
      this.inicio= data.inicio;
      this.fin= data.fin;
      this.descripcion=data.descripcion;
      this.icono=data.icono;
      this.experiencias=data.experiencia
      console.log(this.mje)
  })
  }
  showModal(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
