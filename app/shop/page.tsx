import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductProps {
  id: string
  name: string
  price: number
  imageUrl: string
  category: string
}

const products: ProductProps[] = [
  {
    id: "tshirt-1",
    name: "Racing Team T-Shirt 2023",
    price: 29.99,
    imageUrl: "/images/shop/products/placeholder-300x300.svg",
    category: "apparel",
  },
  {
    id: "hoodie-1",
    name: "Alberto Beltrán Hoodie",
    price: 49.99,
    imageUrl: "/images/shop/products/placeholder-300x300.svg",
    category: "apparel",
  },
  {
    id: "cap-1",
    name: "Racing Cap",
    price: 24.99,
    imageUrl: "/images/shop/products/placeholder-300x300.svg",
    category: "apparel",
  },
  {
    id: "poster-1",
    name: "Signed Race Poster",
    price: 19.99,
    imageUrl: "/images/shop/products/placeholder-300x300.svg",
    category: "accessories",
  },
  {
    id: "keychain-1",
    name: "Metal Keychain",
    price: 12.99,
    imageUrl: "/images/shop/products/placeholder-300x300.svg",
    category: "accessories",
  },
  {
    id: "bottle-1",
    name: "Racing Water Bottle",
    price: 15.99,
    imageUrl: "/images/shop/products/placeholder-300x300.svg",
    category: "accessories",
  },
]

function ProductCard({ product }: { product: ProductProps }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 w-full bg-gray-100">
        <Image
          src={product.imageUrl || "/images/shop/products/placeholder-300x300.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-red-600 font-medium mt-2">€{product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/alberto-hero.png"
            alt="Official Merchandise"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Official Merchandise</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Show your support with the latest Alberto Beltrán García racing gear
            </p>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="apparel">Apparel</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="apparel" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.category === "apparel")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="accessories" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.category === "accessories")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Shopping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-2">Shipping</h3>
                <p className="text-gray-700">
                  We ship worldwide. Standard delivery within Spain takes 2-4 business days. International shipping
                  typically takes 7-14 business days.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Returns</h3>
                <p className="text-gray-700">
                  If you're not completely satisfied, you can return unworn items within 30 days of receipt for a full
                  refund or exchange.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Custom Orders</h3>
                <p className="text-gray-700">
                  Looking for custom merchandise or bulk orders? Contact us directly for special pricing and options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">2023 Racing Collection</h2>
              <p className="text-lg mb-6">
                Our latest collection features the official team colors and designs from the current racing season. Each
                purchase directly supports Alberto's racing career.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Official team designs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Limited edition items</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <span>Supports Alberto's racing career</span>
                </li>
              </ul>
              <Button className="bg-red-600 hover:bg-red-700">Shop the Collection</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/shop/categories/placeholder-200x200.svg"
                  alt="Racing collection item"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/shop/categories/placeholder-200x200.svg"
                  alt="Racing collection item"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/shop/categories/placeholder-200x200.svg"
                  alt="Racing collection item"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/shop/categories/placeholder-200x200.svg"
                  alt="Racing collection item"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
