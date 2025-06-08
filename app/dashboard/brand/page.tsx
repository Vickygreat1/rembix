import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DollarSign, Eye, Users, TrendingUp, Target, BarChart3, Clock, CheckCircle, AlertTriangle } from "lucide-react"

export default function BrandDashboard() {
  return (
    <DashboardLayout userType="brand">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, TechFlow!</h1>
          <p className="text-gray-400">Here's your campaign performance overview</p>
        </div>

        {/* Stats Cards - Updated to black */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Campaigns</CardTitle>
              <Target className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8</div>
              <p className="text-xs text-gray-400">+2 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Creator Applications</CardTitle>
              <Users className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24</div>
              <p className="text-xs text-gray-400">12 pending review</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Budget Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$45,230</div>
              <p className="text-xs text-gray-400">68% of monthly budget</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Reach</CardTitle>
              <Eye className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3.2M</div>
              <p className="text-xs text-gray-400">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Campaign Performance */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Campaign Performance</CardTitle>
              <CardDescription className="text-gray-400">Your top performing campaigns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Product Launch Campaign</p>
                    <p className="text-sm text-gray-400">5 creators • 850K reach</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-600 text-white">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Live
                  </Badge>
                  <p className="text-sm font-medium mt-1 text-white">4.2% CTR</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Brand Awareness Drive</p>
                    <p className="text-sm text-gray-400">8 creators • 1.2M reach</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-yellow-600 text-white">
                    <Clock className="h-3 w-3 mr-1" />
                    In Review
                  </Badge>
                  <p className="text-sm font-medium mt-1 text-white">3.8% CTR</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Holiday Special</p>
                    <p className="text-sm text-gray-400">3 creators • 420K reach</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-red-600 text-white">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Needs Attention
                  </Badge>
                  <p className="text-sm font-medium mt-1 text-white">2.1% CTR</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget Overview */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Budget Overview</CardTitle>
              <CardDescription className="text-gray-400">Monthly spending breakdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">Creator Payments</span>
                  <span className="text-sm text-gray-400">$32,400</span>
                </div>
                <Progress value={72} className="h-2" />
                <p className="text-xs text-gray-400">72% of total budget</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">Platform Fees</span>
                  <span className="text-sm text-gray-400">$4,830</span>
                </div>
                <Progress value={11} className="h-2" />
                <p className="text-xs text-gray-400">11% of total budget</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">Production Costs</span>
                  <span className="text-sm text-gray-400">$8,000</span>
                </div>
                <Progress value={18} className="h-2" />
                <p className="text-xs text-gray-400">18% of total budget</p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between font-medium">
                  <span className="text-white">Total Spent</span>
                  <span className="text-white">$45,230 / $65,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-gray-400">Manage your campaigns and discover new creators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="h-auto p-4 flex flex-col items-center space-y-2 bg-brand-red hover:bg-red-700">
                <Target className="h-6 w-6" />
                <span>Create Campaign</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 border-gray-600 text-white hover:bg-gray-800"
              >
                <Users className="h-6 w-6" />
                <span>Discover Creators</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 border-gray-600 text-white hover:bg-gray-800"
              >
                <BarChart3 className="h-6 w-6" />
                <span>View Analytics</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 border-gray-600 text-white hover:bg-gray-800"
              >
                <DollarSign className="h-6 w-6" />
                <span>Manage Billing</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
