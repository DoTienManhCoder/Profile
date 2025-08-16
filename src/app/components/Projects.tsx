import React from 'react'
import Image from 'next/image'
import { projects } from '@/contents/projects'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectsSection = () => {
  return (
    <section className='py-20 container mx-auto px-4 max-w-7xl'>
      <h2 className='text-3xl font-bold text-center mb-12'>
        Featured Projects
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <article 
            key={project.title} 
            className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw'
              />
            </div>

            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
            <p className='text-gray-600 mb-4 dark:text-gray-300'>{project.description}</p>

            <div className='flex flex-wrap gap-2 mb-4'>
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex gap-4 mt-2'>
                <Link href={project.githubLink} target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                  <FaGithub className='w-5 h-5' /> <span>Code</span>
                </Link>
                <Link href={project.demoLink} target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                  <FaExternalLinkAlt className='w-5 h-5' /> <span>Live Demo</span>
                </Link>
            </div>

          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
