import { motion } from "framer-motion";
import { Dumbbell, Users, HeartPulse, Clock } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "One-on-one sessions with certified trainers tailored to your goals." },
  { icon: Users, title: "Group Workouts", desc: "Motivating group sessions including HIIT, CrossFit, and bootcamp." },
  { icon: HeartPulse, title: "Nutrition Plans", desc: "Custom meal plans designed by sports nutritionists for peak performance." },
  { icon: Clock, title: "24/7 Access", desc: "Train anytime with round-the-clock access to all gym areas." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">What We Offer</p>
        <h2 className="font-display text-5xl md:text-7xl tracking-wider text-foreground">OUR SERVICES</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
              <s.icon size={28} />
            </div>
            <h3 className="font-display text-2xl tracking-wider text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
