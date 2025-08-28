import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Coding",
      description: "Intelligent code suggestions and automated debugging that learns from your coding patterns.",
      icon: "🤖",
    },
    {
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team, just like cats in a harmonious pride.",
      icon: "🐾",
    },
    {
      title: "Smart Analytics",
      description: "Deep insights into your development process with feline-level precision and intuition.",
      icon: "📊",
    },
    {
      title: "Secure Environment",
      description: "Enterprise-grade security that's as vigilant as a cat watching over their domain.",
      icon: "🔒",
    },
    {
      title: "Lightning Fast",
      description: "Performance optimized for speed - quicker than a cat pouncing on a laser dot.",
      icon: "⚡",
    },
    {
      title: "Adaptive Learning",
      description: "Our AI adapts to your workflow with the curiosity and intelligence of our feline friends.",
      icon: "🧠",
    },
  ];

  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Features That Make You
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Purr</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make Pollo.ai the perfect companion for your development journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;