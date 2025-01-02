import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { componentRecommendations, componentPerformanceScores } from "@/data/components"

interface ComponentOption {
  value: string
  label: string
  price: number
  image: string
}

interface ComponentCardProps {
  title: string
  description: string
  icon: LucideIcon
  options: ComponentOption[]
  value: string
  onChange: (value: string) => void
  type: string
}

interface PerformanceScores {
  gaming?: number
  productivity?: number
  features?: number
  overclocking?: number
  performance?: number
  multitasking?: number
  speed?: number
  capacity?: number
  efficiency?: number
  headroom?: number
  noise?: number
}

const ComponentCard = ({
  title,
  description,
  icon: Icon,
  options,
  value,
  onChange,
  type
}: ComponentCardProps) => {
  const getRecommendations = (value: string) => {
    return componentRecommendations[value as keyof typeof componentRecommendations] || []
  }

  const getPerformanceScore = (value: string): PerformanceScores | undefined => {
    return componentPerformanceScores[value as keyof typeof componentPerformanceScores]
  }

  const renderPerformanceScores = (value: string) => {
    const scores = getPerformanceScore(value)
    if (!scores) return null

    switch (type) {
      case 'cpu':
        return scores.gaming !== undefined && scores.productivity !== undefined ? (
          <>
            <Badge variant="secondary">Gaming: {scores.gaming}/10</Badge>
            <Badge variant="secondary">Productivité: {scores.productivity}/10</Badge>
          </>
        ) : null
      case 'motherboard':
        return scores.features !== undefined && scores.overclocking !== undefined ? (
          <>
            <Badge variant="secondary">Fonctionnalités: {scores.features}/10</Badge>
            <Badge variant="secondary">Overclocking: {scores.overclocking}/10</Badge>
          </>
        ) : null
      case 'ram':
        return scores.performance !== undefined && scores.multitasking !== undefined ? (
          <>
            <Badge variant="secondary">Performance: {scores.performance}/10</Badge>
            <Badge variant="secondary">Multitâche: {scores.multitasking}/10</Badge>
          </>
        ) : null
      case 'storage':
        return scores.speed !== undefined && scores.capacity !== undefined ? (
          <>
            <Badge variant="secondary">Vitesse: {scores.speed}/10</Badge>
            <Badge variant="secondary">Capacité: {scores.capacity}/10</Badge>
          </>
        ) : null
      case 'psu':
        return scores.efficiency !== undefined && scores.headroom !== undefined ? (
          <>
            <Badge variant="secondary">Efficacité: {scores.efficiency}/10</Badge>
            <Badge variant="secondary">Marge: {scores.headroom}/10</Badge>
          </>
        ) : null
      case 'cooling':
        return scores.performance !== undefined && scores.noise !== undefined ? (
          <>
            <Badge variant="secondary">Performance: {scores.performance}/10</Badge>
            <Badge variant="secondary">Bruit: {scores.noise}/10</Badge>
          </>
        ) : null
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue placeholder={`Choisir ${title.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <img
                      src={option.image}
                      alt={option.label}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>{option.label} - {option.price}€</div>
                    <div className="flex gap-2 mt-1">
                      {renderPerformanceScores(option.value)}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {getRecommendations(option.value).map((rec, index) => (
                        <Badge key={index} variant="outline">{rec}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

export default ComponentCard
