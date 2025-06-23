import React from 'react'
import { motion } from 'framer-motion';

const App = () => {

  return (
    <div>
      <motion.div className='circle'
      drag 
      whileHover={{
        scale:1.4
      }}
      animate={{
        x:[0,800,800,0,0],
        y:[0,0,600,600,0],rotate:360
      }}
      transition={{duration:2,delay:0.5,}}
      >
      </motion.div>
      <motion.div className='box'
      initial={{x:0,y:0}}
      animate={{
        x:500,rotate:360}}
      transition={{duration:2,delay:0.5,repeat:Infinity}}
      >
      </motion.div>
    </div>
  )
}

export default App
