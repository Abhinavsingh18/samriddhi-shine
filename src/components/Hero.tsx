import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import heroImage from '@/assets/medical-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Premium Medical
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Equipment</span>
                <br />
                Supplier
              </h1>
              <p className="text-xl text-medical-gray mt-6 leading-relaxed">
                Your trusted partner for high-quality medical equipment, X-ray films, and healthcare supplies. 
                Serving healthcare professionals with reliability and excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-hover text-lg px-8 py-6 shadow-medical"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-medical-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-medical-gray">Products</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-medical-gray">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-medical">
              <img 
                src={heroImage} 
                alt="Medical Equipment and X-ray Films"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medical">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Quality Assured</div>
                  <div className="text-sm text-medical-gray">ISO Certified Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;