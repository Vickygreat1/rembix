"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Upload,
  FileText,
  Video,
  X,
  CheckCircle,
  AlertCircle,
  Send,
  DollarSign,
  Calendar,
  Users,
} from "lucide-react"

// Sample campaign data - in a real app, this would be fetched based on the campaignId
const sampleCampaigns = {
  "1": {
    id: "1",
    brandName: "TechFlow SaaS",
    brandLogo: "/placeholder.svg",
    title: "AI Productivity Tool Launch",
    description:
      "Create engaging content showcasing our new AI-powered productivity features. Perfect for tech creators with engaged audiences.",
    payRate: "$12/1K views",
    platform: "YouTube Shorts",
    minFollowers: "Min 10K followers",
    deadline: "Dec 30, 2024",
    rating: 4.8,
    category: "Technology",
  },
  "2": {
    id: "2",
    brandName: "StyleCo Fashion",
    brandLogo: "/placeholder.svg",
    title: "Sustainable Summer Collection",
    description:
      "Showcase our new eco-friendly summer collection. Looking for lifestyle and fashion creators with authentic engagement.",
    payRate: "$15/1K views",
    platform: "Instagram Reels",
    minFollowers: "Min 25K followers",
    deadline: "Jan 15, 2025",
    rating: 4.9,
    category: "Fashion",
  },
}

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  url: string
  thumbnail?: string
}

export default function CampaignApplicationPage({ params }: { params: { campaignId: string } }) {
  const router = useRouter()
  const campaignId = params.campaignId
  const campaign = sampleCampaigns[campaignId as keyof typeof sampleCampaigns]

  const [formData, setFormData] = useState({
    pitch: "",
    agreedToTerms: false,
  })
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!campaign) {
    return (
      <DashboardLayout userType="creator">
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Campaign Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The campaign you're looking for doesn't exist.</p>
          <Button onClick={() => router.push("/dashboard/creator/marketplace")}>Back to Marketplace</Button>
        </div>
      </DashboardLayout>
    )
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach((file) => {
      // Only accept video files
      if (!file.type.startsWith("video/")) {
        alert("Please upload video files only")
        return
      }

      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
      }
      setUploadedFiles((prev) => [...prev, newFile])
    })
  }

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.pitch) {
      alert("Please provide a campaign pitch")
      return
    }

    if (uploadedFiles.length === 0) {
      alert("Please upload at least one video")
      return
    }

    if (!formData.agreedToTerms) {
      alert("Please agree to the terms and conditions")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard/creator/marketplace?success=true")
    }, 1500)
  }

  return (
    <DashboardLayout userType="creator">
      <div className="space-y-6">
        {/* Header with back button */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/dashboard/creator/marketplace")}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Apply for Campaign</h1>
            <p className="text-gray-600 dark:text-gray-300">Submit your application for {campaign.title}</p>
          </div>
        </div>

        {/* Campaign Overview */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{campaign.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{campaign.brandName}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {campaign.payRate}
                </Badge>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {campaign.deadline}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {campaign.minFollowers}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Campaign Pitch */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Pitch</CardTitle>
              <CardDescription>
                Describe your creative approach for this campaign. How will you showcase the brand's product/service?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  id="pitch"
                  placeholder="Describe your creative approach for this campaign. How will you showcase the brand's product/service? What makes your content unique?"
                  value={formData.pitch}
                  onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                  className="min-h-[150px]"
                  required
                />
                <p className="text-xs text-gray-500">Minimum 100 characters recommended</p>
              </div>
            </CardContent>
          </Card>

          {/* Video Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Original Video</CardTitle>
              <CardDescription>
                Upload your original video content for this campaign. Only video files are accepted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* File Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-950/50"
                    : "border-gray-300 dark:border-gray-700 hover:border-purple-400"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium mb-2">Upload Your Video</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Drag and drop your video file, or click to browse
                </p>
                <div className="space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("file-upload")?.click()}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Video
                  </Button>
                  <p className="text-xs text-gray-500">Supports: MP4, MOV, AVI • Max 500MB</p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  accept="video/*"
                  onChange={(e) => e.target.files && handleFiles(e.target.files)}
                  className="hidden"
                />
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h4 className="font-medium">Uploaded Videos ({uploadedFiles.length})</h4>
                  <div className="space-y-3">
                    {uploadedFiles.map((file) => (
                      <Card key={file.id} className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                            <Video className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{file.name}</p>
                            <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="ghost" onClick={() => removeFile(file.id)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
              <CardDescription>Please review and agree to the following terms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-sm">
                  <p className="mb-4">By submitting this application, you agree to:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Create original content that meets the campaign requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Deliver the content by the specified deadline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Grant the brand non-exclusive rights to use your content for promotional purposes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span>
                        Disclose the sponsored nature of the content in accordance with applicable regulations
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <Button variant="link" className="p-0 h-auto text-purple-600">
                      Terms of Service
                    </Button>{" "}
                    and{" "}
                    <Button variant="link" className="p-0 h-auto text-purple-600">
                      Creator Agreement
                    </Button>
                    . I understand that this application is subject to brand approval.
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting || !formData.agreedToTerms || uploadedFiles.length === 0 || !formData.pitch}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
