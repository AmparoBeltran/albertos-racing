import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700">Legal</Badge>
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-lg text-gray-600">Last updated: 13 April 2025</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <p>
            Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before using the
            website operated by Alberto Beltrán García (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>

          <p>
            Your access to and use of the website is conditioned on your acceptance of and compliance with these Terms.
            These Terms apply to all visitors, users, and others who access or use the website.
          </p>

          <p>
            By accessing or using the website, you agree to be bound by these Terms. If you disagree with any part of
            the terms, then you may not access the website.
          </p>

          <h2>1. Use of the Website</h2>

          <p>
            The Alberto Beltrán García website is provided for informational and promotional purposes. By accessing our
            website, you agree to use it only for lawful purposes and in a manner that does not infringe upon or
            restrict anyone else&apos;s use and enjoyment of the website.
          </p>

          <p>You agree not to use the website:</p>

          <ul>
            <li>In any way that breaches any applicable local, national, or international law or regulation</li>
            <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect</li>
            <li>
              To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional
              material
            </li>
            <li>
              To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms,
              time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code
              designed to adversely affect the operation of any computer software or hardware
            </li>
          </ul>

          <h2>2. Intellectual Property</h2>

          <p>
            The website and its original content, features, and functionality are and will remain the exclusive property
            of Alberto Beltrán García and his licensors. The website is protected by copyright, trademark, and other
            laws of both Spain and foreign countries. Our trademarks and trade dress may not be used in connection with
            any product or service without the prior written consent of Alberto Beltrán García.
          </p>

          <p>
            All photographs, videos, text, and other content provided on this website are protected by copyright laws
            and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior
            written permission of Alberto Beltrán García or, in the case of third-party materials, the respective
            copyright owner.
          </p>

          <h2>3. Links to Other Websites</h2>

          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by
            Alberto Beltrán García.
          </p>

          <p>
            Alberto Beltrán García has no control over, and assumes no responsibility for, the content, privacy
            policies, or practices of any third-party websites or services. You further acknowledge and agree that
            Alberto Beltrán García shall not be responsible or liable, directly or indirectly, for any damage or loss
            caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods,
            or services available on or through any such websites or services.
          </p>

          <p>
            We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or
            services that you visit.
          </p>

          <h2>4. User-Generated Content</h2>

          <p>
            Users may have the opportunity to submit comments, suggestions, or other feedback on our website or social
            media channels. By submitting such content, you grant Alberto Beltrán García a worldwide, non-exclusive,
            royalty-free licence to use, reproduce, modify, adapt, publish, translate, create derivative works from,
            distribute, and display such content in any media.
          </p>

          <p>You represent and warrant that:</p>

          <ul>
            <li>You own the content you submit or have the right to grant the licence described above</li>
            <li>
              Your content does not violate the privacy rights, publicity rights, copyright rights, or other rights of
              any person
            </li>
            <li>
              Your content does not contain any material that is defamatory, obscene, indecent, abusive, offensive,
              harassing, violent, hateful, inflammatory, or otherwise objectionable
            </li>
          </ul>

          <p>
            We reserve the right to remove any content that violates these Terms or that we find objectionable for any
            reason, without prior notice.
          </p>

          <h2>5. E-commerce and Purchases</h2>

          <p>
            Certain features of the website may allow you to purchase products or services. If you wish to purchase any
            product or service made available through the website, you may be asked to supply certain information
            relevant to your purchase, including your credit card number, the expiration date of your credit card, your
            billing address, and your shipping information.
          </p>

          <p>You represent and warrant that:</p>

          <ul>
            <li>
              You have the legal right to use any credit card(s) or other payment method(s) in connection with any
              purchase
            </li>
            <li>The information you supply to us is true, correct, and complete</li>
          </ul>

          <p>
            We reserve the right to refuse or cancel your order at any time for certain reasons, including but not
            limited to product or service availability, errors in the description or price of the product or service,
            error in your order, or other reasons.
          </p>

          <h2>6. Disclaimer of Warranties</h2>

          <p>
            The website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Alberto Beltrán García
            expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to,
            the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <p>Alberto Beltrán García makes no warranty that:</p>

          <ul>
            <li>The website will meet your requirements</li>
            <li>The website will be uninterrupted, timely, secure, or error-free</li>
            <li>The results that may be obtained from the use of the website will be accurate or reliable</li>
            <li>
              The quality of any products, services, information, or other material purchased or obtained by you through
              the website will meet your expectations
            </li>
          </ul>

          <h2>7. Limitation of Liability</h2>

          <p>
            In no event shall Alberto Beltrán García, nor his suppliers, partners, or affiliates, be liable for any
            indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of
            profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>

          <ul>
            <li>Your access to or use of or inability to access or use the website</li>
            <li>Any conduct or content of any third party on the website</li>
            <li>Any content obtained from the website</li>
            <li>Unauthorised access, use, or alteration of your transmissions or content</li>
          </ul>

          <p>
            Whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not
            we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to
            have failed of its essential purpose.
          </p>

          <h2>8. Indemnification</h2>

          <p>
            You agree to defend, indemnify, and hold harmless Alberto Beltrán García, his affiliates, licensors, and
            service providers, and his respective officers, directors, employees, contractors, agents, licensors,
            suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
            losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to
            your violation of these Terms of Use or your use of the website.
          </p>

          <h2>9. Governing Law</h2>

          <p>
            These Terms shall be governed and construed in accordance with the laws of Spain, without regard to its
            conflict of law provisions.
          </p>

          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect.
          </p>

          <h2>10. Changes to Terms</h2>

          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>

          <p>
            By continuing to access or use our website after those revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, please stop using the website.
          </p>

          <h2>11. Contact Us</h2>

          <p>If you have any questions about these Terms, please contact us at:</p>

          <p>
            <a href="mailto:info@albertobeltran.com" className="text-red-600 hover:text-red-800">
              info@albertobeltran.com
            </a>
          </p>

          <div className="mt-12 pt-6 border-t">
            <p>
              By using this website, you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Use.
            </p>
            <div className="flex justify-center mt-8">
              <Link href="/" className="text-red-600 hover:text-red-800 font-medium">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
