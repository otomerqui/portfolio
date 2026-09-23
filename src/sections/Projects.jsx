import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Coach/Therapist WordPress Theme",
        Description: "Custom single-site WordPress theme for coaches, therapists, psychologists and counseling professionals. Built with classic template files, BEM CSS, vanilla JS, ACF, and a strong focus on performance and security.",
        image: "/projects/terapeuta.enlawebpro.online_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://terapeuta.enlawebpro.online/",       
    },
    {
        title: "Real State WordPress Theme",
        Description: "Classic PHP Theme for a real state agency website. It is complemented by the Real State CRM plugin (property CPT, contacts/CRM, contact forms). CSS with BEM, vanilla JS, no frameworks.",
        image: "/projects/inmobiliaria.enlawebpro.online_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://inmobiliaria.enlawebpro.online/",        
    },
    {
        title: "Barber/Hair Salon WordPress Theme",
        Description: "Custom WordPress theme designed for barbershops, hair salons, and similar businesses. The website showcases services and stylists, featuring an integrated booking calendar. It includes a user-friendly admin panel where administrators can easily manage (add, update, delete) services and team members, as well as track bookings and schedules.",
        image: "/projects/barber-theme.enlawebpro.online_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://barber-theme.enlawebpro.online/",        
    },
    {
        title: "Mercado Para Mascotas WordPress Theme",
        Description: "Custom WordPress blog theme for pets. The website displays blogs and categories. It also has an AJAX filtering option for categories.",
        image: "/projects/mercadoparamascotas.com_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://mercadoparamascotas.com/",        
    },
    {
        title: "DigiLab Colombia WordPress Theme",
        Description: "Custom WordPress blog theme for technology. The website displays blogs and categories. It also has an AJAX filtering option and search articles option.",
        image: "/projects/www.digilabonline.com_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://www.digilabonline.com/",        
    },
    {
        title: "DeDragones Shop WordPress Theme",
        Description: "Custom WordPress blog theme about dragones (affiliate website). The website displays blogs and categories. It also has an AJAX filtering option.",
        image: "/projects/www.dedragones.shop_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://www.dedragones.shop/",        
    },
    {
        title: "Todos a Coleccionar",
        Description: "Custom WordPress theme for a blog dedicated to action figure collectors.",
        image: "/projects/www.todosacoleccionar.com_.webp",
        tags: ["HTML", "CSS", "TailwindCSS", "JS", "PHP", "WordPress"],
        link: "https://www.todosacoleccionar.com/",        
    },
    {
        title: "Expensio App",
        Description: "Custom Expense Tracker WordPress App for tracking personal expenses. The app allows for adding, editing deleting expenses. Add categories, see real time data reports, etc.",
        image: "/projects/dev.enlawebpro.online_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://dev.enlawebpro.online/",        
    },
    {
        title: "Estudio Rialto",
        Description: "Custom WordPress theme for architecture business. The website displays projects, services, it also has a filtering option for the projects based on project categories using AJAX.",
        image: "/projects/demo.enlawebpro.online_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://demo.enlawebpro.online/",        
    },
    {
        title: "Ingresos Adicionales",
        Description: "Custom WordPress theme for architecture business. The website displays projects, services, it also has a filtering option for the projects based on project categories using AJAX.",
        image: "/projects/www.ingresosadicionales.club_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://www.ingresosadicionales.club/",        
    },
    {
        title: "En la Web Pro",
        Description: "Custom WordPress theme for a blog type website. The website displays blogs and categories. It also has an AJAX filtering option.",
        image: "/projects/www.enlawebpro.online_.webp",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress"],
        link: "https://www.enlawebpro.online/",        
    },
    {
        title: "Aurum CareD",
        Description: "Custom WordPress theme for a physiotherapy service. The website displays services, video testimonials from a custom post type, and an image-based testimonial gallery.",
        image: "/projects/www.aurumcared.com_.webp",
        tags: ["HTML", "CSS", "TailwindCSS", "JS", "PHP", "WordPress"],
        link: "https://www.aurumcared.com/",        
    },    
    {
        title: "Ecommerce Website",
        Description: "Front-end demo of an ecommerce website built with React.js.",
        image: "/projects/ecommerce-react-website-three.vercel.app_.webp",
        tags: ["HTML", "CSS", "JS", "React"],
        link: "https://ecommerce-react-website-three.vercel.app/",        
    },
    {
        title: "Car listing website",
        Description: "Front-end demo of a car listing website built with React.js.",
        image: "/projects/omreactcarlisting.netlify.app_.webp",
        tags: ["HTML", "CSS", "JS", "React"],
        link: "https://omreactcarlisting.netlify.app/",        
    },
    
]
export const Projects = () => {

    const [activeIdx,setActiveIdx] = useState(0);
    
    const next = () => {
        setActiveIdx( (prev) => (prev + 1) % projects.length );
    }

    const previous = () => {
        setActiveIdx( (prev) => (prev - 1 + projects.length) % projects.length );
    }
    
    return (
       
        <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
            {/*Background glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header */}
            <div className="text-center mx-auto max-w3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Feature Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that<span className="font-serif italic font-normal text-white"> make an impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">Here you can check web development projects I have worked on as a freelancer. I have carried out these projects using the following technologies: HTML5, CSS3, Javascript, React, TailwindCSS, PHP, WordPress, IndexedDB. If you need to check out websites I have built for Technicoders please contact me so I can share them with you.
                </p>
          </div>
          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="glass rounded-3xl glow-border animate-fade-in     animation-delay-200 group"> 
                {/*Image*/}
                <div className="relative overflow-hidden rounded-t-3xl">
                    <img 
                        src={projects[activeIdx].image} 
                        alt={projects[activeIdx].title} 
                        className="w-full max-h-70 md:max-h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                        className="absolute inset-0 
                        bg-linear-to-t from-card via-card/50
                        to-transparent opacity-60"
                    />
                    {/*Overlay Link */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={projects[activeIdx].link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" target="_blank">
                            <ArrowRight className="w-5 h-5"/>
                        </a>                                   
                    </div>
                </div>
                {/*Content */}
                <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors"><a href={projects[activeIdx].link} target="_blank">{projects[activeIdx].title}</a></h3>
                        <ArrowUpRight 
                            className="w-5 h-5 
                            text-muted-foreground group-hover:text-primary
                            group-hover:translate-x-1 
                            group-hover:-translate-y-1 transition-all"
                        />
                    </div>
                    <p className="text-muted-foreground text-sm">{projects[activeIdx].Description}</p>
                    <div className="flex flex-wrap gap-2">
                        {projects[activeIdx].tags.map( (tag, tagIdx) => (
                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                        ))}
                    </div>
                </div>
              </div>

              {/*Testimonials navigation  */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button 
                  className="p-1 md:p-3 rounded-full glass hover:bg-primary/10 text-primary transition-all"
                  onClick={previous}
                >
                  <ChevronLeft />
                </button>

                <div className="flex gap-2">
                  {projects.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={ () => setActiveIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    />
                  ))}
                </div>

                <button 
                  className="p-1 md:p-3 rounded-full glass hover:bg-primary/10 text-primary transition-all"
                  onClick={next}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>


    )
}