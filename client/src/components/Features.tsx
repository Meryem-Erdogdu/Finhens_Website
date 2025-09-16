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
          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 text-center" data-testid="card-feature-health">
            <div className="flex justify-center mb-6">
              <div className="bg-chart-2/20 p-6 rounded-full">
                <i className="fas fa-heartbeat text-chart-2 text-5xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="text-feature-health-title">
              Empowering Financial Health
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-feature-health-description">
              We dive deep into your company's financial landscape, creating dynamic, data-driven health scores. By aligning your income, expenses, and debts, we pave the way for a more balanced and resilient financial future.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 text-center" data-testid="card-feature-ai">
            <div className="flex justify-center mb-6">
              <div className="bg-chart-3/20 p-6 rounded-full">
                <i className="fas fa-brain text-chart-3 text-5xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="text-feature-ai-title">
              AI-Driven Strategic Insights
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-feature-ai-description">
              Harness the power of artificial intelligence to uncover the full potential of your financial data. Our advanced analyses provide actionable insights, guiding you toward smarter, more confident financial decisions.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform duration-300 text-center" data-testid="card-feature-forecasting">
            <div className="flex justify-center mb-6">
              <div className="bg-chart-4/20 p-6 rounded-full">
                <i className="fas fa-chart-line text-chart-4 text-5xl"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="text-feature-forecasting-title">
              Tailored Forecasting for Growth
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-feature-forecasting-description">
              Look ahead with precision. With customized AI-driven forecasts, we help you optimize cash flow, refine revenue strategies, and streamline debt management, empowering your business to thrive sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
