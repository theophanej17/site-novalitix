import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, BrainIcon, ShieldCheckIcon, ZapIcon, NetworkIcon, BoxIcon, ActivityIcon } from "lucide-react";
import Link from "next/link";

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Column 1: Technologies */}
                    <AnimationContainer delay={0.8}>
                        <div className="h-full rounded-lg bg-black border border-zinc-800 p-8">
                            <div className="mb-6">
                                <MagicBadge title="Notre Stack Technologique" />
                            </div>
                            <h2 className="text-2xl font-medium mb-3">
                                Les technologies qui propulsent vos agents IA
                            </h2>
                            <p className="text-sm text-muted-foreground mb-8">
                                Nous maîtrisons les meilleurs frameworks et plateformes de l&apos;écosystème IA pour créer des solutions performantes, évolutives et adaptées à vos besoins spécifiques.
                            </p>

                            <div className="grid grid-cols-4 gap-4">
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">LC</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">LangChain</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">OAI</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">OpenAI</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">AI</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">Anthropic</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">V</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">Vercel</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">n8n</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">n8n</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">LI</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">LlamaIndex</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">AG</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">AutoGen</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">G</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">Google AI</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">▲</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">Supabase</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">P</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">Pinecone</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">AWS</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">AWS</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">C</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">CrewAI</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">LF</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">Langfuse</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">LS</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">LangSmith</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">GH</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">GitHub</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">M</span>
                                    </div>
                                    <span className="text-[10px] text-center text-muted-foreground">Mistral AI</span>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>

                    {/* Column 2: Security */}
                    <AnimationContainer delay={0.85}>
                        <div className="h-full rounded-lg bg-black border border-zinc-800 p-8">
                            <div className="mb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                    <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
                                    <span className="text-xs font-medium text-emerald-500">Sécurité & Conformité</span>
                                </div>
                            </div>
                            <h2 className="text-2xl font-medium mb-3">
                                Sécurité en qui vous pouvez <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">avoir confiance</span>
                            </h2>
                            <p className="text-sm text-muted-foreground mb-8">
                                Nous prenons la sécurité au sérieux. Nos agents IA sont conçus avec des garde-fous robustes et respectent les normes de conformité les plus strictes.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium mb-1">Chiffrement des données</h3>
                                        <p className="text-xs text-muted-foreground">Chiffrement end-to-end de toutes les communications et données sensibles</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium mb-1">Conformité RGPD</h3>
                                        <p className="text-xs text-muted-foreground">Respect total des réglementations européennes sur la protection des données</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium mb-1">Contrôles d&apos;accès</h3>
                                        <p className="text-xs text-muted-foreground">Gestion granulaire des permissions et authentification multi-facteurs</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium mb-1">Audit & Traçabilité</h3>
                                        <p className="text-xs text-muted-foreground">Logs détaillés de toutes les actions et décisions des agents IA</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium mb-1">Tests de sécurité</h3>
                                        <p className="text-xs text-muted-foreground">Protection contre les injections de prompts et autres vulnérabilités</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium mb-1">Résilience des données</h3>
                                        <p className="text-xs text-muted-foreground">Sauvegardes automatiques et plan de reprise d&apos;activité</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>
                </div>

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
                            <div className="flex items-center justify-center">
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
                            </div>
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

export default ExpertisePage;
