"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  MapPin,
  Calendar,
  Users,
  MessageSquare,
  Newspaper,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/alberto-hero.png"
            alt="Contact Alberto"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">Contact</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Have a question or proposal? We're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Complete the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full name <span className="text-red-600">*</span>
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <Input id="subject" placeholder="What would you like to discuss?" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="privacy" className="rounded border-gray-300" required />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I have read and accept the{" "}
                    <Link href="/privacy" className="text-red-600 hover:text-red-800">
                      privacy policy
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can contact us directly through the following channels or use the form above.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a href="mailto:info@albertobeltran.com" className="text-red-600 hover:text-red-800">
                      info@albertobeltran.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sponsorships</h3>
                    <p className="text-gray-600 mb-1">For sponsorship opportunities:</p>
                    <a href="mailto:sponsors@albertobeltran.com" className="text-red-600 hover:text-red-800">
                      sponsors@albertobeltran.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Newspaper className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Press</h3>
                    <p className="text-gray-600 mb-1">For media inquiries:</p>
                    <a href="mailto:media@albertobeltran.com" className="text-red-600 hover:text-red-800">
                      media@albertobeltran.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600 mb-1">By appointment only:</p>
                    <p className="text-gray-800">+34 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-gray-600">Xàtiva, Valencia, Spain</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-bold text-lg mb-4">Follow Us on Social Media</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://instagram.com/albertobeltrangarcia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Instagram className="h-8 w-8 text-pink-600" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Facebook className="h-8 w-8 text-blue-600" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    {/* Keeping those social media links for the future */}
                    {/* <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Twitter className="h-8 w-8 text-sky-500" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Youtube className="h-8 w-8 text-red-600" />
                      <span className="sr-only">YouTube</span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-red-600 hover:bg-red-700">Sponsorships</Badge>
            <h2 className="text-3xl font-bold mb-4">Sponsorship Opportunities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join Alberto's journey and connect your brand with an inspiring story of overcoming challenges and sporting success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center text-red-600 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate Sponsorship</h3>
              <p className="text-gray-600 mb-6">
                Opportunities for companies wishing to associate their brand with the values of effort, perseverance and
                excellence that Alberto represents.
              </p>
              <Link href="/sponsors" passHref>
                <Button variant="outline" className="w-full">
                  More Information
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center text-red-600 mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Events and Appearances</h3>
              <p className="text-gray-600 mb-6">
                Book Alberto for corporate events, motivational talks or special appearances
                related to sport or diabetes.
              </p>
              <Link href="/sponsors#events" passHref>
                <Button variant="outline" className="w-full">
                  More Information
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center text-red-600 mb-6">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborations</h3>
              <p className="text-gray-600 mb-6">
                Explore possibilities for collaboration on special projects, diabetes awareness campaigns or sporting initiatives.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/sponsors" passHref>
              <Button className="bg-red-600 hover:bg-red-700">View All Opportunities</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-red-600 hover:bg-red-700">Frequently Asked Questions</Badge>
            <h2 className="text-3xl font-bold mb-4">Answers to Your Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Find answers to the most common questions about Alberto, sponsorships and collaborations.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How can I sponsor Alberto?</AccordionTrigger>
              <AccordionContent>
                We offer different sponsorship packages adapted to various budgets and objectives. You can
                find more information on our{" "}
                <Link href="/sponsors" className="text-red-600 hover:text-red-800">
                  Sponsors
                </Link>{" "}
                page or contact us directly through the form on this page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is Alberto available for events or talks?</AccordionTrigger>
              <AccordionContent>
                Yes, Alberto is available for corporate events, motivational talks and special appearances,
                especially those related to sport, personal development or diabetes awareness. Contact us with the details of your event to check availability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How does Alberto manage diabetes during competitions?</AccordionTrigger>
              <AccordionContent>
                Alberto follows a rigorous medical and nutritional protocol before, during, and after each race.
                He works with a team of specialised professionals who help him maintain optimal glucose levels
                whilst competing at the highest level. His experience demonstrates that Type 1 Diabetes is not
                an obstacle to reaching elite sporting levels.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I purchase official Alberto merchandise?</AccordionTrigger>
              <AccordionContent>
                Yes, you can purchase official Alberto merchandise in our{" "}
                <Link href="/shop" className="text-red-600 hover:text-red-800">
                  online shop
                </Link>
                . Each purchase directly contributes to supporting Alberto's racing career.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I follow Alberto's career?</AccordionTrigger>
              <AccordionContent>
                You can follow Alberto on his social media for daily updates, check the{" "}
                <Link href="/news" className="text-red-600 hover:text-red-800">
                  News
                </Link>{" "}
                section of this website for more detailed information, or subscribe to our newsletter to receive
                the latest updates directly in your email inbox.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Alberto's journey towards success in the R3 Blu Cru de España and the ESBK SSP 300 Championship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sponsors" passHref>
              <Button variant="secondary" size="lg" className="font-medium">
                Become a Sponsor
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-red-600 font-medium"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
