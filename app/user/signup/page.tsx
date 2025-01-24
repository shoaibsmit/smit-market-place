"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function UserSignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [category, setCategory] = useState("sale")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle user sign up logic here
    console.log("User sign up:", email, password, category)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">User Sign Up</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <Label>Category</Label>
          <RadioGroup value={category} onValueChange={setCategory}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sale" id="sale" />
              <Label htmlFor="sale">Sale</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="purchase" id="purchase" />
              <Label htmlFor="purchase">Purchase</Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  )
}

