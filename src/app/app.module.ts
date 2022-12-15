import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { LetrasFullStackComponent } from './efectos/letras-full-stack/letras-full-stack.component';
import { AcercadeMiComponent } from './acercade-mi/acercade-mi.component';
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



import { CertificadosComponent } from './certificados-yskills/certificados/certificados.component';
import { SkillsComponent } from './certificados-yskills/habilidades/skills/skills.component';
import { EstudiosComponent } from './estudios-experiencia/estudios/estudios.component';
import { ExperienciaComponent } from './estudios-experiencia/experiencia/experiencia.component';
import { FotoperfilComponent } from './banner/fotoperfil/fotoperfil.component';
import { AcercademiComponent } from './dash/modales/acercademi/acercademi.component';
import { FortalezasydebilidadesComponent } from './dash/modales/fortalezasydebilidades/fortalezasydebilidades.component';
import { LetrasEfectosComponent } from './dash/modales/letras-efectos/letras-efectos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HttpClientModule} from '@angular/common/http';
import { ModalProyectosComponent } from './dash/modales/modal-proyectos/modal-proyectos.component';
import { ModalRedesComponent } from './dash/modales/modal-redes/modal-redes.component';
import { DescargarPdfComponent } from './botones/descargar-pdf/descargar-pdf.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    LetrasFullStackComponent,
    AcercadeMiComponent,
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
    CertificadosComponent,
    SkillsComponent,
    EstudiosComponent,
    ExperienciaComponent,
    FotoperfilComponent,
    AcercademiComponent,
    FortalezasydebilidadesComponent,
    LetrasEfectosComponent,
    ProyectosComponent,
    ModalProyectosComponent,
    ModalRedesComponent,
    DescargarPdfComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    FontAwesomeModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

