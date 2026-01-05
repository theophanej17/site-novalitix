import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, BrainIcon, ShieldCheckIcon, ZapIcon, NetworkIcon } from "lucide-react";
import Link from "next/link";

const ExpertisePage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="Expertise" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Expertise en <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
                                ingénierie agentique
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Notre savoir-faire technique au service de vos projets d&apos;agents IA et de systèmes multi-agents.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
                    <AnimationContainer delay={0.2}>
                        <MagicCard className="h-full p-8">
                            <BrainIcon className="w-12 h-12 text-violet-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Conception d&apos;agents intelligents</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Nous maîtrisons les frameworks et techniques pour concevoir des agents IA performants et fiables.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Prompt engineering avancé</li>
                                    <li>• RAG (Retrieval Augmented Generation)</li>
                                    <li>• Function calling & tool use</li>
                                    <li>• Memory & context management</li>
                                    <li>• Chain-of-thought reasoning</li>
                                </ul>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.3}>
                        <MagicCard className="h-full p-8">
                            <NetworkIcon className="w-12 h-12 text-fuchsia-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Systèmes multi-agents</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Orchestration de plusieurs agents avec des rôles spécialisés pour résoudre des problèmes complexes.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Architecture multi-agents (AutoGen, CrewAI)</li>
                                    <li>• Orchestration & coordination</li>
                                    <li>• Gestion de l&apos;état partagé</li>
                                    <li>• Stratégies de reprise sur erreur</li>
                                    <li>• Garde-fous et limites</li>
                                </ul>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.4}>
                        <MagicCard className="h-full p-8">
                            <ZapIcon className="w-12 h-12 text-blue-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Intégration & performance</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Connecter les agents à vos systèmes existants avec des performances optimales.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• APIs & webhooks</li>
                                    <li>• Vector databases (Pinecone, Weaviate, Qdrant)</li>
                                    <li>• Caching & optimisation</li>
                                    <li>• Streaming & temps réel</li>
                                    <li>• Rate limiting & gestion des coûts</li>
                                </ul>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.5}>
                        <MagicCard className="h-full p-8">
                            <ShieldCheckIcon className="w-12 h-12 text-green-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Sécurité & gouvernance</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Garantir la fiabilité, la sécurité et la conformité de vos agents IA.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Validation & filtrage des outputs</li>
                                    <li>• Traçabilité complète (logs, audit trails)</li>
                                    <li>• RGPD & confidentialité</li>
                                    <li>• Tests de sécurité (prompt injection, etc.)</li>
                                    <li>• Monitoring & observabilité</li>
                                </ul>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>
                </div>

                <AnimationContainer delay={0.6}>
                    <Card className="p-8 mb-16">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-2xl">Technologies & frameworks que nous utilisons</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="font-medium mb-4">Frameworks agentiques</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• LangChain / LangGraph</li>
                                        <li>• LlamaIndex</li>
                                        <li>• AutoGen (Microsoft)</li>
                                        <li>• CrewAI</li>
                                        <li>• Semantic Kernel</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4">Modèles de langage</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• OpenAI (GPT-4, GPT-4 Turbo)</li>
                                        <li>• Anthropic (Claude 3.5)</li>
                                        <li>• Google (Gemini Pro)</li>
                                        <li>• Mistral AI</li>
                                        <li>• Modèles open-source (Llama, etc.)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4">Infrastructure & tooling</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Python, TypeScript, Node.js</li>
                                        <li>• Docker, Kubernetes</li>
                                        <li>• PostgreSQL, MongoDB</li>
                                        <li>• Redis (caching)</li>
                                        <li>• Langfuse, LangSmith (observabilité)</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AnimationContainer>

                <AnimationContainer delay={0.7}>
                    <Card className="p-8 mb-16 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border-violet-500/20">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-2xl">Notre approche technique</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-medium mb-2">Agnosticisme technologique</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Nous sélectionnons les modèles et frameworks en fonction de vos contraintes : confidentialité, coût, latence, intégration SI, exigences RGPD.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Tests rigoureux</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Chaque agent est testé sur des scénarios réels et edge cases avant déploiement. Nous mesurons la qualité des outputs, la latence et les coûts.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Documentation complète</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Architecture documentée, spécifications techniques, guides d&apos;exploitation et runbooks pour garantir la maintenabilité.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AnimationContainer>

                <AnimationContainer delay={0.8}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Discutons de votre projet</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Décrivez-nous votre cas d&apos;usage et nous vous expliquerons comment notre expertise peut s&apos;appliquer à votre contexte.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Parler à un expert
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default ExpertisePage;
