"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  Upload,
  X,
  FileText,
  ImageIcon,
  Video,
  DollarSign,
  Calendar,
  Users,
  Target,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Send,
  Youtube,
  Instagram,
  Play,
  ExternalLink,
  Eye,
} from "lucide-react"

interface CampaignData {
  id: string
  brandName: string
  brandLogo: string
  title: string
  description: string
  payRate: string
  platform: string
  minFollowers: string
  deadline: string
  rating: number
  category: string
}

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  campaign: CampaignData
}

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  url: string
  thumbnail?: string
}

export function CampaignApplicationModal({ isOpen, onClose, campaign }: ApplicationModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [formData, setFormData] = useState({
    pitch: "",
    deliverables: "",
    timeline: "",
    experience: "",
    socialLinks: {
      youtube: "",
      instagram: "",
      tiktok: "",
      website: "",
    },
    audienceDemo: {
      ageGroup: "",
      gender: "",
      location: "",
      interests: "",
    },
    previousWork: "",
    specialRequests: "",
    agreedToTerms: false,
    agreedToDeadline: false,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

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
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        thumbnail: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
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

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <ImageIcon className="h-6 w-6 text-white" />
    if (type.startsWith("video/")) return <Video className="h-5 w-5" />
    return <FileText className="h-5 w-5" />
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Application submitted:", { formData, uploadedFiles })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Apply for Campaign</DialogTitle>
          <DialogDescription>Complete your application to partner with {campaign.brandName}</DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Campaign Overview */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
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

        {/* Multi-Step Form */}
        <div className="space-y-6">
          {/* Step 1: Basic Information & Pitch */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-purple-600" />
                  Your Pitch & Approach
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pitch">Campaign Pitch *</Label>
                    <Textarea
                      id="pitch"
                      placeholder="Describe your creative approach for this campaign. How will you showcase the brand's product/service? What makes your content unique?"
                      value={formData.pitch}
                      onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                      className="min-h-[120px]"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum 100 characters</p>
                  </div>
                  <div>
                    <Label htmlFor="deliverables">Proposed Deliverables *</Label>
                    <Textarea
                      id="deliverables"
                      placeholder="Detail what you'll deliver (e.g., 1 main post, 3 story posts, specific hashtags, mentions, etc.)"
                      value={formData.deliverables}
                      onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Content Timeline *</Label>
                    <Textarea
                      id="timeline"
                      placeholder="When will you create and post the content? Include draft review timeline if applicable."
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Social Media & Audience */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  Social Media & Audience
                </h3>
                <Tabs defaultValue="social" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="social">Social Links</TabsTrigger>
                    <TabsTrigger value="audience">Audience Demographics</TabsTrigger>
                  </TabsList>

                  <TabsContent value="social" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="youtube">YouTube Channel</Label>
                        <div className="relative">
                          <Youtube className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                          <Input
                            id="youtube"
                            placeholder="https://youtube.com/@yourchannel"
                            value={formData.socialLinks.youtube}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialLinks: { ...formData.socialLinks, youtube: e.target.value },
                              })
                            }
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="instagram">Instagram Profile</Label>
                        <div className="relative">
                          <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-pink-500" />
                          <Input
                            id="instagram"
                            placeholder="https://instagram.com/yourprofile"
                            value={formData.socialLinks.instagram}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialLinks: { ...formData.socialLinks, instagram: e.target.value },
                              })
                            }
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="tiktok">TikTok Profile</Label>
                        <div className="relative">
                          <Play className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black dark:text-white" />
                          <Input
                            id="tiktok"
                            placeholder="https://tiktok.com/@yourprofile"
                            value={formData.socialLinks.tiktok}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialLinks: { ...formData.socialLinks, tiktok: e.target.value },
                              })
                            }
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="website">Website/Portfolio</Label>
                        <div className="relative">
                          <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                          <Input
                            id="website"
                            placeholder="https://yourwebsite.com"
                            value={formData.socialLinks.website}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialLinks: { ...formData.socialLinks, website: e.target.value },
                              })
                            }
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="audience" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ageGroup">Primary Age Group</Label>
                        <Select
                          value={formData.audienceDemo.ageGroup}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              audienceDemo: { ...formData.audienceDemo, ageGroup: value },
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select age group" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="13-17">13-17 years</SelectItem>
                            <SelectItem value="18-24">18-24 years</SelectItem>
                            <SelectItem value="25-34">25-34 years</SelectItem>
                            <SelectItem value="35-44">35-44 years</SelectItem>
                            <SelectItem value="45+">45+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender Split</Label>
                        <Select
                          value={formData.audienceDemo.gender}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              audienceDemo: { ...formData.audienceDemo, gender: value },
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender split" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mostly-female">Mostly Female (60%+)</SelectItem>
                            <SelectItem value="mostly-male">Mostly Male (60%+)</SelectItem>
                            <SelectItem value="balanced">Balanced (40-60%)</SelectItem>
                            <SelectItem value="mixed">Mixed/Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Top Locations</Label>
                        <Input
                          id="location"
                          placeholder="e.g., USA (45%), UK (20%), Canada (15%)"
                          value={formData.audienceDemo.location}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              audienceDemo: { ...formData.audienceDemo, location: e.target.value },
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="interests">Audience Interests</Label>
                        <Input
                          id="interests"
                          placeholder="e.g., Technology, Gaming, Lifestyle"
                          value={formData.audienceDemo.interests}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              audienceDemo: { ...formData.audienceDemo, interests: e.target.value },
                            })
                          }
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}

          {/* Step 3: Portfolio Upload */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Upload className="h-5 w-5 mr-2 text-purple-600" />
                  Portfolio & Previous Work
                </h3>

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
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium mb-2">Upload Your Portfolio</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Drag and drop your best content samples, or click to browse
                  </p>
                  <div className="space-y-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("file-upload")?.click()}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 hover:from-purple-700 hover:to-blue-700"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                    <p className="text-xs text-gray-500">Supports: Images, Videos, PDFs • Max 10MB per file</p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*,video/*,.pdf"
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                    className="hidden"
                  />
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-medium">Uploaded Files ({uploadedFiles.length})</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {uploadedFiles.map((file) => (
                        <Card key={file.id} className="p-4">
                          <div className="flex items-center space-x-3">
                            {file.thumbnail ? (
                              <img
                                src={file.thumbnail || "/placeholder.svg"}
                                alt={file.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                            ) : (
                              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                                {getFileIcon(file.type)}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">{file.name}</p>
                              <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                            </div>
                            <div className="flex space-x-1">
                              <Button size="sm" variant="ghost" onClick={() => window.open(file.url, "_blank")}>
                                <Eye className="h-4 w-4" />
                              </Button>
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

                {/* Previous Work Description */}
                <div>
                  <Label htmlFor="previousWork">Describe Your Previous Work</Label>
                  <Textarea
                    id="previousWork"
                    placeholder="Tell us about your experience with similar campaigns, brands you've worked with, and your content style..."
                    value={formData.previousWork}
                    onChange={(e) => setFormData({ ...formData, previousWork: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                  Review & Submit
                </h3>

                {/* Application Summary */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Application Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide">Campaign Pitch</h4>
                      <p className="mt-1">{formData.pitch || "No pitch provided"}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide">Deliverables</h4>
                      <p className="mt-1">{formData.deliverables || "No deliverables specified"}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide">Portfolio Files</h4>
                      <p className="mt-1">{uploadedFiles.length} files uploaded</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide">Social Media</h4>
                      <div className="mt-1 space-y-1">
                        {formData.socialLinks.youtube && (
                          <p className="text-sm flex items-center">
                            <Youtube className="h-4 w-4 mr-2 text-red-500" />
                            YouTube Connected
                          </p>
                        )}
                        {formData.socialLinks.instagram && (
                          <p className="text-sm flex items-center">
                            <Instagram className="h-4 w-4 mr-2 text-pink-500" />
                            Instagram Connected
                          </p>
                        )}
                        {formData.socialLinks.tiktok && (
                          <p className="text-sm flex items-center">
                            <Play className="h-4 w-4 mr-2 text-black dark:text-white" />
                            TikTok Connected
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="specialRequests">Special Requests or Notes (Optional)</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Any special requirements, questions, or additional information you'd like to share..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="min-h-[80px]"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
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
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="deadline"
                      checked={formData.agreedToDeadline}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreedToDeadline: checked as boolean })}
                    />
                    <Label htmlFor="deadline" className="text-sm leading-relaxed">
                      I confirm that I can meet the campaign deadline of{" "}
                      <span className="font-medium">{campaign.deadline}</span> and will deliver all agreed-upon content
                      on time.
                    </Label>
                  </div>
                </div>

                {/* Warning Messages */}
                <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Important Reminders</p>
                        <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
                          <li>• Applications are reviewed within 2-3 business days</li>
                          <li>• You'll be notified via email about the application status</li>
                          <li>• Payment is processed after content approval and performance verification</li>
                          <li>• Make sure your social media analytics are up to date</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <div>
            {currentStep > 1 && (
              <Button variant="outline" onClick={prevStep}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            {currentStep < totalSteps ? (
              <Button onClick={nextStep} className="bg-gradient-to-r from-purple-600 to-blue-600">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!formData.agreedToTerms || !formData.agreedToDeadline}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
