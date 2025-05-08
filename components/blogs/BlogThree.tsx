import React from "react";
import { motion } from "framer-motion";

export default function BlogThree() {
  return (
    <div className="space-y-8 text-gray-800 leading-relaxed max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold text-[#1c3f6e] tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Top Signs Your AC Needs Immediate Repair
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        There are signs that indicate your air conditioner is in trouble. Knowing these warning signs can help you avoid costly repairs or a complete system breakdown. Here are the top signs that your AC might need immediate repair:
      </motion.p>

      <div className="space-y-6 mt-6">
        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          1. Weak Airflow
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          If you notice weak or inconsistent airflow from your AC, it might indicate a blockage in the ducts or an issue with the blower fan. A professional technician should examine the system.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          2. Strange Noises
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          If your AC is making unusual noises such as grinding, rattling, or buzzing, it’s a sign that something is wrong. These noises might indicate loose or broken parts.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          3. Warm Air
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          If your AC is blowing warm air instead of cold, it could be due to low refrigerant levels or a malfunctioning compressor. Don't delay in calling for repairs.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          4. Water Leaks
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Water leaks or pools around your AC unit can lead to serious damage if left unchecked. This could be caused by a clogged condensate drain or low refrigerant levels.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-purple-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          5. Foul Odors
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Foul smells coming from your AC may indicate mold or mildew buildup in the system. This needs to be addressed quickly to maintain clean air quality.
        </motion.p>
      </div>

      <motion.p
        className="mt-8 text-md font-semibold text-[#1c3f6e] text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        Addressing these signs promptly will keep your air conditioner running at its best and prevent unexpected breakdowns.
      </motion.p>
    </div>
  );
}
