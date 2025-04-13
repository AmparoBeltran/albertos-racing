import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, User, ChevronLeft, ChevronRight, Share2, Facebook, Linkedin } from "lucide-react"
import NewsCard from "@/components/news-card"

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>
}

export default function NewsArticlePage({ /* params */ }: NewsArticlePageProps) {
  const article = {
    title: "Alberto Achieves Fastest Lap at R3 bLU cRU Challenge Final in Estoril",
    date: "October 15, 2024",
    author: "Team Alberto",
    category: "Race Results",
    imageUrl: "/images/news/articles/placeholder-400x600.svg",
    content: `
      <p class="text-lg mb-4">Despite challenging weather conditions and a crash in free practice, Alberto Beltrán García demonstrated exceptional skill and determination by recording the fastest lap time in the R3 bLU cRU Challenge final at the Superbike World Championship in Estoril.</p>
      
      <p class="mb-4">The weekend started with difficult conditions as rain affected the practice sessions. During free practice, Alberto unfortunately suffered a crash due to the wet track. However, showing the resilience that has defined his career, he quickly recovered and worked with his team to prepare for the final race.</p>
      
      <p class="mb-4">"The conditions were really challenging," Alberto commented after the race. "After the crash in practice, I had to refocus and trust in my abilities. My team did an amazing job getting the bike ready, and I was determined to show what we could do."</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Race Day Performance</h3>
      
      <p class="mb-4">As the track dried for the final race, Alberto found his rhythm and pushed his Yamaha R3 to its limits. His technical precision and bold racing style were on full display as he navigated the demanding Estoril circuit with impressive speed.</p>
      
      <p class="mb-4">The highlight of the weekend came when Alberto recorded a blistering lap time of 1:56,361 on his stock Yamaha, the fastest of any competitor in the final. This achievement is particularly notable given the setbacks earlier in the weekend.</p>
      
      <p class="mb-4">"To set the fastest lap in the final after what happened in practice is something I'm really proud of," Alberto said. "It shows that we have the pace and the potential to compete at this level."</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Managing Diabetes During the Race</h3>
      
      <p class="mb-4">As always, Alberto had to carefully manage his Type 1 Diabetes throughout the race weekend. The additional stress of the crash and changing weather conditions presented extra challenges, but his meticulous preparation and experience allowed him to maintain optimal blood glucose levels during the high-intensity final.</p>
      
      <p class="mb-4">"Managing diabetes is always part of my race strategy," Alberto explained. "We have protocols in place for different scenarios, including recovery from crashes. It's just another aspect of racing for me now, and I'm grateful to have a team that understands and supports this part of my journey."</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Looking Ahead</h3>
      
      <p class="mb-4">This performance at Estoril caps off an impressive 2024 season for Alberto, in which he secured second place in the national Yamaha R3 Cup. The fastest lap achievement at the international level provides valuable momentum as he prepares for the 2025 season.</p>
      
      <p class="mb-4">Alberto will now focus on his preparation for the upcoming R3 Blu Cru de España and ESBK SSP 300 Championship, where he aims to build on this year's successes and continue his upward trajectory in motorcycle racing.</p>
      
      <p class="mb-4">"This result gives us confidence heading into the off-season," Alberto concluded. "We know we have the speed to compete with the best, and now it's about putting together the complete package for 2025. I'm excited about what we can achieve next year."</p>
    `,
  }

  // Related articles
  const relatedArticles = [
    {
      title: "Securing 2nd Place in National Yamaha R3 Cup",
      date: "September 28, 2024",
      excerpt:
        "Alberto's exceptional performance throughout the season earned him second place in the national Yamaha R3 Cup.",
      imageUrl: "/images/news/articles/placeholder-400x600.svg",
      slug: "second-place-yamaha-r3-cup",
      category: "Championship",
    },
    {
      title: "Training Camp in Preparation for Estoril",
      date: "July 18, 2024",
      excerpt:
        "Alberto completes an intensive two-week training camp focused on physical conditioning and mental preparation.",
      imageUrl: "/images/news/articles/placeholder-400x600.svg",
      slug: "training-camp-estoril",
      category: "Training",
    },
    {
      title: "Managing Type 1 Diabetes on Race Day",
      date: "August 22, 2024",
      excerpt: "Alberto reveals his strategies for managing Type 1 Diabetes during high-intensity races.",
      imageUrl: "/images/news/articles/placeholder-400x600.svg",
      slug: "managing-diabetes-race-day",
      category: "Health",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <section className="pt-12 pb-8 px-4 md:px-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <Link href="/news" className="inline-flex items-center text-gray-600 hover:text-red-600">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to News
            </Link>
          </div>
          <Badge className="mb-4 bg-red-600 hover:bg-red-700">{article.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{article.author}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium">Share:</span>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-white shadow-md hover:shadow-lg transition-shadow">
              <Facebook className="h-4 w-4 text-blue-600" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
            {/* Keeping Twitter share for the future */}
            {/* <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-white shadow-md hover:shadow-lg transition-shadow">
              <Twitter className="h-4 w-4 text-sky-500" />
              <span className="sr-only">Share on Twitter</span>
            </Button> */}
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-white shadow-md hover:shadow-lg transition-shadow">
              <Linkedin className="h-4 w-4 text-blue-700" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-white shadow-md hover:shadow-lg transition-shadow">
              <Share2 className="h-4 w-4 text-gray-600" />
              <span className="sr-only">Share via link</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/news/articles/placeholder-400x600.svg" alt={article.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></article>

          <div className="border-t border-b py-6 my-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src="/images/about/profile/placeholder-50x50.svg" alt="Author" fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-gray-600">Alberto's Racing Team</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Share this article:</span>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-white shadow-md hover:shadow-lg transition-shadow">
                <Facebook className="h-4 w-4 text-blue-600" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              {/* Keeping Twitter share for the future */}
              {/* <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-white shadow-md hover:shadow-lg transition-shadow">
                <Twitter className="h-4 w-4 text-sky-500" />
                <span className="sr-only">Share on Twitter</span>
              </Button> */}
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8 bg-white shadow-md hover:shadow-lg transition-shadow">
                <Share2 className="h-4 w-4 text-gray-600" />
                <span className="sr-only">Share via link</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                date={article.date}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                slug={article.slug}
                category={article.category}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-between">
            <Link href="#" className="inline-flex items-center text-gray-600 hover:text-red-600">
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous Article
            </Link>
            <Link href="#" className="inline-flex items-center text-gray-600 hover:text-red-600">
              Next Article <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 px-4 md:px-6 bg-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Alberto's Journey</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, race updates, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md flex-grow bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-red-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
