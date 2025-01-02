import React, { useState } from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { componentOptions, componentNames, componentDescriptions } from '@/data/components';
    import { LucideIcon, Cpu, CircuitBoard, HardDrive, Battery, Fan } from 'lucide-react';
    import { Badge } from '@/components/ui/badge';
    import { Button } from '@/components/ui/button';
    import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger, SidebarInput, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarSeparator, SidebarProvider } from '@/components/ui/sidebar';
    import { ScrollArea } from '@/components/ui/scroll-area';
    import { Checkbox } from '@/components/ui/checkbox';
    import { Label } from '@/components/ui/label';

    interface ComponentOption {
      value: string;
      label: string;
      price: number;
      image: string;
    }

    interface ComponentCardProps {
      title: string;
      description: string;
      icon: LucideIcon;
      options: ComponentOption[];
    }

    const ComponentCard = ({ title, description, icon: Icon, options }: ComponentCardProps) => {
      return (
        <Card className="group border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid grid-cols-1 gap-4">
              {options.map((option) => (
                <div key={option.value} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20">
                      <img
                        src={option.image}
                        alt={option.label}
                        className="object-contain w-full h-full"
                        onError={(e: any) => {
                          e.target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">{option.label}</span>
                      <span className="text-sm text-muted-foreground">{option.price}€</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Détails
                    </Button>
                    <Button size="sm" variant="default">
                      Ajouter
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <CardDescription className="text-sm text-muted-foreground mt-2">{description}</CardDescription>
          </CardContent>
        </Card>
      );
    };

    const Components = () => {
      const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
      const [sortByPrice, setSortByPrice] = useState<'asc' | 'desc' | null>(null);

      const handleTypeChange = (type: string) => {
        setSelectedTypes((prev) =>
          prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
      };

      const handleSortByPrice = (order: 'asc' | 'desc' | null) => {
        setSortByPrice(order);
      };

      const filteredComponents = React.useMemo(() => {
        let filtered = Object.entries(componentOptions);

        if (selectedTypes.length > 0) {
          filtered = filtered.filter(([key]) => selectedTypes.includes(key));
        }

        if (sortByPrice) {
          filtered.sort(([, optionsA], [, optionsB]) => {
            const priceA = optionsA[0].price;
            const priceB = optionsB[0].price;
            return sortByPrice === 'asc' ? priceA - priceB : priceB - priceA;
          });
        }

        return filtered;
      }, [selectedTypes, sortByPrice]);

      return (
        <SidebarProvider>
          <div className="flex h-screen">
            <Sidebar>
              <SidebarHeader>
                <h2 className="text-lg font-semibold">Filtres</h2>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Type de composant</SidebarGroupLabel>
                  <SidebarGroupContent>
                    {Object.keys(componentOptions).map((type) => (
                      <SidebarMenuItem key={type}>
                        <SidebarMenuButton onClick={() => handleTypeChange(type)}>
                          <Checkbox checked={selectedTypes.includes(type)} />
                          <span className="ml-2">{componentNames[type as keyof typeof componentNames]}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                  <SidebarGroupLabel>Trier par prix</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => handleSortByPrice('asc')} isActive={sortByPrice === 'asc'}>
                        Prix croissant
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => handleSortByPrice('desc')} isActive={sortByPrice === 'desc'}>
                        Prix décroissant
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => handleSortByPrice(null)} isActive={sortByPrice === null}>
                        Par défaut
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <div className="flex-1 p-4">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredComponents.map(([component, options]) => (
                  <ComponentCard
                    key={component}
                    title={componentNames[component as keyof typeof componentNames]}
                    description={componentDescriptions[component as keyof typeof componentDescriptions]}
                    icon={
                      {
                        cpu: Cpu,
                        motherboard: CircuitBoard,
                        ram: Cpu,
                        storage: HardDrive,
                        psu: Battery,
                        cooling: Fan
                      }[component as keyof typeof componentOptions] as any
                    }
                    options={options}
                  />
                ))}
              </div>
            </div>
          </div>
        </SidebarProvider>
      );
    };

    export default Components;
