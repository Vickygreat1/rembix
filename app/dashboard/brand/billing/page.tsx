"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/dashboard-layout"
import { CreditCard, Download, Calendar, DollarSign, TrendingUp, AlertCircle } from "lucide-react"

const invoices = [
  {
    id: "INV-001",
    date: "2024-01-15",
    amount: 4200,
    status: "paid",
    campaign: "Summer Fashion Collection",
    dueDate: "2024-01-30",
  },
  {
    id: "INV-002",
    date: "2024-01-20",
    amount: 7500,
    status: "paid",
    campaign: "Tech Product Review",
    dueDate: "2024-02-05",
  },
  {
    id: "INV-003",
    date: "2024-02-01",
    amount: 2800,
    status: "pending",
    campaign: "Fitness Challenge",
    dueDate: "2024-02-15",
  },
  {
    id: "INV-004",
    date: "2024-02-05",
    amount: 5200,
    status: "overdue",
    campaign: "Beauty Product Launch",
    dueDate: "2024-02-20",
  },
]

const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "12/26",
    isDefault: true,
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "8888",
    expiry: "09/25",
    isDefault: false,
  },
]

export default function BillingPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const totalSpent = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const pendingAmount = invoices
    .filter((inv) => inv.status === "pending" || inv.status === "overdue")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <DashboardLayout userType="brand">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Billing & Payments</h1>
          <p className="text-gray-400 mt-1">Manage your payments, invoices, and billing information</p>
        </div>

        {/* Billing Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Spent</CardTitle>
              <DollarSign className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${totalSpent.toLocaleString()}</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Pending Payments</CardTitle>
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${pendingAmount.toLocaleString()}</div>
              <p className="text-xs text-gray-400">2 invoices due</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Next Payment</CardTitle>
              <Calendar className="h-4 w-4 text-brand-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Feb 15</div>
              <p className="text-xs text-gray-400">$2,800 due</p>
            </CardContent>
          </Card>
        </div>

        {/* Billing Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="bg-gray-800 text-white">
            <TabsTrigger value="overview" className="data-[state=active]:bg-brand-red">
              Overview
            </TabsTrigger>
            <TabsTrigger value="invoices" className="data-[state=active]:bg-brand-red">
              Invoices
            </TabsTrigger>
            <TabsTrigger value="payment-methods" className="data-[state=active]:bg-brand-red">
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-brand-red">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Recent Activity */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Recent Billing Activity</CardTitle>
                <CardDescription className="text-gray-400">Your latest payments and invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.slice(0, 3).map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 border rounded-lg border-gray-800"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            invoice.status === "paid"
                              ? "bg-green-500"
                              : invoice.status === "pending"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium text-white">{invoice.campaign}</p>
                          <p className="text-sm text-gray-400">
                            {invoice.id} • {invoice.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-white">${invoice.amount.toLocaleString()}</p>
                        <Badge
                          className={`text-xs ${
                            invoice.status === "paid"
                              ? "bg-green-500 text-white"
                              : invoice.status === "pending"
                                ? "bg-yellow-500 text-white"
                                : "bg-red-500 text-white"
                          }`}
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Payment Methods</CardTitle>
                <CardDescription className="text-gray-400">Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center justify-between p-3 border rounded-lg border-gray-800"
                    >
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-white">
                            {method.type} •••• {method.last4}
                          </p>
                          <p className="text-sm text-gray-400">Expires {method.expiry}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {method.isDefault && (
                          <Badge variant="secondary" className="text-xs">
                            Default
                          </Badge>
                        )}
                        <Button variant="outline" size="sm" className="border-gray-300 text-white">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full border-gray-300 text-white">
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">All Invoices</CardTitle>
                    <CardDescription className="text-gray-400">Complete history of your invoices</CardDescription>
                  </div>
                  <Button variant="outline" className="border-gray-300 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-4 border rounded-lg border-gray-800"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            invoice.status === "paid"
                              ? "bg-green-500"
                              : invoice.status === "pending"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium text-white">{invoice.id}</p>
                          <p className="text-sm text-gray-400">{invoice.campaign}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Issued</p>
                          <p className="font-medium text-white">{invoice.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Due</p>
                          <p className="font-medium text-white">{invoice.dueDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Amount</p>
                          <p className="font-medium text-white">${invoice.amount.toLocaleString()}</p>
                        </div>
                        <Badge
                          className={`text-xs ${
                            invoice.status === "paid"
                              ? "bg-green-500 text-white"
                              : invoice.status === "pending"
                                ? "bg-yellow-500 text-white"
                                : "bg-red-500 text-white"
                          }`}
                        >
                          {invoice.status}
                        </Badge>
                        <Button variant="outline" size="sm" className="border-gray-300 text-white">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment-methods" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Payment Methods</CardTitle>
                <CardDescription className="text-gray-400">Add and manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 border rounded-lg border-gray-800"
                  >
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium text-white">
                          {method.type} ending in {method.last4}
                        </p>
                        <p className="text-sm text-gray-400">Expires {method.expiry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {method.isDefault && <Badge variant="secondary">Default</Badge>}
                      <Button variant="outline" size="sm" className="border-gray-300 text-white">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="border-red-300 text-red-600">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                <Separator />
                <Button className="w-full bg-brand-red hover:bg-red-700 text-white">Add New Payment Method</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Billing Settings</CardTitle>
                <CardDescription className="text-gray-400">Configure your billing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Auto-pay</p>
                      <p className="text-sm text-gray-400">Automatically pay invoices when due</p>
                    </div>
                    <Button variant="outline" className="border-gray-300 text-white">
                      Enable
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Email notifications</p>
                      <p className="text-sm text-gray-400">Receive billing notifications via email</p>
                    </div>
                    <Button variant="outline" className="border-gray-300 text-white">
                      Configure
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Billing address</p>
                      <p className="text-sm text-gray-400">Update your billing information</p>
                    </div>
                    <Button variant="outline" className="border-gray-300 text-white">
                      Update
                    </Button>
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
