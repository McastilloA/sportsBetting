export class ProgrammingModel {
  id: number;
  fechaNumero: number;
  fechaNumeroTexto: string;
  idLocal: number;
  nombreLocal: string;
  resultadoLocal: number;
  rutaLogoLocal: string;
  baseLogoLocal: string;
  idVisita: number;
  nombreVisita: string;
  resultadoVisita: number;
  rutaLogoVisita: string;
  baseLogoVisita: string | null;
  fecha: string;
  fechaTexto: string;
  hora: string;
  horaTexto: string;
  idVocalia: number | null;
  nombreVocalia: string | null;
  idEstadio: number;
  nombreEstadio: string;
  ordenEstadio: number;
  colorEstadio: string;
  idEstado: number;
  descripcionEstado: string;
  colorEstado: string;
  select: boolean;

  constructor(

  ) {
    this.id = 0;
    this.fechaNumero = 0;
    this.fechaNumeroTexto = '[fechaNumeroTexto]';
    this.idLocal = 0;
    this.nombreLocal = '[nombreLocal]';
    this.resultadoLocal = 0;
    this.rutaLogoLocal = '[rutaLogoLocal]';
    this.baseLogoLocal = '[baseLogoLocal]';
    this.idVisita = 0;
    this.nombreVisita = '[nombreVisita]';
    this.resultadoVisita = 0;
    this.rutaLogoVisita = '[rutaLogoVisita]';
    this.baseLogoVisita = '[baseLogoVisita]';
    this.fecha = '[fecha]';
    this.fechaTexto = '[fechaTexto]';
    this.hora = '[hora]';
    this.horaTexto = '[horaTexto]';
    this.idVocalia = 0;
    this.nombreVocalia = '[nombreVocalia]';
    this.idEstadio = 0;
    this.nombreEstadio = '[nombreEstadio]';
    this.ordenEstadio = 0;
    this.colorEstadio = 'black';
    this.idEstado = 0;
    this.descripcionEstado = '[descripcionEstado]';
    this.colorEstado = 'black';
    this.select = true;
  }

}
