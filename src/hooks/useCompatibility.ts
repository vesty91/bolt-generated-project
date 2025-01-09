import { useBuildContext } from '../context/BuildContext';
    import { ComponentCategory } from '../types';

    export const useCompatibility = () => {
      const { selectedComponents } = useBuildContext();

      const checkSocketCompatibility = () => {
        const cpu = selectedComponents[ComponentCategory.CPU];
        const motherboard = selectedComponents[ComponentCategory.MOTHERBOARD];

        if (!cpu || !motherboard) return { compatible: true, message: null };

        const intelSocket = motherboard.specs.socket === 'LGA 1700' && cpu.brand === 'Intel';
        const amdSocket = motherboard.specs.socket === 'AM5' && cpu.brand === 'AMD';

        if (intelSocket || amdSocket) {
          return { compatible: true, message: null };
        } else {
          return { compatible: false, message: 'CPU and motherboard socket are incompatible' };
        }
      };

      const checkPowerRequirements = () => {
        const psu = selectedComponents[ComponentCategory.PSU];
        const gpu = selectedComponents[ComponentCategory.GPU];
        const cpu = selectedComponents[ComponentCategory.CPU];

        if (!psu) return { compatible: true, message: null };

        const psuWattage = parseInt(psu.specs.wattage);
        const gpuPower = gpu ? parseInt(gpu.specs.tdp) : 0;
        const cpuPower = cpu ? parseInt(cpu.specs.tdp) : 0;
        const baseSystemPower = 150; // For other components

        const totalPower = gpuPower + cpuPower + baseSystemPower;
        if (psuWattage >= totalPower) {
          return { compatible: true, message: null };
        } else {
          return { compatible: false, message: 'Power supply wattage may be insufficient' };
        }
      };

      const getTotalWattage = () => {
        const gpu = selectedComponents[ComponentCategory.GPU];
        const cpu = selectedComponents[ComponentCategory.CPU];
        const gpuPower = gpu ? parseInt(gpu.specs.tdp) : 0;
        const cpuPower = cpu ? parseInt(cpu.specs.tdp) : 0;
        const baseSystemPower = 150; // For other components

        return gpuPower + cpuPower + baseSystemPower;
      };

      const getCompatibilityIssues = () => {
        const issues = [];
        const socketCheck = checkSocketCompatibility();
        const powerCheck = checkPowerRequirements();

        if (!socketCheck.compatible && socketCheck.message) {
          issues.push(socketCheck.message);
        }

        if (!powerCheck.compatible && powerCheck.message) {
          issues.push(powerCheck.message);
        }

        return issues;
      };

      return {
        isCompatible: getCompatibilityIssues().length === 0,
        compatibilityIssues: getCompatibilityIssues(),
        getTotalWattage
      };
    };
