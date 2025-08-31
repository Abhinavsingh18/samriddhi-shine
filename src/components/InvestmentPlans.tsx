import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Shield, Clock, DollarSign, CheckCircle } from 'lucide-react';

const InvestmentPlans = () => {
  const plans = [
    {
      name: "Starter Plan",
      duration: "2 Years",
      returnRate: "20%",
      minInvestment: "₹50,000",
      lockPeriod: "1 Year",
      withdrawalRate: "20%",
      features: [
        "Minimum investment ₹50,000",
        "20% annual returns",
        "Withdrawal allowed after 1 year",
        "Quarterly profit sharing",
        "Basic investor support"
      ],
      popular: false,
      gradient: "bg-gradient-subtle"
    },
    {
      name: "Growth Plan",
      duration: "4 Years",
      returnRate: "25%",
      minInvestment: "₹1,00,000",
      lockPeriod: "1 Year",
      withdrawalRate: "25%",
      features: [
        "Minimum investment ₹1,00,000",
        "25% annual returns",
        "Withdrawal allowed after 1 year",
        "Monthly profit tracking",
        "Premium investor support",
        "Tax benefit consultation"
      ],
      popular: true,
      gradient: "bg-gradient-primary"
    },
    {
      name: "Premium Plan",
      duration: "5 Years",
      returnRate: "30%",
      minInvestment: "₹2,50,000",
      lockPeriod: "1 Year",
      withdrawalRate: "30%",
      features: [
        "Minimum investment ₹2,50,000",
        "30% annual returns",
        "Withdrawal allowed after 1 year",
        "Weekly profit updates",
        "Dedicated relationship manager",
        "Priority customer service",
        "Advanced tax planning"
      ],
      popular: false,
      gradient: "bg-gradient-subtle"
    },
    {
      name: "Elite Plan",
      duration: "6 Years",
      returnRate: "35%",
      minInvestment: "₹5,00,000",
      lockPeriod: "1 Year",
      withdrawalRate: "35%",
      features: [
        "Minimum investment ₹5,00,000",
        "35% annual returns",
        "Withdrawal allowed after 1 year",
        "Daily profit monitoring",
        "VIP investor services",
        "Business expansion insights",
        "Comprehensive financial planning"
      ],
      popular: false,
      gradient: "bg-gradient-subtle"
    }
  ];

  return (
    <section id="investment" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Investment Opportunity</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Invest with Samriddhi Enterprises
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Partner with us in the growing medical equipment industry. Choose from our flexible investment plans designed to maximize your returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-medical hover:shadow-elegant transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className={`${plan.gradient} text-white rounded-t-lg`}>
                <CardTitle className="text-center">
                  <div className="mb-2">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="text-3xl font-bold mt-2">{plan.returnRate}</div>
                  <div className="text-sm opacity-90">Annual Returns</div>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium">{plan.duration}</div>
                    <div className="text-xs text-medical-gray">Duration</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-medium">{plan.minInvestment}</div>
                    <div className="text-xs text-medical-gray">Minimum</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Shield className="h-4 w-4 text-accent mr-2" />
                    <span className="text-sm font-medium">Lock Period: {plan.lockPeriod}</span>
                  </div>
                  <div className="text-xs text-medical-gray">
                    After 1 year, you can withdraw {plan.withdrawalRate} annually
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-medical-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-primary hover:bg-primary-hover' : 'bg-primary hover:bg-primary-hover'}`}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Investment Terms & Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-medical-gray">
            <div>
              <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Secure Investment</h4>
              <p>All investments are backed by our medical equipment assets and guaranteed returns.</p>
            </div>
            <div>
              <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Flexible Withdrawal</h4>
              <p>After 1-year lock period, withdraw your returns annually without penalties.</p>
            </div>
            <div>
              <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Growing Market</h4>
              <p>Medical equipment industry is expanding rapidly with consistent demand growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;