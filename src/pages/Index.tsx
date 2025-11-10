import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { Differentials } from "@/components/Differentials";
import { AboutUsSection } from "@/components/AboutUsSection";
import { EducationSolution } from "@/components/EducationSolution";
import { BasketballSection } from "@/components/BasketballSection";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vitally - Equipamentos Premium para Campus Universitários | High Ticket Fitness</title>
        <meta 
          name="description" 
          content="Equipamentos de academia high ticket para instituições de ensino. Design sofisticado, tecnologia avançada e laudo biomecânico. Modernize seu campus com Vitally." 
        />
        <meta name="keywords" content="equipamentos academia, fitness universitário, equipamentos educação física, academia campus, high ticket fitness" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <IntroSection />
        <AboutUsSection />
        <Differentials />
        <EducationSolution />
        <BasketballSection />
        <Testimonial />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
