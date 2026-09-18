import { motion } from 'framer-motion';

const ChefCapybara = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-orange-200/40 blur-3xl rounded-full scale-90" />

      <motion.img
        src="/assets/chef-capybara.png"
        alt="Chef Capybara"
        className="relative w-[350px] h-auto drop-shadow-2xl mx-auto"
        animate={{
          y: [0, -12, 0],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default ChefCapybara;