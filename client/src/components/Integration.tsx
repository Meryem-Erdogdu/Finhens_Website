export default function Integration() {
  return (
    <section className="py-16" id="integration" data-testid="section-integration">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-integration-title">
            Seamless Data Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-integration-subtitle">
            Connect with your existing financial systems and get instant insights
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center p-6 glass-effect rounded-xl hover:scale-105 transition-transform" data-testid="card-integration-bank">
            <i className="fas fa-university text-3xl text-muted-foreground"></i>
          </div>
          <div className="flex items-center justify-center p-6 glass-effect rounded-xl hover:scale-105 transition-transform" data-testid="card-integration-credit">
            <i className="fas fa-credit-card text-3xl text-muted-foreground"></i>
          </div>
          <div className="flex items-center justify-center p-6 glass-effect rounded-xl hover:scale-105 transition-transform" data-testid="card-integration-invoice">
            <i className="fas fa-file-invoice text-3xl text-muted-foreground"></i>
          </div>
          <div className="flex items-center justify-center p-6 glass-effect rounded-xl hover:scale-105 transition-transform" data-testid="card-integration-database">
            <i className="fas fa-database text-3xl text-muted-foreground"></i>
          </div>
          <div className="flex items-center justify-center p-6 glass-effect rounded-xl hover:scale-105 transition-transform" data-testid="card-integration-cloud">
            <i className="fas fa-cloud text-3xl text-muted-foreground"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
