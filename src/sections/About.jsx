import React from 'react'
import Card from '../component/Card';
import { Globe } from '../component/Globe';
import CopyEmailButton from '../component/CopyEmailButton';
import { Frameworks } from '../component/Frameworks';
import { mySocials } from '../constants';
const About = () => {
    const grid2Container = React.useRef();
  return    ( <section id="about" className='c-space section-spacing'>
    <h2 className='text-heading'>About Me</h2>
    <div className='grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] mt-12 gap-2'>
        {/* grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
            <img 
                src="assets/coding-pov.png"
                className='absolute scale-[1.75] -right-[5rem] -top-
                [1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'/>
            <div className='z-10'>
                <p className='headtext'>Hi, I'm Naman Bachhawat</p>
                <p className='subtext'>
                Final year B.Tech CS student specializing in data analysis, machine learning, and full-stack development.
                </p>
            </div>
            <div className='absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
        </div>
        {/* grid 2 */}
        <div className='grid-default-color grid-2'>
            <div
                ref={grid2Container} 
                className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>
                    CODE IS CRAFT
                </p>
                <Card 
                style={{ rotate: "75deg", top: "30%", left: "25%"}} text="Learning"
                containerRef={grid2Container} />
                <Card style={{ rotate: "-30deg", top: "60%", left: "50%"}} text="Building" 
                containerRef={grid2Container}/>
                <Card style={{ rotate: "90deg", bottom: "45%", left: "75%"}} text="Designing" 
                containerRef={grid2Container}/>
                <Card style={{ rotate: "30deg", top: "55%", left: "0%"}} text="Coding" 
                containerRef={grid2Container}/>
                <Card style={{ rotate: "20deg", top: "10%", left: "48%"}} text="Exploring" 
                containerRef={grid2Container}/>
                <Card style={{ rotate: "15deg", top: "10%", left: "0%"}} text="Creating" 
                containerRef={grid2Container}/>
                <Card style={{ rotate: "25deg", top: "30%", left: "50%"}} 
                image="assets/logos/tailwindcss.Default" 
                containerRef={grid2Container}/>
                <Card style={{ rotate: "-25deg", top: "42%", left: "25%"}} 
                image="assets/logos/javascript.png" 
                containerRef={grid2Container}/>
                <Card style={{ rotate: "25deg", top: "74%", left: "75%"}} 
                image="assets/logos/ThreeJS.png" 
                containerRef={grid2Container}/>
            </div>
            </div>
        {/* grid 3 */}
        <div className='grid-black-color grid-3'>
            <div className='z-10 w-[50%]'>
                <p className='headtext'>Time Zone</p>
                <p className='subtext'>I'm based in Bangalore, and open to work worldwide</p>
            </div>
            <figure className='absolute left-[30%] top-[10%]'>
                <Globe />
            </figure>
        </div>
        {/* grid 4 */}
        <div className='grid-special-color grid-4'>
            <div className='flex flex-col items-center
            justify-center gap-4 size-full'>
                <p className='text-center headtext'>Do you want to start a project together?</p>
                <CopyEmailButton />
                <div className="flex gap-4 mt-2">
                  {mySocials.filter(s => s.name !== 'Email').map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1"
                    >
                      <img src={social.icon} alt={social.name} className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
            </div>
        </div>
        {/* grid 5 */}
        <div className='grid-default-color grid-5'>
            <div className='z-10 w-[50%]'>
                <p className='headText'>Tech Stack</p>
                <p className='subtext'>
                    I use modern web and AI-driven tools to build responsive, interactive,
                     and intelligent applications.
                </p>
            </div>
            <div className='absolute inset-y-0 md:inset-y-9 w-full
            h-full start-[50%] md:scale-125'><Frameworks /></div>
        </div>
    </div>
  </section>
  );
};

export default About;