import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Luvsab, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service."
    },
    {
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of the app for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; attempt to decompile or reverse engineer any software contained in Luvsab."
    },
    {
      title: "User Account",
      content: "To use certain features of the Service, you must register for an account. You must provide accurate and complete information and keep your account information updated. You are responsible for maintaining the security of your account and password."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall Luvsab or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Luvsab's app."
    },
    {
      title: "Changes to Terms",
      content: "Luvsab reserves the right to revise these terms of service for its app at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-black/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-gray-400">
              Last updated: March 21, 2024
            </p>
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="text-gray-400">
                  {section.content}
                </p>
                {index < sections.length - 1 && (
                  <Separator className="bg-purple-500/20" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}