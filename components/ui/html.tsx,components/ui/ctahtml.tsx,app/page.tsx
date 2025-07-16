"use client"

\`\`\`tsx
// components/ui/html.tsx
import { useEffect, useRef } from "react"

interface HTMLProps {
  html: string
}

const HTML: React.FC<HTMLProps> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = html

      const scripts = containerRef.current.getElementsByTagName("script")

      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i]
        const newScript = document.createElement("script")

        // Copy attributes
        for (let j = 0; j < script.attributes.length; j++) {
          const attr = script.attributes[j]
          newScript.setAttribute(attr.name, attr.value)
        }

        // Copy content
        newScript.textContent = script.textContent

        // Replace the old script with the new one
        script.parentNode?.replaceChild(newScript, script)

        // Execute post-processing if needed
        if (newScript.hasAttribute("data-run-after-render")) {
          const postProcessingFunctionName = newScript.getAttribute("data-run-after-render") || ""

          if (postProcessingFunctionName) {
            const postProcessing = (window as any)[postProcessingFunctionName]
            if (typeof postProcessing === "object" && postProcessing !== null) {
              if (typeof postProcessing.render === "function") {
                postProcessing.render()
              }
            }
          }
        }
      }
    }
  }, [html])

  return <div ref={containerRef} />
}

export default HTML
\`\`\`

\`\`\`tsx
// components/ui/ctahtml.tsx
import type React from "react"
import { useEffect, useRef } from "react"

interface CTAHTMLProps {
  html: string
}

const CTAHTML: React.FC<CTAHTMLProps> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = html

      const scripts = containerRef.current.getElementsByTagName("script")

      for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i]
        const newScript = document.createElement("script")

        // Copy attributes
        for (let j = 0; j < script.attributes.length; j++) {
          const attr = script.attributes[j]
          newScript.setAttribute(attr.name, attr.value)
        }

        // Copy content
        newScript.textContent = script.textContent

        // Replace the old script with the new one
        script.parentNode?.replaceChild(newScript, script)

        // Execute post-processing if needed
        if (newScript.hasAttribute("data-run-after-render")) {
          const postProcessingFunctionName = newScript.getAttribute("data-run-after-render") || ""

          if (postProcessingFunctionName) {
            const postProcessing = (window as any)[postProcessingFunctionName]
            if (typeof postProcessing === "object" && postProcessing !== null) {
              if (typeof postProcessing.render === "function") {
                postProcessing.render()
              }
            }
          }
        }
      }
    }
  }, [html])

  return <div ref={containerRef} />
}

export default CTAHTML
\`\`\`

\`\`\`tsx
// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { CheckCheck, LayoutDashboard, ListChecks, PieChart } from "lucide-react"

const statColor = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
} as const

const stats = [
  {
    title: "Increased Efficiency",
    value: "25%",
    description: "Streamline operations and reduce waste with our proven methodologies.",
    color: "blue",
    icon: LayoutDashboard,
  },
  {
    title: "Cost Reduction",
    value: "15%",
    description: "Lower your expenses through optimized processes and resource management.",
    color: "green",
    icon: PieChart,
  },
  {
    title: "Improved Quality",
    value: "30%",
    description: "Enhance product and service quality to exceed customer expectations.",
    color: "purple",
    icon: ListChecks,
  },
  {
    title: "Higher Throughput",
    value: "20%",
    description: "Accelerate production and delivery to meet growing market demands.",
    color: "orange",
    icon: CheckCheck,
  },
]

export default function Home() {
  return (
    <main className="container grid items-center justify-center gap-6 pt-20 md:pt-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Unlock Manufacturing Excellence
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Transform your manufacturing processes with our expert consulting
          services.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="group">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                  statColor[stat.color as keyof typeof statColor]
                )}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-center">{stat.value}</p>
              <p className="text-muted-foreground text-center">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <section className="w-full space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Contact Us
        </h2>
        <Card className="w-[380px]">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form below to learn more.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Your email address"
                required
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Input id="message" placeholder="Write your message here" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
\`\`\`
