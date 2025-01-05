import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";

// Types pour notre configurateur
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type Step = {
  id: number;
  title: string;
  description: string;
  products: Product[];
};

const MOCK_STEPS: Step[] = [
  {
    id: 1,
    title: "Boîtier",
    description: "Choisissez le boîtier qui accueillera votre configuration",
    products: [
      {
        id: 1,
        name: "Lian Li O11 Dynamic EVO",
        description: "Boîtier premium avec excellent airflow et support watercooling",
        price: 169.99,
        image: "/placeholder.svg",
      },
      {
        id: 2,
        name: "Fractal Design Meshify 2",
        description: "Design moderne avec façade mesh pour une ventilation optimale",
        price: 149.99,
        image: "/placeholder.svg",
      },
      {
        id: 3,
        name: "Corsair 4000D Airflow",
        description: "Excellent rapport qualité/prix avec une bonne circulation d'air",
        price: 119.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Carte Mère",
    description: "Sélectionnez la base de votre configuration",
    products: [
      {
        id: 4,
        name: "ASUS ROG STRIX B650-F GAMING",
        description: "Carte mère gaming avec excellente qualité audio et réseau",
        price: 289.99,
        image: "/placeholder.svg",
      },
      {
        id: 5,
        name: "MSI MPG B650 CARBON WIFI",
        description: "Performance et connectivité haut de gamme",
        price: 299.99,
        image: "/placeholder.svg",
      },
      {
        id: 6,
        name: "Gigabyte B650 AORUS ELITE AX",
        description: "Excellent rapport qualité/prix avec WiFi 6E",
        price: 249.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Processeur",
    description: "Choisissez le cerveau de votre machine",
    products: [
      {
        id: 7,
        name: "AMD Ryzen 9 7950X",
        description: "16 cœurs / 32 threads pour une performance maximale",
        price: 699.99,
        image: "/placeholder.svg",
      },
      {
        id: 8,
        name: "AMD Ryzen 7 7700X",
        description: "8 cœurs / 16 threads, excellent pour le gaming",
        price: 449.99,
        image: "/placeholder.svg",
      },
      {
        id: 9,
        name: "AMD Ryzen 5 7600X",
        description: "6 cœurs / 12 threads, parfait rapport performance/prix",
        price: 299.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Refroidissement",
    description: "Optez pour un refroidissement efficace",
    products: [
      {
        id: 10,
        name: "NZXT Kraken X73",
        description: "Watercooling AIO 360mm avec écran LCD personnalisable",
        price: 279.99,
        image: "/placeholder.svg",
      },
      {
        id: 11,
        name: "be quiet! Dark Rock Pro 4",
        description: "Ventirad haut de gamme ultra silencieux",
        price: 89.99,
        image: "/placeholder.svg",
      },
      {
        id: 12,
        name: "Arctic Liquid Freezer II 240",
        description: "AIO 240mm excellent rapport qualité/prix",
        price: 119.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Mémoire RAM",
    description: "Sélectionnez la mémoire vive de votre configuration",
    products: [
      {
        id: 13,
        name: "G.Skill Trident Z5 RGB 32GB",
        description: "Kit 2x16GB DDR5-6000 CL30",
        price: 229.99,
        image: "/placeholder.svg",
      },
      {
        id: 14,
        name: "Corsair Dominator Platinum 32GB",
        description: "Kit 2x16GB DDR5-5600 CL36",
        price: 249.99,
        image: "/placeholder.svg",
      },
      {
        id: 15,
        name: "Crucial RAM 32GB",
        description: "Kit 2x16GB DDR5-5200 CL38",
        price: 179.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Stockage SSD",
    description: "Choisissez votre stockage principal haute performance",
    products: [
      {
        id: 16,
        name: "Samsung 990 PRO 2TB",
        description: "SSD NVMe PCIe 4.0 - Performances maximales",
        price: 219.99,
        image: "/placeholder.svg",
      },
      {
        id: 17,
        name: "WD Black SN850X 1TB",
        description: "SSD NVMe PCIe 4.0 - Excellent pour le gaming",
        price: 159.99,
        image: "/placeholder.svg",
      },
      {
        id: 18,
        name: "Crucial P5 Plus 1TB",
        description: "SSD NVMe PCIe 4.0 - Bon rapport qualité/prix",
        price: 129.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Stockage HDD",
    description: "Ajoutez du stockage supplémentaire pour vos données",
    products: [
      {
        id: 19,
        name: "Seagate Barracuda 4TB",
        description: "HDD 3.5\" 5400 RPM - Stockage de masse",
        price: 89.99,
        image: "/placeholder.svg",
      },
      {
        id: 20,
        name: "WD Blue 2TB",
        description: "HDD 3.5\" 7200 RPM - Usage quotidien",
        price: 59.99,
        image: "/placeholder.svg",
      },
      {
        id: 21,
        name: "Toshiba P300 3TB",
        description: "HDD 3.5\" 7200 RPM - Polyvalent",
        price: 74.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 8,
    title: "Carte Graphique",
    description: "Sélectionnez votre carte graphique",
    products: [
      {
        id: 22,
        name: "NVIDIA RTX 4090",
        description: "La carte graphique la plus puissante du marché",
        price: 1599.99,
        image: "/placeholder.svg",
      },
      {
        id: 23,
        name: "NVIDIA RTX 4080",
        description: "Performances haut de gamme pour le gaming 4K",
        price: 1199.99,
        image: "/placeholder.svg",
      },
      {
        id: 24,
        name: "AMD RX 7900 XTX",
        description: "Alternative AMD haut de gamme très performante",
        price: 999.99,
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 9,
    title: "Alimentation",
    description: "Choisissez une alimentation adaptée à votre configuration",
    products: [
      {
        id: 25,
        name: "Corsair RM1000x",
        description: "1000W 80+ Gold - Modulaire, silencieuse et fiable",
        price: 199.99,
        image: "/placeholder.svg",
      },
      {
        id: 26,
        name: "be quiet! Dark Power 12",
        description: "850W 80+ Titanium - Qualité premium",
        price: 249.99,
        image: "/placeholder.svg",
      },
      {
        id: 27,
        name: "Seasonic Focus GX-750",
        description: "750W 80+ Gold - Excellent rapport qualité/prix",
        price: 129.99,
        image: "/placeholder.svg",
      },
    ],
  },
];

const Configurator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState<Record<number, Product>>({});

  const validationSchema = z.object({
    [MOCK_STEPS[0].id]: z.number().min(1, { message: "Veuillez choisir un boîtier" }),
    [MOCK_STEPS[1].id]: z.number().min(1, { message: "Veuillez choisir une carte mère" }),
    [MOCK_STEPS[2].id]: z.number().min(1, { message: "Veuillez choisir un processeur" }),
    [MOCK_STEPS[3].id]: z.number().min(1, { message: "Veuillez choisir un système de refroidissement" }),
    [MOCK_STEPS[4].id]: z.number().min(1, { message: "Veuillez choisir de la mémoire RAM" }),
    [MOCK_STEPS[5].id]: z.number().min(1, { message: "Veuillez choisir un stockage SSD" }),
    [MOCK_STEPS[6].id]: z.number().optional(),
    [MOCK_STEPS[7].id]: z.number().min(1, { message: "Veuillez choisir une carte graphique" }),
    [MOCK_STEPS[8].id]: z.number().min(1, { message: "Veuillez choisir une alimentation" }),
  });

  type FormSchema = z.infer<typeof validationSchema>;

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {},
  });

  const handleProductSelect = (product: Product) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [MOCK_STEPS[currentStep].id]: product,
    }));
    setValue(MOCK_STEPS[currentStep].id.toString(), product.id);
  };

  const nextStep = () => {
    if (currentStep < MOCK_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentStepData = MOCK_STEPS[currentStep];
  const isLastStep = currentStep === MOCK_STEPS.length - 1;
  const isFirstStep = currentStep === 0;
  const currentSelection = selectedProducts[currentStepData.id];

  const onSubmit = (data: FormSchema) => {
    console.log("Form Data:", data);
    toast({
      title: "Configuration terminée",
      description: "Votre configuration a été enregistrée avec succès.",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {MOCK_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`text-sm font-medium ${
                  index <= currentStep ? "text-white" : "text-gray-400"
                }`}
              >
                Étape {index + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full">
            <div
              className="bg-secondary h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / MOCK_STEPS.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Current step content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2 text-white">{currentStepData.title}</h2>
          <p className="text-gray-300 mb-6">
            {currentStepData.description}
          </p>

          <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStepData.products.map((product) => (
                <div
                  key={product.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    currentSelection?.id === product.id
                      ? "border-secondary bg-secondary/10"
                      : "border-white/10 hover:border-secondary/50 bg-white/5"
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-secondary">{product.price} €</p>
                </div>
              ))}
            </div>
          </ScrollArea>
          {errors[currentStepData.id] && (
            <p className="text-red-500 text-sm mt-2">
              {errors[currentStepData.id]?.message}
            </p>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={previousStep}
            disabled={isFirstStep}
            className="flex items-center gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Précédent
          </Button>
          <Button
            type="submit"
            disabled={isLastStep}
            className="flex items-center gap-2 bg-secondary hover:bg-secondary/90"
          >
            {isLastStep ? "Terminer" : "Suivant"}
            {!isLastStep && <ArrowRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Configurator;
