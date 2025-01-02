import React from 'react'
    import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
    import { Button } from '@/components/ui/button'
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
    import { Trash2, MinusCircle, PlusCircle, ShoppingCart, PackageCheck, Truck } from 'lucide-react'
    import { useToast } from '@/hooks/use-toast'
    import { Alert, AlertDescription } from '@/components/ui/alert'
    import { componentOptions } from '@/data/components'

    const Cart = () => {
      const { toast } = useToast()
      // Pour l'instant, nous utilisons des données statiques
      const cartItems = [
        {
          id: 1,
          type: 'Configuration Gaming',
          quantity: 1,
          components: {
            cpu: 'amd-5800x',
            gpu: 'NVIDIA RTX 3080',
            ram: '32gb-3600',
            storage: 'ssd-1tb',
            motherboard: 'b550',
            psu: '850w',
            cooling: 'aio-240'
          },
          price: 2499.99
        }
      ]

      const handleQuantityChange = (itemId: number, change: number) => {
        toast({
          title: "Quantité mise à jour",
          description: "La quantité a été mise à jour avec succès.",
        })
      }

      const handleRemoveItem = (itemId: number) => {
        toast({
          title: "Article supprimé",
          description: "L'article a été supprimé de votre panier.",
          variant: "destructive",
        })
      }

      const handleCheckout = () => {
        toast({
          title: "Redirection vers le paiement",
          description: "Vous allez être redirigé vers la page de paiement.",
        })
      }

      const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

      if (cartItems.length === 0) {
        return (
          <div className="container mx-auto py-16 px-4">
            <Card className="text-center py-16 max-w-2xl mx-auto">
              <CardContent className="space-y-6">
                <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground opacity-50" />
                <h2 className="text-2xl font-semibold text-muted-foreground">Votre panier est vide</h2>
                <p className="text-muted-foreground">Commencez à configurer votre PC de rêve dès maintenant !</p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => window.history.back()}
                  size="lg"
                >
                  Continuer mes achats
                </Button>
              </CardContent>
            </Card>
          </div>
        )
      }

      return (
        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center gap-4 mb-8">
            <ShoppingCart className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Mon Panier</h1>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden group">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {item.type}
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Composant</TableHead>
                          <TableHead>Modèle</TableHead>
                          <TableHead>Quantité</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(item.components).map(([key, value]) => (
                          <TableRow key={key} className="group/row hover:bg-muted/50">
                            <TableCell className="font-medium capitalize group-hover/row:text-primary transition-colors">
                              {key}
                            </TableCell>
                            <TableCell className="group-hover/row:text-primary transition-colors">
                              {
                                componentOptions[key as keyof typeof componentOptions]?.find(option => option.value === value)?.label || value
                              }
                            </TableCell>
                            <TableCell className="group-hover/row:text-primary transition-colors">
                              {item.quantity}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="hover:bg-destructive/10 hover:text-destructive transition-colors"
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-lg font-semibold">
                        {(item.price * item.quantity).toLocaleString('fr-FR')}€
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Alert>
                <Truck className="h-4 w-4" />
                <AlertDescription>
                  Livraison gratuite pour toute commande supérieure à 1000€
                </AlertDescription>
              </Alert>
            </div>
            
            <div className="lg:sticky lg:top-8 h-fit">
              <Card className="backdrop-blur-sm bg-card/95">
                <CardHeader>
                  <CardTitle>Récapitulatif</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span>{total.toLocaleString('fr-FR')}€</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="text-green-500 flex items-center gap-2">
                      <PackageCheck className="h-4 w-4" />
                      Gratuite
                    </span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-4 border-t">
                    <span>Total</span>
                    <span className="text-primary">{total.toLocaleString('fr-FR')}€</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full group" 
                    size="lg"
                    onClick={handleCheckout}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      Procéder au paiement
                    </span>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Visualisation</CardTitle>
                </CardHeader>
                <CardContent>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-wrap gap-2">
                      {Object.entries(item.components).map(([key, value]) => {
                        const component = componentOptions[key as keyof typeof componentOptions]?.find(option => option.value === value)
                        return component ? (
                          <div key={key} className="flex flex-col items-center">
                            <img src={component.image} alt={component.label} className="w-20 h-20 object-contain" />
                            <span className="text-xs text-muted-foreground">{component.label}</span>
                          </div>
                        ) : null
                      })}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    }

    export default Cart
