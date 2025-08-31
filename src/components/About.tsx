import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide healthcare facilities with reliable, high-quality medical equipment that saves lives and improves patient care."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek the latest medical technologies to keep our customers at the forefront of healthcare."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers' success is our success. We build lasting partnerships based on trust and exceptional service."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from product selection to customer service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">About Us</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            15+ Years of Medical Excellence
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto leading-relaxed">
            Samriddhi Enterprises has been a trusted partner to healthcare professionals, 
            providing top-quality medical equipment and exceptional service since our founding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-medical-gray leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between healthcare providers and quality medical equipment, 
                Samriddhi Enterprises has grown from a small local supplier to a trusted regional partner.
              </p>
              <p>
                We specialize in X-ray films, diagnostic equipment, and a comprehensive range of medical supplies. 
                Our commitment to quality and service has earned us the trust of hospitals, clinics, and healthcare 
                professionals across the region.
              </p>
              <p>
                Today, we proudly serve over 1000+ healthcare facilities, maintaining our founding principles of 
                reliability, quality, and customer satisfaction in every interaction.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-medical-gray">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-medical-gray">Products</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-medical-gray">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-medical-gray">Support</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-medical-gray leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;