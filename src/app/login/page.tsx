import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Page from "../page"

export default function Component() {
  return (
    <div className="flex items-center h-screen w-screen">
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center font-bold">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
          <Label className="text-sm text-gray-500 cursor-pointer hover:underline">
            Forgot Password?
          </Label>
          </div>
          <div className="space-y-10">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
