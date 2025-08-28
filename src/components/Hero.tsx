import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              AI-Powered
              <span className="bg-gradient-primary bg-clip-text text-transparent"> 
                {" "}Development
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Where cutting-edge technology meets feline curiosity. 
              Build smarter, code faster, and purr with satisfaction.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="glow-primary">
              Start Building
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Real-time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>Secure</span>
            </div>
          </div>
        </div>
        
        {/* Right content - Hero image */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden glow-soft">
            <img 
              src="/lovable-uploads/71b5ff0d-805b-41a7-833a-deb2142b277a.png"
              alt="AI-powered development workspace featuring a curious cat in a modern tech environment"
              className="w-full h-auto animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-card rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;