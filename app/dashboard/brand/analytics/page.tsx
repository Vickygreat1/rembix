"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TrendingUp, TrendingDown, Eye, Heart, DollarSign, Target } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const performanceData = [
  { month: "Jan", reach: 45000, engagement: 3200, conversions: 180 },
  { month: "Feb", reach: 52000, engagement: 3800, conversions: 220 },
  { month: "Mar", reach: 48000, engagement: 3500, conversions: 195 },
  { month: "Apr", reach: 61000, engagement: 4200, conversions: 280 },
  { month: "May", reach: 58000, engagement: 4000, conversions: 265 },
  { month: "Jun", reach: 67000, engagement: 4800, conversions: 320 },
]

const campaignData = [
  { name: "Summer Fashion", budget: 5000, spent: 4200, roi: 340 },
  { name: "Tech Reviews", budget: 8000, spent: 7500, roi: 420 },
  { name: "Fitness Challenge", budget: 3000, spent: 2800, roi: 280 },
  { name: "Beauty Launch", budget: 6000, spent: 5200, roi: 380 },
]

const platformData = [
  { name: "Instagram", value: 45, color: "#E1306C" },
  { name: "TikTok", value: 30, color: "#000000" },
  { name: "YouTube", value: 20, color: "#FF0000" },
  { name: "Twitter", value: 5, color: "#1DA1F2" },
]

export default function AnalyticsPage() {
  return (
    <DashboardLayout userType="brand">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-gray-400 mt-1">Track your campaign performance and ROI</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Reach</CardTitle>
              <Eye className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2.4M</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">4.8%</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +0.3% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3.2%</div>
              <div className="flex items-center text-xs text-red-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -0.1% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Average ROI</CardTitle>
              <DollarSign className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">340%</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +25% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-800 text-white">
            <TabsTrigger value="overview" className="data-[state=active]:bg-brand-red">
              Overview
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="data-[state=active]:bg-brand-red">
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="creators" className="data-[state=active]:bg-brand-red">
              Creators
            </TabsTrigger>
            <TabsTrigger value="platforms" className="data-[state=active]:bg-brand-red">
              Platforms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Chart */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Performance Trends</CardTitle>
                  <CardDescription className="text-gray-400">
                    Reach, engagement, and conversions over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#666666" />
                      <XAxis dataKey="month" stroke="#666666" />
                      <YAxis stroke="#666666" />
                      <Tooltip />
                      <Line type="monotone" dataKey="reach" stroke="#FF0000" strokeWidth={2} />
                      <Line type="monotone" dataKey="engagement" stroke="#FFFFFF" strokeWidth={2} />
                      <Line type="monotone" dataKey="conversions" stroke="#666666" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Platform Distribution */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Platform Distribution</CardTitle>
                  <CardDescription className="text-gray-400">Campaign reach by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Top Performing Content */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Content</CardTitle>
                <CardDescription className="text-gray-400">
                  Your best performing campaign content this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      creator: "Sarah Johnson",
                      campaign: "Summer Fashion",
                      reach: "125K",
                      engagement: "8.2K",
                      roi: "420%",
                    },
                    { creator: "Mike Chen", campaign: "Tech Reviews", reach: "89K", engagement: "6.8K", roi: "380%" },
                    {
                      creator: "Emma Fitness",
                      campaign: "Fitness Challenge",
                      reach: "67K",
                      engagement: "5.1K",
                      roi: "340%",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg border-gray-800"
                    >
                      <div>
                        <p className="font-medium text-white">{item.creator}</p>
                        <p className="text-sm text-gray-400">{item.campaign}</p>
                      </div>
                      <div className="flex space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-white">{item.reach}</p>
                          <p className="text-gray-500">Reach</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-white">{item.engagement}</p>
                          <p className="text-gray-500">Engagement</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-green-600">{item.roi}</p>
                          <p className="text-gray-500">ROI</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Campaign Performance</CardTitle>
                <CardDescription className="text-gray-400">Budget utilization and ROI by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={campaignData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#666666" />
                    <XAxis dataKey="name" stroke="#666666" />
                    <YAxis stroke="#666666" />
                    <Tooltip />
                    <Bar dataKey="budget" fill="#FF0000" name="Budget" />
                    <Bar dataKey="spent" fill="#FFFFFF" name="Spent" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {campaignData.map((campaign, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-white">{campaign.name}</CardTitle>
                      <Badge className="bg-brand-red text-white">{campaign.roi}% ROI</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Budget Utilization</span>
                        <span className="text-white">
                          ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <p className="font-medium text-white">12</p>
                        <p className="text-gray-500">Creators</p>
                      </div>
                      <div>
                        <p className="font-medium text-white">45</p>
                        <p className="text-gray-500">Posts</p>
                      </div>
                      <div>
                        <p className="font-medium text-white">2.1M</p>
                        <p className="text-gray-500">Reach</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creators" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Creator Performance</CardTitle>
                <CardDescription className="text-gray-400">
                  Top performing creators across all campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Johnson", campaigns: 8, avgRoi: "420%", totalReach: "1.2M", rating: 4.9 },
                    { name: "Mike Chen", campaigns: 5, avgRoi: "380%", totalReach: "890K", rating: 4.8 },
                    { name: "Emma Fitness", campaigns: 6, avgRoi: "340%", totalReach: "670K", rating: 4.7 },
                    { name: "Alex Travel", campaigns: 4, avgRoi: "310%", totalReach: "520K", rating: 4.6 },
                  ].map((creator, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg border-gray-800"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-white">
                            {creator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{creator.name}</p>
                          <p className="text-sm text-gray-400">{creator.campaigns} campaigns</p>
                        </div>
                      </div>
                      <div className="flex space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-green-600">{creator.avgRoi}</p>
                          <p className="text-gray-500">Avg ROI</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-white">{creator.totalReach}</p>
                          <p className="text-gray-500">Total Reach</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-white">{creator.rating}</p>
                          <p className="text-gray-500">Rating</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformData.map((platform, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{platform.value}%</div>
                      <p className="text-sm text-gray-400">of total reach</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Engagement</span>
                        <span className="text-white font-medium">
                          {platform.name === "Instagram"
                            ? "4.2%"
                            : platform.name === "TikTok"
                              ? "6.8%"
                              : platform.name === "YouTube"
                                ? "3.1%"
                                : "2.4%"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Campaigns</span>
                        <span className="text-white font-medium">
                          {platform.name === "Instagram"
                            ? "12"
                            : platform.name === "TikTok"
                              ? "8"
                              : platform.name === "YouTube"
                                ? "5"
                                : "3"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg ROI</span>
                        <span className="text-green-600 font-medium">
                          {platform.name === "Instagram"
                            ? "380%"
                            : platform.name === "TikTok"
                              ? "420%"
                              : platform.name === "YouTube"
                                ? "340%"
                                : "280%"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
