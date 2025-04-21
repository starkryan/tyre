import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "Luvsab uses anonymous login through Firebase. We do not collect or store any personally identifiable information. Your interactions with the AI remain private and are stored only on your device using local storage.",
    },
    {
      title: "Use of Collected Information",
      content:
        "We do not collect or track any personal data. All messages and preferences are stored locally on your device to provide a personalized experience without compromising your privacy.",
    },
    {
      title: "AI Interactions and Data",
      content:
        "Your conversations with the AI are processed in real-time and are not stored on our servers. We do not analyze or share chat history, and your messages are never used for advertising or third-party purposes.",
    },
    {
      title: "Information Sharing",
      content:
        "Since we do not collect or store personal data, there is nothing to share. We do not sell, rent, or disclose your data to any third parties.",
    },
    {
      title: "Data Security",
      content:
        "All your chat data stays on your own device. We use secure communication methods when necessary, but since there's no server-side data, the risk of data breaches is minimized.",
    },
    {
      title: "Your Privacy Rights",
      content:
        "You are always in control. You can clear your chat history anytime by using the app’s built-in features or clearing your local storage manually.",
    },
    {
      title: "Children’s Privacy",
      content:
        "Luvsab is intended for users aged 18 and older. We do not knowingly collect any data from children. If you believe a child has used the app, please contact us for guidance.",
    },
    {
      title: "Policy Updates",
      content:
        "We may update this Privacy Policy from time to time. Any major changes will be reflected in the app and on our website, if applicable.",
    },
    {
      title: "Contact Us",
      content:
        "If you have questions or concerns, feel free to reach out at support@luvsab.app.",
    },
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
