export interface Programming {
  id: number;
  fechaNumero: number;
  fechaNumeroTexto: string;
  idLocal: number;
  nombreLocal: string;
  resultadoLocal: number;
  rutaLogoLocal: string;
  baseLogoLocal: string | null;
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
}
