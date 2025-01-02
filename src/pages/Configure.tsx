import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import ComponentCard from "@/components/configurator/ComponentCard"
import PriceSummary from "@/components/configurator/PriceSummary"
import { componentOptions, componentPrices, componentDescriptions, componentNames } from "@/data/components"
import { checkMotherboardCompatibility, checkPowerSupply, checkCooling } from "@/utils/compatibility"
import { ShoppingCart, Cpu, CircuitBoard, HardDrive, Battery, Fan } from "lucide-react"
import { useState, useEffect } from "react"
import type { ReactNode } from "react"

const Configure = () => {
  const { toast } = useToast()
  const [selectedComponents, setSelectedComponents] = useState<Record<string, string>>({
    cpu: "",
    motherboard: "",
    ram: "",
    storage: "",
    psu: "",
    cooling: ""
  })

  const [warnings, setWarnings] = useState<string[]>([])
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  useEffect(() => {
    const newWarnings: string[] = []
    
    if (selectedComponents.cpu && selectedComponents.motherboard) {
      const motherboardWarning = checkMotherboardCompatibility(
        selectedComponents.cpu,
        selectedComponents.motherboard
      )
      if (motherboardWarning) newWarnings.push(motherboardWarning)
    }
    
    if (selectedComponents.cpu && selectedComponents.psu) {
      const psuWarning = checkPowerSupply(
        selectedComponents.cpu,
        selectedComponents.psu
      )
      if (psuWarning) newWarnings.push(psuWarning)
    }
    
    if (selectedComponents.cpu && selectedComponents.cooling) {
      const coolingWarning = checkCooling(
        selectedComponents.cpu,
        selectedComponents.cooling
      )
      if (coolingWarning) newWarnings.push(coolingWarning)
    }
    
    setWarnings(newWarnings)
  }, [selectedComponents])

  const handleComponentChange = (value: string, component: keyof typeof selectedComponents) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component]: value
    }))
  }

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, componentId) => {
      return total + (componentPrices[componentId as keyof typeof componentPrices] || 0)
    }, 0)
  }

  const handleAddToCart = async () => {
    const missingComponents = Object.entries(selectedComponents).filter(([_, value]) => !value)
    
    if (missingComponents.length > 0) {
      toast({
        variant: "destructive",
        title: "Configuration incomplète",
        description: "Veuillez sélectionner tous les composants avant d'ajouter au panier."
      })
      return
    }

    if (warnings.length > 0) {
      toast({
        variant: "destructive",
        title: "Attention",
        description: "Votre configuration présente des incompatibilités. Veuillez les corriger avant de continuer."
      })
      return
    }

    setIsAddingToCart(true)
    
    // Simuler un délai d'ajout au panier
    setTimeout(() => {
      toast({
        title: "Configuration ajoutée au panier",
        description: `Configuration complète (${calculateTotal().toLocaleString("fr-FR")}€) ajoutée au panier avec succès.`,
        duration: 3000,
      })
      setIsAddingToCart(false)
    }, 1000)
  }

  const componentIcons = {
    cpu: Cpu,
    motherboard: CircuitBoard,
    ram: Cpu,
    storage: HardDrive,
    psu: Battery,
    cooling: Fan
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Configurateur PC</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {Object.keys(componentOptions).map((component) => (
            <ComponentCard
              key={component}
              title={componentNames[component as keyof typeof componentNames]}
              description={componentDescriptions[component as keyof typeof componentDescriptions]}
              icon={componentIcons[component as keyof typeof componentIcons]}
              options={componentOptions[component as keyof typeof componentOptions]}
              value={selectedComponents[component]}
              onChange={(value) => handleComponentChange(value, component as keyof typeof selectedComponents)}
              type={component}
            />
          ))}

          {warnings.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Avertissements de compatibilité :
                  </p>
                  <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
                    {warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <Button 
            className="w-full flex items-center justify-center gap-2 py-6 text-lg relative overflow-hidden"
            onClick={handleAddToCart}
            variant={warnings.length > 0 ? "destructive" : "default"}
            size="lg"
            disabled={isAddingToCart}
          >
            <ShoppingCart className={`h-6 w-6 transition-transform ${isAddingToCart ? 'translate-y-12' : ''}`} />
            <span className={`transition-transform ${isAddingToCart ? 'translate-y-12' : ''}`}>
              {isAddingToCart ? 'Ajout en cours...' : `Ajouter au panier (${calculateTotal().toLocaleString("fr-FR")}€)`}
            </span>
            {isAddingToCart && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-3 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
              </div>
            )}
          </Button>
        </div>

        <div className="md:sticky md:top-8">
          <PriceSummary
            selectedComponents={selectedComponents}
            prices={componentPrices}
            componentNames={componentNames}
          />
        </div>
      </div>
    </div>
  )
}

export default Configure
