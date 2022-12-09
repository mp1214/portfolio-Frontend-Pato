import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
url: string[]=[];
i:number=0;
completed:boolean=false;

  constructor(private storage:Storage) { }

  public uploadImage($event:any,name:string,bandera:number){
    const file=$event.target.files[0];
   if(bandera==0)
   { const imgRef= ref(this.storage,`imagen/Skill/`+ file.name);
   uploadBytes(imgRef,file)
   .then(response=>{this.getImages(0,file)
    this.completed = true;
  })
   .catch(error=> console.log(error))
  }
  if(bandera==1)
  { 
    const imgRef= ref(this.storage,`imagen/Certificado/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(1,file)})
    .catch(error=> console.log(error))
  }
  if(bandera==2)
  {
    const imgRef= ref(this.storage,`imagen/Perfil/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(2,file);
       this.completed = true;})
    .catch(error=> console.log(error))
  }
  if(bandera==3)
  {console.log("pasa a bandera 3")
    const imgRef= ref(this.storage,`imagen/Proyecto/`+ file.name);
    uploadBytes(imgRef,file)
    .then(response=>{this.getImages(3,file);
       this.completed = true;})
    .catch(error=> console.log(error))
  }
  }
  getImages(band:number,file:any){
    
    if(band==0)
    {const imagesRef=ref(this.storage,'imagen/Skill/');
    
    list(imagesRef)
    
    .then(async response=>{
     
      for(let item of response.items){
          
        this.url.push(await getDownloadURL(item));
        
      }
    })
    .catch(error=> console.log(error))
  }
  if(band==1)
    {const imagesRef=ref(this.storage,'imagen/Certificado/');
    list(imagesRef)
    .then(async response=>{
      for(let item of response.items){
           
        this.url.push(await getDownloadURL(item));
        
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
        this.url.push(await getDownloadURL(item));
        console.log(this.url)
      }
    }
  })
  .catch(error=> console.log(error))
} 
} 
}
