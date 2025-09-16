import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-24 pb-16 relative overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Financial data visualization background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
            Finhens is an <span className="gradient-text">AI-Powered Platform</span> for Financial Health Monitoring in Modern Finance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Transform your financial decision-making with advanced analytics and real-time insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("analytics")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              data-testid="button-explore-analytics"
            >
              Explore Analytics <i className="fas fa-arrow-right ml-2"></i>
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-secondary text-foreground px-8 py-4 text-lg font-semibold"
              data-testid="button-watch-demo"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
