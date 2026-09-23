import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highLights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
]
export const About = () => {

    return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left column */}
                <div className="space-y-8 ">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building the future,
                        <span className="font-serif italic font-normal text-white"> one component at a timme.</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>I'm a Full Stack Web Developer with over 3 years of experience building modern, high-performing websites and digital solutions for businesses across different industries.</p>
                        <p>My primary expertise includes WordPress development, custom Elementor websites, WooCommerce, responsive front-end development, and modern JavaScript frameworks such as Next.js. I enjoy transforming designs into fast, SEO-friendly, and user-focused websites that help businesses grow online.</p>
                        <p>Beyond website development, I specialize in business automation and workflow optimization. Using tools like n8n, GoHighLevel, Brevo, and AI integrations, I design automated systems that reduce manual work, improve customer communication, generate leads, and connect multiple business applications into seamless workflows.</p>
                        <p>My technical toolkit includes:WordPress & Element,React,HTML5, CSS3, JavaScript, Tailwind CSS, WooCommerce, REST APIs & third-party integrations, n8n workflow automation, GoHighLevel CRM automation, Brevo marketing automation</p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "I believe technology should do more than look good—it should solve real business problems. Whether it's building a professional website, creating a custom web application, or automating repetitive business processes, my goal is to deliver solutions that save time, improve efficiency, and create measurable value."
                        </p>
                    </div>
                </div>
                {/*Right Column - Hilights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highLights.map( (item,idx) => (
                        <div 
                            key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: `${(idx + 1)*100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
    );
}