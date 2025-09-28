import React from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, PenTool, MousePointer, Code } from 'lucide-react'

const BentoGrids = () => {
  return (
    <div className="bg-white max-w-8xl mx-auto min-h-screen p-6">
      <div className="flex h-screen w-full flex-col items-center justify-center rounded-lg">
        <div className="grid h-full w-full grid-cols-3 grid-rows-6 gap-4">
          
          {/* First Grid - Large */}
          <motion.div 
            className="col-span-2 row-span-3 rounded-3xl bg-blue-500 bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
            }}
            whileHover="hover"
            initial="initial"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>
            
            {/* Text div - moves up on hover */}
            <motion.div 
              className="absolute bottom-0 left-6 right-6 z-10"
              variants={{
                initial: { y: 30 },
                hover: { y: -30 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2">
                <Target className="w-[52px] h-[52px] text-white mb-2" />
                <h3 className="font-montserrat text-white font-normal text-[44px] leading-tight m-0">Digital Strategy</h3>
                <p className="text-white/90 text-lg m-0">
                  Comprehensive digital marketing strategies tailored for your business growth
                </p>
              </div>
              
              {/* Button slides up from below */}
              <motion.button
                className="mt-4 px-6 py-3 bg-white/20 text-white border border-white/30 rounded-xl text-base font-medium cursor-pointer backdrop-blur-sm"
                variants={{
                  initial: { opacity: 0, y: 40 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Second Grid - Tall */}
          <motion.div 
            className="row-span-4 rounded-3xl bg-green-500 bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
            }}
            whileHover="hover"
            initial="initial"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>
            
            {/* Text div - moves up on hover */}
            <motion.div 
              className="absolute bottom-0 left-6 right-6 z-10"
              variants={{
                initial: { y: 30 },
                hover: { y: -30 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2">
                <TrendingUp className="w-10 h-10 font-montserrat text-white mb-2" />
                <h3 className="text-white text-4xl mb-2">SEO Analytics</h3>
                <p className="text-white/90 text-lg m-0">
                  Data-driven SEO insights to boost your search rankings
                </p>
              </div>
              
              {/* Button slides up from below */}
              <motion.button
                className="mt-4 px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg text-base font-medium cursor-pointer backdrop-blur-sm"
                variants={{
                  initial: { opacity: 0, y: 40 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Third Grid */}
          <motion.div 
            className="row-span-3 rounded-3xl bg-orange-500 bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
            }}
            whileHover="hover"
            initial="initial"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>
            
            {/* Text div - moves up on hover */}
            <motion.div 
              className="absolute bottom-0 left-6 right-6 z-10"
              variants={{
                initial: { y: 30 },
                hover: { y: -30 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2">
                <PenTool className="w-10 h-10 text-white mb-2" />
                <h3 className="text-white font-montserrat text-4xl m-2">Content Marketing</h3>
                <p className="text-white/90 text-lg ml-2 m-0">
                  Engaging content that converts visitors into customers
                </p>
              </div>
              
              {/* Button slides up from below */}
              <motion.button
                className="mt-4 ml-2 px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg text-base font-medium cursor-pointer backdrop-blur-sm"
                variants={{
                  initial: { opacity: 0, y: 40 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Fourth Grid */}
          <motion.div 
            className="row-span-3 rounded-3xl bg-purple-500 bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
            }}
            whileHover="hover"
            initial="initial"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>
            
            {/* Text div - moves up on hover */}
            <motion.div 
              className="absolute bottom-0 left-6 right-6 z-10"
              variants={{
                initial: { y: 30 },
                hover: { y: -30 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2">
                <MousePointer className="w-10 h-10 text-white mb-2" />
                <h3 className="text-white font-montserrat text-4xl m-2">PPC Management</h3>
                <p className="text-white/90 text-lg m-2">
                  Targeted ad campaigns that maximize your ROI
                </p>
              </div>
              
              {/* Button slides up from below */}
              <motion.button
                className="mt-4 ml-2 px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg text-base font-medium cursor-pointer backdrop-blur-sm"
                variants={{
                  initial: { opacity: 0, y: 40 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Fifth Grid */}
          <motion.div 
            className="row-span-2 rounded-3xl bg-cyan-500 bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
            }}
            whileHover="hover"
            initial="initial"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"></div>
            
            {/* Text div - moves up on hover */}
            <motion.div 
              className="absolute bottom-0 left-6 right-6 z-10"
              variants={{
                initial: { y: 30 },
                hover: { y: -30 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2">
                <Code className="w-10 h-10 text-white mb-2" />
                <h3 className="text-white font-montserrat text-3xl mb-2">Web Development</h3>
                <p className="text-white/90 text-lg m-0">
                  Modern, responsive websites built for performance
                </p>
              </div>
              
              {/* Button slides up from below */}
              <motion.button
                className="mt-4 px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg text-base font-medium cursor-pointer backdrop-blur-sm"
                variants={{
                  initial: { opacity: 0, y: 40 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default BentoGrids
