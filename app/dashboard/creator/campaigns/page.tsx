import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Clock, CheckCircle, AlertCircle, DollarSign, Calendar, Eye, Upload, MessageSquare } from "lucide-react"

export default function CreatorCampaigns() {
  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">My Campaigns</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your sponsorship deals and deliverables</p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList>
            <TabsTrigger value="active">Active (5)</TabsTrigger>
            <TabsTrigger value="pending">Pending (3)</TabsTrigger>
            <TabsTrigger value="completed">Completed (12)</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {/* Active Campaigns */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>TechFlow SaaS - Product Launch</CardTitle>
                    <CardDescription>YouTube Integration + Instagram Stories</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    In Progress
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">$2,500</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>Due: Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-purple-600" />
                    <span>Target: 50K views</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Deliverables Progress</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>YouTube Video (60 seconds)</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-yellow-600" />
                        <span>Instagram Stories (3 posts)</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                        In Progress
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="h-5 w-5 text-gray-400" />
                        <span>Performance Report</span>
                      </div>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Content
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message Brand
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>StyleCo Fashion - Summer Collection</CardTitle>
                    <CardDescription>Instagram Post + TikTok Video</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                    <Clock className="h-3 w-3 mr-1" />
                    Review Needed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium">$1,800</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>Due: Dec 20, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-purple-600" />
                    <span>Target: 75K views</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Deliverables Progress</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <span>Instagram Post</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                        Needs Revision
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <span>TikTok Video (30 seconds)</span>
                      </div>
                      <Badge variant="outline">Not Started</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                    <Upload className="h-4 w-4 mr-2" />
                    Resubmit Content
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    View Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Campaign Offers</CardTitle>
                <CardDescription>Review and respond to brand partnership offers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">GameZone - Holiday Gaming Campaign</h3>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">New Offer</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    TikTok video featuring their new gaming headset. Looking for tech-focused creators.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Payment</p>
                      <p className="font-medium">$3,200</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Deadline</p>
                      <p className="font-medium">Jan 5, 2025</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Platform</p>
                      <p className="font-medium">TikTok</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="font-medium">60 seconds</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Accept Offer
                    </Button>
                    <Button size="sm" variant="outline">
                      Negotiate
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                      Decline
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Completed Campaigns</CardTitle>
                <CardDescription>Your successful campaign history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { brand: "FitLife Supplements", amount: "$2,200", date: "Nov 2024", performance: "125K views" },
                    { brand: "EcoClean Products", amount: "$1,500", date: "Oct 2024", performance: "89K views" },
                    { brand: "TechGear Pro", amount: "$3,000", date: "Sep 2024", performance: "156K views" },
                  ].map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{campaign.brand}</p>
                        <p className="text-sm text-gray-500">
                          {campaign.date} • {campaign.performance}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{campaign.amount}</p>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                          Paid
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
