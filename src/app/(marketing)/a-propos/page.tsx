import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, TargetIcon, ShieldIcon, CodeIcon, HeartHandshakeIcon, BrainCircuitIcon, LayersIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="À propos" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Novalitix évolue : de l&apos;IA & data vers <span className="text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                l&apos;ingénierie agentique
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Novalitix a d&apos;abord accompagné des projets de data et d&apos;intégration IA. Aujourd&apos;hui, nous concentrons notre savoir-faire sur les agents IA et les systèmes multi-agents : conception, intégration, exploitation.
                        </p>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="flex flex-col items-center justify-center relative w-full text-center mb-12">
                        <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-5xl lg:text-6xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent">
                            Notre mission
                        </h2>
                        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
                            Rendre l&apos;IA agentique accessible aux entreprises en proposant une approche d&apos;ingénierie rigoureuse, transparente et adaptée aux contraintes réelles du monde professionnel. Pas de promesses marketing, juste des livrables concrets et documentés.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
                    <AnimationContainer delay={0.3}>
                        <Card className="h-full p-8">
                            <TargetIcon className="w-12 h-12 text-[#0071dc] mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Clarté technique</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    Nous expliquons ce que nos agents font réellement, leurs limites et comment ils s&apos;intègrent dans votre environnement. Pas de jargon marketing, juste des faits techniques.
                                </p>
                            </CardContent>
                        </Card>
                    </AnimationContainer>

                    <AnimationContainer delay={0.4}>
                        <Card className="h-full p-8">
                            <ShieldIcon className="w-12 h-12 text-[#fcb239] mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Fiabilité</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    Nos agents sont conçus avec des garde-fous, de la traçabilité et des mécanismes de validation. La fiabilité prime sur la rapidité de déploiement.
                                </p>
                            </CardContent>
                        </Card>
                    </AnimationContainer>

                    <AnimationContainer delay={0.5}>
                        <Card className="h-full p-8">
                            <CodeIcon className="w-12 h-12 text-[#0071dc] mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Sobriété</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    Pas de promesses invérifiables, pas de ROI garantis sans données, pas de &quot;révolution&quot; marketing. Nous travaillons sur vos contraintes réelles.
                                </p>
                            </CardContent>
                        </Card>
                    </AnimationContainer>

                    <AnimationContainer delay={0.6}>
                        <Card className="h-full p-8">
                            <HeartHandshakeIcon className="w-12 h-12 text-[#fcb239] mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Sécurité & conformité</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    RGPD, confidentialité des données, hébergement souverain : nous prenons au sérieux vos exigences de sécurité et de conformité.
                                </p>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                </div>

                <AnimationContainer delay={0.65}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Nos valeurs" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Du cadrage au Déploiement
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Nous concevons des agents IA adaptés à vos processus métiers et vos contraintes techniques.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full py-8 gap-4 md:gap-8 pb-16">
                    <AnimationContainer delay={0.66}>
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
                    <AnimationContainer delay={0.67}>
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
                    <AnimationContainer delay={0.68}>
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
                    <AnimationContainer delay={0.69}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <ShieldIcon strokeWidth={1.5} className="w-10 h-10 text-[#fcb239] mb-4" />
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

                <AnimationContainer delay={0.7}>
                    <div className="py-14 mb-8">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-2xl font-medium font-heading mb-8">
                                Notre expertise
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

                <AnimationContainer delay={0.8}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Envie d&apos;en savoir plus ?</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Discutons de votre projet et de la manière dont nous pouvons vous accompagner.
                        </p>
                        <div className="flex gap-4">
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
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default AboutPage;
