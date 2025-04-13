import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700">Legal</Badge>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: 13 April 2025</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <p>
            Alberto Beltrán García (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website.
          </p>

          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
            do not access the website.
          </p>

          <h2>1. Collection of Your Information</h2>

          <p>
            We may collect information about you in a variety of ways. The information we may collect via the website
            includes:
          </p>

          <h3>Personal Data</h3>

          <p>
            Personally identifiable information, such as your name, email address, telephone number, and demographic
            information that you voluntarily give to us when you register with the website or when you choose to
            participate in various activities related to the website, such as online chat, submitting contact forms, or
            subscribing to newsletters. You are under no obligation to provide us with personal information of any kind;
            however, your refusal to do so may prevent you from using certain features of the website.
          </p>

          <h3>Derivative Data</h3>

          <p>
            Information our servers automatically collect when you access the website, such as your IP address, browser
            type, operating system, access times, and the pages you have viewed directly before and after accessing the
            website.
          </p>

          <h3>Financial Data</h3>

          <p>
            Financial information, such as data related to your payment method (e.g., valid credit card number, card
            brand, expiration date) that we may collect when you purchase, order, or reserve products or services from
            our website. We store only very limited, if any, financial information that we collect. Otherwise, all
            financial information is stored by our payment processor, and you are encouraged to review their privacy
            policy and contact them directly for responses to your questions.
          </p>

          <h3>Data from Social Networks</h3>

          <p>
            User information from social networking sites, such as Instagram, Facebook, Twitter, including your name,
            social network username, location, gender, birth date, email address, profile picture, and public data for
            contacts, if you connect your account to such social networks.
          </p>

          <h2>2. Use of Your Information</h2>

          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customised
            experience. Specifically, we may use information collected about you via the website to:
          </p>

          <ul>
            <li>Create and manage your account</li>
            <li>Process your purchases and transactions</li>
            <li>Send you administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you marketing and promotional communications</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties</li>
            <li>
              Deliver targeted advertising, newsletters, and other information regarding promotions and the website to
              you
            </li>
            <li>Monitor and analyse usage and trends to improve your experience with the website</li>
            <li>Notify you of updates to the website</li>
            <li>Resolve disputes and troubleshoot problems</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>

          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>

          <h3>By Law or to Protect Rights</h3>

          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate
            or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we
            may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>

          <h3>Third-Party Service Providers</h3>

          <p>
            We may share your information with third parties that perform services for us or on our behalf, including
            payment processing, data analysis, email delivery, hosting services, customer service, and marketing
            assistance.
          </p>

          <h3>Marketing Communications</h3>

          <p>
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with
            third parties for marketing purposes.
          </p>

          <h3>Interactions with Other Users</h3>

          <p>
            If you interact with other users of the website, those users may see your name, profile photo, and
            descriptions of your activity.
          </p>

          <h3>Online Postings</h3>

          <p>
            When you post comments, contributions, or other content to the website, your posts may be viewed by all
            users and may be publicly distributed outside the website in perpetuity.
          </p>

          <h3>Business Transfers</h3>

          <p>
            We may share or transfer your information in connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our business to another company.
          </p>

          <h2>4. Security of Your Information</h2>

          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Cookies and Web Beacons</h2>

          <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help
            customise the website and improve your experience. When you access the website, your personal information is
            not collected through the use of tracking technology. Most browsers are set to accept cookies by default.
            You can remove or reject cookies, but be aware that such action could affect the availability and
            functionality of the website.
          </p>

          <h2>6. Children&apos;s Privacy</h2>

          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware
            of any data we have collected from children under age 13, please contact us using the contact information
            provided below.
          </p>

          <h2>7. Your Rights Regarding Your Data</h2>

          <p>
            You have certain rights regarding your personal data under the General Data Protection Regulation (GDPR) and
            other privacy laws:
          </p>

          <ul>
            <li>
              <strong>Right to Access</strong> - You have the right to request copies of your personal data.
            </li>
            <li>
              <strong>Right to Rectification</strong> - You have the right to request that we correct any information
              you believe is inaccurate or complete information you believe is incomplete.
            </li>
            <li>
              <strong>Right to Erasure</strong> - You have the right to request that we erase your personal data, under
              certain conditions.
            </li>
            <li>
              <strong>Right to Restrict Processing</strong> - You have the right to request that we restrict the
              processing of your personal data, under certain conditions.
            </li>
            <li>
              <strong>Right to Object to Processing</strong> - You have the right to object to our processing of your
              personal data, under certain conditions.
            </li>
            <li>
              <strong>Right to Data Portability</strong> - You have the right to request that we transfer the data that
              we have collected to another organisation, or directly to you, under certain conditions.
            </li>
          </ul>

          <p>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these
            rights, please contact us using the information provided below.
          </p>

          <h2>8. Contact Us</h2>

          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>

          <p>
            <a href="mailto:info@albertobeltran.com" className="text-red-600 hover:text-red-800">
              info@albertobeltran.com
            </a>
          </p>

          <div className="mt-12 pt-6 border-t">
            <p>
              By using this website, you acknowledge that you have read, understood, and agree to be bound by this
              Privacy Policy.
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
