import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Users, DollarSign, AlertTriangle, CheckCircle, BarChart3, FileText } from "lucide-react"

export default function AdminDashboard() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400">Platform overview and management</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Creators</CardTitle>
              <Users className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12,847</div>
              <p className="text-xs text-gray-400">+180 new this week</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Campaigns</CardTitle>
              <BarChart3 className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">156</div>
              <p className="text-xs text-gray-400">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Pending Applications</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89</div>
              <p className="text-xs text-gray-400">Requires review</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Payouts</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$2.4M</div>
              <p className="text-xs text-gray-400">+25% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
              <CardDescription className="text-gray-400">Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center space-y-2 bg-brand-red hover:bg-red-700">
                  <CheckCircle className="h-6 w-6" />
                  <span>Approve Campaigns</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center space-y-2 border-gray-700 text-white hover:bg-gray-800"
                >
                  <AlertTriangle className="h-6 w-6" />
                  <span>Resolve Flags</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center space-y-2 border-gray-700 text-white hover:bg-gray-800"
                >
                  <FileText className="h-6 w-6" />
                  <span>View Reports</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center space-y-2 border-gray-700 text-white hover:bg-gray-800"
                >
                  <DollarSign className="h-6 w-6" />
                  <span>Process Payouts</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Recent Platform Activity</CardTitle>
              <CardDescription className="text-gray-400">Latest user actions and system events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Campaign Approved</p>
                    <p className="text-sm text-gray-400">TechFlow SaaS - Product Launch</p>
                  </div>
                </div>
                <Badge className="bg-green-900 text-green-400">Approved</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">New Creator Verified</p>
                    <p className="text-sm text-gray-400">@sarah_creates - 485K followers</p>
                  </div>
                </div>
                <Badge className="bg-blue-900 text-blue-400">Verified</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-900 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Content Flagged</p>
                    <p className="text-sm text-gray-400">Campaign #1247 - Review needed</p>
                  </div>
                </div>
                <Badge className="bg-yellow-900 text-yellow-400">Pending</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Health */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Platform Health & Metrics</CardTitle>
            <CardDescription className="text-gray-400">System status and key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-red mb-2">99.9%</div>
                <p className="text-sm text-gray-400">Platform Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">245ms</div>
                <p className="text-sm text-gray-400">Avg Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4.8/5</div>
                <p className="text-sm text-gray-400">User Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">98.2%</div>
                <p className="text-sm text-gray-400">Payment Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
