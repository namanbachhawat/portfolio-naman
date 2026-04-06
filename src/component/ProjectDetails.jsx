import React, { useEffect } from 'react'
import {motion} from "motion/react"

const ProjectDetails = ({title, description, subDescription, image, tags, href, github, closeModal}) => {
  // Lock body scroll when modal is open, restore on close
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center
      justify-center w-full h-full overflow-y-auto py-10
      backdrop-blur-sm bg-black/50"
      onClick={closeModal}>
        <motion.div 
          className="relative max-w-2xl mx-4 border shadow-sm
          rounded-2xl bg-gradient-to-l from-midnight to-navy
          border-white/10 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          initial={{scale:0.9, opacity:0}}
          animate={{scale:1, opacity:1}}
          transition={{duration: 0.2, ease: "easeOut"}}>
            <button 
              onClick={closeModal}
              className="absolute z-10 p-2 rounded-sm top-5 right-5
              bg-midnight hover:bg-gray-500 cursor-pointer">
                <img src="assets/close.svg" className="w-6 h-6"/></button>
                <img src={image} alt={title} className="w-full h-auto rounded-t-2xl"/>
                <div className="p-6 py-5">
                    <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                    <p className="mb-3 font-normal text-neutral-400">{description}</p>
                    {subDescription.map((subDesc, index)=>(
                        <p className="mb-3 font-normal text-neutral-400" key={index}>{subDesc}</p>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3">
                            {tags.map((tag)=>(
                                <img 
                                key={tag.id}
                                src={tag.path}
                                alt={tag.name}
                                className="rounded-lg size-10 hover-animation"
                                />
                            ))}
                        </div>
                        <a href={href || github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium
                        cursor-pointer hover-animation">
                            View Project<img src="assets/arrow-up.svg"
                            className="size-4" />
                        </a>
                    </div>
                </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails