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
import { DashboardLayout } from "@/components/dashboard-layout"
import { Camera, CreditCard, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    allowMessages: true,
  })

  return (
    <DashboardLayout userType="brand">
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
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-brand-red">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:bg-brand-red">
              Privacy
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-brand-red">
              Billing
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-brand-red">
              Team
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Information */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
                <CardDescription>Update your brand profile and company details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>BC</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="border-gray-300 text-white">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-sm text-gray-400 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <Separator />

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company-name" className="text-white">
                      Company Name
                    </Label>
                    <Input id="company-name" defaultValue="Brand Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-white">
                      Industry
                    </Label>
                    <Input id="industry" defaultValue="Fashion & Retail" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-white">
                      Website
                    </Label>
                    <Input id="website" defaultValue="https://brandcompany.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-size" className="text-white">
                      Company Size
                    </Label>
                    <Input id="company-size" defaultValue="50-100 employees" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-white">
                    Company Description
                  </Label>
                  <Textarea
                    id="description"
                    defaultValue="We are a leading fashion brand focused on sustainable and ethical clothing..."
                    className="h-24"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-white">
                      Contact Email
                    </Label>
                    <Input id="contact-email" defaultValue="contact@brandcompany.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>

                <Button className="bg-brand-red hover:bg-red-700 text-white">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified about campaign updates</CardDescription>
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
                  <Separator />
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
                  <Separator />
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
                  <Separator />
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

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Notification Types</h3>
                  <div className="space-y-3">
                    {[
                      "New creator applications",
                      "Campaign milestones",
                      "Content submissions",
                      "Payment confirmations",
                      "Performance reports",
                    ].map((type, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm text-white">{type}</span>
                      </div>
                    ))}
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
                <CardDescription>Control your privacy and data sharing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Public Profile</p>
                      <p className="text-sm text-gray-400">Make your brand profile visible to creators</p>
                    </div>
                    <Switch
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, profileVisible: checked })}
                    />
                  </div>
                  <Separator />
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
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Allow Direct Messages</p>
                      <p className="text-sm text-gray-400">Let creators send you direct messages</p>
                    </div>
                    <Switch
                      checked={privacy.allowMessages}
                      onCheckedChange={(checked) => setPrivacy({ ...privacy, allowMessages: checked })}
                    />
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Data & Analytics</h3>
                  <div className="space-y-3">
                    {[
                      "Share anonymized campaign data for platform insights",
                      "Allow performance benchmarking with similar brands",
                      "Include brand in platform case studies (with approval)",
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

          <TabsContent value="billing" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Billing Information</CardTitle>
                <CardDescription>Manage your billing details and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="billing-email" className="text-white">
                      Billing Email
                    </Label>
                    <Input id="billing-email" defaultValue="billing@brandcompany.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-id" className="text-white">
                      Tax ID
                    </Label>
                    <Input id="tax-id" defaultValue="12-3456789" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="billing-address" className="text-white">
                    Billing Address
                  </Label>
                  <Textarea
                    id="billing-address"
                    defaultValue="123 Business St, Suite 100&#10;New York, NY 10001&#10;United States"
                    className="mt-1 h-20"
                  />
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">Visa •••• 4242</p>
                          <p className="text-sm text-gray-400">Expires 12/26</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-gray-300 text-white">
                        Edit
                      </Button>
                    </div>
                    <Button variant="outline" className="w-full border-gray-300 text-white">
                      Add Payment Method
                    </Button>
                  </div>
                </div>

                <Button className="bg-brand-red hover:bg-red-700 text-white">Save Billing Information</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Team Members</CardTitle>
                    <CardDescription>Manage your team and their permissions</CardDescription>
                  </div>
                  <Button className="bg-brand-red hover:bg-red-700 text-white">Invite Member</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "John Doe", email: "john@brandcompany.com", role: "Admin", status: "Active" },
                    { name: "Jane Smith", email: "jane@brandcompany.com", role: "Manager", status: "Active" },
                    { name: "Mike Johnson", email: "mike@brandcompany.com", role: "Member", status: "Pending" },
                  ].map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-white">{member.name}</p>
                          <p className="text-sm text-gray-400">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">{member.role}</p>
                          <p className="text-xs text-gray-400">{member.status}</p>
                        </div>
                        <Button variant="outline" size="sm" className="border-gray-300 text-white">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-300 text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
