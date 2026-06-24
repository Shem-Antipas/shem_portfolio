"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeDollarSign, Dribbble, ExternalLink, Github, Linkedin, Mail, MapPin, Palette, Phone, Send, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { projectTypes } from "@/lib/data";
import { contactSchema, type ContactInput } from "@/lib/validations";

const socials = [
  { label: "Behance", href: "https://www.behance.net/antipasshem", icon: ExternalLink },
  { label: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/antipas-shem-a421a81a2/", icon: Linkedin },
  { label: "Twitter/X", href: "https://x.com", icon: Twitter },
  { label: "GitHub", href: "https://github.com/Shem-Antipas", icon: Github },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", projectType: "", message: "" },
  });

  async function onSubmit(values: ContactInput) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Unable to send message");

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I will get back to you shortly.",
      });
      reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Message not sent",
        description: "Please try again, or email directly if the issue persists.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h2 className="editorial-heading mt-4">Let’s build a product people can feel and use.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="bg-card/80">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a className="text-muted-foreground hover:text-foreground" href="mailto:antipasshem@gmail.com">
                    antipasshem@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-secondary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a className="text-muted-foreground hover:text-foreground" href="tel:+254723688741">
                    0723688741
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-secondary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">Based in</p>
                  <p className="text-muted-foreground">P.O. Box 78, Rongo · Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="mt-8">
                  <Palette className="mr-2 h-4 w-4" />
                  See full services
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>High-impact creative services</DialogTitle>
                  <DialogDescription>
                    I offer UI/UX audits, SaaS dashboards, brand identity systems, social campaigns, motion direction,
                    product prototypes, and frontend implementation support.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <BadgeDollarSign className="h-4 w-4 text-primary" />
                    I scope projects around goals, timeline, content readiness, and launch complexity.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card className="bg-card/80">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                  {errors.email ? <p className="text-sm text-destructive">{errors.email.message}</p> : null}
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Project Type</Label>
                <Select onValueChange={(value) => setValue("projectType", value, { shouldValidate: true })}>
                  <SelectTrigger aria-label="Select project type">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.projectType ? <p className="text-sm text-destructive">{errors.projectType.message}</p> : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="What are you working on?" {...register("message")} />
                {errors.message ? <p className="text-sm text-destructive">{errors.message.message}</p> : null}
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Start a conversation"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
