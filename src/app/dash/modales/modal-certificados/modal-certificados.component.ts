import { Component, OnInit,Input } from '@angular/core';
import { Certificado } from 'src/app/model/certificado';
import { CertificadoService } from 'src/app/servicios/certificado.service';
import { ImageService } from 'src/app/servicios/image.service';
import { Storage,ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal-certificados',
  templateUrl: './modal-certificados.component.html',
  styleUrls: ['./modal-certificados.component.css']
})
export class ModalCertificadosComponent implements OnInit {
  certificados: Certificado[]=[];
  @Input() mje:string=""
  img:string="";
  cert:Certificado|any=null;
  titulo:string=""
  id:number=0;
  ids:number=0;
  images:string[]=[];
  completed:boolean=false;
  url:string[]=[];
  form: FormGroup|any=null;

  constructor(private certifi:CertificadoService,public imageService:ImageService,private storage:Storage,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cargarCertificado();
   // this.certifi.lista().subscribe(data =>{
     // this.certificados= data;
      
   // })
  }
  cargarDetalle(id?:number){
    if(id != undefined){
    this.certifi.detail(id).subscribe(data=>{
      this.cert=data;
    },err=>{
      alert("error al modificar");
    })
  }
  }
  cargarCertificado():void{
    this.certifi.lista().subscribe(data =>{this.certificados=data;})
    
  }
  borrar(id?:number){
    if(id != undefined){
      this.certifi.delete(id).subscribe(data =>{
        this.cargarCertificado();
        alert("se pudo eliminar satisfactoriamente");
      },err =>{
        alert("No se pudo eliminar");
      })
    }
  }
  OnCreate():void{
     //this.img = this.imageService.url;
   // this.images.push(this.img)
    this.img=this.url[this.url.length-1];

     const habi= new Certificado(this.titulo,this.img)
    
     this.certifi.save(habi).subscribe(data=>{
       alert("certificado añadida");
       
     },err=>{
       alert("Fallo al añadir");
     })
     
   }
  OnUpdate(id?:number):void{
    // this.ids!=id;
     // const id=this.activatedRouter.snapshot.params['id'];
        
     //this.img = this.imageService.url;
    
      if(id != undefined){
          this.certifi.update(id,this.cert).subscribe(data=>{
          alert("certificado modificado"); 
          this.cargarCertificado();
      },err =>{
        alert("Error al modificar certificado");
        
      })
    }
  }
  
  uploadImage($event:any){
     
    // for(let skill of this.hab)
     //{
     const file=$event.target.files[0];
    // const name="certif_"+ (this.images.length+1);
    const filePath = file.name;
     this.imageService.uploadImage($event,filePath,1);
     const fileRef= ref(this.storage,`imagen/Certificado/`+ filePath);
     //  const fileRef= ref(this.storage,`imagen/Skill/`+ filePath);
         uploadBytes(fileRef,file)
       .then(response=>{this.getImages(file);
         this.completed = true;})
       .catch(error=> console.log(error))
    
  
    // }
   }
   getImages(file:any){
    
   
    const imagesRef=ref(this.storage,'imagen/Certificado/');
    
    list(imagesRef)
    
    .then(async response=>{
     
      for(let item of response.items){
          if(file.name==item.name){
            this.url.push(await getDownloadURL(item));
          }
      }  
    })
    .catch(error=> console.log(error))
  }
}
