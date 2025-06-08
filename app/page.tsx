"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowRight,
  Play,
  Users,
  Target,
  DollarSign,
  TrendingUp,
  Star,
  CheckCircle,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Zap,
  Shield,
  Globe,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const typingTexts = ["UGC", "Clips", "Campaigns", "Collaboration"]
const trustedLogos = [
  { name: "TechCrunch", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Forbes", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Wired", logo: "/placeholder.svg?height=40&width=120" },
  { name: "The Verge", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Fast Company", logo: "/placeholder.svg?height=40&width=120" },
]

const campaigns = [
  {
    id: 1,
    title: "Summer Fashion Collection",
    brand: "StyleCo",
    image: "/placeholder.svg?height=200&width=300",
    budget: "$5,000",
    category: "Fashion",
    creators: 12,
    engagement: "4.2%",
  },
  {
    id: 2,
    title: "Tech Product Review",
    brand: "TechNova",
    image: "/placeholder.svg?height=200&width=300",
    budget: "$8,000",
    category: "Technology",
    creators: 8,
    engagement: "5.1%",
  },
  {
    id: 3,
    title: "Fitness Challenge",
    brand: "FitLife",
    image: "/placeholder.svg?height=200&width=300",
    budget: "$3,000",
    category: "Health",
    creators: 15,
    engagement: "6.8%",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Creator",
    avatar: "/placeholder.svg",
    content: "Rembix has transformed my career. I've earned over $50,000 in just 6 months!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Tech Reviewer",
    avatar: "/placeholder.svg",
    content: "The platform makes it so easy to find brands that align with my content. Highly recommended!",
    rating: 5,
  },
  {
    name: "Brand Manager at StyleCo",
    role: "Fashion Brand",
    avatar: "/placeholder.svg",
    content: "We've seen a 340% ROI on our campaigns. The creators are authentic and professional.",
    rating: 5,
  },
]

const faqs = [
  {
    question: "How do I get started as a creator?",
    answer:
      "Simply sign up, complete your profile, connect your social media accounts, and start applying to campaigns that match your niche.",
  },
  {
    question: "What types of brands can I work with?",
    answer:
      "We work with brands across all industries including fashion, beauty, tech, fitness, food, travel, and more.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Earnings vary based on your follower count, engagement rate, and niche. Creators typically earn $100-$10,000+ per campaign.",
  },
  {
    question: "When do I get paid?",
    answer: "Payments are processed within 7 days of campaign completion and approval of deliverables.",
  },
  {
    question: "Is there a fee to join?",
    answer:
      "No, it's completely free to join as a creator. We only take a small percentage when you complete paid campaigns.",
  },
]

export default function LandingPage() {
  const [currentText, setCurrentText] = useState(0)
  const [totalPayout, setTotalPayout] = useState(2400000)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPayout((prev) => prev + Math.floor(Math.random() * 100))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Navigation */}
      <nav className="bg-brand-black/95 backdrop-blur-sm text-white border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Rembix</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#how-it-works" className="hover:text-brand-red transition-colors">
                How It Works
              </Link>
              <Link href="#for-brands" className="hover:text-brand-red transition-colors">
                For Brands
              </Link>
              <Link href="#for-creators" className="hover:text-brand-red transition-colors">
                For Creators
              </Link>
              <Link href="#campaigns" className="hover:text-brand-red transition-colors">
                Live Campaigns
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-white hover:bg-gray-800">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-brand-red hover:bg-red-700 text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="mb-8">
            <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 mb-4">
              🚀 Powering 50,000+ Creators Worldwide
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Powering the Future of{" "}
            <span className="text-brand-red inline-block min-w-[200px] text-left">{typingTexts[currentText]}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate platform connecting creators with brands for authentic UGC campaigns. Create content, earn
            money, build your empire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/signup?type=creator">
              <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-4 group">
                Get Started as Creator
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/auth/signup?type=brand">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4"
              >
                Launch a Campaign
                <Target className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* 3D Globe Effect */}
          <div className="relative mx-auto w-64 h-64 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-600 rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute inset-4 bg-gradient-to-r from-brand-red/30 to-red-600/30 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <Globe
              className="absolute inset-0 m-auto h-32 w-32 text-brand-red animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 mb-8">Trusted by leading publications and brands</p>
          <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="hover:opacity-100 transition-opacity cursor-pointer">
                <Image
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Total Payouts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-red/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Real Money, Real Impact</h2>
          <div className="text-6xl md:text-8xl font-bold text-brand-red mb-8">${totalPayout.toLocaleString()}</div>
          <p className="text-xl text-gray-300 mb-12">Total paid out to creators and counting...</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">15,847</div>
                <p className="text-gray-400">Campaigns Completed</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">50,000+</div>
                <p className="text-gray-400">Active Creators</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">1,200+</div>
                <p className="text-gray-400">Brands Using Rembix</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Rembix Works</h2>
            <p className="text-xl text-gray-300">Get started in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 text-center group hover:bg-gray-800 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">1. Brands Launch Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Brands create campaigns with clear briefs, budgets, and requirements for authentic UGC content
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 text-center group hover:bg-gray-800 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">2. Creators Apply & Post</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Creators apply to campaigns and produce authentic content that resonates with their audience
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 text-center group hover:bg-gray-800 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">3. Get Views, Earn Money</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Earn money based on views and engagement. Fast, secure payments processed automatically
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Rembix Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Rembix?</h2>
            <p className="text-xl text-gray-300">Built for the modern creator economy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 group hover:border-brand-red/50 transition-colors">
              <CardHeader>
                <Zap className="h-8 w-8 text-brand-red mb-4" />
                <CardTitle className="text-white">Fair Creator Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Transparent, view-based earnings with no hidden fees. You create, you earn.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 group hover:border-brand-red/50 transition-colors">
              <CardHeader>
                <Target className="h-8 w-8 text-brand-red mb-4" />
                <CardTitle className="text-white">Smart Campaign Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  AI-powered matching connects you with brands that align with your content and audience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800 group hover:border-brand-red/50 transition-colors">
              <CardHeader>
                <Shield className="h-8 w-8 text-brand-red mb-4" />
                <CardTitle className="text-white">Automated Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Secure, automated payments processed within 7 days. No chasing invoices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Creators */}
      <section id="for-creators" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Sarah J.</CardTitle>
                  <CardDescription className="text-gray-400">Fashion Creator</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-red mb-2">$52,000</div>
                  <p className="text-gray-400">Earned in 6 months</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Mike C.</CardTitle>
                  <CardDescription className="text-gray-400">Tech Reviewer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-red mb-2">$38,500</div>
                  <p className="text-gray-400">Earned in 4 months</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Emma F.</CardTitle>
                  <CardDescription className="text-gray-400">Fitness Creator</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-red mb-2">$29,800</div>
                  <p className="text-gray-400">Earned in 3 months</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Alex T.</CardTitle>
                  <CardDescription className="text-gray-400">Travel Creator</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-brand-red mb-2">$41,200</div>
                  <p className="text-gray-400">Earned in 5 months</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">For Creators</h2>
              <p className="text-xl text-gray-300 mb-8">
                Turn your passion into profit. Work with top brands and earn money doing what you love.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Earn $100 - $10,000+ per campaign</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Work with brands you love</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Fast payments within 7 days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Keep 100% creative control</span>
                </div>
              </div>
              <Link href="/auth/signup?type=creator">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  Start Earning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands */}
      <section id="for-brands" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">For Brands</h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with authentic creators who truly understand your brand and can drive real results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Access to 50,000+ verified creators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Advanced targeting and filtering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Real-time campaign analytics and ROI tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-red" />
                  <span className="text-white">Average 340% ROI on campaigns</span>
                </div>
              </div>
              <Link href="/auth/signup?type=brand">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-red mb-2">340%</div>
                  <p className="text-gray-400">Average ROI</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-red mb-2">50K+</div>
                  <p className="text-gray-400">Creators</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-red mb-2">2.4M</div>
                  <p className="text-gray-400">Total Reach</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-red mb-2">4.8%</div>
                  <p className="text-gray-400">Avg Engagement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Campaigns */}
      <section id="campaigns" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Live Campaigns</h2>
            <p className="text-xl text-gray-300">Join these trending campaigns now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <Card
                key={campaign.id}
                className="bg-gray-900 border-gray-800 hover:border-brand-red/50 transition-colors group"
              >
                <div className="relative">
                  <Image
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-brand-red text-white">{campaign.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{campaign.title}</CardTitle>
                  <CardDescription className="text-gray-400">{campaign.brand}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-brand-red" />
                      <span className="font-medium text-white">{campaign.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-brand-red" />
                      <span className="text-sm text-gray-400">{campaign.creators} creators</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-brand-red" />
                      <span className="text-sm text-gray-400">{campaign.engagement} avg engagement</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-brand-red hover:bg-red-700 text-white group-hover:scale-105 transition-transform"
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/auth/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                View All Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-300">Real stories from creators and brands</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-brand-red/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900 border-gray-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-brand-red">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-red/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators and brands already building the future with Rembix
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup?type=creator">
              <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white text-lg px-8 py-4 group">
                Join as Creator
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/auth/signup?type=brand">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4"
              >
                Join as Brand
                <Target className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Rembix</span>
              </div>
              <p className="text-gray-400 mb-4">
                The ultimate platform connecting creators with brands for authentic UGC campaigns.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-brand-red cursor-pointer transition-colors" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-brand-red cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-brand-red cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 text-gray-400 hover:text-brand-red cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Creators</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Creator Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Payment Info
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Brands</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Campaign Creation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rembix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
