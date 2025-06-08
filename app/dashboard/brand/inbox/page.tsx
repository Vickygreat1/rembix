"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, Send, Paperclip, MoreVertical, Star, Archive } from "lucide-react"

const conversations = [
  {
    id: 1,
    creator: {
      name: "Sarah Johnson",
      username: "@sarahjstyle",
      avatar: "/placeholder.svg",
    },
    lastMessage: "Thanks for considering me for the campaign! I'd love to discuss the details further.",
    timestamp: "2 hours ago",
    unread: true,
    campaign: "Summer Fashion Collection",
    status: "pending",
  },
  {
    id: 2,
    creator: {
      name: "Mike Chen",
      username: "@techmikereviews",
      avatar: "/placeholder.svg",
    },
    lastMessage: "The product review video is ready for your approval. Here's the preview link.",
    timestamp: "1 day ago",
    unread: false,
    campaign: "Tech Product Review",
    status: "active",
  },
  {
    id: 3,
    creator: {
      name: "Emma Fitness",
      username: "@emmafitlife",
      avatar: "/placeholder.svg",
    },
    lastMessage: "Campaign completed! All deliverables have been submitted as requested.",
    timestamp: "3 days ago",
    unread: false,
    campaign: "Fitness Challenge",
    status: "completed",
  },
]

const messages = [
  {
    id: 1,
    sender: "creator",
    content:
      "Hi! I'm really interested in your Summer Fashion Collection campaign. I think my audience would love your products!",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "brand",
    content:
      "Hello Sarah! Thank you for your interest. I've reviewed your profile and I think you'd be a great fit. Can you tell me more about your content creation process?",
    timestamp: "11:15 AM",
  },
  {
    id: 3,
    sender: "creator",
    content:
      "Of course! I typically create a mix of outfit posts, styling videos, and behind-the-scenes content. I always ensure the content feels authentic to my personal style while highlighting the brand's key features.",
    timestamp: "11:45 AM",
  },
  {
    id: 4,
    sender: "brand",
    content:
      "That sounds perfect! I'd like to move forward with your application. I'll send over the campaign brief and contract details shortly.",
    timestamp: "2:20 PM",
  },
  {
    id: 5,
    sender: "creator",
    content: "Thanks for considering me for the campaign! I'd love to discuss the details further.",
    timestamp: "3:10 PM",
  },
]

export default function InboxPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
    }
  }

  return (
    <DashboardLayout userType="brand">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Inbox</h1>
          <p className="text-gray-400 mt-1">Communicate with creators and manage campaign discussions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="bg-gray-900 border-gray-800 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Messages</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 ${
                      selectedConversation.id === conversation.id ? "border-brand-red bg-gray-50" : "border-transparent"
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={conversation.creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {conversation.creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-white truncate">{conversation.creator.name}</p>
                          <div className="flex items-center space-x-1">
                            {conversation.unread && <div className="w-2 h-2 bg-brand-red rounded-full"></div>}
                            <p className="text-xs text-gray-500">{conversation.timestamp}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mb-1">{conversation.creator.username}</p>
                        <p className="text-sm text-gray-300 truncate">{conversation.lastMessage}</p>
                        <div className="flex items-center justify-between mt-2">
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              conversation.status === "active"
                                ? "bg-green-100 text-green-800"
                                : conversation.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {conversation.campaign}
                          </Badge>
                          <Badge
                            className={`text-xs ${
                              conversation.status === "active"
                                ? "bg-green-500"
                                : conversation.status === "pending"
                                  ? "bg-yellow-500"
                                  : "bg-gray-500"
                            }`}
                          >
                            {conversation.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="bg-gray-900 border-gray-800 lg:col-span-2 flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedConversation.creator.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {selectedConversation.creator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-white">{selectedConversation.creator.name}</CardTitle>
                    <CardDescription className="text-gray-400">{selectedConversation.creator.username}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Archive className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Badge className="w-fit bg-brand-red text-white">{selectedConversation.campaign}</Badge>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "brand" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "brand" ? "bg-brand-red text-white" : "bg-gray-700 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.sender === "brand" ? "text-red-100" : "text-gray-500"}`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Message Input */}
            <div className="border-t border-gray-800 p-4">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 bg-gray-800 text-white"
                />
                <Button
                  onClick={sendMessage}
                  className="bg-brand-red hover:bg-red-700 text-white"
                  disabled={!newMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
