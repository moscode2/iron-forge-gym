import { motion } from "framer-motion";
import weightsImg from "@/assets/facility-weights.jpg";
import cardioImg from "@/assets/facility-cardio.jpg";
import classesImg from "@/assets/facility-classes.jpg";

const facilities = [
  { title: "Strength Zone", description: "Premium free weights, squat racks, and machines for serious lifters.", image: weightsImg },
  { title: "Cardio Arena", description: "Treadmills, bikes, and rowing machines with entertainment screens.", image: cardioImg },
  { title: "Group Classes", description: "High-energy HIIT, yoga, spin, and crossfit classes daily.", image: classesImg },
];

const FacilitiesSection = () => (
  <section id="facilities" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Facilities</p>
        <h2 className="font-display text-5xl md:text-7xl tracking-wider text-foreground">WORLD-CLASS GYM</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={f.image}
              alt={f.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-3xl tracking-wider text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
