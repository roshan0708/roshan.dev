import React from 'react'
import { motion } from 'framer-motion'

import '../styles/hero.css'

const HeroSection = () => {
  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden text-white"
      id="hero"
    >
      <div className="hero-bg absolute inset-0 z-0" />

      <motion.div
        className="z-20 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="my_name mb-2 text-sm uppercase tracking-widest text-red-600">
          Roshan Kanwar.
        </p>
      </motion.div>
    </section>
  )
}

export default HeroSection
