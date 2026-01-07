"use client";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, BrainIcon, ShieldCheckIcon, ZapIcon, NetworkIcon, BoxIcon, ActivityIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InfiniteScroller } from "@/components/ui/InfiniteScroller";
import { AI_FRAMEWORKS } from "@/utils/constants/misc";

const ExpertisePage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="Expertise" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Expertise en <span className="text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                ingénierie agentique
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Notre savoir-faire technique au service de vos projets d&apos;agents IA et de systèmes multi-agents.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
                    <AnimationContainer delay={0.2}>
                        <MagicCard className="h-full p-8">
                            <BrainIcon className="w-12 h-12 text-[#0071dc] mb-4" />
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
                            <NetworkIcon className="w-12 h-12 text-[#fcb239] mb-4" />
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
                            <ZapIcon className="w-12 h-12 text-[#0071dc] mb-4" />
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
                            <ShieldCheckIcon className="w-12 h-12 text-[#fcb239] mb-4" />
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

                    <AnimationContainer delay={0.6}>
                        <MagicCard className="h-full p-8">
                            <BoxIcon className="w-12 h-12 text-[#0071dc] mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">No-code & Low-code</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Déploiement rapide d&apos;agents avec des plateformes no-code pour accélérer le time-to-market.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Flowise, Dify, n8n</li>
                                    <li>• Voiceflow pour agents conversationnels</li>
                                    <li>• Intégrations Zapier, Make</li>
                                    <li>• Configuration sans code</li>
                                    <li>• Prototypage rapide</li>
                                </ul>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.7}>
                        <MagicCard className="h-full p-8">
                            <ActivityIcon className="w-12 h-12 text-[#fcb239] mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Observabilité</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Surveillance en temps réel et analyse des performances de vos agents IA en production.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Langfuse, LangSmith, Helicone</li>
                                    <li>• Métriques de performance (latence, coûts)</li>
                                    <li>• Traçabilité des prompts & outputs</li>
                                    <li>• Dashboards personnalisés</li>
                                    <li>• Alertes & notifications</li>
                                </ul>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>
                </div>

{/* Tech Stack Logos */}
            <MaxWidthWrapper>
                <div className="w-full ">
                    <AnimationContainer delay={0.1}>
                        <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
                            <MagicBadge title="Notre Stack Technologique" />
                            <h2 className="mt-6 text-center font-heading text-xl font-medium !leading-[1.1] text-foreground md:text-3xl lg:text-center">
                                Les technologies qui propulsent vos agents IA
                            </h2>
                            <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                                Nous maîtrisons les meilleurs frameworks et plateformes
                                d&apos;IA du marché pour créer des solutions performantes,
                                évolutives et adaptées à vos besoins spécifiques.
                            </p>
                        </div>
                    </AnimationContainer>
                    <div className="h-[300px] overflow-y-hidden">
                        <InfiniteScroller
                            items={AI_FRAMEWORKS.slice(
                                0,
                                Math.ceil(AI_FRAMEWORKS.length / 2)
                            ).map((framework) => (
                                <div
                                    key={framework.name}
                                    className="w-[120px] h-[120px] flex-shrink-0 p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all"
                                >
                                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-2">
                                        <div className="relative w-16 h-16">
                                            <Image
                                                className="w-full h-full object-contain"
                                                src={framework.logo}
                                                alt={framework.name}
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                        <p className="text-xs font-medium text-center text-foreground truncate w-full">
                                            {framework.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            renderItem={(item) => item}
                            repeat={3}
                            direction="horizontal"
                            className="gap-4 m-5 py-2"
                        />

                        <InfiniteScroller
                            scrollDirection="backward"
                            items={AI_FRAMEWORKS.slice(
                                Math.ceil(AI_FRAMEWORKS.length / 2)
                            ).map((framework) => (
                                <div
                                    key={framework.name}
                                    className="w-[120px] h-[120px] flex-shrink-0 p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all"
                                >
                                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-2">
                                        <div className="relative w-16 h-16">
                                            <Image
                                                className="w-full h-full object-contain"
                                                src={framework.logo}
                                                alt={framework.name}
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                        <p className="text-xs font-medium text-center text-foreground truncate w-full">
                                            {framework.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            renderItem={(item) => item}
                            repeat={3}
                            direction="horizontal"
                            className="gap-4 m-5 py-2"
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
                <AnimationContainer delay={0.9}>
                    <div className="mb-16 rounded-lg bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="mb-4">
                                    <MagicBadge title="Notre approche" />
                                </div>
                                <h2 className="text-3xl font-medium mb-4 text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                    Excellence en ingénierie agentique
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    Nous combinons expertise technique, rigueur méthodologique et technologies de pointe pour délivrer des solutions d&apos;IA agentique fiables et performantes.
                                </p>
                                <div className="space-y-3 text-sm text-muted-foreground">
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#0071dc] mt-1">✓</span>
                                        <span>Agnosticisme technologique pour s&apos;adapter à vos contraintes</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#0071dc] mt-1">✓</span>
                                        <span>Tests rigoureux sur scénarios réels et edge cases</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-[#0071dc] mt-1">✓</span>
                                        <span>Documentation complète et guides d&apos;exploitation</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <div className="inline-block px-6 py-4 rounded-lg bg-white/5 border border-white/10">
                                        <p className="text-sm text-muted-foreground mb-2">Propulsé par</p>
                                        <div className="flex items-center gap-4 justify-center">
                                            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                                OpenAI
                                            </span>
                                            <span className="text-muted-foreground">•</span>
                                            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                                Anthropic
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            et autres modèles de pointe
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={1.0}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Discutons de votre projet</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Décrivez-nous votre cas d&apos;usage et nous vous expliquerons comment notre expertise peut s&apos;appliquer à votre contexte.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild size="lg">
                                <Link href="/contact">
                                    Décrivez-nous votre besoin
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="yellow">
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

export default ExpertisePage;
