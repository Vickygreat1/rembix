"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Eye, Target, Clock, DollarSign, Users, TrendingUp, Play, Calendar } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { CampaignDetailsModal } from "@/components/campaign-details-modal"
import Image from "next/image"

const campaigns = [
  {
    id: 1,
    title: "Summer Fashion Collection",
    brand: "StyleCo",
    image: "/placeholder.svg?height=200&width=300",
    budget: 5000,
    payout: 3500,
    description: "Showcase our latest summer collection with authentic lifestyle content",
    category: "Fashion",
    deadline: "2024-02-15",
    requirements: ["18+ years old", "Fashion content", "Min 10K followers"],
    deliverables: ["3 Instagram posts", "5 Stories", "1 Reel"],
    compensation: "$500 - $1,500",
    status: "active",
  },
  {
    id: 2,
    title: "Tech Product Review",
    brand: "TechNova",
    image: "/placeholder.svg?height=200&width=300",
    budget: 8000,
    payout: 6000,
    description: "Create honest reviews of our latest smartphone",
    category: "Technology",
    deadline: "2024-02-20",
    requirements: ["Tech reviewer", "YouTube channel", "Min 50K subscribers"],
    deliverables: ["1 YouTube video", "3 Instagram posts"],
    compensation: "$1,000 - $2,500",
    status: "active",
  },
  {
    id: 3,
    title: "Fitness Challenge",
    brand: "FitLife",
    image: "/placeholder.svg?height=200&width=300",
    budget: 3000,
    payout: 2100,
    description: "30-day fitness transformation using our products",
    category: "Health & Fitness",
    deadline: "2024-03-01",
    requirements: ["Fitness content", "Before/after photos", "Min 5K followers"],
    deliverables: ["Daily stories", "Weekly posts", "Final transformation video"],
    compensation: "$300 - $800",
    status: "active",
  },
]

export default function MarketplacePage() {
  const [selectedCampaign, setSelectedCampaign] = useState<(typeof campaigns)[0] | null>(null)
  const [activeTab, setActiveTab] = useState("available")

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Campaign Marketplace</h1>
            <p className="text-gray-400 mt-1">Discover and apply to brand campaigns</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2.4M</div>
              <p className="text-xs text-gray-400">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Campaigns</CardTitle>
              <Target className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8</div>
              <p className="text-xs text-gray-400">3 pending approval</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">94%</div>
              <p className="text-xs text-gray-400">Campaign completion</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Avg. Rating</CardTitle>
              <Users className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">4.8</div>
              <p className="text-xs text-gray-400">From 127 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-800 text-white">
            <TabsTrigger value="available" className="data-[state=active]:bg-brand-red">
              Available Campaigns
            </TabsTrigger>
            <TabsTrigger value="applied" className="data-[state=active]:bg-brand-red">
              My Applications
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-brand-red">
              Active Campaigns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="available" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
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
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-white">{campaign.title}</CardTitle>
                        <CardDescription className="text-gray-400">{campaign.brand}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-300">{campaign.description}</p>

                    {/* Budget Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Budget Allocation</span>
                        <span className="text-white font-medium">
                          ${campaign.payout.toLocaleString()} / ${campaign.budget.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(campaign.payout / campaign.budget) * 100} className="h-2" />
                      <div className="text-xs text-gray-500">
                        {Math.round((campaign.payout / campaign.budget) * 100)}% allocated
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Due {campaign.deadline}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {campaign.compensation}
                      </div>
                    </div>

                    <Button
                      onClick={() => setSelectedCampaign(campaign)}
                      className="w-full bg-brand-red hover:bg-red-700 text-white"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applied" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Applications Yet</h3>
                <p className="text-gray-400">Start applying to campaigns to see your applications here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 text-center">
                <Play className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No Active Campaigns</h3>
                <p className="text-gray-400">Once you're accepted to campaigns, they'll appear here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {selectedCampaign && (
        <CampaignDetailsModal
          campaign={selectedCampaign}
          isOpen={!!selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
        />
      )}
    </DashboardLayout>
  )
}
