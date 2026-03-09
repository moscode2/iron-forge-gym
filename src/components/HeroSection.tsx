import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Gym interior" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
    </div>

    <div className="relative z-10 container mx-auto text-center section-padding">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4"
      >
        Forge Your Strength
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-wider text-foreground mb-6"
      >
        PUSH YOUR
        <br />
        <span className="text-gradient">LIMITS</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10"
      >
        State-of-the-art equipment, expert trainers, and a community that pushes you to become your best self.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#pricing"
          className="bg-gradient-primary px-10 py-4 rounded-sm font-body text-sm font-bold text-primary-foreground uppercase tracking-widest hover:opacity-90 transition-opacity animate-pulse-glow"
        >
          Start Today
        </a>
        <a
          href="#facilities"
          className="border border-muted px-10 py-4 rounded-sm font-body text-sm font-bold text-foreground uppercase tracking-widest hover:bg-secondary transition-colors"
        >
          Explore
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
