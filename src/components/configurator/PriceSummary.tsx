import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PriceSummaryProps {
  selectedComponents: Record<string, string>
  prices: Record<string, number>
  componentNames: Record<string, string>
}

const PriceSummary = ({ selectedComponents, prices, componentNames }: PriceSummaryProps) => {
  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, componentId) => {
      return total + (prices[componentId] || 0)
    }, 0)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Récapitulatif</CardTitle>
        <CardDescription>Votre configuration actuelle</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Prix total estimé:</span>
            <span className="text-xl font-bold">{calculateTotal().toLocaleString("fr-FR")} €</span>
          </div>
          <div className="space-y-2">
            {Object.entries(selectedComponents).map(([component, value]) => (
              value && (
                <div key={component} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{componentNames[component]}:</span>
                  <span>{prices[value]}€</span>
                </div>
              )
            ))}
          </div>
          {Object.values(selectedComponents).some((value) => !value) && (
            <p className="text-sm text-muted-foreground">
              Sélectionnez tous les composants pour voir le prix total
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default PriceSummary
