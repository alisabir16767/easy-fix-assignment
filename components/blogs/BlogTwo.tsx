import React from "react";
import { motion } from "framer-motion";

export default function BlogTwo() {
  return (
    <div className="space-y-8 text-gray-800 leading-relaxed max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold text-[#1c3f6e] tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Regular AC Servicing is a Must in Tamil Nadu
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Tamil Nadu’s humid and hot climate puts a lot of stress on your air conditioner. Regular
        AC servicing is essential to ensure the system runs efficiently, keeping your home cool and
        preventing breakdowns. Here’s why it’s a necessity:
      </motion.p>

      <div className="space-y-6 mt-6">
        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          1. Enhanced AC Efficiency
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Regular servicing ensures that all components of your air conditioner are functioning optimally.
          Clean filters, coils, and fans help improve airflow and cooling performance, keeping your AC running
          smoothly with less energy consumption.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          2. Increased Lifespan of the Unit
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Like any machine, your AC needs regular care to last longer. Regular servicing helps detect minor
          issues before they turn into major problems, ensuring the AC operates for many years without needing
          costly replacements.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          3. Avoid Expensive Repairs
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Small problems, such as clogged filters or low refrigerant, can worsen over time if left unattended.
          Regular servicing can catch these issues early, reducing the likelihood of expensive repairs in the future.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          4. Improved Air Quality
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Dirty filters and coils can lead to poor indoor air quality, which can trigger allergies and respiratory
          issues. AC servicing ensures the system is clean, maintaining fresh air circulation in your home.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          5. Prevent Unexpected Breakdowns
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Sudden AC breakdowns can happen during the hottest months, leading to discomfort and even higher repair
          costs. With regular servicing, the chances of unexpected breakdowns are significantly reduced, ensuring
          comfort throughout the year.
        </motion.p>
      </div>

      <motion.p
        className="mt-8 text-md font-semibold text-[#1c3f6e] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        Don’t wait for your AC to break down — schedule regular servicing to keep it running efficiently and
        cool all summer long in Tamil Nadu!
      </motion.p>
    </div>
  );
}
