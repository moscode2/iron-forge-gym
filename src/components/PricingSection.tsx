import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    period: "/month",
    features: ["Gym floor access", "Locker room", "Free WiFi", "1 guest pass/month"],
    popular: false,
  },
  {
    name: "Pro",
    price: "59",
    period: "/month",
    features: ["Everything in Starter", "Group classes", "Nutrition guidance", "Sauna & steam room", "3 guest passes/month"],
    popular: true,
  },
  {
    name: "Elite",
    price: "99",
    period: "/month",
    features: ["Everything in Pro", "Personal trainer (4x/mo)", "Recovery zone access", "Priority booking", "Unlimited guests"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Membership Plans</p>
        <h2 className="font-display text-5xl md:text-7xl tracking-wider text-foreground">CHOOSE YOUR PLAN</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-lg p-8 flex flex-col ${
              plan.popular
                ? "bg-card border-2 border-primary shadow-[0_0_30px_hsl(4,90%,55%,0.15)]"
                : "bg-card border border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary px-4 py-1 rounded-full font-body text-xs font-bold text-primary-foreground uppercase tracking-widest">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-3xl tracking-wider text-foreground mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-5xl text-gradient">${plan.price}</span>
              <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                  <Check size={16} className="text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block text-center py-3 rounded-sm font-body text-sm font-bold uppercase tracking-widest transition-all ${
                plan.popular
                  ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
