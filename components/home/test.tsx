"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const testimonials = [
    {
      text: 'Promoting fair play and clean sports is the key to a better future. Let’s stay true to the spirit of competition.',
      author: 'Sarah Thompson',
      image:
        'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/sport1.svg',
    },
    {
      text: 'Clean sports ensure that every athlete gets the respect they deserve. Fair competition is the only competition.',
      author: 'David Lee',
      image:
        'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/sport2.svg',
    },
    {
      text: 'Winning with integrity is the only true victory. Let’s commit to keeping sports clean and fair for all.',
      author: 'Maria Garcia',
      image:
        'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/sport3.svg',
    },
    {
      text: 'Clean sports elevate the athlete’s talent, not shortcuts. Together, we can maintain the purity of competition.',
      author: 'James Wilson',
      image:
        'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/sport4.svg',
    },
  ]
  
  

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
      )
    }, 5000) // Change Time here

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const { text, author, image } = testimonials[currentTestimonial]

  const variants = {
    initial: { opacity: 0, y: '100%', scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '100%', scale: 0.1 },
  }
  const dotVariants = {
    active: { scale: 1.2, backgroundColor: '#3f3f46' },
    inactive: { scale: 1, backgroundColor: '#D1D5DB' },
  }

  return (
    <section className="py-12 md:py-24 h-[70vh] items-center flex justify-center">
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-full flex-col items-center justify-center"
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.5,
            }}
          >
            {/* <img src={image} alt={author} className="m-0 h-24 w-24" /> */}
            <p className="m-0 text-center text-4xl font-medium tracking-tight">
              &quot;{text}&quot;
            </p>
            {/* <div className="mx-auto mt-5">
              <div className="flex flex-col items-center justify-center space-x-3">
                <div className="font-regular text-md text-gray-900/80">
                  {author}
                </div>
              </div>
            </div> */}
          </motion.div>
          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="mx-1 h-1 w-1 cursor-pointer rounded-full"
                variants={dotVariants}
                animate={index === currentTestimonial ? 'active' : 'inactive'}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TestimonialCarousel