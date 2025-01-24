import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to our Marketplace</h1>
        <div className="flex mt-6 space-x-4">
          <Link href="/admin/signin">
            <Button>Admin Sign In</Button>
          </Link>
          <Link href="/user/signup">
            <Button>User Sign Up</Button>
          </Link>
          <Link href="/user/signin">
            <Button>User Sign In</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

