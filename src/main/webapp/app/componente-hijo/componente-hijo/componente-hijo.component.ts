import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jhi-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.scss',
})
export class ComponenteHijoComponent {
  // Recibe dato desde el padre
  @Input() mensajePadre!: string; //esto recibe del padre

  // Envía dato al padre
  @Output() respuestaHijo = new EventEmitter<string>();

  enviarMensaje() {
    this.respuestaHijo.emit('¡Hola Padre! Recibí tu mensaje.'); //esto envia al padre
  }
}
