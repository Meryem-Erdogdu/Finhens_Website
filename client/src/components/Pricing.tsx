import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <section className="py-16 bg-card/30" id="pricing" data-testid="section-pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-pricing-title">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-pricing-subtitle">
            Select the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="glass-effect hover:scale-105 transition-transform border-border" data-testid="card-plan-starter">
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <div className="text-4xl font-bold" data-testid="text-price-starter">
                $99<span className="text-lg text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Basic financial health scoring
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Monthly reports
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Email support
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Up to 5 integrations
                </li>
              </ul>
              <Button
                variant="secondary"
                className="w-full"
                data-testid="button-get-started-starter"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:scale-105 transition-transform border-2 border-primary relative" data-testid="card-plan-professional">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <div className="text-4xl font-bold" data-testid="text-price-professional">
                $249<span className="text-lg text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Advanced AI analytics
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Priority support
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Unlimited integrations
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Custom forecasting
                </li>
              </ul>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-get-started-professional"
              >
                Get Started
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:scale-105 transition-transform border-border" data-testid="card-plan-enterprise">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <div className="text-4xl font-bold" data-testid="text-price-enterprise">
                Custom
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  White-label solution
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  24/7 phone support
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3"></i>
                  On-premise deployment
                </li>
              </ul>
              <Button
                variant="secondary"
                className="w-full"
                data-testid="button-contact-sales"
              >
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
