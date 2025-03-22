import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Getting Started with Luvsab",
      description: "Learn how to make the most of your Luvsab experience",
      date: "March 21, 2024",
      readTime: "5 min read"
    },
    {
      title: "New Features Update",
      description: "Discover the latest features and improvements",
      date: "March 20, 2024",
      readTime: "3 min read"
    },
    {
      title: "Community Stories",
      description: "Read inspiring stories from our community members",
      date: "March 19, 2024",
      readTime: "7 min read"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Blog
        </h1>
        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-black/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{post.title}</CardTitle>
                <CardDescription className="text-gray-400">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-300">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}