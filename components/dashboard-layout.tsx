"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Bell,
  Menu,
  Search,
  Settings,
  LogOut,
  User,
  Home,
  BarChart3,
  MessageSquare,
  DollarSign,
  Users,
  FileText,
  Target,
  Eye,
  CreditCard,
  Briefcase,
  Building2,
  Shield,
  Flag,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: "creator" | "brand" | "admin"
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const getNavItems = () => {
    switch (userType) {
      case "creator":
        return [
          { href: "/dashboard/creator", icon: Home, label: "Dashboard" },
          { href: "/dashboard/creator/marketplace", icon: Target, label: "Marketplace" },
          { href: "/dashboard/creator/earnings", icon: DollarSign, label: "Earnings" },
          { href: "/dashboard/creator/messages", icon: MessageSquare, label: "Messages" },
          { href: "/dashboard/creator/profile", icon: User, label: "My Profile" },
          { href: "/dashboard/creator/settings", icon: Settings, label: "Settings" },
        ]
      case "brand":
        return [
          { href: "/dashboard/brand", icon: Home, label: "Dashboard" },
          { href: "/dashboard/brand/create-campaign", icon: Target, label: "Create Campaign" },
          { href: "/dashboard/brand/discover", icon: Eye, label: "Discover Creators" },
          { href: "/dashboard/brand/inbox", icon: MessageSquare, label: "Inbox" },
          { href: "/dashboard/brand/analytics", icon: BarChart3, label: "Analytics" },
          { href: "/dashboard/brand/billing", icon: CreditCard, label: "Billing" },
          { href: "/dashboard/brand/settings", icon: Settings, label: "Settings" },
        ]
      case "admin":
        return [
          { href: "/dashboard/admin", icon: Home, label: "Dashboard" },
          { href: "/dashboard/admin/creators", icon: Users, label: "Manage Creators" },
          { href: "/dashboard/admin/brands", icon: Building2, label: "Manage Brands" },
          { href: "/dashboard/admin/campaigns", icon: Briefcase, label: "Campaigns" },
          { href: "/dashboard/admin/applications", icon: FileText, label: "Campaign Applications" },
          { href: "/dashboard/admin/payouts", icon: DollarSign, label: "Payouts & Earnings" },
          { href: "/dashboard/admin/moderation", icon: Shield, label: "Content Moderation" },
          { href: "/dashboard/admin/reports", icon: Flag, label: "Reports & Flags" },
          { href: "/dashboard/admin/settings", icon: Settings, label: "Settings" },
        ]
      default:
        return []
    }
  }

  const navItems = getNavItems()

  const Sidebar = ({ mobile = false }) => (
    <div
      className={`flex flex-col h-full ${mobile ? "w-full" : "w-64"} bg-brand-black text-white border-r border-gray-800`}
    >
      <div className="p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-red rounded-lg"></div>
          <span className="text-xl font-bold text-white">Rembix</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive ? "bg-brand-red text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => mobile && setSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-white">John Doe</p>
            <p className="text-xs text-gray-400 capitalize">{userType}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64 bg-brand-black">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navigation */}
        <header className="sticky top-0 z-40 bg-brand-black text-white border-b border-gray-800 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-gray-800">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64 bg-brand-black">
                  <Sidebar mobile />
                </SheetContent>
              </Sheet>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search..." className="pl-10 w-64 bg-gray-800 border-gray-700 text-white" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative text-white hover:bg-gray-800">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-brand-red">
                  3
                </Badge>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="@johndoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-brand-black text-white border-gray-800" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-gray-400">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-800" />
                  <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
