import React from "react";
import { motion } from "framer-motion";

export default function BlogFour() {
  return (
    <div className="space-y-8 text-gray-800 leading-relaxed max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold text-[#1c3f6e] tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Energy-Saving Tips for Using Daikin AC Efficiently
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Using your Daikin AC efficiently can not only save you money on energy bills but also help the environment. Here are some energy-saving tips to maximize your AC’s efficiency:
      </motion.p>

      <div className="space-y-6 mt-6">
        <motion.h2
          className="text-2xl font-semibold text-purple-700 underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          1. Set the Right Temperature
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Keeping your AC at the optimal temperature (around 24°C to 26°C) is the best way to balance comfort and energy efficiency.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700 underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          2. Use the Timer Feature
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Most Daikin ACs come with a timer feature, which allows you to set your AC to turn on and off automatically. This ensures that you are not wasting energy when you don't need cooling.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700 underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          3. Clean the Filters Regularly
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Clean filters help your AC run efficiently by allowing proper airflow. Clogged filters reduce efficiency and make your system work harder.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700 underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          4. Use a Programmable Thermostat
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          If your Daikin AC doesn't have one, you can invest in a programmable thermostat. It can adjust the temperature based on your schedule, reducing energy consumption when you're not at home.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700 underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          5. Seal Leaks in the Home
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Make sure there are no air leaks around doors and windows. Sealing these gaps will help your AC cool the room more efficiently.
        </motion.p>
      </div>

      <motion.p
        className="mt-6 text-md font-semibold text-[#1c3f6e] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        By implementing these simple tips, you can enjoy a comfortable home environment without breaking the bank on your energy bills.
      </motion.p>
    </div>
  );
}
