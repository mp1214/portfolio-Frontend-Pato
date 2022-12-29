import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL,deleteObject,updateMetadata } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
url: string[]=[];

completed:boolean[]=[];
completado: boolean=false;
urlActual:string="";
  constructor(private storage:Storage) { }

  public uploadImage($event:any,bandera:number){
    const file=$event.target.files[0];
    
   if(bandera==0)//habilidades
   { 
    const imgRef= ref(this.storage,`imagen/Skill/`+ file.name);
   uploadBytes(imgRef,file)
   .then(response=>{this.getImages(0,file)
    
  })
   .catch(error=> console.log(error))
  }
  if(bandera==1)//certificados
  { console.log("si entra a uploadimage 1")
    const imgRef= ref(this.storage,`imagen/Certificado/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(1,file)})
    .catch(error=> console.log(error))
  }
  if(bandera==2)//pérfil
  {console.log("si entra a cargar imagen sin yrl")
    const imgRef= ref(this.storage,`imagen/Perfil/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(2,file);
      })
    .catch(error=> console.log(error))
  }
  if(bandera==3)//proyecto
  {console.log("si ingresa a getimages 3")
    const imgRef= ref(this.storage,`imagen/Proyecto/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(3,file);
       })
    .catch(error=> console.log(error))
  }
  if(bandera==4)//estudio
  {console.log("pasa a bandera 4")
    const imgRef= ref(this.storage,`imagen/Estudio/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(4,file);
       })
    .catch(error=> console.log(error))
  }
  if(bandera==5)//experiencia
  {console.log("pasa a bandera 5")
    const imgRef= ref(this.storage,`imagen/Experiencia/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(5,file);
       })
    .catch(error=> console.log(error))
  }
  if(bandera==6)//banner
  {console.log("pasa a bandera 6")
    const imgRef= ref(this.storage,`imagen/Banner/`+ file.name);
    console.log("pasa "+ file.name)
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(6,file);
      })
    .catch(error=> console.log(error))
  }
 
  }
  getImages(band:number,file:any){
    
    if(band==0)
    {const imagesRef=ref(this.storage,'imagen/Skill/');
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items){
        if(file.name==item.name){
          this.url.push(await getDownloadURL(item));
          this.completed.push(true);
          this.completado=true;
        }
      } 
    })
    .catch(error=> console.log(error))
  }
  if(band==1)
    {const imagesRef=ref(this.storage,'imagen/Certificado/');
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items){
        if(file.name==item.name){
        this.url.push(await getDownloadURL(item));
        this.completed.push(true);
       
      }
    }
      
    })
    .catch(error=> console.log(error))
  }
  
 if(band==2)
    {const imagesRef=ref(this.storage,'imagen/Perfil/');
    
    list(imagesRef)
    
    .then(async response=>{
      for(let item of response.items){
    
        if(file.name==item.name){
          this.url.push(await getDownloadURL(item));
          this.completed.push(true);
         
        }
      }
    })
    .catch(error=> console.log(error))
  } 

  if(band==3)
  {const imagesRef=ref(this.storage,'imagen/Proyecto/');
  
  list(imagesRef)
  
  .then(async response=>{
    for(let item of response.items){
  
      if(file.name==item.name){
        console.log("si ingresa nombre=nombre")
        this.url.push(await getDownloadURL(item));
        this.completed.push(true);
      }
    }
  })
  .catch(error=> console.log(error))
} 
if(band==4)
{
  const imagesRef=ref(this.storage,'imagen/Estudio/');
list(imagesRef)
.then(async response=>{
  for(let item of response.items){
    if(file.name==item.name){
      this.url.push(await getDownloadURL(item));
      this.completed.push(true);
    }
  } 
})
.catch(error=> console.log(error))
}
if(band==5)
{
  const imagesRef=ref(this.storage,'imagen/Experiencia/');
list(imagesRef)
.then(async response=>{
 
  for(let item of response.items){
    if(file.name==item.name){
      this.url.push(await getDownloadURL(item));
      this.completed.push(true);
    }
  } 
})
.catch(error=> console.log(error))
}
if(band==6)
{const imagesRef=ref(this.storage,'imagen/Banner/');

list(imagesRef)

.then(async response=>{
  for(let item of response.items){

    if(file.name==item.name){
      this.url.push(await getDownloadURL(item));
     console.log("si ingresa a tomar url de banner")
     this.completed.push(true);
    }
  }
})
.catch(error=> console.log(error))
} 
} 

public uploadImageEdit($event:any,bandera:number,urlal:string){
  const file=$event.target.files[0];
  this.urlActual=urlal; 
  
 if(bandera==0)//habilidades
 { 
  const imagesRef=ref(this.storage,'imagen/Skill/');
  list(imagesRef)
  .then(async response=>{
    for(let item of response.items){
     const path= await getDownloadURL(item);
          
      if(this.urlActual==path){
  
          const fileRef= ref(this.storage,`imagen/Skill/`+ file.name);
         
              uploadBytes(fileRef,file)
            .then(response=>{this.getImages(0,file);
              this.completed.push(true);})
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
if(bandera==1)//certificados
{   const imagesRef=ref(this.storage,'imagen/Certificado/');
list(imagesRef)
.then(async response=>{
  for(let item of response.items){
   const path= await getDownloadURL(item);
        
    if(this.urlActual==path){

        const fileRef= ref(this.storage,`imagen/Certificado/`+ file.name);
       
            uploadBytes(fileRef,file)
          .then(response=>{this.getImages(0,file);
            this.completed.push(true);})
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
if(bandera==2)//pérfil
{ 
   const imagesRef=ref(this.storage,'imagen/Perfil/');
   list(imagesRef)
   .then(async response=>{
     for(let item of response.items){
      const path= await getDownloadURL(item);
           
       if(this.urlActual==path){
   
           const fileRef= ref(this.storage,`imagen/Perfil/`+ file.name);
          
               uploadBytes(fileRef,file)
             .then(response=>{this.getImages(2,file);
               this.completed.push(true);})
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

if(bandera==3)//proyecto
{
  const imgRef= ref(this.storage,`imagen/Proyecto/`+ file.name);
  uploadBytes(imgRef,file)
  .then(response=>{this.getImages(3,file);
     })
  .catch(error=> console.log(error))
}
if(bandera==4)//estudio
{
    const imagesRef=ref(this.storage,'imagen/Estudio/');
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items){
       const path= await getDownloadURL(item);
        if(this.urlActual==path){
          console.log("imagen igual a url actual")
            const fileRef= ref(this.storage,`imagen/Estudio/`+ file.name);
                uploadBytes(fileRef,file)
              .then(response=>{this.getImages(4,file);
                this.completed.push(true);})
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
   
 
   // }
  }
  if(bandera==5)//Experiencia
{console.log("si entra a editar imagen 5")
    const imagesRef=ref(this.storage,'imagen/Experiencia/');
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items){
       const path= await getDownloadURL(item);
        if(this.urlActual==path){
          console.log("imagen igual a url actual")
            const fileRef= ref(this.storage,`imagen/Experiencia/`+ file.name);
               uploadBytes(fileRef,file)
              .then(response=>{this.getImages(5,file);
                this.completed.push(true);})
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
  if(bandera==6)//banner
{
  console.log("si entra a editar imagen 6")
   const imagesRef=ref(this.storage,'imagen/Banner/');
   list(imagesRef)
   .then(async response=>{
     for(let item of response.items){
      const path= await getDownloadURL(item);
      console.log("la url actual es "+this.urlActual)
       if(this.urlActual==path){
         console.log("imagen igual a url actual")
           const fileRef= ref(this.storage,`imagen/Banner/`+ file.name);
               uploadBytes(fileRef,file)
             .then(response=>{this.getImages(6,file);
               this.completed.push(true);})
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
}

