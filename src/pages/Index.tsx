import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import InvestmentPlans from '../components/InvestmentPlans';
import GetQuote from '../components/GetQuote';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Services />
      <InvestmentPlans />
      <GetQuote />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
