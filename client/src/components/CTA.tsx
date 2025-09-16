import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 relative overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Join hundreds of companies already using Finhens to make smarter financial decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              data-testid="button-start-free-trial"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-secondary text-foreground px-8 py-4 text-lg font-semibold"
              data-testid="button-schedule-demo"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
