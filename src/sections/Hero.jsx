import { Button } from "@/components/Button"
import { ArrowRight, ChevronDown, Download } from "lucide-react";


const skills = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "PHP",  
  "WordPress", 
  "SQL",  
  "Vercel",
  "Tailwind CSS",  
  "Figma",
  "Git",
  "GitHub Actions",
];


export const Hero = () => {

    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */ }
        <div className="absolute inset-0">
            <img 
                src={`${import.meta.env.BASE_URL}/hero-bg.jpg`}
                alt="Hero Image" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
        </div>
        {/*Green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map( (_, i) => (
                <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#3080E0",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column - text content*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                       <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Full-Stack Engineer - WordPress Developer
                       </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br />
                            experiences with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                            precision.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg    animate-fade-in animation-delay-200">
                            Hi, I'm Otoniel Mercado — a Full-Stack engineer specializing in
                            WordPress development (HTML, CSS, JS, React, PHP). I build scalable, performant web applications that users love.
                        </p>
                    </div>
                    {/* CTA's */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>                        
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me: </span>
                        {[
                            {icon: <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" width="20" height="20" clipRule="evenodd" viewBox="0 0 512 499.368"><path fill="#fff" fillRule="nonzero" d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"/></svg>, href: "https://github.com/otomerqui"},
                            {icon: <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" width="20" height="20" clipRule="evenodd" viewBox="0 0 512 512"><path fill="#fff" d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z"/></svg>, href: "https://www.linkedin.com/in/otoniel-mercado/"},
                            {icon: <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" width="20" height="20" clipRule="evenodd" viewBox="0 0 512 462.799"><path fill="#fff" fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>, href: "https://x.com/oto_mercado18"},
                            
                        ].map( (social,idx) => (
                            <a key={idx} href={social.href} className="p-2 rounded-full  glass hover:bg-primary/20 transitio-all duration-300" target="_blank">{social.icon}</a>
                        ))}
                    </div>
                </div>
                {/* Right column - profile image*/}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0 
                        rounded-3xl bg-linear-to-br 
                        from-primary/30 via-transparent 
                        to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                                src={`${import.meta.env.BASE_URL}/oto-mercado.webp`}
                                alt="Otoniel Mercado" 
                                className="w-full aspect-4/5 object-cover rounded-2xl opacity-70"
                            />
                            {/*Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/*Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">3+</div>
                                <div className="text-xs text-muted-foreground">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with

                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map( (skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}                    
                    </div>
                </div>
            </div>
        </div>
        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
    );
}