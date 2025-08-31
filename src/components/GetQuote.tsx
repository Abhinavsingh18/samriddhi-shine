import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, FileText, Phone, Mail } from 'lucide-react';

const GetQuote = () => {
  const equipmentTypes = [
    "X-Ray Machines",
    "CT Scanners",
    "MRI Machines",
    "Ultrasound Systems",
    "X-Ray Films & Sheets",
    "ECG Machines",
    "Patient Monitors",
    "Surgical Instruments",
    "Dental Equipment",
    "Laboratory Equipment",
    "Other Equipment"
  ];

  const budgetRanges = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000 - ₹25,00,000",
    "₹25,00,000 - ₹50,00,000",
    "Above ₹50,00,000"
  ];

  const additionalServices = [
    { id: "installation", label: "Installation & Setup" },
    { id: "training", label: "Staff Training" },
    { id: "maintenance", label: "Annual Maintenance Contract" },
    { id: "warranty", label: "Extended Warranty" },
    { id: "financing", label: "Equipment Financing" },
    { id: "trade-in", label: "Trade-in Old Equipment" }
  ];

  return (
    <section id="get-quote" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Get Quote</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Request a Custom Quote
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Tell us about your medical equipment needs and get a personalized quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-medical">
              <CardHeader className="bg-gradient-subtle">
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  <span>Equipment Quote Request</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="Enter your phone number"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        Organization *
                      </label>
                      <Input 
                        placeholder="Hospital/Clinic/Institution name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Equipment Details */}
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Equipment Requirements</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Equipment Type *
                        </label>
                        <Select>
                          <SelectTrigger className="border-border focus:border-primary">
                            <SelectValue placeholder="Select equipment type" />
                          </SelectTrigger>
                          <SelectContent>
                            {equipmentTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Budget Range *
                        </label>
                        <Select>
                          <SelectTrigger className="border-border focus:border-primary">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range.toLowerCase().replace(/[₹,\s-]/g, '')}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Quantity Required
                        </label>
                        <Input 
                          type="number"
                          placeholder="Enter quantity"
                          className="border-border focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Brand (Optional)
                        </label>
                        <Input 
                          placeholder="Any specific brand preference"
                          className="border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Timeline for Purchase
                      </label>
                      <Select>
                        <SelectTrigger className="border-border focus:border-primary">
                          <SelectValue placeholder="When do you need this equipment?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (Within 1 week)</SelectItem>
                          <SelectItem value="1-month">Within 1 Month</SelectItem>
                          <SelectItem value="3-months">Within 3 Months</SelectItem>
                          <SelectItem value="6-months">Within 6 Months</SelectItem>
                          <SelectItem value="planning">Just Planning/Research</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Additional Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {additionalServices.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox id={service.id} />
                          <label 
                            htmlFor={service.id} 
                            className="text-sm text-medical-gray cursor-pointer"
                          >
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Requirements & Specifications
                    </label>
                    <Textarea 
                      placeholder="Please describe any specific requirements, technical specifications, or special needs..."
                      rows={5}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:bg-primary-hover text-lg py-6"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Get Custom Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quote Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-foreground">Quote Process</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-medical-gray">Submit your requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-medical-gray">Our experts review your needs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-medical-gray">Receive detailed quote within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                    <span className="text-medical-gray">Schedule consultation if needed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3">Need Immediate Assistance?</h3>
                <p className="mb-4 opacity-90 text-sm">
                  Speak directly with our equipment specialists for urgent requirements
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call: +91 98765 43210
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Quote Request
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Why Choose Our Quotes?</h3>
                <div className="space-y-2 text-sm text-medical-gray">
                  <div>• Competitive pricing guaranteed</div>
                  <div>• Detailed technical specifications</div>
                  <div>• Multiple financing options</div>
                  <div>• Comprehensive warranty terms</div>
                  <div>• Free installation consultation</div>
                  <div>• 30-day price validity</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;