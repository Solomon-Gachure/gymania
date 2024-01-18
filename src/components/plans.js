import React from 'react'
import { motion } from "framer-motion";

const Plans = () => {
  return (
    
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Fade in and out
        </motion.div>

  )
}

export default Plans