import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, Filter, MoreHorizontal, Users, Eye, Shield, Ban, CheckCircle, AlertTriangle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const creators = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarah_creates",
    avatar: "/placeholder.svg",
    followers: "485K",
    engagement: "4.2%",
    niche: "Fashion",
    status: "verified",
    totalEarnings: "$12,450",
    campaigns: 23,
    joinDate: "Jan 2024",
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "@mike_tech",
    avatar: "/placeholder.svg",
    followers: "320K",
    engagement: "5.8%",
    niche: "Technology",
    status: "pending",
    totalEarnings: "$8,920",
    campaigns: 15,
    joinDate: "Feb 2024",
  },
  {
    id: 3,
    name: "Emma Wilson",
    username: "@emma_fitness",
    avatar: "/placeholder.svg",
    followers: "750K",
    engagement: "6.1%",
    niche: "Fitness",
    status: "verified",
    totalEarnings: "$18,340",
    campaigns: 31,
    joinDate: "Dec 2023",
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    username: "@alex_travel",
    avatar: "/placeholder.svg",
    followers: "290K",
    engagement: "3.9%",
    niche: "Travel",
    status: "suspended",
    totalEarnings: "$5,670",
    campaigns: 12,
    joinDate: "Mar 2024",
  },
]

export default function ManageCreators() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Manage Creators</h1>
            <p className="text-gray-400">View and manage all creators on the platform</p>
          </div>
          <Button className="bg-brand-red hover:bg-red-700">
            <Users className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Creators</p>
                  <p className="text-2xl font-bold text-white">12,847</p>
                </div>
                <Users className="h-8 w-8 text-brand-red" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Verified</p>
                  <p className="text-2xl font-bold text-green-400">9,234</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Pending Review</p>
                  <p className="text-2xl font-bold text-yellow-400">2,156</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Suspended</p>
                  <p className="text-2xl font-bold text-red-400">89</p>
                </div>
                <Ban className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search creators by name, username, or niche..."
                  className="pl-10 bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Creators Table */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">All Creators</CardTitle>
            <CardDescription className="text-gray-400">Manage creator accounts and verification status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {creator.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-white">{creator.name}</h3>
                        <Badge
                          className={
                            creator.status === "verified"
                              ? "bg-green-900 text-green-400"
                              : creator.status === "pending"
                                ? "bg-yellow-900 text-yellow-400"
                                : "bg-red-900 text-red-400"
                          }
                        >
                          {creator.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">
                        {creator.username} • {creator.niche}
                      </p>
                      <p className="text-xs text-gray-500">Joined {creator.joinDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="font-medium text-white">{creator.followers}</p>
                      <p className="text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-white">{creator.engagement}</p>
                      <p className="text-gray-400">Engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-white">{creator.totalEarnings}</p>
                      <p className="text-gray-400">Earnings</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-white">{creator.campaigns}</p>
                      <p className="text-gray-400">Campaigns</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-gray-900 border-gray-800">
                        <DropdownMenuItem className="text-white hover:bg-gray-800">
                          <Eye className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-gray-800">
                          <Shield className="h-4 w-4 mr-2" />
                          Verify KYC
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 hover:bg-gray-800">
                          <Ban className="h-4 w-4 mr-2" />
                          Suspend Account
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
