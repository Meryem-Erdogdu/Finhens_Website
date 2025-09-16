import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  return (
    <section className="py-16 bg-card/50" data-testid="section-dashboard">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-dashboard-title">
            Financial Health Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-dashboard-subtitle">
            Real-time insights into your company's financial performance with AI-driven analytics
          </p>
        </div>

        <div className="max-w-6xl mx-auto glass-effect rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border" data-testid="card-health-score">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  Health Score
                  <i className="fas fa-heart text-chart-1 text-xl"></i>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-1 mb-2" data-testid="text-health-score">
                  87/100
                </div>
                <div className="text-sm text-muted-foreground mb-3">+5 from last month</div>
                <Progress value={87} className="h-2" />
              </CardContent>
            </Card>

            <Card className="bg-card border-border" data-testid="card-cash-flow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  Cash Flow
                  <i className="fas fa-arrow-trend-up text-chart-2 text-xl"></i>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-2 mb-2" data-testid="text-cash-flow">
                  $145.2K
                </div>
                <div className="text-sm text-muted-foreground">Monthly inflow</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border" data-testid="card-risk-level">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  Risk Level
                  <i className="fas fa-shield-alt text-chart-4 text-xl"></i>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-4 mb-2" data-testid="text-risk-level">
                  Low
                </div>
                <div className="text-sm text-muted-foreground">Stable outlook</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border" data-testid="card-financial-trends">
            <CardHeader>
              <CardTitle className="text-xl">Financial Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-chart-line text-4xl text-primary mb-4"></i>
                  <p className="text-muted-foreground" data-testid="text-chart-placeholder">
                    Interactive Financial Trends Chart
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Revenue, Expenses, and Profitability Over Time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
