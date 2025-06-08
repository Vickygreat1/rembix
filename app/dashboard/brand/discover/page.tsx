"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, Users, Heart, MessageCircle, Eye, Star, Filter } from "lucide-react"

const creators = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahjstyle",
    avatar: "/placeholder.svg",
    followers: "125K",
    engagement: "4.2%",
    category: "Fashion",
    rating: 4.8,
    price: "$500-1500",
    platforms: ["Instagram", "TikTok"],
    bio: "Fashion enthusiast sharing daily outfit inspiration and style tips",
    recentPosts: [
      { likes: "12.5K", comments: "234", views: "45K" },
      { likes: "8.9K", comments: "156", views: "32K" },
      { likes: "15.2K", comments: "298", views: "52K" },
    ],
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "@techmikereviews",
    avatar: "/placeholder.svg",
    followers: "89K",
    engagement: "5.1%",
    category: "Technology",
    rating: 4.9,
    price: "$800-2000",
    platforms: ["YouTube", "Instagram"],
    bio: "Tech reviewer helping you make informed purchasing decisions",
    recentPosts: [
      { likes: "18.3K", comments: "445", views: "78K" },
      { likes: "22.1K", comments: "567", views: "95K" },
      { likes: "16.7K", comments: "389", views: "68K" },
    ],
  },
  {
    id: 3,
    name: "Emma Fitness",
    username: "@emmafitlife",
    avatar: "/placeholder.svg",
    followers: "67K",
    engagement: "6.8%",
    category: "Health & Fitness",
    rating: 4.7,
    price: "$300-800",
    platforms: ["Instagram", "YouTube"],
    bio: "Certified trainer sharing workout routines and healthy lifestyle tips",
    recentPosts: [
      { likes: "9.8K", comments: "178", views: "28K" },
      { likes: "11.2K", comments: "203", views: "35K" },
      { likes: "13.5K", comments: "245", views: "42K" },
    ],
  },
]

export default function DiscoverCreatorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  return (
    <DashboardLayout userType="brand">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Discover Creators</h1>
          <p className="text-gray-400 mt-1">Find the perfect creators for your brand campaigns</p>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search creators by name, username, or niche..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="beauty">Beauty</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="fitness">Health & Fitness</SelectItem>
                  <SelectItem value="food">Food & Beverage</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-gray-300">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <Card key={creator.id} className="bg-gray-900 border-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
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
                      <CardTitle className="text-lg text-white">{creator.name}</CardTitle>
                      <CardDescription className="text-gray-400">{creator.username}</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-brand-red text-white">{creator.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-300">{creator.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center text-white font-semibold">
                      <Users className="h-4 w-4 mr-1 text-brand-red" />
                      {creator.followers}
                    </div>
                    <p className="text-xs text-gray-500">Followers</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-white font-semibold">
                      <Heart className="h-4 w-4 mr-1 text-brand-red" />
                      {creator.engagement}
                    </div>
                    <p className="text-xs text-gray-500">Engagement</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-white font-semibold">
                      <Star className="h-4 w-4 mr-1 text-brand-red" />
                      {creator.rating}
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>

                {/* Platforms */}
                <div className="flex flex-wrap gap-1">
                  {creator.platforms.map((platform) => (
                    <Badge key={platform} variant="secondary" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>

                {/* Recent Performance */}
                <div>
                  <p className="text-sm font-medium text-white mb-2">Recent Performance</p>
                  <div className="space-y-1">
                    {creator.recentPosts.slice(0, 2).map((post, index) => (
                      <div key={index} className="flex justify-between text-xs text-gray-400">
                        <div className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {post.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          {post.comments}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div>
                    <p className="text-sm font-medium text-white">{creator.price}</p>
                    <p className="text-xs text-gray-500">Per campaign</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-gray-300 text-white">
                      View Profile
                    </Button>
                    <Button size="sm" className="bg-brand-red hover:bg-red-700 text-white">
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="border-gray-300 text-white">
            Load More Creators
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
