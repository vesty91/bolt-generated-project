import { Component, ComponentCategory } from '../types';

export const mockComponents: Component[] = [
  // CPUs
  {
    id: 'cpu-1',
    name: 'Intel Core i9-13900K',
    category: ComponentCategory.CPU,
    price: 589.99,
    brand: 'Intel',
    specs: {
      cores: '24 (8P + 16E)',
      baseFrequency: '3.0 GHz',
      maxFrequency: '5.8 GHz',
      tdp: '125W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80',
    stock: 10
  },
  {
    id: 'cpu-2',
    name: 'AMD Ryzen 9 7950X',
    category: ComponentCategory.CPU,
    price: 699.99,
    brand: 'AMD',
    specs: {
      cores: '16',
      baseFrequency: '4.5 GHz',
      maxFrequency: '5.7 GHz',
      tdp: '170W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=300&q=80',
    stock: 8
  },
  {
    id: 'cpu-3',
    name: 'AMD Ryzen 7 7800X3D',
    category: ComponentCategory.CPU,
    price: 449.99,
    brand: 'AMD',
    specs: {
      cores: '8',
      baseFrequency: '4.2 GHz',
      maxFrequency: '5.0 GHz',
      tdp: '120W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=300&q=80',
    stock: 15
  },

  // Motherboards
  {
    id: 'mb-1',
    name: 'ASUS ROG Maximus Z790 Hero',
    category: ComponentCategory.MOTHERBOARD,
    price: 629.99,
    brand: 'ASUS',
    specs: {
      socket: 'LGA 1700',
      formFactor: 'ATX',
      memorySlots: '4',
      maxMemory: '128GB'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
    stock: 5
  },
  {
    id: 'mb-2',
    name: 'MSI MPG B650 CARBON WIFI',
    category: ComponentCategory.MOTHERBOARD,
    price: 329.99,
    brand: 'MSI',
    specs: {
      socket: 'AM5',
      formFactor: 'ATX',
      memorySlots: '4',
      maxMemory: '128GB'
    },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
    stock: 12
  },

  // RAM
  {
    id: 'ram-1',
    name: 'G.SKILL Trident Z5 RGB',
    category: ComponentCategory.RAM,
    price: 189.99,
    brand: 'G.SKILL',
    specs: {
      capacity: '32GB (2x16GB)',
      speed: 'DDR5-6000',
      timing: 'CL30',
      voltage: '1.35V'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80',
    stock: 20
  },
  {
    id: 'ram-2',
    name: 'Corsair Dominator Platinum RGB',
    category: ComponentCategory.RAM,
    price: 249.99,
    brand: 'Corsair',
    specs: {
      capacity: '64GB (2x32GB)',
      speed: 'DDR5-5600',
      timing: 'CL36',
      voltage: '1.35V'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=300&q=80',
    stock: 8
  },

  // GPUs
  {
    id: 'gpu-1',
    name: 'NVIDIA GeForce RTX 4090',
    category: ComponentCategory.GPU,
    price: 1599.99,
    brand: 'NVIDIA',
    specs: {
      memory: '24GB GDDR6X',
      coreClock: '2.23 GHz',
      tdp: '450W',
      ports: 'HDMI 2.1, 3x DisplayPort 1.4a'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=300&q=80',
    stock: 3
  },
  {
    id: 'gpu-2',
    name: 'AMD Radeon RX 7900 XTX',
    category: ComponentCategory.GPU,
    price: 999.99,
    brand: 'AMD',
    specs: {
      memory: '24GB GDDR6',
      coreClock: '2.3 GHz',
      tdp: '355W',
      ports: 'HDMI 2.1, 2x DisplayPort 2.1'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=300&q=80',
    stock: 6
  },

  // Storage
  {
    id: 'storage-1',
    name: 'Samsung 990 PRO',
    category: ComponentCategory.STORAGE,
    price: 169.99,
    brand: 'Samsung',
    specs: {
      capacity: '2TB',
      interface: 'PCIe 4.0 x4',
      readSpeed: '7,450 MB/s',
      writeSpeed: '6,900 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
    stock: 25
  },
  {
    id: 'storage-2',
    name: 'WD Black SN850X',
    category: ComponentCategory.STORAGE,
    price: 149.99,
    brand: 'Western Digital',
    specs: {
      capacity: '2TB',
      interface: 'PCIe 4.0 x4',
      readSpeed: '7,300 MB/s',
      writeSpeed: '6,600 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80',
    stock: 15
  },

  // Power Supplies
  {
    id: 'psu-1',
    name: 'Corsair HX1500i',
    category: ComponentCategory.PSU,
    price: 399.99,
    brand: 'Corsair',
    specs: {
      wattage: '1500W',
      efficiency: '80+ Platinum',
      modular: 'Full',
      warranty: '10 Years'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
    stock: 7
  },
  {
    id: 'psu-2',
    name: 'be quiet! Dark Power Pro 12',
    category: ComponentCategory.PSU,
    price: 369.99,
    brand: 'be quiet!',
    specs: {
      wattage: '1200W',
      efficiency: '80+ Titanium',
      modular: 'Full',
      warranty: '10 Years'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80',
    stock: 9
  },

  // Cases
  {
    id: 'case-1',
    name: 'Lian Li O11 Dynamic EVO',
    category: ComponentCategory.CASE,
    price: 169.99,
    brand: 'Lian Li',
    specs: {
      formFactor: 'Mid Tower',
      material: 'Aluminum, Steel, Glass',
      maxGPULength: '420mm',
      included: '0 fans'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372140-31810fb94474?auto=format&fit=crop&w=300&q=80',
    stock: 12
  },
  {
    id: 'case-2',
    name: 'Fractal Design Torrent',
    category: ComponentCategory.CASE,
    price: 189.99,
    brand: 'Fractal Design',
    specs: {
      formFactor: 'Mid Tower',
      material: 'Steel, Glass',
      maxGPULength: '461mm',
      included: '5 fans'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372140-31810fb94474?auto=format&fit=crop&w=300&q=80',
    stock: 8
  },

  // Cooling
  {
    id: 'cooling-1',
    name: 'NZXT Kraken Z73',
    category: ComponentCategory.COOLING,
    price: 279.99,
    brand: 'NZXT',
    specs: {
      type: 'Liquid',
      radiatorSize: '360mm',
      fans: '3x 120mm',
      rgb: 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=300&q=80',
    stock: 10
  },
  {
    id: 'cooling-2',
    name: 'Noctua NH-D15 chromax.black',
    category: ComponentCategory.COOLING,
    price: 109.99,
    brand: 'Noctua',
    specs: {
      type: 'Air',
      height: '165mm',
      fans: '2x 140mm',
      rgb: 'No'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?auto=format&fit=crop&w=300&q=80',
    stock: 15
  }
];
