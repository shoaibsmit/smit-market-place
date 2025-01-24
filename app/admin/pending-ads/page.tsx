"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for pending ads
const mockPendingAds = [
  { id: 1, title: "iPhone 12", description: "Like new iPhone 12", price: 500, category: "Electronics" },
  { id: 2, title: "Leather Sofa", description: "Comfortable leather sofa", price: 800, category: "Furniture" },
]

export default function PendingAds() {
  const [pendingAds, setPendingAds] = useState(mockPendingAds)

  const handleApprove = (id: number) => {
    // Handle approval logic here
    console.log("Approved ad:", id)
    setPendingAds(pendingAds.filter((ad) => ad.id !== id))
  }

  const handleReject = (id: number) => {
    // Handle rejection logic here
    console.log("Rejected ad:", id)
    setPendingAds(pendingAds.filter((ad) => ad.id !== id))
  }

  const handleCategorize = (id: number, category: string) => {
    // Handle categorization logic here
    console.log("Categorized ad:", id, category)
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Pending Advertisements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pendingAds.map((ad) => (
          <Card key={ad.id}>
            <CardHeader>
              <CardTitle>{ad.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{ad.description}</p>
              <p>Price: ${ad.price}</p>
              <p>Category: {ad.category}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2">
              <Select onValueChange={(value) => handleCategorize(ad.id, value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Categorize" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="better">Better</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-2 w-full">
                <Button onClick={() => handleApprove(ad.id)} className="flex-1">
                  Approve
                </Button>
                <Button onClick={() => handleReject(ad.id)} variant="destructive" className="flex-1">
                  Reject
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

