export interface Service {
  id: string;
  icon: string;
  title: string;
  items: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 'civil',
    icon: '\u{1F4C4}',
    title: 'Asesor\u00EDa Civil',
    color: '#0D1B3E',
    items: [
      'Asesor\u00EDa en elaboraci\u00F3n de contratos y actos',
      'Rectificaciones de Actas de Estado Civil',
      'Gestor\u00EDa notarial',
    ],
  },
  {
    id: 'inmobiliario',
    icon: '\u{1F3E0}',
    title: 'Asuntos Inmobiliarios',
    color: '#C9A84C',
    items: [
      'Registros de T\u00EDtulos',
      'Transferencia de Inmuebles',
      'Duplicado o Extracto de Certificado de T\u00EDtulo',
      'Ventas y Alquileres de Inmueble',
    ],
  },
  {
    id: 'familiar',
    icon: '\u2696\uFE0F',
    title: 'Derecho Familiar',
    color: '#1A2F5E',
    items: [
      'Divorcios',
      'Permiso de Salida de Menores de Edad',
      'Redacci\u00F3n de testamentos',
      'Determinaci\u00F3n de Herederos',
      'Reconocimiento de paternidad',
    ],
  },
  {
    id: 'comercial',
    icon: '\u{1F4BC}',
    title: 'Consultor\u00EDa Comercial',
    color: '#0D1B3E',
    items: [
      'Nombre Comercial',
      'Registro Mercantil',
      'Registro Nacional del Contribuyente (RNC)',
      'Registro en Tesorer\u00EDa de la Seguridad Nacional',
      'Registro Ministerio de Trabajo',
    ],
  },
  {
    id: 'penal',
    icon: '\u{1F512}',
    title: 'Derecho Penal',
    color: '#C9A84C',
    items: [
      'Representaci\u00F3n y defensa penal especializada',
      'Asesor\u00EDa y acompa\u00F1amiento en casos penales',
      'Garant\u00EDa de sus derechos en todo momento',
    ],
  },
  {
    id: 'agregados',
    icon: '\u{1F310}',
    title: 'Servicios Agregados',
    color: '#1A2F5E',
    items: [
      'Traducciones de Documentos',
      'Traspaso de veh\u00EDculos',
      'Gesti\u00F3n de Apostilla y env\u00EDo de documentos',
    ],
  },
];
