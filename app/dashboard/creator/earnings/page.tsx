import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import {
  DollarSign,
  Download,
  CreditCard,
  TrendingUp,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Filter,
  FileText,
  ArrowUpRight,
} from "lucide-react"

const earningsData = [
  { month: "Jan", earnings: 1250 },
  { month: "Feb", earnings: 1450 },
  { month: "Mar", earnings: 1380 },
  { month: "Apr", earnings: 1780 },
  { month: "May", earnings: 1650 },
  { month: "Jun", earnings: 2100 },
]

const campaignEarningsData = [
  { campaign: "TechFlow", earnings: 1250 },
  { campaign: "StyleCo", earnings: 890 },
  { campaign: "GameZone", earnings: 1560 },
  { campaign: "FitLife", earnings: 980 },
  { campaign: "EcoClean", earnings: 1120 },
]

export default function CreatorEarnings() {
  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        {/* Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-black via-gray-900 to-brand-red p-8 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-2">Earnings Dashboard</h1>
            <p className="text-gray-200 text-lg">Track your earnings, payouts, and financial performance</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-red/20 to-gray-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Key Metrics - Updated to black cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$24,580</div>
              <div className="flex items-center text-xs text-green-400">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18% this month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Available Balance</CardTitle>
              <CreditCard className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$3,250</div>
              <p className="text-xs text-gray-400">Ready to withdraw</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Pending Earnings</CardTitle>
              <Clock className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$5,780</div>
              <p className="text-xs text-gray-400">From 7 campaigns</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Average Per Campaign</CardTitle>
              <TrendingUp className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$1,230</div>
              <div className="flex items-center text-xs text-green-400">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800 p-1 rounded-xl">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-brand-red data-[state=active]:text-white rounded-lg text-white"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:bg-brand-red data-[state=active]:text-white rounded-lg text-white"
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Transactions
            </TabsTrigger>
            <TabsTrigger
              value="payouts"
              className="data-[state=active]:bg-brand-red data-[state=active]:text-white rounded-lg text-white"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Payouts
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Earnings Over Time */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Earnings Trend</CardTitle>
                  <CardDescription className="text-gray-400">Your earnings over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4 text-brand-red" />
                      <p className="text-lg font-semibold mb-2 text-white">Earnings Growth</p>
                      <p className="text-sm text-gray-400">Your earnings have increased by 18% this month</p>
                      <div className="mt-4 space-y-2">
                        {earningsData.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">{item.month}</span>
                            <span className="font-medium text-white">${item.earnings}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Earnings */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Campaign Earnings</CardTitle>
                  <CardDescription className="text-gray-400">Earnings by campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] space-y-4">
                    {campaignEarningsData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{item.campaign[0]}</span>
                          </div>
                          <span className="font-medium text-white">{item.campaign}</span>
                        </div>
                        <span className="font-bold text-brand-red">${item.earnings}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                <CardDescription className="text-gray-400">Manage your earnings and payouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-auto p-4 flex flex-col items-center space-y-2 bg-brand-red hover:bg-red-700">
                    <CreditCard className="h-6 w-6" />
                    <span>Withdraw Funds</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center space-y-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  >
                    <FileText className="h-6 w-6" />
                    <span>Download Tax Forms</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center space-y-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                    <span>Set Payout Method</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-4 text-white">Campaign</th>
                        <th className="text-left p-4 text-white">Date</th>
                        <th className="text-left p-4 text-white">Amount</th>
                        <th className="text-left p-4 text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="p-4 text-white">TechFlow SaaS - Product Demo</td>
                        <td className="p-4 text-gray-400">Jun 15, 2024</td>
                        <td className="p-4 font-medium text-white">$1,250.00</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Paid
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="p-4 text-white">StyleCo Fashion - Summer Collection</td>
                        <td className="p-4 text-gray-400">Jun 10, 2024</td>
                        <td className="p-4 font-medium text-white">$890.00</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Paid
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="p-4 text-white">GameZone Pro - Headset Review</td>
                        <td className="p-4 text-gray-400">Jun 5, 2024</td>
                        <td className="p-4 font-medium text-white">$1,560.00</td>
                        <td className="p-4">
                          <Badge className="bg-yellow-600 text-white">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="p-4 text-white">FitLife Supplements - Protein Review</td>
                        <td className="p-4 text-gray-400">May 28, 2024</td>
                        <td className="p-4 font-medium text-white">$980.00</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Paid
                          </Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-800">
                        <td className="p-4 text-white">EcoClean Products - Sustainable Living</td>
                        <td className="p-4 text-gray-400">May 20, 2024</td>
                        <td className="p-4 font-medium text-white">$1,120.00</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Paid
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payouts Tab */}
          <TabsContent value="payouts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Payout History</h2>
              <Button className="bg-brand-red hover:bg-red-700">
                <CreditCard className="h-4 w-4 mr-2" />
                Request Payout
              </Button>
            </div>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-4 text-white">Date</th>
                        <th className="text-left p-4 text-white">Amount</th>
                        <th className="text-left p-4 text-white">Method</th>
                        <th className="text-left p-4 text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="p-4 text-white">Jun 1, 2024</td>
                        <td className="p-4 font-medium text-white">$3,250.00</td>
                        <td className="p-4 text-gray-400">Bank Transfer</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="p-4 text-white">May 1, 2024</td>
                        <td className="p-4 font-medium text-white">$2,780.00</td>
                        <td className="p-4 text-gray-400">Bank Transfer</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700 hover:bg-gray-800">
                        <td className="p-4 text-white">Apr 1, 2024</td>
                        <td className="p-4 font-medium text-white">$2,150.00</td>
                        <td className="p-4 text-gray-400">Bank Transfer</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-800">
                        <td className="p-4 text-white">Mar 1, 2024</td>
                        <td className="p-4 font-medium text-white">$1,950.00</td>
                        <td className="p-4 text-gray-400">Bank Transfer</td>
                        <td className="p-4">
                          <Badge className="bg-green-600 text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Payout Settings</CardTitle>
                <CardDescription className="text-gray-400">Manage your payout methods and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Bank Account (Primary)</p>
                      <p className="text-sm text-gray-400">**** **** **** 4832</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  >
                    Edit
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Payout Schedule</p>
                      <p className="text-sm text-gray-400">Monthly (1st of each month)</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  >
                    Change
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Minimum Payout</p>
                      <p className="text-sm text-gray-400">$100.00</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  >
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
