import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { LetrasFullStackComponent } from './efectos/letras-full-stack/letras-full-stack.component';
import { AcercadeMiComponent } from './acercade-mi/acercade-mi.component';
import { ImagenPatoComponent } from './efectos/imagen-pato/imagen-pato.component';
import { TarjetaFortalezasComponent } from './efectos/tarjeta-fortalezas/tarjeta-fortalezas.component';
import { BotonPersonalComponent } from './botones/boton-personal/boton-personal.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ModalPerfilComponent } from './dash/modales/modal-perfil/modal-perfil.component';
import { ModalEstudiosComponent } from './dash/modales/modal-estudios/modal-estudios.component';
import { ModalCertificadosComponent } from './dash/modales/modal-certificados/modal-certificados.component';
import { ModalSkillsComponent } from './dash/modales/modal-skills/modal-skills.component';
import { ModalTrabajoComponent } from './dash/modales/modal-trabajo/modal-trabajo.component';
import { ModalPersonalComponent } from './dash/modales/modal-personal/modal-personal.component';
import { IntroComponent } from './intro/intro.component';
import { BotonlogoutComponent } from './dash/botonlogout/botonlogout.component';
import { NavbardashComponent } from './dash/navbardash/navbardash.component';
import { BtnloginComponent } from './botones/btnlogin/btnlogin.component';
import { CertificadosComponent } from './certificados-yskills/certificados/certificados.component';
import { SkillsComponent } from './certificados-yskills/habilidades/skills/skills.component';
import { EstudiosComponent } from './estudios-experiencia/estudios/estudios.component';
import { ExperienciaComponent } from './estudios-experiencia/experiencia/experiencia.component';
import { FotoperfilComponent } from './banner/fotoperfil/fotoperfil.component';
import { SeccionacercademiComponent } from './acercade-mi/seccionacercademi/seccionacercademi.component';
import { AcercademiComponent } from './dash/modales/acercademi/acercademi.component';
import { FortalezasydebilidadesComponent } from './dash/modales/fortalezasydebilidades/fortalezasydebilidades.component';
import { LetrasEfectosComponent } from './dash/modales/letras-efectos/letras-efectos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HttpClientModule} from '@angular/common/http';
import { ModalProyectosComponent } from './dash/modales/modal-proyectos/modal-proyectos.component';
import { ModalRedesComponent } from './dash/modales/modal-redes/modal-redes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    LetrasFullStackComponent,
    AcercadeMiComponent,
    ImagenPatoComponent,
    TarjetaFortalezasComponent,
    BotonPersonalComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent,
    ModalPerfilComponent,
    ModalEstudiosComponent,
    ModalCertificadosComponent,
    ModalSkillsComponent,
    ModalTrabajoComponent,
    ModalPersonalComponent,
    IntroComponent,
    BotonlogoutComponent,
    NavbardashComponent,
    BtnloginComponent,
    CertificadosComponent,
    SkillsComponent,
    EstudiosComponent,
    ExperienciaComponent,
    FotoperfilComponent,
    SeccionacercademiComponent,
    AcercademiComponent,
    FortalezasydebilidadesComponent,
    LetrasEfectosComponent,
    ProyectosComponent,
    ModalProyectosComponent,
    ModalRedesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

