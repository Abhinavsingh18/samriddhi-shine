import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Clock, Headphones, Award, CheckCircle, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery of medical equipment across the region.",
      highlight: "Same-day delivery available"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your medical equipment needs.",
      highlight: "Expert technical assistance"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "All products are quality tested and certified before delivery.",
      highlight: "ISO certified products"
    },
    {
      icon: Clock,
      title: "Maintenance Services",
      description: "Regular maintenance and calibration services for medical equipment.",
      highlight: "Preventive maintenance plans"
    }
  ];

  const features = [
    "Authorized distributor of leading brands",
    "Competitive pricing with volume discounts",
    "Custom solutions for hospitals and clinics",
    "Training and installation support",
    "Warranty and after-sales service",
    "Emergency equipment replacement"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Services Cards */}
          <div>
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Our Services</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-medical-gray mb-8">
              We go beyond just supplying equipment. Our comprehensive services ensure your medical facility runs smoothly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 border border-border/50">
                  <CardContent className="p-6">
                    <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-medical-gray mb-3">
                      {service.description}
                    </p>
                    <div className="text-xs text-accent font-medium">
                      {service.highlight}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="bg-gradient-subtle p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Why Choose Samriddhi Enterprises?
            </h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-medical-gray">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-gradient-primary hover:bg-primary-hover text-lg py-6">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
              <p className="text-center text-sm text-medical-gray">
                Speak with our medical equipment specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;