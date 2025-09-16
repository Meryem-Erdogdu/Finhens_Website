export default function Features() {
  return (
    <section className="py-16" id="analytics" data-testid="section-features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-features-title">
            Why Choose Finhens?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-subtitle">
            Revolutionize Your Financial Health with Modern Insights!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300" data-testid="card-feature-health">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Financial health analytics dashboard"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-primary/20 p-3 rounded-lg mr-4">
                <i className="fas fa-heartbeat text-primary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-feature-health-title">
                Empowering Financial Health
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-feature-health-description">
              We dive deep into your company's financial landscape, creating dynamic, data-driven health scores. By aligning your income, expenses, and debts, we pave the way for a more balanced and resilient financial future.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300" data-testid="card-feature-ai">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="AI-powered financial insights"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-accent/20 p-3 rounded-lg mr-4">
                <i className="fas fa-brain text-accent text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-feature-ai-title">
                AI-Driven Strategic Insights
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-feature-ai-description">
              Harness the power of artificial intelligence to uncover the full potential of your financial data. Our advanced analyses provide actionable insights, guiding you toward smarter, more confident financial decisions.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300" data-testid="card-feature-forecasting">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Financial forecasting and growth analytics"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-chart-2/20 p-3 rounded-lg mr-4">
                <i className="fas fa-chart-line text-chart-2 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold" data-testid="text-feature-forecasting-title">
                Tailored Forecasting for Growth
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-feature-forecasting-description">
              Look ahead with precision. With customized AI-driven forecasts, we help you optimize cash flow, refine revenue strategies, and streamline debt management, empowering your business to thrive sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
