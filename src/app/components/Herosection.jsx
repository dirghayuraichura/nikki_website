
"use client"
import Image from "next/image";
import {motion} from "framer-motion"
import { Inter, Montserrat as montserrat, Macondo } from "next/font/google";
const mocando = Macondo({ 
  subsets: ["latin"], 
  variable: "--font-macando", 
  weight: "400" });
const Herosection = () => {
  return (
      <section className="text-gray-200  body-font pt-8 lg:px-32 lg:py-0 rounded w-full">
        <div className=" container mx-auto flex flex-col lg:flex-row items-center justify-center px-5 py-18 lg:h-screen">
          <motion.div className="lg:flex-grow md:w-1/2 lg:pl-48 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <motion.p className="text-7xl text-orange-600 duration-700 ease-in-out py-2 macondo-regular"
            initial ={{opacity:0}}
            animate = {{x:0,opacity:1}}
            transition = {{
              duration:"2",
              delay:"0.1"
            }}
            >Hello!</motion.p>
            <motion.p className="text-5xl text-[#757575] font-bold py-2"
            initial ={{x:-800,opacity:0}}
            animate = {{x:0,opacity:1}}
            transition = {{
              duration:"1",
              delay:"0.1"
            }}>I am <span className="text-white">Nikita</span>, <br></br> Graphics</motion.p>
            <motion.p className="text-5xl text-[#757575] font-bold py-2"
            initial ={{x:800,opacity:0}}
            animate = {{x:0,opacity:1}}
            transition = {{
              duration:"1",
              delay:"0.1"
            }}
            >& UI/UX Designer</motion.p>
          </motion.div>
          <motion.div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-full "
          whileHover={{scale:1.2}}
          transition = {{
            duration:"0.5",
            delay:"0.3"
          }}
          >
            <Image
              src="/banner-01.png"
              height={800}
              width={2000}
              className="scale-110 object-center rounded-lg"
              alt=""
             
            />
          </motion.div>

          <hr></hr>
        
        </div>
        </section>
      
  );
};

export default Herosection;
