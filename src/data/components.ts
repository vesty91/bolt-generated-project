export const componentPrices = {
  "amd-5600x": 299,
  "amd-5800x": 449,
  "amd-5900x": 549,
  "amd-5950x": 799,
  "intel-12600k": 319,
  "intel-12700k": 469,
  "intel-12900k": 619,
  "intel-13900k": 789,
  "b550": 169,
  "x570": 299,
  "b660": 189,
  "z690": 329,
  "z790": 429,
  "16gb-3200": 89,
  "32gb-3600": 179,
  "32gb-4000": 249,
  "64gb-3600": 349,
  "64gb-4000": 449,
  "ssd-500": 79,
  "ssd-1tb": 129,
  "ssd-2tb": 229,
  "ssd-4tb": 429,
  "650w": 89,
  "750w": 119,
  "850w": 149,
  "1000w": 199,
  "1200w": 249,
  "air": 89,
  "air-premium": 119,
  "aio-240": 129,
  "aio-280": 149,
  "aio-360": 179,
  "aio-420": 229
}

export const componentOptions = {
  cpu: [
    { value: "amd-5600x", label: "AMD Ryzen 5 5600X", price: 299, image: "/images/cpu/5600x.png" },
    { value: "amd-5800x", label: "AMD Ryzen 7 5800X", price: 449, image: "/images/cpu/5800x.png" },
    { value: "amd-5900x", label: "AMD Ryzen 9 5900X", price: 549, image: "/images/cpu/5900x.png" },
    { value: "amd-5950x", label: "AMD Ryzen 9 5950X", price: 799, image: "/images/cpu/5950x.png" },
    { value: "intel-12600k", label: "Intel Core i5-12600K", price: 319, image: "/images/cpu/12600k.png" },
    { value: "intel-12700k", label: "Intel Core i7-12700K", price: 469, image: "/images/cpu/12700k.png" },
    { value: "intel-12900k", label: "Intel Core i9-12900K", price: 619, image: "/images/cpu/12900k.png" },
    { value: "intel-13900k", label: "Intel Core i9-13900K", price: 789, image: "/images/cpu/13900k.png" }
  ],
  motherboard: [
    { value: "b550", label: "MSI B550 TOMAHAWK", price: 169, image: "/images/mb/b550.png" },
    { value: "x570", label: "ASUS ROG X570", price: 299, image: "/images/mb/x570.png" },
    { value: "b660", label: "MSI PRO B660M-A", price: 189, image: "/images/mb/b660.png" },
    { value: "z690", label: "GIGABYTE Z690 AORUS", price: 329, image: "/images/mb/z690.png" },
    { value: "z790", label: "ASUS ROG MAXIMUS Z790", price: 429, image: "/images/mb/z790.png" }
  ],
  ram: [
    { value: "16gb-3200", label: "Corsair 16GB DDR4 3200MHz", price: 89, image: "/images/ram/corsair-16.png" },
    { value: "32gb-3600", label: "G.Skill 32GB DDR4 3600MHz", price: 179, image: "/images/ram/gskill-32.png" },
    { value: "32gb-4000", label: "G.Skill 32GB DDR4 4000MHz", price: 249, image: "/images/ram/gskill-32-4000.png" },
    { value: "64gb-3600", label: "Crucial 64GB DDR4 3600MHz", price: 349, image: "/images/ram/crucial-64.png" },
    { value: "64gb-4000", label: "Corsair 64GB DDR4 4000MHz", price: 449, image: "/images/ram/corsair-64.png" }
  ],
  storage: [
    { value: "ssd-500", label: "Samsung 970 EVO 500GB NVMe", price: 79, image: "/images/storage/970-500.png" },
    { value: "ssd-1tb", label: "Samsung 970 EVO 1TB NVMe", price: 129, image: "/images/storage/970-1tb.png" },
    { value: "ssd-2tb", label: "Samsung 970 EVO 2TB NVMe", price: 229, image: "/images/storage/970-2tb.png" },
    { value: "ssd-4tb", label: "Samsung 990 PRO 4TB NVMe", price: 429, image: "/images/storage/990-4tb.png" }
  ],
  psu: [
    { value: "650w", label: "Corsair RM650x 650W", price: 89, image: "/images/psu/rm650x.png" },
    { value: "750w", label: "Corsair RM750x 750W", price: 119, image: "/images/psu/rm750x.png" },
    { value: "850w", label: "Corsair RM850x 850W", price: 149, image: "/images/psu/rm850x.png" },
    { value: "1000w", label: "Corsair RM1000x 1000W", price: 199, image: "/images/psu/rm1000x.png" },
    { value: "1200w", label: "Corsair AX1200i 1200W", price: 249, image: "/images/psu/ax1200i.png" }
  ],
  cooling: [
    { value: "air", label: "Noctua NH-D15", price: 89, image: "/images/cooling/nh-d15.png" },
    { value: "air-premium", label: "be quiet! Dark Rock Pro 4", price: 119, image: "/images/cooling/dark-rock-pro.png" },
    { value: "aio-240", label: "NZXT Kraken X53 240mm", price: 129, image: "/images/cooling/kraken-x53.png" },
    { value: "aio-280", label: "NZXT Kraken X63 280mm", price: 149, image: "/images/cooling/kraken-x63.png" },
    { value: "aio-360", label: "NZXT Kraken X73 360mm", price: 179, image: "/images/cooling/kraken-x73.png" },
    { value: "aio-420", label: "Arctic Liquid Freezer II 420", price: 229, image: "/images/cooling/arctic-420.png" }
  ]
}

export const componentRecommendations = {
  "amd-5600x": ["Gaming 1080p", "Bureautique avancée"],
  "amd-5800x": ["Gaming 1440p", "Streaming", "Montage vidéo léger"],
  "amd-5900x": ["Gaming 4K", "Montage vidéo", "Rendu 3D"],
  "amd-5950x": ["Station de travail", "Rendu 3D professionnel"],
  "intel-12600k": ["Gaming 1440p", "Streaming", "Montage vidéo léger"],
  "intel-12700k": ["Gaming 4K", "Montage vidéo", "Rendu 3D"],
  "intel-12900k": ["Station de travail", "Gaming 4K+"],
  "intel-13900k": ["Station de travail", "Rendu 3D professionnel"],
  "b550": ["Budget gaming", "Usage quotidien", "Overclocking modéré"],
  "x570": ["Gaming haut de gamme", "Overclocking avancé", "Multi-GPU"],
  "b660": ["Budget gaming", "Usage quotidien"],
  "z690": ["Gaming haut de gamme", "Overclocking avancé", "PCIe 5.0"],
  "z790": ["Enthusiaste", "Overclocking extrême", "DDR5", "PCIe 5.0"],
  "16gb-3200": ["Gaming 1080p", "Multitâche basique"],
  "32gb-3600": ["Gaming 1440p/4K", "Montage vidéo", "Streaming"],
  "32gb-4000": ["Gaming compétitif", "Rendu 3D"],
  "64gb-3600": ["Station de travail", "Virtualisation"],
  "64gb-4000": ["Workstation pro", "Rendu 3D intensif"],
  "ssd-500": ["OS et applications", "Petits jeux"],
  "ssd-1tb": ["Bibliothèque de jeux moyenne", "Projets créatifs"],
  "ssd-2tb": ["Grande bibliothèque de jeux", "4K vidéo"],
  "ssd-4tb": ["Production vidéo pro", "Grande bibliothèque de médias"],
  "650w": ["Config gaming entrée/milieu de gamme"],
  "750w": ["Config gaming haut de gamme"],
  "850w": ["Multi-GPU", "OC modéré"],
  "1000w": ["Multi-GPU haut de gamme", "OC poussé"],
  "1200w": ["Workstation extreme", "Multi-GPU enthusiaste"],
  "air": ["CPU milieu de gamme", "Silence"],
  "air-premium": ["CPU haut de gamme", "OC modéré"],
  "aio-240": ["Gaming", "OC modéré"],
  "aio-280": ["Gaming haut de gamme", "OC poussé"],
  "aio-360": ["CPU extreme", "OC maximum"],
  "aio-420": ["Overclocking extrême", "Silence absolu"]
}

export const componentPerformanceScores = {
  "amd-5600x": { gaming: 8, productivity: 7 },
  "amd-5800x": { gaming: 9, productivity: 8 },
  "amd-5900x": { gaming: 9, productivity: 9 },
  "amd-5950x": { gaming: 9, productivity: 10 },
  "intel-12600k": { gaming: 8, productivity: 7 },
  "intel-12700k": { gaming: 9, productivity: 8 },
  "intel-12900k": { gaming: 10, productivity: 9 },
  "intel-13900k": { gaming: 10, productivity: 10 },
  "b550": { features: 7, overclocking: 6 },
  "x570": { features: 9, overclocking: 9 },
  "b660": { features: 6, overclocking: 4 },
  "z690": { features: 9, overclocking: 8 },
  "z790": { features: 10, overclocking: 10 },
  "16gb-3200": { performance: 7, multitasking: 6 },
  "32gb-3600": { performance: 8, multitasking: 8 },
  "32gb-4000": { performance: 9, multitasking: 8 },
  "64gb-3600": { performance: 8, multitasking: 10 },
  "64gb-4000": { performance: 9, multitasking: 10 },
  "ssd-500": { speed: 7, capacity: 5 },
  "ssd-1tb": { speed: 8, capacity: 7 },
  "ssd-2tb": { speed: 9, capacity: 8 },
  "ssd-4tb": { speed: 10, capacity: 10 },
  "650w": { efficiency: 7, headroom: 6 },
  "750w": { efficiency: 8, headroom: 7 },
  "850w": { efficiency: 9, headroom: 8 },
  "1000w": { efficiency: 9, headroom: 9 },
  "1200w": { efficiency: 10, headroom: 10 },
  "air": { performance: 6, noise: 7 },
  "air-premium": { performance: 8, noise: 8 },
  "aio-240": { performance: 7, noise: 8 },
  "aio-280": { performance: 8, noise: 8 },
  "aio-360": { performance: 9, noise: 9 },
  "aio-420": { performance: 10, noise: 10 }
}

export const componentDescriptions = {
  cpu: "Le cerveau de votre ordinateur, crucial pour les performances",
  motherboard: "La base qui relie tous vos composants",
  ram: "La mémoire vive pour le multitâche et les applications",
  storage: "Espace de stockage pour vos fichiers et applications",
  psu: "L'alimentation électrique de votre système",
  cooling: "Système de refroidissement pour votre processeur"
}

export const componentNames = {
  cpu: "Processeur",
  motherboard: "Carte mère",
  ram: "Mémoire RAM",
  storage: "Stockage",
  psu: "Alimentation",
  cooling: "Refroidissement"
}
