"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { DashboardLayout } from "@/components/dashboard-layout"
import {
  Camera,
  Users,
  Heart,
  Eye,
  TrendingUp,
  Youtube,
  Instagram,
  Twitter,
  Upload,
  Star,
  Calendar,
  MapPin,
  LinkIcon,
  Edit,
  Plus,
} from "lucide-react"

export default function CreatorProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const socialStats = [
    { platform: "YouTube", followers: "125K", engagement: "4.2%", icon: Youtube, color: "text-red-500" },
    { platform: "Instagram", followers: "89K", engagement: "6.8%", icon: Instagram, color: "text-pink-500" },
    { platform: "TikTok", followers: "67K", engagement: "8.1%", icon: Twitter, color: "text-blue-500" },
  ]

  const recentContent = [
    {
      id: 1,
      title: "Tech Review: Latest Smartphone",
      platform: "YouTube",
      views: "45K",
      likes: "2.1K",
      date: "2 days ago",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Daily Outfit Inspiration",
      platform: "Instagram",
      views: "23K",
      likes: "1.8K",
      date: "3 days ago",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Quick Workout Routine",
      platform: "TikTok",
      views: "67K",
      likes: "4.2K",
      date: "5 days ago",
      thumbnail: "/placeholder.svg",
    },
  ]

  const achievements = [
    { title: "Top Performer", description: "Ranked in top 10% of creators", icon: Star, color: "text-yellow-500" },
    {
      title: "Consistent Creator",
      description: "Posted content for 30 days straight",
      icon: Calendar,
      color: "text-blue-500",
    },
    { title: "High Engagement", description: "Maintained 5%+ engagement rate", icon: Heart, color: "text-red-500" },
    { title: "Brand Favorite", description: "Worked with 15+ brands", icon: TrendingUp, color: "text-green-500" },
  ]

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">My Profile</h1>
            <p className="text-gray-400 mt-1">Manage your creator profile and showcase your work</p>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)} className="bg-brand-red hover:bg-red-700 text-white">
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>

        {/* Profile Header */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 bg-brand-red hover:bg-red-700">
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">John Doe</h2>
                  <Badge className="bg-brand-red text-white">Verified Creator</Badge>
                </div>
                <p className="text-gray-400 mb-3">@johndoe_creator</p>
                <p className="text-gray-300 mb-4">
                  Tech enthusiast and content creator sharing the latest in technology, gadgets, and digital lifestyle.
                  Passionate about making tech accessible to everyone.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Joined March 2023
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="h-4 w-4 mr-1" />
                    johndoe.com
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">281K</div>
                  <div className="text-sm text-gray-400">Total Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5.7%</div>
                  <div className="text-sm text-gray-400">Avg Engagement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-800 text-white">
            <TabsTrigger value="overview" className="data-[state=active]:bg-brand-red">
              Overview
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-brand-red">
              Content Portfolio
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-brand-red">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-brand-red">
              Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Social Media Stats */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Social Media Presence</CardTitle>
                  <CardDescription className="text-gray-400">Your connected platforms and stats</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        <div>
                          <p className="font-medium text-white">{stat.platform}</p>
                          <p className="text-sm text-gray-400">{stat.followers} followers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-white">{stat.engagement}</p>
                        <p className="text-sm text-gray-400">engagement</p>
                      </div>
                    </div>
                  ))}
                  {isEditing && (
                    <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                      <Plus className="h-4 w-4 mr-2" />
                      Connect Platform
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Profile Completion */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Profile Completion</CardTitle>
                  <CardDescription className="text-gray-400">
                    Complete your profile to attract more brands
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Profile Progress</span>
                      <span className="text-white">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Profile Photo</span>
                      <Badge className="bg-green-500 text-white">✓</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Bio & Description</span>
                      <Badge className="bg-green-500 text-white">✓</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Social Media Links</span>
                      <Badge className="bg-green-500 text-white">✓</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Portfolio Content</span>
                      <Badge className="bg-yellow-500 text-white">Partial</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Rate Card</span>
                      <Badge className="bg-red-500 text-white">Missing</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription className="text-gray-400">Your latest content and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentContent.slice(0, 3).map((content) => (
                    <div key={content.id} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Eye className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{content.title}</h4>
                        <p className="text-sm text-gray-400">
                          {content.platform} • {content.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {content.views}
                          </div>
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {content.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Content Portfolio</h2>
              <Button className="bg-brand-red hover:bg-red-700 text-white">
                <Upload className="h-4 w-4 mr-2" />
                Upload Content
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentContent.map((content) => (
                <Card key={content.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-800 rounded-t-lg flex items-center justify-center">
                      <Eye className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-white mb-2">{content.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{content.platform}</span>
                        <span>{content.date}</span>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {content.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {content.likes}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Reach</CardTitle>
                  <Eye className="h-4 w-4 text-brand-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2.4M</div>
                  <p className="text-xs text-gray-400">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Engagement Rate</CardTitle>
                  <Heart className="h-4 w-4 text-brand-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">5.7%</div>
                  <p className="text-xs text-gray-400">+0.3% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Followers</CardTitle>
                  <Users className="h-4 w-4 text-brand-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">281K</div>
                  <p className="text-xs text-gray-400">+8% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Brand Rating</CardTitle>
                  <Star className="h-4 w-4 text-brand-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <p className="text-xs text-gray-400">Based on 47 reviews</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Performance Overview</CardTitle>
                <CardDescription className="text-gray-400">Your content performance across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-brand-red" />
                    <p className="text-lg font-semibold mb-2 text-white">Analytics Dashboard</p>
                    <p className="text-sm text-gray-400">Detailed analytics coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                        <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{achievement.title}</h3>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
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
