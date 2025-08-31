import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, FileImage, Stethoscope, Syringe, Heart, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: FileImage,
      title: "X-Ray Films & Sheets",
      description: "High-quality medical X-ray films and sheets for accurate diagnostic imaging.",
      features: ["Medical Grade", "Various Sizes", "Clear Imaging"],
      category: "Imaging"
    },
    {
      icon: Monitor,
      title: "Diagnostic Equipment",
      description: "Advanced diagnostic equipment for medical facilities and clinics.",
      features: ["Latest Technology", "Certified", "Warranty"],
      category: "Equipment"
    },
    {
      icon: Stethoscope,
      title: "Medical Instruments",
      description: "Precision medical instruments and tools for healthcare professionals.",
      features: ["Sterilized", "Durable", "Professional Grade"],
      category: "Instruments"
    },
    {
      icon: Syringe,
      title: "Medical Supplies",
      description: "Essential medical supplies and consumables for daily healthcare needs.",
      features: ["Disposable", "Safe", "Bulk Available"],
      category: "Supplies"
    },
    {
      icon: Heart,
      title: "Cardiac Equipment",
      description: "Specialized cardiac monitoring and diagnostic equipment.",
      features: ["ECG Compatible", "Monitoring", "Life Support"],
      category: "Cardiac"
    },
    {
      icon: Shield,
      title: "Safety Equipment",
      description: "Medical safety equipment and protective gear for healthcare workers.",
      features: ["PPE", "Safety Standards", "Certified"],
      category: "Safety"
    }
  ];

  return (
    <section id="products" className="py-20 bg-medical-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Our Products</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Comprehensive Medical Equipment Solutions
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            From X-ray films to advanced diagnostic equipment, we provide everything your medical facility needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="ml-auto text-xs">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-medical-gray mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-medical-gray">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;