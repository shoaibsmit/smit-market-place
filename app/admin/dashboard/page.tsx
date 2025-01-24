import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/admin/pending-ads">
          <Button className="w-full">Pending Advertisements</Button>
        </Link>
        <Link href="/admin/user-list">
          <Button className="w-full">User List</Button>
        </Link>
        <Link href="/admin/product-list">
          <Button className="w-full">Product List</Button>
        </Link>
      </div>
    </div>
  )
}

