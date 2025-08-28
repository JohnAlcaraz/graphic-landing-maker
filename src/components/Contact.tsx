import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactMethods = [
    {
      title: "Email Us",
      description: "Drop us a line and we'll get back to you faster than a cat chasing a laser pointer.",
      icon: "📧",
      info: "hello@pollo.ai",
      action: "mailto:hello@pollo.ai"
    },
    {
      title: "Join Our Discord",
      description: "Connect with our community of developers and share your coding adventures.",
      icon: "💬",
      info: "discord.gg/pollo-ai",
      action: "#"
    },
    {
      title: "Follow Us",
      description: "Stay updated with the latest features and cat-themed development tips.",
      icon: "🐾",
      info: "@pollo_ai",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you! 
            Our team is always ready to help you unleash your coding potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll respond with the speed and agility of a cat.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="glass border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="glass border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="glass border-border/50 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="glass border-border/50 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..."
                  className="glass border-border/50 focus:border-primary/50 min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full glow-primary">
                Send Message 🚀
              </Button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-4">Other ways to reach us</h3>
              <p className="text-muted-foreground">
                Choose your preferred method of communication. We're here to help!
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                  onClick={() => window.open(method.action, '_blank')}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl group-hover:animate-bounce">{method.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {method.info}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Fun fact */}
            <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
              <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                <span>💡</span>
                <span>Fun Fact</span>
              </h4>
              <p className="text-muted-foreground text-sm">
                Our response time is measured in "cat reflexes" - typically under 24 hours, 
                but we've been known to respond faster when there's tuna... I mean, urgent issues involved!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;