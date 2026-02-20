import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#EC0951] animate-bounce" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 animate-pulse" />
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient animate-pulse' /> */}
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-[#EC0951]">Den</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            Aspiring software developer creating  
            <br className="sm:block hidden" />
            innovative solutions
          </motion.p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-fourtiary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{ backgroundColor: "blue" }}
              className="w-3 h-3 rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
