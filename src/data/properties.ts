export interface Property {
  id: string;
  image: string;
  location: string;
  zone: string;
  price: string;
  currency: 'USD' | 'RD$';
  type: 'venta' | 'alquiler';
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
  },
  {
    id: 'p2',
    image: '/images/property-2.png',
    location: 'Carretera Mella, SDE',
    zone: 'Santo Domingo Este',
    price: '3,950,000',
    currency: 'RD$',
    type: 'venta',
  },
  {
    id: 'p3',
    image: '/images/property-3.png',
    location: 'Punta Cana',
    zone: 'Residencia con piscina',
    price: '42,700',
    currency: 'USD',
    type: 'venta',
  },
  {
    id: 'p4',
    image: '/images/property-4.png',
    location: 'Almirante, SDE',
    zone: 'Santo Domingo Este',
    price: '12,800,000',
    currency: 'RD$',
    type: 'venta',
  },
  {
    id: 'p5',
    image: '/images/property-5.png',
    location: 'Distrito Nacional',
    zone: 'Distrito Nacional',
    price: '182,908',
    currency: 'USD',
    type: 'venta',
  },
  {
    id: 'p6',
    image: '/images/property-6.png',
    location: 'Los Tres Ojos, SDE',
    zone: 'Vientos del Este II',
    price: '81,900',
    currency: 'USD',
    type: 'venta',
  },
];
