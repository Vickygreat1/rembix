"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Camera, CreditCard, Trash2, Eye, EyeOff, Shield, Bell, User, Lock, DollarSign } from "lucide-react"

export default function CreatorSettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true,
    campaigns: true,
    payments: true,
    messages: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    allowMessages: true,
    showEarnings: false,
  })

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-1">Manage your account preferences and settings</p>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-gray-800 text-white">
            <TabsTrigger value="profile" className="data-[state=active]:bg-brand-red">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-brand-red">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-brand-red">
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="payments" className="data-[state=active]:bg-brand-red">
              <DollarSign className="h-4 w-4 mr-2" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-brand-red">
              <Lock className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Information */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
                <CardDescription className="text-gray-400">Update your personal information and bio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-sm text-gray-400 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-white">
                      First Name
                    </Label>
                    <Input id="first-name" defaultValue="John" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-white">
                      Last Name
                    </Label>
                    <Input id="last-name" defaultValue="Doe" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-white">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="johndoe_creator"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      defaultValue="john@example.com"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white">
                      Location
                    </Label>
                    <Input
                      id="location"
                      defaultValue="San Francisco, CA"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    defaultValue="Tech enthusiast and content creator sharing the latest in technology, gadgets, and digital lifestyle."
                    className="bg-gray-800 border-gray-700 text-white h-24"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-white">
                      Website
                    </Label>
                    <Input
                      id="website"
                      defaultValue="https://johndoe.com"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="niche" className="text-white">
                      Content Niche
                    </Label>
                    <Select defaultValue="technology">
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="beauty">Beauty</SelectItem>
                        <SelectItem value="fitness">Fitness</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="bg-brand-red hover:bg-red-700 text-white">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Social Media Links</CardTitle>
                <CardDescription className="text-gray-400">Connect your social media accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="youtube" className="text-white">
                    YouTube Channel
                  </Label>
                  <Input
                    id="youtube"
                    placeholder="https://youtube.com/@johndoe"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram" className="text-white">
                    Instagram Profile
                  </Label>
                  <Input
                    id="instagram"
                    placeholder="https://instagram.com/johndoe"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tiktok" className="text-white">
                    TikTok Profile
                  </Label>
                  <Input
                    id="tiktok"
                    placeholder="https://tiktok.com/@johndoe"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter" className="text-white">
                    Twitter Profile
                  </Label>
                  <Input
                    id="twitter"
                    placeholder="https://twitter.com/johndoe"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <Button className="bg-brand-red hover:bg-red-700 text-white">Update Social Links</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
                <CardDescription className="text-gray-400">Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Email Notifications</p>
                      <p className="text-sm text-gray-400">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Push Notifications</p>
                      <p className="text-sm text-gray-400">Receive push notifications in your browser</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">SMS Notifications</p>
                      <p className="text-sm text-gray-400">Receive important updates via SMS</p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Marketing Communications</p>
                      <p className="text-sm text-gray-400">Receive updates about new features and tips</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, marketing: checked })}
                    />
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Notification Types</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">Campaign Opportunities</p>
                        <p className="text-sm text-gray-400">New campaign invitations and opportunities</p>
                      </div>
                      <Switch
                        checked={notifications.campaigns}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, campaigns: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">Payment Updates</p>
                        <p className="text-sm text-gray-400">Payment confirmations and earnings updates</p>
                      </div>
                      <Switch
                        checked={notifications.payments}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, payments: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">Messages</p>
                        <p className="text-sm text-gray-400">New messages from brands and platform</p>
                      </div>
                      <Switch
                        checked={notifications.messages}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, messages: checked })}
                      />
                    </div>
                  </div>
                </div>

                <Button className="bg-brand-red hover:bg-red-700 text-white">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Privacy Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Control your privacy and data sharing preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Public Profile</p>
                      <p className="text-sm text-gray-400">Make your profile visible to brands</p>
                    </div>
                    <Switch
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, profileVisible: checked })}
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Show Email Address</p>
                      <p className="text-sm text-gray-400">Display your email on your public profile</p>
                    </div>
                    <Switch
                      checked={privacy.showEmail}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, showEmail: checked })}
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Allow Direct Messages</p>
                      <p className="text-sm text-gray-400">Let brands send you direct messages</p>
                    </div>
                    <Switch
                      checked={privacy.allowMessages}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, allowMessages: checked })}
                    />
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Show Earnings</p>
                      <p className="text-sm text-gray-400">Display your earnings publicly for transparency</p>
                    </div>
                    <Switch
                      checked={privacy.showEarnings}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, showEarnings: checked })}
                    />
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Data & Analytics</h3>
                  <div className="space-y-3">
                    {[
                      "Share anonymized performance data for platform insights",
                      "Allow performance benchmarking with similar creators",
                      "Include content in platform case studies (with approval)",
                      "Share audience demographics with potential brand partners",
                    ].map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked={index < 2} className="rounded" />
                        <span className="text-sm text-white">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-brand-red hover:bg-red-700 text-white">Update Privacy Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Payment Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage your payment methods and tax information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="legal-name" className="text-white">
                      Legal Name
                    </Label>
                    <Input id="legal-name" defaultValue="John Doe" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-id" className="text-white">
                      Tax ID / SSN
                    </Label>
                    <Input id="tax-id" placeholder="XXX-XX-XXXX" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-white">
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your full address for tax purposes"
                    className="bg-gray-800 border-gray-700 text-white h-20 mt-1"
                  />
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">Bank Account</p>
                          <p className="text-sm text-gray-400">**** **** **** 4832</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-gray-700 text-white hover:bg-gray-800">
                        Edit
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                      Add Payment Method
                    </Button>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Payout Settings</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="payout-schedule" className="text-white">
                          Payout Schedule
                        </Label>
                        <Select defaultValue="monthly">
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="manual">Manual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="minimum-payout" className="text-white">
                          Minimum Payout Amount
                        </Label>
                        <Input
                          id="minimum-payout"
                          defaultValue="100"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-brand-red hover:bg-red-700 text-white">Save Payment Information</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Security Settings</CardTitle>
                <CardDescription className="text-gray-400">Manage your account security and password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password" className="text-white">
                      Current Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword ? "text" : "password"}
                        className="bg-gray-800 border-gray-700 text-white pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password" className="text-white">
                      New Password
                    </Label>
                    <Input id="new-password" type="password" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-white">
                      Confirm New Password
                    </Label>
                    <Input id="confirm-password" type="password" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium text-white">SMS Authentication</p>
                        <p className="text-sm text-gray-400">Receive codes via SMS</p>
                      </div>
                      <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                        Enable
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium text-white">Authenticator App</p>
                        <p className="text-sm text-gray-400">Use an authenticator app</p>
                      </div>
                      <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                        Setup
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Account Actions</h3>
                  <div className="space-y-4">
                    <Button className="bg-brand-red hover:bg-red-700 text-white">Update Password</Button>
                    <div className="p-4 border border-red-600 rounded-lg bg-red-900/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-red-400">Delete Account</p>
                          <p className="text-sm text-red-300">Permanently delete your account and all data</p>
                        </div>
                        <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-900/50">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
