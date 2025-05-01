import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ChevronRight, ArrowRight, Instagram } from "lucide-react"
import NewsCard from "@/components/news-card"
import FeaturedNewsCard from "@/components/featured-news-card"
import InstagramPost from "@/components/instagram-post"

export default function NewsPage() {
  // Featured news
  const featuredNews = {
    title: "Alberto Beltrán Achieves Best Race Time in R3 bLU cRU Challenge Final",
    date: "15 October 2023",
    excerpt:
      "Despite challenging weather conditions and a fall during free practice, Alberto demonstrated exceptional skill by recording the best time in the R3 bLU cRU Challenge final at the World Superbike Championship in Estoril.",
    imageUrl: "/images/news/featured/r3-blu-cru-superfinale-fastest-lap-3-featured-news.jpg",
    slug: "best-time-r3-blu-cru-final",
    category: "Results",
    externalUrl: "https://www.levante-emv.com/costera/2023/05/25/alberto-beltran-queda-segundo-primera-87886891.html",
  }

  // News items
  const newsItems = [
    {
      title: "Alberto Beltrán Secures Second Place in First KTM Cup Race at Jerez de la Frontera",
      date: "25 May 2023",
      excerpt:
        "The Setabense rider Alberto Beltrán achieved a well-deserved second place in the first KTM Cup race held at the Jerez de la Frontera circuit.",
      imageUrl: "/images/news/featured/podio-jerez-3-featured-news.jpg",
      slug: "second-place-ktm-cup-jerez",
      category: "Competition",
      externalUrl: "https://www.levante-emv.com/costera/2023/05/25/alberto-beltran-queda-segundo-primera-87886891.html",
    },
    {
      title: "Alberto Beltrán: 'The First Thing I Asked the Doctor Was If I Could Continue Racing'",
      date: "18 March 2023",
      excerpt:
        "The Setabense rider Alberto Beltrán recounts how he faced his Type 1 diabetes diagnosis and how he has managed to combine this condition with his sporting career in motorcycle racing.",
      imageUrl: "/images/news/featured/placeholder-600x1200.svg",
      slug: "interview-alberto-beltran-diabetes",
      category: "Interview",
      externalUrl:
        "https://cadenaser.com/comunitat-valenciana/2023/03/18/alberto-beltran-lo-primero-que-le-pregunte-a-la-doctora-fue-si-podia-seguir-pilotando-radio-xativa/",
    },
    {
      title: "A Setabense with Diabetes in Motorcycle Racing Elite",
      date: "24 February 2023",
      excerpt:
        "Alberto Beltrán García, rider from Xàtiva, proves that Type 1 diabetes is not an obstacle to competing at the highest level in motorcycle racing.",
      imageUrl: "/images/news/featured/placeholder-600x1200.svg",
      slug: "setabense-diabetes-elite-motorcycles",
      category: "Profile",
      externalUrl: "https://www.levante-emv.com/costera/2023/02/24/setabense-diabetes-elite-motos-83688171.html",
    },
  ]

  // Instagram posts
  const instagramPosts = [
    {
      id: "C9z_-0fo0j9",
      url: "https://www.instagram.com/p/C9z_-0fo0j9/?igsh=NWxjcTlrd3ljbG15",
      caption: "Training at the Ricardo Tormo Circuit",
      date: "April 2024",
    },
    {
      id: "C9sUBG2IY2Y",
      url: "https://www.instagram.com/p/C9sUBG2IY2Y/?igsh=MW0xdjI0cWZreThwbA==",
      caption: "Preparation for the 2024 Season",
      date: "April 2024",
    },
  ]

  // Media features
  const mediaFeatures = [
    {
      title: "A Setabense with Diabetes in Motorcycle Racing Elite",
      publication: "Levante-EMV",
      date: "February 2023",
      excerpt:
        "Alberto Beltrán García, rider from Xàtiva, proves that Type 1 diabetes is not an obstacle to competing at the highest level in motorcycle racing.",
      imageUrl: "/images/news/featured/placeholder-600x1200.svg",
      link: "https://www.levante-emv.com/costera/2023/02/24/setabense-diabetes-elite-motos-83688171.html",
    },
    {
      title: 'Alberto Beltrán: "The First Thing I Asked the Doctor Was If I Could Continue Racing"',
      publication: "Cadena SER",
      date: "March 2023",
      excerpt:
        "The Setabense rider Alberto Beltrán recounts how he faced his Type 1 diabetes diagnosis and how he has managed to combine this condition with his sporting career.",
      imageUrl: "/images/news/featured/placeholder-600x1200.svg",
      link: "https://cadenaser.com/comunitat-valenciana/2023/03/18/alberto-beltran-lo-primero-que-le-pregunte-a-la-doctora-fue-si-podia-seguir-pilotando-radio-xativa/",
    },
    {
      title: "Alberto Beltrán Secures Second Place in First KTM Cup Race",
      publication: "Levante-EMV",
      date: "May 2023",
      excerpt:
        "The Setabense rider Alberto Beltrán achieved a well-deserved second place in the first KTM Cup race held at the Jerez de la Frontera circuit.",
      imageUrl: "/images/news/featured/placeholder-600x1200.svg",
      link: "https://www.levante-emv.com/costera/2023/05/25/alberto-beltran-queda-segundo-primera-87886891.html",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/alberto-hero.png"
            alt="Latest News"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">Latest News</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Stay up to date with Alberto's latest races, achievements, and journey in motorcycle racing
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      {/* <section className="py-8 px-4 md:px-6 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="search" placeholder="Search news..." className="pl-10 w-full md:w-[300px]" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                All News
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                Results
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                Interviews
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                Media
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured News */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Badge className="mb-2 bg-red-600 hover:bg-red-700">Featured</Badge>
            <h2 className="text-3xl font-bold">Latest News</h2>
          </div>

          <FeaturedNewsCard
            title={featuredNews.title}
            date={featuredNews.date}
            excerpt={featuredNews.excerpt}
            imageUrl={featuredNews.imageUrl}
            slug={featuredNews.slug}
            category={featuredNews.category}
            externalUrl={featuredNews.externalUrl}
          />
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="interviews">Interviews</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item, index) => (
                  <NewsCard
                    key={index}
                    title={item.title}
                    date={item.date}
                    excerpt={item.excerpt}
                    imageUrl={item.imageUrl}
                    slug={item.slug}
                    category={item.category}
                    externalUrl={item.externalUrl}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems
                  .filter((item) => item.category === "Results" || item.category === "Competition")
                  .map((item, index) => (
                    <NewsCard
                      key={index}
                      title={item.title}
                      date={item.date}
                      excerpt={item.excerpt}
                      imageUrl={item.imageUrl}
                      slug={item.slug}
                      category={item.category}
                      externalUrl={item.externalUrl}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="interviews" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems
                  .filter((item) => item.category === "Interview")
                  .map((item, index) => (
                    <NewsCard
                      key={index}
                      title={item.title}
                      date={item.date}
                      excerpt={item.excerpt}
                      imageUrl={item.imageUrl}
                      slug={item.slug}
                      category={item.category}
                      externalUrl={item.externalUrl}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="media" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems
                  .filter((item) => item.category === "Profile" || item.category === "Media")
                  .map((item, index) => (
                    <NewsCard
                      key={index}
                      title={item.title}
                      date={item.date}
                      excerpt={item.excerpt}
                      imageUrl={item.imageUrl}
                      slug={item.slug}
                      category={item.category}
                      externalUrl={item.externalUrl}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instagram Posts */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-red-600 hover:bg-red-700">Instagram</Badge>
            <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Follow Alberto on Instagram for exclusive training, race, and behind-the-scenes content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instagramPosts.map((post, index) => (
              <InstagramPost key={index} id={post.id} url={post.url} caption={post.caption} date={post.date} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/albertobeltrangarcia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Instagram className="h-5 w-5" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-2 bg-white text-red-600 hover:bg-gray-100">Stay Informed</Badge>
              <h2 className="text-3xl font-bold mb-4">Subscribe to Newsletter</h2>
              <p className="text-lg mb-6">
                Receive the latest news, race updates, and exclusive content directly to your email.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Previous and race results</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Information about training</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Exclusive content and offers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Diabetes management in sport</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4">Join the Community</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your email"
                  />
                </div>
                <Button
                  className="w-full bg-white text-red-600 hover:bg-gray-100 mt-2 flex items-center justify-center gap-2"
                  size="lg"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-xs text-white/70 text-center mt-4">
                  By subscribing, you agree to receive emails from Alberto's team. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-red-600 hover:bg-red-700">Press Coverage</Badge>
            <h2 className="text-3xl font-bold mb-4">Media Appearances</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Alberto has appeared in various media outlets, highlighting his racing career and his inspiring story with Type 1 Diabetes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src="/images/news/featured/placeholder-600x1200.svg"
                      alt={feature.publication}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg line-clamp-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.publication}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {feature.date}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">{feature.excerpt}</p>
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-medium hover:text-red-800 inline-flex items-center"
                >
                  Read Article <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/press-kit">
              <Button className="bg-red-600 hover:bg-red-700">View Press Kit</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-red-600 hover:bg-red-700">Archive</Badge>
            <h2 className="text-3xl font-bold mb-4">News Archive</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore Alberto's racing journey and milestones from previous seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">2023 Season</h3>
              <p className="text-gray-600 mb-4">
                R4C Cup in circuits across Spain and France, overcoming injury challenges.
              </p>
              <Link
                href="/news/archive/2023"
                className="text-red-600 font-medium hover:text-red-800 inline-flex items-center"
              >
                View Articles <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">2022 Season</h3>
              <p className="text-gray-600 mb-4">
                Achievements in the Valencian Community's minimotard 85cc championship.
              </p>
              <Link
                href="/news/archive/2022"
                className="text-red-600 font-medium hover:text-red-800 inline-flex items-center"
              >
                View Articles <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Diabetes and Sport</h3>
              <p className="text-gray-600 mb-4">
                Articles about Alberto's experience managing Type 1 Diabetes as a professional athlete.
              </p>
              <Link
                href="/news/category/diabetes"
                className="text-red-600 font-medium hover:text-red-800 inline-flex items-center"
              >
                View Articles <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Interviews</h3>
              <p className="text-gray-600 mb-4">
                Conversations with Alberto about his career, challenges, and aspirations in motorcycle racing.
              </p>
              <Link
                href="/news/category/interviews"
                className="text-red-600 font-medium hover:text-red-800 inline-flex items-center"
              >
                View Articles <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
