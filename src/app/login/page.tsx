import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/themes/theme-switcher"

export default function LoginPage() {
  return (
    <div className="flex items-center h-screen w-screen">
    <div className="absolute top-4 right-20">
        <ModeToggle />
      </div>
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-10">
      <CardTitle className="text-1xl text-center font-extrabold tracking-wide">TICKETSHACK</CardTitle>
   
      <CardTitle className="text-3xl text-center font-extrabold">Sign In</CardTitle>

      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold">Email</Label>
            <Input id="email" type="email" className="border-2 border-black dark:border-white" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="font-bold">Password</Label>
            <Input id="password" type="password" className="border-2 border-black dark:border-white" required />
          </div>
          <div className="space-y-2">
          <Label className="text-sm text-gray-500 cursor-pointer hover:underline">
            Forgot Password?
          </Label>
          </div>
          <div className="space-y-10">
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          </div>
          <div className="border-t border-gray-400 space-y-10"></div> 
          <div className="flex items-center justify-between space-x-2">
            <Label className="text-sm">
            No TicketShack Account?
            </Label>

          <Button variant="outline" >
             Sign Up
           </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
