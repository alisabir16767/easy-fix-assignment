import React from "react";
import { motion } from "framer-motion";

export default function BlogOne() {
  return (
   
    <div className="space-y-8 text-gray-800 leading-relaxed max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold text-[#1c3f6e] tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        5 Common AC Problems During Karaikudi Summer
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        In Karaikudis intense summer heat, its essential to keep your air conditioner
        in top condition. Below are some of the most frequent issues residents face during
        the hottest months — and how to avoid them.
      </motion.p>

      <div className="space-y-6 mt-6">
        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          1. Refrigerant Leakage
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Low refrigerant levels are one of the most common AC problems. This causes your
          AC to blow warm air or stop cooling altogether. A certified technician can detect
          and fix leaks to restore performance.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          2. Dirty or Clogged Filters
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Air filters trap dust and dirt, but if not cleaned regularly, they block airflow and
          reduce efficiency. Its recommended to clean or replace filters monthly during peak use.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          3. Thermostat Issues
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          A malfunctioning thermostat can cause inconsistent temperatures or stop the AC from turning
          on. Consider upgrading to a smart thermostat for better control and reliability.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          4. Electrical Failures
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Wiring problems or tripped breakers are common in summer due to overuse. A technician should
          inspect the AC’s electrical components to prevent system failure.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          5. Poor Maintenance
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Neglecting routine maintenance leads to bigger issues over time. Schedule regular servicing
          to keep your AC efficient and reliable throughout the season.
        </motion.p>
      </div>

      <motion.p
        className="mt-8 text-md font-semibold text-[#1c3f6e] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        Stay cool this summer — a well-maintained Daikin AC can make all the difference in Karaikudi!
      </motion.p>
    </div>
  );
}
