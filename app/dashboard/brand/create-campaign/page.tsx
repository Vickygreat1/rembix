"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DollarSign, Target, Users, FileText, Plus, X } from "lucide-react"

export default function CreateCampaignPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [requirements, setRequirements] = useState<string[]>([])
  const [deliverables, setDeliverables] = useState<string[]>([])
  const [newRequirement, setNewRequirement] = useState("")
  const [newDeliverable, setNewDeliverable] = useState("")

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()])
      setNewRequirement("")
    }
  }

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index))
  }

  const addDeliverable = () => {
    if (newDeliverable.trim()) {
      setDeliverables([...deliverables, newDeliverable.trim()])
      setNewDeliverable("")
    }
  }

  const removeDeliverable = (index: number) => {
    setDeliverables(deliverables.filter((_, i) => i !== index))
  }

  const steps = [
    { number: 1, title: "Campaign Details", icon: FileText },
    { number: 2, title: "Target Audience", icon: Users },
    { number: 3, title: "Budget & Timeline", icon: DollarSign },
    { number: 4, title: "Review & Launch", icon: Target },
  ]

  return (
    <DashboardLayout userType="brand">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Create Campaign</h1>
          <p className="text-gray-400 mt-1">Launch your next influencer marketing campaign</p>
        </div>

        {/* Progress Steps */}
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      currentStep >= step.number
                        ? "bg-brand-red text-white"
                        : "bg-gray-700 text-gray-400 border border-gray-700"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className={`text-sm font-medium ${currentStep >= step.number ? "text-white" : "text-gray-500"}`}>
                      Step {step.number}
                    </p>
                    <p className={`text-xs ${currentStep >= step.number ? "text-gray-300" : "text-gray-400"}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 ml-6 ${currentStep > step.number ? "bg-brand-red" : "bg-gray-700"}`} />
                  )}
                </div>
              ))}
            </div>
            <Progress value={(currentStep / steps.length) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* Step Content */}
        {currentStep === 1 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Campaign Details</CardTitle>
              <CardDescription className="text-gray-400">
                Tell us about your campaign and what you're looking for
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-white">
                      Campaign Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Summer Fashion Collection"
                      className="mt-1 bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-white">
                      Category
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="beauty">Beauty</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="fitness">Health & Fitness</SelectItem>
                        <SelectItem value="food">Food & Beverage</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="brand" className="text-white">
                      Brand Name
                    </Label>
                    <Input
                      id="brand"
                      placeholder="Your brand name"
                      className="mt-1 bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description" className="text-white">
                      Campaign Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your campaign goals, target audience, and key messages..."
                      className="mt-1 h-32 bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-700" />

              <div className="space-y-4">
                <div>
                  <Label className="text-white">Requirements</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      value={newRequirement}
                      onChange={(e) => setNewRequirement(e.target.value)}
                      placeholder="Add a requirement..."
                      onKeyPress={(e) => e.key === "Enter" && addRequirement()}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                    <Button onClick={addRequirement} size="icon" className="bg-brand-red hover:bg-red-700">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {requirements.map((req, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center gap-1 bg-gray-700 text-white border-gray-600"
                      >
                        {req}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => removeRequirement(index)} />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white">Deliverables</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      value={newDeliverable}
                      onChange={(e) => setNewDeliverable(e.target.value)}
                      placeholder="Add a deliverable..."
                      onKeyPress={(e) => e.key === "Enter" && addDeliverable()}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                    <Button onClick={addDeliverable} size="icon" className="bg-brand-red hover:bg-red-700">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {deliverables.map((deliverable, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center gap-1 bg-gray-700 text-white border-gray-600"
                      >
                        {deliverable}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => removeDeliverable(index)} />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Target Audience</CardTitle>
              <CardDescription className="text-gray-400">
                Define your ideal creator profile and audience demographics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="followers" className="text-white">
                      Minimum Followers
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select follower range" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="1k">1K - 10K (Nano)</SelectItem>
                        <SelectItem value="10k">10K - 100K (Micro)</SelectItem>
                        <SelectItem value="100k">100K - 1M (Macro)</SelectItem>
                        <SelectItem value="1m">1M+ (Mega)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="platforms" className="text-white">
                      Platforms
                    </Label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {["Instagram", "TikTok", "YouTube", "Twitter"].map((platform) => (
                        <label key={platform} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-white" />
                          <span className="text-sm text-white">{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="age" className="text-white">
                      Target Age Range
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1 bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="18-24">18-24</SelectItem>
                        <SelectItem value="25-34">25-34</SelectItem>
                        <SelectItem value="35-44">35-44</SelectItem>
                        <SelectItem value="45+">45+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-white">
                      Geographic Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="e.g., United States, Europe"
                      className="mt-1 bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Budget & Timeline</CardTitle>
              <CardDescription className="text-gray-400">Set your campaign budget and important dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="budget" className="text-white">
                      Total Budget
                    </Label>
                    <Input
                      id="budget"
                      type="number"
                      placeholder="5000"
                      className="mt-1 bg-gray-800 border-gray-700 text-white"
                    />
                    <p className="text-xs text-gray-500 mt-1">USD amount for creator compensation</p>
                  </div>
                  <div>
                    <Label htmlFor="compensation" className="text-white">
                      Compensation Range
                    </Label>
                    <div className="flex gap-2 mt-1">
                      <Input placeholder="Min" type="number" className="bg-gray-800 border-gray-700 text-white" />
                      <Input placeholder="Max" type="number" className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="deadline" className="text-white">
                      Application Deadline
                    </Label>
                    <Input id="deadline" type="date" className="mt-1 bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="content-deadline" className="text-white">
                      Content Delivery Deadline
                    </Label>
                    <Input id="content-deadline" type="date" className="mt-1 bg-gray-800 border-gray-700 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Review & Launch</CardTitle>
              <CardDescription className="text-gray-400">Review your campaign details before launching</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">Campaign Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Campaign Title</p>
                    <p className="font-medium text-white">Summer Fashion Collection</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Category</p>
                    <p className="font-medium text-white">Fashion</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Budget</p>
                    <p className="font-medium text-white">$5,000</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Target Followers</p>
                    <p className="font-medium text-white">10K - 100K</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded bg-gray-800 border-gray-700 text-white" />
                <Label htmlFor="terms" className="text-sm text-white">
                  I agree to the Terms of Service and understand the campaign guidelines
                </Label>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="border-gray-700 text-white"
          >
            Previous
          </Button>
          <div className="flex gap-2">
            {currentStep < 4 ? (
              <Button
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                className="bg-brand-red hover:bg-red-700 text-white"
              >
                Next Step
              </Button>
            ) : (
              <Button className="bg-brand-red hover:bg-red-700 text-white">Launch Campaign</Button>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
