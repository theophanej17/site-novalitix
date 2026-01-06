import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, CheckCircle2Icon, BrainCircuitIcon, ShieldCheckIcon, CodeIcon, LayersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                Ingénierie agentique
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </span>
                        </button>
                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            Des agents IA <span className="text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text inline-bloc">
                                conçus pour des environnements réels
                            </span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                            Novalitix conçoit des systèmes d&apos;agents IA pour automatiser des tâches,
                            <br className="hidden md:block" />
                            <span className="hidden md:block">assister les équipes et orchestrer des processus</span>
                        </p>
                        <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                            <Button asChild>
                                <Link href="/contact" className="flex items-center">
                                    Décrivez-nous votre besoin
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="https://calix.novalitix.com/novalitix/15min" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    Réserver un appel gratuit
                                </Link>
                            </Button>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam
                                size={250}
                                duration={12}
                                delay={9}
                            />
                            <Image
                                src="/assets/dashboard-dark.svg"
                                alt="Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >

            {/* Stats Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.3}>
                    <div className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="p-8 text-center border-border/50 bg-gradient-to-br from-background to-muted/20 hover:border-[#0071dc]/50 transition-all">
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent mb-3">
                                    100%
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Architecture documentée</h3>
                                <p className="text-sm text-muted-foreground">
                                    Schémas techniques complets pour tous nos agents
                                </p>
                            </Card>
                            <Card className="p-8 text-center border-border/50 bg-gradient-to-br from-background to-muted/20 hover:border-[#fcb239]/50 transition-all">
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent mb-3">
                                    &lt; 4 sem
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Temps de réponse</h3>
                                <p className="text-sm text-muted-foreground">
                                    Du cadrage au prototype fonctionnel
                                </p>
                            </Card>
                            <Card className="p-8 text-center border-border/50 bg-gradient-to-br from-background to-muted/20 hover:border-[#0071dc]/50 transition-all">
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent mb-3">
                                    24/7
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Monitoring continu</h3>
                                <p className="text-sm text-muted-foreground">
                                    Surveillance en temps réel de vos agents
                                </p>
                            </Card>
                            <Card className="p-8 text-center border-border/50 bg-gradient-to-br from-background to-muted/20 hover:border-[#fcb239]/50 transition-all">
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent mb-3">
                                    RGPD
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">Conformité garantie</h3>
                                <p className="text-sm text-muted-foreground">
                                    Respect total des réglementations européennes
                                </p>
                            </Card>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Tech Stack Logos */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.35}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase mb-8 tracking-wider">
                                Technologies & Frameworks que nous maîtrisons
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-10 max-w-7xl mx-auto">
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://www.perplexity.ai/favicon.svg"
                                            alt="Perplexity"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Perplexity</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://avatars.githubusercontent.com/u/126733545?s=200&v=4"
                                            alt="LangChain"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain rounded"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">LangChain</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://openai.com/favicon.ico"
                                            alt="OpenAI"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">OpenAI</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://www.anthropic.com/images/icons/safari-pinned-tab.svg"
                                            alt="Anthropic"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Anthropic</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://ollama.com/public/ollama.png"
                                            alt="Ollama"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Ollama</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-lg bg-white/90 flex items-center justify-center p-2">
                                        <Image
                                            src="https://n8n.io/favicon.ico"
                                            alt="n8n"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">n8n</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                                            alt="Hugging Face"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Hugging Face</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg"
                                            alt="Google AI"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Google AI</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://github.githubassets.com/favicons/favicon.svg"
                                            alt="GitHub"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">GitHub</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://sdk.vercel.ai/icon.png"
                                            alt="Vercel AI"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Vercel AI</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://cohere.com/favicon-32x32.png"
                                            alt="Cohere"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Cohere</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://azure.microsoft.com/favicon.ico"
                                            alt="Azure"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Azure</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico"
                                            alt="AWS Bedrock"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">AWS Bedrock</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg"
                                            alt="Groq"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Groq</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://langfuse.com/images/favicon.svg"
                                            alt="Langfuse"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Langfuse</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://replicate.com/favicon.ico"
                                            alt="Replicate"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Replicate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>


            {/* Solutions Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Solutions" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Du cadrage au Déploiement
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Nous concevons des agents IA adaptés à vos processus métiers et vos contraintes techniques.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full py-8 gap-4 md:gap-8">
                    <AnimationContainer delay={0.2}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <BrainCircuitIcon strokeWidth={1.5} className="w-10 h-10 text-[#0071dc] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents conversationnels
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Répondre, guider, qualifier, assister vos utilisateurs et équipes.
                                </p>
                                <Link href="/solutions/agents-conversationnels" className="mt-auto pt-4 text-sm text-[#0071dc] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.3}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <LayersIcon strokeWidth={1.5} className="w-10 h-10 text-[#fcb239] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents d&apos;analyse
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Connecter, analyser, alerter, synthétiser vos données.
                                </p>
                                <Link href="/solutions/agents-analyse" className="mt-auto pt-4 text-sm text-[#fcb239] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.4}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <CodeIcon strokeWidth={1.5} className="w-10 h-10 text-[#0071dc] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Systèmes multi-agents
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Décomposer un problème complexe, coordonner, contrôler.
                                </p>
                                <Link href="/solutions/systemes-multi-agents" className="mt-auto pt-4 text-sm text-[#0071dc] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.5}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <ShieldCheckIcon strokeWidth={1.5} className="w-10 h-10 text-[#fcb239] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents sur mesure
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Pour vos processus spécifiques et vos outils internes.
                                </p>
                                <Link href="/solutions/agents-sur-mesure" className="mt-auto pt-4 text-sm text-[#fcb239] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper>


            {/* Use Cases Visual Section */}
            <MaxWidthWrapper className="py-16">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center mb-12">
                        <MagicBadge title="Cas d'usage" />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Comment nos clients utilisent nos agents
                        </h2>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimationContainer delay={0.2}>
                        <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="w-full h-48 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                <BrainCircuitIcon className="w-20 h-20 text-[#0071dc]" />
                            </div>
                            <CardHeader className="p-0 mb-3">
                                <CardTitle className="text-xl">Support client intelligent</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Agent conversationnel qui répond aux questions complexes, accède aux bases de données internes et escalade si nécessaire.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">RAG</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">API</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">24/7</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                    <AnimationContainer delay={0.3}>
                        <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="w-full h-48 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                <LayersIcon className="w-20 h-20 text-[#0071dc]" />
                            </div>
                            <CardHeader className="p-0 mb-3">
                                <CardTitle className="text-xl">Analyse automatisée</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Agent d&apos;analyse qui parcourt des milliers de documents, extrait des insights et génère des rapports synthétiques.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">NLP</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">Alertes</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">BI</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                    <AnimationContainer delay={0.4}>
                        <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="w-full h-48 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                <CodeIcon className="w-20 h-20 text-[#0071dc]" />
                            </div>
                            <CardHeader className="p-0 mb-3">
                                <CardTitle className="text-xl">Orchestration multi-agents</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Système de 3+ agents qui collaborent : recherche, analyse, validation et exécution automatisées.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">AutoGen</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">Workflow</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-[#0071dc]/10 text-[#0071dc]">Complexe</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper>

            {/* Proof Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Ce que vous obtenez" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Ce que nous vous livrons
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Nous livrons des solutions complètes et documentées, prêtes à être exploitées en production.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-[#0071dc] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Une architecture claire et documentée</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Schémas, spécifications techniques et documentation complète pour une compréhension totale du système.
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-[#0071dc] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Une intégration testée</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Tests dans votre environnement réel avec vos contraintes spécifiques et vos outils existants.
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-[#0071dc] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Des garde-fous robustes</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Traçabilité complète, limites définies et validation des actions pour garantir la fiabilité.
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-[#0071dc] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Un plan d&apos;exploitation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Monitoring, logs structurés et processus d&apos;amélioration continue pour une maintenance optimale.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.3}>
                    <div className="flex justify-center mt-12 gap-4">
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Décrivez-nous votre besoin
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="https://calix.novalitix.com/novalitix/15min" target="_blank" rel="noopener noreferrer">
                                Réserver un appel gratuit
                            </Link>
                        </Button>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>


            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Transformez vos processus avec des agents IA fiables
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                                Passez d&apos;une idée à une solution en production avec une approche d&apos;ingénierie rigoureuse. Pas de promesses marketing, juste des livrables concrets et documentés.
                            </p>
                            <div className="mt-6 flex gap-4">
                                <Button asChild>
                                    <Link href="/contact">
                                        Décrivez-nous votre besoin
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="https://calix.novalitix.com/novalitix/15min" target="_blank" rel="noopener noreferrer">
                                        Réserver un appel gratuit
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default HomePage
