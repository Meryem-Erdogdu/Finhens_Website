export default function About() {
  return (
    <section className="py-16 bg-card/30" id="reports" data-testid="section-about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
                About Finhens
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-subtitle">
                Discover how Finhens can revolutionize your financial decision-making and accelerate your business growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description1">
                Welcome to the future of financial analysis! Finhens provides small and mid-sized enterprises (SMEs) with a comprehensive view of their financial well-being. By combining machine learning algorithms and NLP, we offer you a holistic perspective on your company's performance.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description2">
                From liquidity ratios to profitability margins, our platform highlights the areas that need attention and suggests tailored action plans for sustainable growth.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-companies">
                    500+
                  </div>
                  <div className="text-muted-foreground">Companies Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2" data-testid="text-stat-accuracy">
                    98%
                  </div>
                  <div className="text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Modern financial analysis team working with data"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold mb-2" data-testid="text-analytics-title">
                    Advanced Financial Analytics
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-analytics-subtitle">
                    Real-time monitoring and AI-powered insights for your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
