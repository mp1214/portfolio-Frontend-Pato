import { Component, OnInit,Input } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from 'src/app/model/habilidad';
import { ImageService } from 'src/app/servicios/image.service';
import { Storage,ref,uploadBytes,list,getDownloadURL,deleteObject } from '@angular/fire/storage';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls:['./modal-skills.component.css'] 
})
export class ModalSkillsComponent implements OnInit {
  hab: Habilidad[]=[];
  habilidad?:Habilidad|any=null;
  completed:boolean=false;
  id:number= 0;
  porcentaje:number=0; 
  icono:string="";
  @Input() mje:string=""
  url: string[]=[];
  urlActual:string="";
  file:File|any=null;
  $even:Event|any;
  form: FormGroup|any=null;
  habi : string="";

  constructor(private skills:HabilidadService,public imageService:ImageService,public storage : Storage,private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group({
      icono:[''],
      habi:['',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      porcentaje:['',[Validators.required, Validators.min(1),Validators.max(100)]]
    })
   }

  ngOnInit(): void {
    
   this.cargarHabilidad();
    this.urlActual= this.habilidad.icono;
    console.log(this.habilidad.icono);
}
get Habilidad(){
  return this.form.get("habi");
}

get Porcentaje(){
  return this.form.get("porcentaje");
}
get HabilidadValid(){
  return this.Habilidad.touched && !this.Habilidad.valid;
}
get PorcentajeValid(){
  return this.Porcentaje.touched && !this.Porcentaje.valid;
}
cargarHabilidad():void{
  this.skills.lista().subscribe(data =>{this.hab=data;})
  
}
cargarDetalle(id?:number){
  if(id != undefined){
  this.skills.detail(id).subscribe(data=>{
    this.habilidad=data;
    
  },err=>{
    alert("error al modificar");
  })
}
this.urlActual=this.habilidad.icono;
}
OnCreate():void{
  
 // this.icono=this.imageService.url;
 if(this.imageService.completed[this.imageService.completed.length-1]=="true")
 {this.completed= true;
} 
 this.icono=this.imageService.url[this.imageService.url.length-1];
  const habi= new Habilidad(this.habilidad,this.porcentaje,this.icono);

  this.skills.save(habi).subscribe(data=>{
    alert("habilidad añadida");
    
  },err=>{
    alert("Fallo al añadir");
  })
  
}

borrar(id?:number){
  if(id != undefined){
    this.skills.delete(id).subscribe(data =>{
      this.cargarHabilidad();
      alert("se pudo eliminar satisfactoriamente");
    },err =>{
      alert("No se pudo eliminar");
    })
  }
}

OnUpdate(id?:number):void{
  
  // this.ids!=id;
   // const id=this.activatedRouter.snapshot.params['id'];
   //this.completed= this.imageService.completed[ this.imageService.completed.length-1];
  this.habilidad.icono = this.imageService.url[this.imageService.url.length-1];
    if(id != undefined){
        this.skills.update(id,this.habilidad).subscribe(data=>{
        alert("Habilidad modificada"); 
    },err =>{
      alert("Error al modificar Habilidad");
      
    })
  }
}
uploadImage($event:any) {
 // this.$even=$event;
  this.file = $event.target.files[0];
  const filePath = this.file.name;
  this.imageService.uploadImage($event,filePath,0);
 
}

onEnviar(event:Event){
  event.preventDefault;
  if(this.form.valid){
  
    this.OnCreate();

  }else{
    this.form.markAllAsTouched(); 
  }
}
onEnviarEdit($event:any,id:number){
  $event.preventDefault;
  
  if(this.form.valid){
  
    this.OnUpdate(id);

  }else{
    this.form.markAllAsTouched(); 
  }
}
uploadImageEdit($event:any){
  const file=$event.target.files[0];
 // const name="certif_"+ (this.images.length+1);
 const filePath = file.name;
 // this.imageService.uploadImage($event,filePath,1);
  //const fileRef= ref(this.storage,`imagen/Certificado/`+ filePath);
  //  const fileRef= ref(this.storage,`imagen/Skill/`+ filePath);
  const imagesRef=ref(this.storage,'imagen/Certificado/');
  
  list(imagesRef)
  
  .then(async response=>{
    
    for(let item of response.items){
     const path= await getDownloadURL(item);
      if(this.urlActual==path){
       
        //  this.url=await getDownloadURL(item);

          const fileRef= ref(this.storage,`imagen/Certificado/`+ file.name);
          
          //  const fileRef= ref(this.storage,`imagen/Skill/`+ filePath);
              uploadBytes(fileRef,file.name)
            .then(response=>{this.imageService.getImages(0,file);
              this.completed = true;})
            .catch(error=> console.log(error))

            deleteObject(item).then(() => {
              console.log("la imagen se elimino");
            }).catch((error) => {
               console.log("ocurrio un error: ", error);
            });        
        }
    }  
  })
  .catch(error=> console.log(error))
     
    .then(response=>{
      })
    .catch(error=> console.log(error))

}
}