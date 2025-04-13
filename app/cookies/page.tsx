import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700">Legal</Badge>
          <h1 className="text-4xl font-bold mb-4">Cookies Policy</h1>
          <p className="text-lg text-gray-600">Last updated: 13 April 2025</p>
        </div>
      </section>

      {/* Cookies Content */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <h2>Introduction</h2>
          <p>
            This Cookies Policy explains what cookies are and how Alberto Beltrán García (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) uses them on our website. We encourage you to read this policy in full
            so that you can understand what information we collect using cookies and how that information is used.
          </p>

          <h3>What are cookies?</h3>
          <p>
            Cookies are text files containing small amounts of information which are downloaded to your device when you
            visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to
            another website that recognises that cookie. Cookies are useful because they allow a website to recognise a
            user&apos;s device and provide a tailored experience.
          </p>

          <p>
            You can find more information about cookies at:{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              www.allaboutcookies.org
            </a>{" "}
            and{" "}
            <a
              href="https://www.youronlinechoices.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              www.youronlinechoices.eu
            </a>
            .
          </p>

          <h2>Types of Cookies We Use</h2>
          <p>
            The cookies used on our website have been categorised based on the categories found in the International
            Chamber of Commerce (ICC) UK Cookie Guide. We use the following categories of cookies:
          </p>

          <h3>1. Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential in order to enable you to move around the website and use its features, such as
            accessing secure areas of the website. Without these cookies, services you have asked for, like shopping
            baskets or e-billing, cannot be provided.
          </p>

          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                <th className="border border-gray-300 p-2 text-left">Purpose</th>
                <th className="border border-gray-300 p-2 text-left">Duration</th>
                <th className="border border-gray-300 p-2 text-left">First/Third Party</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">session_id</td>
                <td className="border border-gray-300 p-2">
                  Maintains your session while you browse the website, allowing you to use the shopping cart and
                  checkout process.
                </td>
                <td className="border border-gray-300 p-2">Session</td>
                <td className="border border-gray-300 p-2">First Party</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">XSRF-TOKEN</td>
                <td className="border border-gray-300 p-2">
                  Helps protect against Cross-Site Request Forgery (CSRF) attacks.
                </td>
                <td className="border border-gray-300 p-2">Session</td>
                <td className="border border-gray-300 p-2">First Party</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">cookie_consent</td>
                <td className="border border-gray-300 p-2">Stores your cookie preferences to respect your choices.</td>
                <td className="border border-gray-300 p-2">1 year</td>
                <td className="border border-gray-300 p-2">First Party</td>
              </tr>
            </tbody>
          </table>

          <h3>2. Performance Cookies</h3>
          <p>
            These cookies collect information about how visitors use a website, for instance which pages visitors go to
            most often, and if they get error messages from web pages. These cookies don&apos;t collect information that
            identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is
            only used to improve how a website works.
          </p>

          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                <th className="border border-gray-300 p-2 text-left">Purpose</th>
                <th className="border border-gray-300 p-2 text-left">Duration</th>
                <th className="border border-gray-300 p-2 text-left">First/Third Party</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">_ga</td>
                <td className="border border-gray-300 p-2">
                  Used by Google Analytics to distinguish users and analyse website usage.
                </td>
                <td className="border border-gray-300 p-2">2 years</td>
                <td className="border border-gray-300 p-2">Third Party (Google)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_gid</td>
                <td className="border border-gray-300 p-2">
                  Used by Google Analytics to distinguish users within a 24-hour period.
                </td>
                <td className="border border-gray-300 p-2">24 hours</td>
                <td className="border border-gray-300 p-2">Third Party (Google)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_gat</td>
                <td className="border border-gray-300 p-2">Used by Google Analytics to throttle request rate.</td>
                <td className="border border-gray-300 p-2">1 minute</td>
                <td className="border border-gray-300 p-2">Third Party (Google)</td>
              </tr>
            </tbody>
          </table>

          <h3>3. Functionality Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your user name, language or the region
            you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes
            you have made to text size, fonts and other parts of web pages that you can customise. They may also be used
            to provide services you have asked for such as watching a video or commenting on a blog.
          </p>

          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                <th className="border border-gray-300 p-2 text-left">Purpose</th>
                <th className="border border-gray-300 p-2 text-left">Duration</th>
                <th className="border border-gray-300 p-2 text-left">First/Third Party</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">language</td>
                <td className="border border-gray-300 p-2">Remembers your preferred language setting.</td>
                <td className="border border-gray-300 p-2">1 year</td>
                <td className="border border-gray-300 p-2">First Party</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">theme</td>
                <td className="border border-gray-300 p-2">Remembers your preferred theme (light/dark mode).</td>
                <td className="border border-gray-300 p-2">1 year</td>
                <td className="border border-gray-300 p-2">First Party</td>
              </tr>
            </tbody>
          </table>

          <h3>4. Targeting or Advertising Cookies</h3>
          <p>
            These cookies are used to deliver adverts more relevant to you and your interests. They are also used to
            limit the number of times you see an advertisement as well as help measure the effectiveness of the
            advertising campaigns. They are usually placed by advertising networks with the website operator&apos;s
            permission. They remember that you have visited a website and this information is shared with other
            organisations such as advertisers.
          </p>

          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Cookie Name</th>
                <th className="border border-gray-300 p-2 text-left">Purpose</th>
                <th className="border border-gray-300 p-2 text-left">Duration</th>
                <th className="border border-gray-300 p-2 text-left">First/Third Party</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">_fbp</td>
                <td className="border border-gray-300 p-2">
                  Used by Facebook to deliver advertisements when users are on Facebook or a digital platform powered by
                  Facebook advertising.
                </td>
                <td className="border border-gray-300 p-2">3 months</td>
                <td className="border border-gray-300 p-2">Third Party (Facebook)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">_gcl_au</td>
                <td className="border border-gray-300 p-2">
                  Used by Google AdSense for experimenting with advertisement efficiency.
                </td>
                <td className="border border-gray-300 p-2">3 months</td>
                <td className="border border-gray-300 p-2">Third Party (Google)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">IDE</td>
                <td className="border border-gray-300 p-2">
                  Used by Google DoubleClick to register and report user actions after viewing or clicking on
                  advertisements.
                </td>
                <td className="border border-gray-300 p-2">1 year</td>
                <td className="border border-gray-300 p-2">Third Party (Google)</td>
              </tr>
            </tbody>
          </table>

          <h2>Third-Party Cookies</h2>
          <p>
            In some special cases, we also use cookies provided by trusted third parties. The following section details
            which third-party cookies you might encounter through this site.
          </p>

          <ul>
            <li>
              <strong>Google Analytics</strong>: This site uses Google Analytics which is one of the most widespread and
              trusted analytics solutions on the web for helping us to understand how you use the site and ways that we
              can improve your experience. These cookies may track things such as how long you spend on the site and the
              pages that you visit so we can continue to produce engaging content. For more information on Google
              Analytics cookies, see the official{" "}
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                Google Analytics page
              </a>
              .
            </li>
            <li>
              <strong>Facebook</strong>: We use Facebook pixels to deliver advertisements when users are on Facebook or
              a digital platform powered by Facebook advertising. For more information on Facebook cookies, see the
              official{" "}
              <a
                href="https://www.facebook.com/policies/cookies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                Facebook Cookie Policy
              </a>
              .
            </li>
            <li>
              <strong>Payment Processors</strong>: When you make a purchase on our site, we use payment processors like
              PayPal or Stripe who may also set cookies to ensure your transaction is secure. For more information,
              please refer to their respective privacy policies.
            </li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
            computer and you can set most browsers to prevent them from being placed. If you do this, however, you may
            have to manually adjust some preferences every time you visit a site and some services and functionalities
            may not work.
          </p>

          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. To find out more about
            cookies, including how to see what cookies have been set, visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>

          <p>Find out how to manage cookies on popular browsers:</p>
          <ul>
            <li>
              <a
                href="https://support.google.com/accounts/answer/61416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800"
              >
                Safari
              </a>
            </li>
          </ul>

          <h3>Opt-Out of Third-Party Cookies</h3>
          <p>
            You can opt-out of third-party cookies by visiting the Network Advertising Initiative opt-out page at{" "}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800"
            >
              https://optout.networkadvertising.org/
            </a>
            .
          </p>

          <h3>Impact of Disabling Cookies</h3>
          <p>
            Please note that if you choose to disable cookies, some areas of our website may not work properly. For
            example:
          </p>
          <ul>
            <li>You will not be able to stay logged in to your account</li>
            <li>Shopping cart functionality may be impaired</li>
            <li>Personalised content and preferences will not be remembered</li>
          </ul>

          <h2>Policy Updates</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>

          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>

          <p>
            <a href="mailto:info@albertobeltran.com" className="text-red-600 hover:text-red-800">
              info@albertobeltran.com
            </a>
          </p>

          <div className="mt-12 pt-6 border-t">
            <p>
              By using this website, you acknowledge that you have read, understood, and agree to be bound by this
              Cookies Policy.
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
