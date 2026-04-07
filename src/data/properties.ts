export interface Property {
  id: string;
  image: string;
  location: string;
  zone: string;
  price: string;
  currency: 'USD' | 'RD$';
  type: 'venta' | 'alquiler';
  description: string;
  features: string[];
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
}

export const properties: Property[] = [
  {
    id: 'p1',
    image: '/images/property-1.png',
    location: 'Punta Cana',
    zone: 'Pion Reserve Residences',
    price: '66,768',
    currency: 'USD',
    type: 'venta',
    description: 'Complejo residencial exclusivo en Punta Cana con m\u00FAltiples edificios, piscinas y \u00E1reas verdes. Ubicaci\u00F3n privilegiada cerca de las mejores playas del este.',
    features: ['Piscina', '\u00C1reas verdes', 'Seguridad 24/7', 'Parqueo', 'Gimnasio'],
    bedrooms: 2,
    bathrooms: 2,
    area: '85 m\u00B2',
  },
  {
    id: 'p2',
    image: '/images/property-2.png',
    location: 'Carretera Mella, SDE',
    zone: 'Santo Domingo Este',
    price: '3,950,000',
    currency: 'RD$',
    type: 'venta',
    description: 'Moderno edificio de apartamentos en la Carretera Mella, Santo Domingo Este. Dise\u00F1o contempor\u00E1neo con acabados de primera calidad.',
    features: ['Balc\u00F3n', 'Parqueo techado', 'Lobby', '\u00C1rea social', 'Ascensor'],
    bedrooms: 3,
    bathrooms: 2,
    area: '120 m\u00B2',
  },
  {
    id: 'p3',
    image: '/images/property-3.png',
    location: 'Punta Cana',
    zone: 'Residencia con piscina',
    price: '42,700',
    currency: 'USD',
    type: 'venta',
    description: 'Apartamento en residencial con piscina en Punta Cana. Ideal para inversi\u00F3n o vivienda vacacional con todas las comodidades.',
    features: ['Piscina comunitaria', 'Terraza', 'Parqueo', 'Seguridad', '\u00C1reas infantiles'],
    bedrooms: 1,
    bathrooms: 1,
    area: '65 m\u00B2',
  },
  {
    id: 'p4',
    image: '/images/property-4.png',
    location: 'Almirante, SDE',
    zone: 'Santo Domingo Este',
    price: '12,800,000',
    currency: 'RD$',
    type: 'venta',
    description: 'Casa de dos niveles en el sector Almirante, Santo Domingo Este. Amplio espacio con balc\u00F3n y patio. Ideal para familia.',
    features: ['2 niveles', 'Balc\u00F3n', 'Patio', 'Cochera', 'Verja perimetral'],
    bedrooms: 4,
    bathrooms: 3,
    area: '180 m\u00B2',
  },
  {
    id: 'p5',
    image: '/images/property-5.png',
    location: 'Distrito Nacional',
    zone: 'Distrito Nacional',
    price: '182,908',
    currency: 'USD',
    type: 'venta',
    description: 'Torres modernas en el Distrito Nacional. Proyecto de lujo con vistas panor\u00E1micas. Reserve con solo US$5,000. Entrega en 2026.',
    features: ['Vista panor\u00E1mica', 'Rooftop', 'Gimnasio', 'Lobby premium', 'Coworking'],
    bedrooms: 2,
    bathrooms: 2,
    area: '95 m\u00B2',
  },
  {
    id: 'p6',
    image: '/images/property-6.png',
    location: 'Los Tres Ojos, SDE',
    zone: 'Vientos del Este II',
    price: '81,900',
    currency: 'USD',
    type: 'venta',
    description: 'Apartamento en Vientos del Este II, sector Los Tres Ojos. Dise\u00F1o moderno con excelente distribuci\u00F3n y acabados de calidad.',
    features: ['Dise\u00F1o moderno', 'Parqueo', '\u00C1rea social', 'Seguridad', 'Ascensor'],
    bedrooms: 3,
    bathrooms: 2,
    area: '110 m\u00B2',
  },
];
