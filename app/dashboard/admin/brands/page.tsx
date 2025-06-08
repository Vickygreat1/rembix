import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/dashboard-layout"
import {
  Search,
  Filter,
  MoreHorizontal,
  Building2,
  Eye,
  Shield,
  Ban,
  CheckCircle,
  AlertTriangle,
  DollarSign,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const brands = [
  {
    id: 1,
    name: "TechFlow SaaS",
    logo: "/placeholder.svg",
    industry: "Technology",
    status: "verified",
    totalSpent: "$45,200",
    campaigns: 12,
    joinDate: "Nov 2023",
    contactEmail: "marketing@techflow.com",
  },
  {
    id: 2,
    name: "StyleCo Fashion",
    logo: "/placeholder.svg",
    industry: "Fashion",
    status: "verified",
    totalSpent: "$78,900",
    campaigns: 28,
    joinDate: "Sep 2023",
    contactEmail: "campaigns@styleco.com",
  },
  {
    id: 3,
    name: "FitLife Nutrition",
    logo: "/placeholder.svg",
    industry: "Health & Fitness",
    status: "pending",
    totalSpent: "$12,400",
    campaigns: 5,
    joinDate: "Jan 2024",
    contactEmail: "brand@fitlife.com",
  },
  {
    id: 4,
    name: "GameZone Pro",
    logo: "/placeholder.svg",
    industry: "Gaming",
    status: "suspended",
    totalSpent: "$8,750",
    campaigns: 3,
    joinDate: "Feb 2024",
    contactEmail: "marketing@gamezone.com",
  },
]

export default function ManageBrands() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Manage Brands</h1>
            <p className="text-gray-400">View and manage all brands on the platform</p>
          </div>
          <Button className="bg-brand-red hover:bg-red-700">
            <Building2 className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Brands</p>
                  <p className="text-2xl font-bold text-white">1,247</p>
                </div>
                <Building2 className="h-8 w-8 text-brand-red" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Active Brands</p>
                  <p className="text-2xl font-bold text-green-400">892</p>
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
                  <p className="text-2xl font-bold text-yellow-400">156</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-400">$2.4M</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-400" />
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
                  placeholder="Search brands by name, industry, or email..."
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

        {/* Brands Table */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">All Brands</CardTitle>
            <CardDescription className="text-gray-400">Manage brand accounts and campaign limits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={brand.logo || "/placeholder.svg"} />
                      <AvatarFallback>
                        {brand.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-white">{brand.name}</h3>
                        <Badge
                          className={
                            brand.status === "verified"
                              ? "bg-green-900 text-green-400"
                              : brand.status === "pending"
                                ? "bg-yellow-900 text-yellow-400"
                                : "bg-red-900 text-red-400"
                          }
                        >
                          {brand.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">{brand.industry}</p>
                      <p className="text-xs text-gray-500">{brand.contactEmail}</p>
                      <p className="text-xs text-gray-500">Joined {brand.joinDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="font-medium text-white">{brand.totalSpent}</p>
                      <p className="text-gray-400">Total Spent</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-white">{brand.campaigns}</p>
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
                          Approve Limits
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
