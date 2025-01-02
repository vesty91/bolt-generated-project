// Vérifie la compatibilité entre le CPU et la carte mère
export const checkMotherboardCompatibility = (cpuValue: string, motherboardValue: string) => {
  const isAMD = cpuValue.startsWith('amd');
  const isIntel = cpuValue.startsWith('intel');
  
  // Cartes mères AMD
  const isAMDBoard = ['b550', 'x570'].includes(motherboardValue);
  // Cartes mères Intel
  const isIntelBoard = ['b660', 'z690', 'z790'].includes(motherboardValue);
  
  if (isAMD && !isAMDBoard) {
    return "Cette carte mère n'est pas compatible avec les processeurs AMD";
  }
  
  if (isIntel && !isIntelBoard) {
    return "Cette carte mère n'est pas compatible avec les processeurs Intel";
  }
  
  return null;
};

// Vérifie si l'alimentation est suffisante
export const checkPowerSupply = (cpuValue: string, psuValue: string) => {
  const highPowerCPUs = ['amd-5950x', 'intel-12900k', 'intel-13900k'];
  const psuWattage = parseInt(psuValue);
  
  if (highPowerCPUs.includes(cpuValue) && psuWattage < 850) {
    return "Une alimentation plus puissante est recommandée pour ce processeur";
  }
  
  return null;
};

// Vérifie si le refroidissement est adapté
export const checkCooling = (cpuValue: string, coolingValue: string) => {
  const highPowerCPUs = ['amd-5950x', 'intel-12900k', 'intel-13900k'];
  const basicCooling = ['air'];
  
  if (highPowerCPUs.includes(cpuValue) && basicCooling.includes(coolingValue)) {
    return "Un refroidissement plus performant est recommandé pour ce processeur";
  }
  
  return null;
};
