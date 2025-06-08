"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Search, Send, Paperclip, ImageIcon, Smile, MoreVertical, Phone, Video, Info, Filter, Plus } from "lucide-react"

// Sample conversation data
const conversations = [
  {
    id: "1",
    name: "TechFlow SaaS",
    avatar: "/placeholder.svg",
    lastMessage: "Hi Sarah, we loved your proposal for the AI tool campaign!",
    time: "10:30 AM",
    unread: 2,
    isOnline: true,
    isActive: true,
  },
  {
    id: "2",
    name: "StyleCo Fashion",
    avatar: "/placeholder.svg",
    lastMessage: "Can you send us the draft for the summer collection video?",
    time: "Yesterday",
    unread: 0,
    isOnline: false,
    isActive: false,
  },
  {
    id: "3",
    name: "GameZone Pro",
    avatar: "/placeholder.svg",
    lastMessage: "The headset review was amazing! Our team is very impressed.",
    time: "Yesterday",
    unread: 0,
    isOnline: true,
    isActive: false,
  },
  {
    id: "4",
    name: "FitLife Supplements",
    avatar: "/placeholder.svg",
    lastMessage: "We'd like to discuss a new protein powder campaign with you.",
    time: "Monday",
    unread: 0,
    isOnline: false,
    isActive: false,
  },
  {
    id: "5",
    name: "EcoClean Products",
    avatar: "/placeholder.svg",
    lastMessage: "Thanks for submitting your application! We'll review it soon.",
    time: "Jun 10",
    unread: 0,
    isOnline: false,
    isActive: false,
  },
]

// Sample messages for the active conversation
const messages = [
  {
    id: "1",
    sender: "TechFlow SaaS",
    content: "Hi Sarah, we loved your proposal for the AI tool campaign!",
    time: "10:30 AM",
    isMe: false,
  },
  {
    id: "2",
    sender: "Me",
    content: "Thank you! I'm excited to work on this project with you.",
    time: "10:32 AM",
    isMe: true,
  },
  {
    id: "3",
    sender: "TechFlow SaaS",
    content: "Great! We have a few ideas we'd like to discuss. Are you available for a quick call tomorrow at 2 PM?",
    time: "10:35 AM",
    isMe: false,
  },
  {
    id: "4",
    sender: "Me",
    content: "Yes, that works for me. I'll make sure to prepare some additional ideas for the campaign.",
    time: "10:38 AM",
    isMe: true,
  },
  {
    id: "5",
    sender: "TechFlow SaaS",
    content:
      "Perfect! Looking forward to it. In the meantime, here's a brief overview of our product features that we'd like to highlight in the campaign.",
    time: "10:40 AM",
    isMe: false,
  },
  {
    id: "6",
    sender: "TechFlow SaaS",
    content:
      "Our AI productivity tool helps users automate repetitive tasks, organize their workflow, and increase productivity by up to 40%. The key features include smart scheduling, email management, and task prioritization.",
    time: "10:41 AM",
    isMe: false,
  },
  {
    id: "7",
    sender: "Me",
    content:
      "This is great information! I think we can create a compelling narrative around how the tool saves time and reduces stress. I'm thinking of a before/after approach to showcase the benefits visually.",
    time: "10:45 AM",
    isMe: true,
  },
]

export default function CreatorMessages() {
  const [activeConversation, setActiveConversation] = useState(conversations[0])
  const [messageInput, setMessageInput] = useState("")

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message to an API
      console.log("Sending message:", messageInput)
      setMessageInput("")
    }
  }

  return (
    <DashboardLayout userType="creator">
      <div className="h-[calc(100vh-10rem)] flex flex-col">
        <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-6 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h1 className="text-2xl font-bold">Messages</h1>
            <p className="text-purple-200">Communicate with brands and manage your campaigns</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-1 overflow-hidden rounded-b-2xl border border-t-0">
          {/* Conversation List */}
          <div className="w-full md:w-80 border-r flex flex-col">
            <div className="p-3 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search messages..." className="pl-10" />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border-b">
              <h2 className="font-semibold">Conversations</h2>
              <div className="flex space-x-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    conversation.isActive ? "bg-gray-100 dark:bg-gray-800" : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>{conversation.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {conversation.isOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate">{conversation.name}</p>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge className="ml-2 bg-purple-600 text-white">{conversation.unread}</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={activeConversation.avatar || "/placeholder.svg"} alt={activeConversation.name} />
                    <AvatarFallback>{activeConversation.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  {activeConversation.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{activeConversation.name}</h3>
                  <p className="text-sm text-gray-500">
                    {activeConversation.isOnline ? "Online" : "Last seen yesterday"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs lg:max-w-md ${message.isMe ? "order-2" : "order-1"}`}>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.isMe
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 ${message.isMe ? "text-right" : "text-left"}`}>
                      {message.time}
                    </p>
                  </div>
                  {!message.isMe && (
                    <Avatar className="h-8 w-8 order-1 mr-2">
                      <AvatarImage
                        src={activeConversation.avatar || "/placeholder.svg"}
                        alt={activeConversation.name}
                      />
                      <AvatarFallback>{activeConversation.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="pr-10"
                  />
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
