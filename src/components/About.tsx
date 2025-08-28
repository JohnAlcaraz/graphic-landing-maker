import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const team = [
    {
      name: "Whiskers AI",
      role: "Chief Technology Officer",
      description: "Leading our AI research with feline precision and 9 lives of experience in machine learning.",
      avatar: "🐱"
    },
    {
      name: "Mittens Dev",
      role: "Head of Product",
      description: "Purring over user experience design and ensuring every feature lands on its feet.",
      avatar: "🐾"
    },
    {
      name: "Shadow Code",
      role: "Lead Engineer",
      description: "Stealthily crafting elegant code solutions that are as smooth as a cat's landing.",
      avatar: "🖤"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pollo.ai</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Born from the curiosity of cats and the power of artificial intelligence, Pollo.ai represents 
            the perfect fusion of intuitive design and cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                It all started when our founder noticed their cat watching them code late into the night. 
                The way their feline companion observed every keystroke with intense curiosity sparked an idea: 
                what if we could create an AI that observed and learned with the same level of attention and intelligence?
              </p>
              <p>
                Today, Pollo.ai combines the best of both worlds - the methodical precision of artificial intelligence 
                and the intuitive problem-solving approach that cats have mastered over millennia. Our platform doesn't 
                just write code; it understands the subtle nuances of development workflows.
              </p>
              <p>
                We believe that the future of development lies in tools that are as adaptable, curious, and 
                intelligent as our feline friends. Every feature we build is designed to land perfectly, 
                just like a cat always lands on its feet.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                To revolutionize software development by creating AI tools that are as intuitive and 
                adaptive as they are powerful. We're building a future where coding feels as natural 
                as a cat stalking its prey - focused, efficient, and surprisingly graceful.
              </p>
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-3">Core Values</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Curiosity-driven innovation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Intuitive user experiences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Adaptive intelligence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">•</span>
                    <span>Precision in execution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Meet Our Feline Team</h3>
          <p className="text-muted-foreground">
            The purr-fessionals behind Pollo.ai's success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="text-5xl mb-4 group-hover:animate-bounce">{member.avatar}</div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;