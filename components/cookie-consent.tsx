"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"

interface CookieSettings {
  necessary: boolean
  performance: boolean
  functional: boolean
  targeting: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    necessary: true, // Always true as these are essential
    performance: true,
    functional: true,
    targeting: false,
  })

  // Check if consent has been given previously
  useEffect(() => {
    const consentCookie = getCookie("cookie_consent")
    if (!consentCookie) {
      setShowBanner(true)
    } else {
      try {
        const savedSettings = JSON.parse(consentCookie)
        setCookieSettings(savedSettings)
      } catch (e) {
        // If there's an error parsing the cookie, show the banner again
        console.error("Error parsing cookie consent:", e)
        setShowBanner(true)
      }
    }
  }, [])

  const acceptAll = () => {
    const settings = {
      necessary: true,
      performance: true,
      functional: true,
      targeting: true,
    }
    setCookieSettings(settings)
    setShowBanner(false)
    setCookie("cookie_consent", JSON.stringify(settings), 365)
    applySettings(settings)
  }

  const rejectAll = () => {
    const settings = {
      necessary: true, // Necessary cookies are always enabled
      performance: false,
      functional: false,
      targeting: false,
    }
    setCookieSettings(settings)
    setShowBanner(false)
    setCookie("cookie_consent", JSON.stringify(settings), 365)
    applySettings(settings)
  }

  const saveSettings = () => {
    setShowBanner(false)
    setCookie("cookie_consent", JSON.stringify(cookieSettings), 365)
    applySettings(cookieSettings)
  }

  const applySettings = (settings: CookieSettings) => {
    // Apply the cookie settings
    // This would typically involve enabling/disabling various tracking scripts

    // Example: Google Analytics
    if (settings.performance) {
      enableGoogleAnalytics()
    } else {
      disableGoogleAnalytics()
    }

    // Example: Facebook Pixel
    if (settings.targeting) {
      enableFacebookPixel()
    } else {
      disableFacebookPixel()
    }
  }

  const enableGoogleAnalytics = () => {
    // Code to enable Google Analytics
    console.log("Google Analytics enabled")
  }

  const disableGoogleAnalytics = () => {
    // Code to disable Google Analytics
    console.log("Google Analytics disabled")
  }

  const enableFacebookPixel = () => {
    // Code to enable Facebook Pixel
    console.log("Facebook Pixel enabled")
  }

  const disableFacebookPixel = () => {
    // Code to disable Facebook Pixel
    console.log("Facebook Pixel disabled")
  }

  const handleChange = (category: keyof CookieSettings, value: boolean) => {
    setCookieSettings((prev) => ({
      ...prev,
      [category]: value,
    }))
  }

  // Helper function to set a cookie
  const setCookie = (name: string, value: string, days: number) => {
    let expires = ""
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax"
  }

  // Helper function to get a cookie
  const getCookie = (name: string): string | null => {
    const nameEQ = name + "="
    const ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === " ") c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
      {!showSettings ? (
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">We Value Your Privacy</h3>
              <p className="text-gray-600 text-sm">
                This website uses cookies to enhance your browsing experience, serve personalised ads or content, and
                analyse our traffic. By clicking "Accept All", you consent to our use of cookies. Visit our{" "}
                <Link href="/cookies" className="text-red-600 hover:text-red-800 underline">
                  Cookie Policy
                </Link>{" "}
                to learn more.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setShowSettings(true)}>
                Cookie Settings
              </Button>
              <Button variant="outline" onClick={rejectAll}>
                Reject All
              </Button>
              <Button className="bg-red-600 hover:bg-red-700" onClick={acceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold">Cookie Settings</h3>
            <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="essential" className="w-full mb-4">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="essential">Essential</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="functional">Functional</TabsTrigger>
              <TabsTrigger value="targeting">Targeting</TabsTrigger>
            </TabsList>
            <TabsContent value="essential" className="p-4 border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="necessary"
                    checked={cookieSettings.necessary}
                    disabled
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor="necessary" className="ml-2 text-sm font-medium text-gray-700">
                    Always Active
                  </label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="performance" className="p-4 border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">Performance Cookies</h4>
                  <p className="text-sm text-gray-600">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the
                    performance of our site.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="performance"
                    checked={cookieSettings.performance}
                    onChange={(e) => handleChange("performance", e.target.checked)}
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor="performance" className="ml-2 text-sm font-medium text-gray-700">
                    Active
                  </label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="functional" className="p-4 border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">Functional Cookies</h4>
                  <p className="text-sm text-gray-600">
                    These cookies enable the website to provide enhanced functionality and personalisation.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="functional"
                    checked={cookieSettings.functional}
                    onChange={(e) => handleChange("functional", e.target.checked)}
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor="functional" className="ml-2 text-sm font-medium text-gray-700">
                    Active
                  </label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="targeting" className="p-4 border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">Targeting Cookies</h4>
                  <p className="text-sm text-gray-600">
                    These cookies may be set through our site by our advertising partners to build a profile of your
                    interests.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="targeting"
                    checked={cookieSettings.targeting}
                    onChange={(e) => handleChange("targeting", e.target.checked)}
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <label htmlFor="targeting" className="ml-2 text-sm font-medium text-gray-700">
                    Active
                  </label>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={rejectAll}>
              Reject All
            </Button>
            <Button className="bg-red-600 hover:bg-red-700" onClick={saveSettings}>
              Save Preferences
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
