import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Medical District", "Healthcare Plaza, City 12345"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@samriddhienterprises.com", "sales@samriddhienterprises.com"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">Contact Us</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Ready to discuss your medical equipment needs? Contact our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-medical">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="Enter your phone"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization
                    </label>
                    <Input 
                      placeholder="Hospital/Clinic name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:bg-primary-hover text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-primary/10 ${info.color}`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">{info.title}</div>
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-medical-gray text-sm">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Need Urgent Support?</h3>
                <p className="mb-6 opacity-90">
                  For emergency equipment needs, call our 24/7 hotline
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency Hotline
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;