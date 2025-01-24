"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UploadAd() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle ad upload logic here
    console.log("Ad upload:", { title, description, price, category, location })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Upload Advertisement</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              {/* Add more categories as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-6">
          <Label htmlFor="location">Location</Label>
          <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full">
          Upload Advertisement
        </Button>
      </form>
    </div>
  )
}

