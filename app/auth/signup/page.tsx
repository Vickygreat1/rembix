"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Users, Building2, Youtube, Instagram, TwitterIcon as TikTok } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") || "creator"
  const [userType, setUserType] = useState(defaultType)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    bio: "",
    niche: "",
    socialLinks: {
      youtube: "",
      instagram: "",
      tiktok: "",
    },
  })

  const handleNext = () => setStep(step + 1)
  const handlePrev = () => setStep(step - 1)

  const renderCreatorForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input id="firstName" placeholder="John" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-white">
                  Last Name
                </Label>
                <Input id="lastName" placeholder="Doe" className="bg-gray-800 border-gray-700 text-white" />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="bio" className="text-white">
                Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself and your content..."
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="niche" className="text-white">
                Content Niche
              </Label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select your niche" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="beauty">Beauty</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect Your Social Accounts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Youtube className="h-5 w-5 text-red-600" />
                <Input placeholder="YouTube channel URL" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-pink-600" />
                <Input placeholder="Instagram profile URL" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div className="flex items-center space-x-3">
                <TikTok className="h-5 w-5 text-white" />
                <Input placeholder="TikTok profile URL" className="bg-gray-800 border-gray-700 text-white" />
              </div>
            </div>
          </div>
        )
    }
  }

  const renderBrandForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="company" className="text-white">
                Company Name
              </Label>
              <Input id="company" placeholder="Acme Inc." className="bg-gray-800 border-gray-700 text-white" />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">
                Work Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label htmlFor="website" className="text-white">
                Company Website
              </Label>
              <Input
                id="website"
                placeholder="https://company.com"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="industry" className="text-white">
                Industry
              </Label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="health">Health & Wellness</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget" className="text-white">
                Monthly Marketing Budget
              </Label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k+">$25,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description" className="text-white">
                Company Description
              </Label>
              <Textarea
                id="description"
                placeholder="Tell us about your company and marketing goals..."
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-gray-800">
        <CardHeader className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-brand-red rounded-lg"></div>
            <span className="text-xl font-bold text-white">Rembix</span>
          </Link>
          <CardTitle className="text-2xl text-white">Join Rembix</CardTitle>
          <CardDescription className="text-gray-400">
            Step {step} of {userType === "creator" ? "3" : "2"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={userType} onValueChange={setUserType} className="mb-6">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger value="creator" className="flex items-center space-x-2 data-[state=active]:bg-brand-red">
                <Users className="h-4 w-4" />
                <span>Creator</span>
              </TabsTrigger>
              <TabsTrigger value="brand" className="flex items-center space-x-2 data-[state=active]:bg-brand-red">
                <Building2 className="h-4 w-4" />
                <span>Brand</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <form className="space-y-6">
            {userType === "creator" ? renderCreatorForm() : renderBrandForm()}

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-white">
                I agree to the{" "}
                <Link href="/terms" className="text-brand-red hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-brand-red hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <div className="flex justify-between">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrev}
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
              )}
              {step < (userType === "creator" ? 3 : 2) ? (
                <Button type="button" onClick={handleNext} className="ml-auto bg-brand-red hover:bg-red-700 text-white">
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Link href={`/dashboard/${userType}`} className="ml-auto">
                  <Button className="bg-brand-red hover:bg-red-700 text-white">Complete Registration</Button>
                </Link>
              )}
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-brand-red hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
