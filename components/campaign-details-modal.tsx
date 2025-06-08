"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, DollarSign, Users, Target, FileText, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface Campaign {
  id: number
  title: string
  brand: string
  image: string
  description: string
  category: string
  deadline: string
  requirements: string[]
  deliverables: string[]
  compensation: string
  status: string
}

interface CampaignDetailsModalProps {
  campaign: Campaign
  isOpen: boolean
  onClose: () => void
}

export function CampaignDetailsModal({ campaign, isOpen, onClose }: CampaignDetailsModalProps) {
  const router = useRouter()

  const handleApply = () => {
    router.push(`/dashboard/creator/apply/${campaign.id}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{campaign.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Campaign Image */}
          <div className="relative">
            <Image
              src={campaign.image || "/placeholder.svg"}
              alt={campaign.title}
              width={800}
              height={300}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Badge className="absolute top-4 right-4 bg-brand-red text-white">{campaign.category}</Badge>
          </div>

          {/* Campaign Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Campaign Brief</h3>
                <p className="text-gray-300">{campaign.description}</p>
                <p className="text-gray-300 mt-2">
                  We're looking for authentic creators who can showcase our products in a natural, engaging way that
                  resonates with their audience. The content should feel organic and align with your personal brand
                  while highlighting the key features of our products.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Campaign Details</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-2 text-brand-red" />
                    <span>Brand: {campaign.brand}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-brand-red" />
                    <span>Deadline: {campaign.deadline}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <DollarSign className="h-4 w-4 mr-2 text-brand-red" />
                    <span>Compensation: {campaign.compensation}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Target className="h-4 w-4 mr-2 text-brand-red" />
                    <span>Category: {campaign.category}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Requirements</h3>
                <ul className="space-y-2">
                  {campaign.requirements.map((req, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Deliverables</h3>
                <ul className="space-y-2">
                  {campaign.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <FileText className="h-4 w-4 mr-2 text-brand-red" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-300">Brand Guidelines PDF</p>
                    <p className="text-xs text-gray-500">Download brand colors, fonts, and style guide</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-300">Product Images & Videos</p>
                    <p className="text-xs text-gray-500">High-resolution assets for your content</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-sm text-gray-300">Hashtag List</p>
                    <p className="text-xs text-gray-500">Recommended hashtags and mentions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-700" />

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose} className="border-gray-700 text-white hover:bg-gray-800">
              Close
            </Button>
            <Button onClick={handleApply} className="bg-brand-red hover:bg-red-700 text-white">
              Apply to Campaign
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
