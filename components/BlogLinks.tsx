"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import BlogOne from "@/components/blogs/BlogOne";
import BlogTwo from "@/components/blogs/BlogTwo";
import BlogThree from "./blogs/BlogThree";
import BlogFour from "./blogs/BlogFour";

const blogPosts = [
  {
    title: "5 Common AC Problems During Karaikudi Summer",
    component: <BlogOne />,
  },
  {
    title: "Why Regular AC Servicing is a Must in Tamil Nadu",
    component: <BlogTwo />,
  },
  {
   title: "Top Signs Your AC Needs Immediate Repair and servicing",
   component: <BlogThree />,
 },
 {
   title: "Energy-Saving Tips for Using Daikin AC Efficiently",
   component: <BlogFour />,
 },
];

const BlogLinks = () => {
  const [activePost, setActivePost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <div className="bg-violet-50 py-12 px-6 sm:px-10 lg:px-20">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-semibold text-[#1c3f6e] mb-8 text-center"
      >
        Related <span
  className="bg-clip-text text-transparent font-semibold"
  style={{
    backgroundImage: "linear-gradient(135deg, rgb(0, 102, 255) 0%, rgb(0, 204, 255) 100%)"
  }}
>
  Blog Posts
</span>

      </motion.h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="block cursor-pointer p-6 bg-gradient-to-r from-[#f9f9fb] to-[#f1f1f7] rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-200"
                  onClick={() => setActivePost(post)}
                >
                  <h4 className="text-lg font-medium text-[#1c3f6e]">
                    {post.title}
                  </h4>
                  <span className="text-sm text-purple-600 mt-2 inline-block">
                    Read More →
                  </span>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-[#1c3f6e]">{post.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">{activePost?.component}</div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogLinks;
