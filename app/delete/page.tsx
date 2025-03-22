import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-black/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Contact Us for account deletion
            </CardTitle> 
            <CardDescription className="text-gray-400">
              you can request to delete your account here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Name</label>
                <Input 
                  placeholder="Your name" 
                  className="bg-black/30 border-purple-500/20 focus:border-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-black/30 border-purple-500/20 focus:border-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Message</label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] bg-black/30 border-purple-500/20 focus:border-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Reason for deletion</label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] bg-black/30 border-purple-500/20 focus:border-purple-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Account ID</label>
                <Input
                  type="text"
                  placeholder="Your Account ID"
                  className="bg-black/30 border-purple-500/20 focus:border-purple-500/50"
                />
              </div>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                Request Deletion
              </Button>
             
             
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}