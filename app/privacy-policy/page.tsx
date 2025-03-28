import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including but not limited to your name, email address, and usage data. This helps us provide and improve our services."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Luvsab and our users."
    },
    {
      title: "Information Sharing",
      content: "We do not share your personal information with companies, organizations, or individuals outside of Luvsab except in the following cases: with your consent, for legal reasons, or with trusted partners who assist us in operating our service."
    },
    {
      title: "Data Security",
      content: "We work hard to protect Luvsab and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, update, or delete your information at any time. You can do this through your account settings or by contacting our support team."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-black/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Privacy Policy
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
