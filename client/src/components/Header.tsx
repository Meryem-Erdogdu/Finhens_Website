import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 glass-effect transition-all duration-300 ${
        isScrolled ? "bg-background/95" : "bg-background/20"
      }`}
      data-testid="header-navigation"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold gradient-text" data-testid="logo-finhens">
              FINHENS
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("analytics")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-analytics"
              >
                Analytics
              </button>
              <button
                onClick={() => scrollToSection("reports")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-reports"
              >
                Reports
              </button>
              <button
                onClick={() => scrollToSection("integration")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-integration"
              >
                Data Integration
              </button>
            </div>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            data-testid="button-company-setup"
          >
            Company Setup
          </Button>
        </div>
      </nav>
    </header>
  );
}
