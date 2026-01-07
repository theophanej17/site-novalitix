import Link from 'next/link';
import { AnimationContainer, Icons } from "@/components";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            {/* <Icons.logo className="w-7 h-7" /> */}
                            <Image
                                src="/assets/Logos/Novalitix_v2_image Logo edulearnia_horizontal_en_noir.png"
                                alt="Novalitix"
                                width={150}
                                height={40}
                                className="h-8 w-auto"
                                priority
                            />
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            Des Agents IA conçus pour des environnements réels.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Solutions
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/solutions/agents-conversationnels" className="hover:text-foreground transition-all duration-300">
                                            Agents conversationnels
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/solutions/agents-analyse" className="hover:text-foreground transition-all duration-300">
                                            Agents d&apos;analyse
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/solutions/systemes-multi-agents" className="hover:text-foreground transition-all duration-300">
                                            Systèmes multi-agents
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/solutions/agents-sur-mesure" className="hover:text-foreground transition-all duration-300">
                                            Agents sur mesure
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Entreprise
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/expertise" className="hover:text-foreground transition-all duration-300">
                                            Expertise
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/integration" className="hover:text-foreground transition-all duration-300">
                                            Intégration
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/methodologie" className="hover:text-foreground transition-all duration-300">
                                            Méthodologie
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/a-propos" className="hover:text-foreground transition-all duration-300">
                                            À propos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Ressources
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="https://blog.novalitix.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="https://events.novalitix.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-300">
                                            Events
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Légal
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/contact" className="hover:text-foreground transition-all duration-300">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Politique de confidentialité
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            Conditions d&apos;utilisation
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Novalitix. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="NOVALITIX" />
            </div>
        </footer>
    )
}

export default Footer
