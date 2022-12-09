import { Component, OnInit,Input } from '@angular/core';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Habilidad } from 'src/app/model/habilidad';
import { TokenService } from 'src/app/servicios/token.service';
import { ImageService } from 'src/app/servicios/image.service';
import { Storage,ref,uploadBytes,list,getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls:['./modal-skills.component.css'] 
})
export class ModalSkillsComponent implements OnInit {
  hab: Habilidad[]=[];
  habilidad:Habilidad|any=null;
  completed:boolean=false;
  id:number= 0;
  porcentaje:number=0; 
  icono:string="";
  @Input() mje:string=""
  url: string="";
  url1:string="";
  file:File|any=null;
  long:number=0;
  imag:string[]=[];
  $even:Event|any;
  constructor(private skills:HabilidadService,public imageService:ImageService,public storage : Storage) { }

  ngOnInit(): void {
    
    this.skills.lista().subscribe(data =>{
      this.hab= data;
           
  })

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
}
OnCreate():void{
  
 // this.icono=this.imageService.url;
 this.icono=this.url1;
 console.log(this.icono);
  const habi= new Habilidad(this.habilidad,this.porcentaje,this.icono);
  this.uploadFile(this.$even,true)
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
   //this.icono = this.imageService.url;
    if(id != undefined){
        this.skills.update(id,this.habilidad).subscribe(data=>{
        alert("Habilidad modificada"); 
    },err =>{
      alert("Error al modificar Habilidad");
      
    })
  }
}
uploadFile($event:any,bandera:boolean) {
  this.$even=$event;
  this.file = $event.target.files[0];
  this.completed = false;
  const filePath = this.file.name;
  // Crea una referencia de acceso
 if(bandera){
  const fileRef= ref(this.storage,`imagen/Skill/`+ filePath);
  //  const fileRef= ref(this.storage,`imagen/Skill/`+ filePath);
      uploadBytes(fileRef,this.file)
    .then(response=>{this.getImages(false);
      this.completed = true;})
    .catch(error=> console.log(error))
 } else{
  const fileRef= ref(this.storage,`imagen/Base/`+ /*filePath*/ "base");
//  const fileRef= ref(this.storage,`imagen/Skill/`+ filePath);
    uploadBytes(fileRef,this.file)
  .then(response=>{this.getImages(true);
    this.completed = true;})
  .catch(error=> console.log(error))
  }
  /* uploadBytes(fileRef,this.file).then(() => {
    this.completed = true;
    response=>{this.getImages()}
  });*/
}
//uploadImage($event:any){
   // for(let skill of this.hab)
  //{
 //   const file=$event.target.files[0];
 // const name="skill_"+ this.long;
  //this.imageService.uploadImage($event,file.name,0);
 /* const file=$event.target.files[0];
    const imgRef= ref(this.storage,`imagen/Skill/`+ name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages()})
    .catch(error=> console.log(error))
 */
 // }
//}
getImages(bandera:boolean){
 // const imagesRef=ref(this.storage,'imagen/Skill/');

 if(bandera){

 const imagesRef=ref(this.storage,'imagen/Base/');
 
  list(imagesRef)
  
  .then(async response=>{
   // this.images=[];

    for(let item of response.items){
        this.url1 = await getDownloadURL(item);
    
        // this.images[this.long]=this.url;
        
    }
 
    
  })
  .catch(error=> console.log(error))
} else{
  const imagesRef=ref(this.storage,'imagen/Skill/');
 
list(imagesRef)

.then(async response=>{
 // this.images=[];

  for(let item of response.items){
      this.url = await getDownloadURL(item);
    
      // this.images[this.long]=this.url;
      
  }

  
})
.catch(error=> console.log(error))

}

}
}