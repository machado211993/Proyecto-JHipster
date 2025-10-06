import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponenteHijoComponent } from 'app/componente-hijo/componente-hijo/componente-hijo.component';
import AppComponent from '../app.component';

@Component({
  selector: 'jhi-componente-padre',
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.scss',
})
export class ComponentePadreComponent {
  //interpolacion de variables
  title = 'aprendiendo-angular';
  nombre = 'Manuel';

  //aprendiendo input y output
  // Recibe dato desde el padre
  mensaje = 'Hola roman';
  respuestaDelHijo = '';

  recibirRespuesta(evento: string) {
    this.respuestaDelHijo = evento;
  }
}
