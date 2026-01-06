import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CodeIcon, NetworkIcon, GitBranchIcon, ZapIcon, BrainCircuitIcon, ShieldCheckIcon, CheckCircle2Icon, WorkflowIcon, LayersIcon, ArrowRightLeftIcon, DatabaseIcon, TimerIcon, Users2Icon, RefreshCwIcon } from "lucide-react";
import Link from "next/link";

export default function SystemesMultiAgentsPage() {
    return (
        <MaxWidthWrapper className="py-20">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">
                        <CodeIcon className="w-3 h-3 mr-1" />
                        Solutions IA avancées
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent">
                        Systèmes multi-agents orchestrés
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        Résolvez des problèmes complexes avec des systèmes d&apos;agents autonomes qui collaborent,
                        se coordonnent et s&apos;adaptent pour accomplir des tâches sophistiquées nécessitant plusieurs expertises.
                    </p>
                </div>
            </AnimationContainer>

            {/* Hero Visual Section */}
            <AnimationContainer delay={0.2}>
                <div className="mb-20">
                    <Card className="p-8 bg-gradient-to-br from-[#0071dc]/10 to-[#fcb239]/10 border-[#0071dc]/20">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <NetworkIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">5-20</h3>
                                <p className="text-sm text-muted-foreground">Agents par système</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <ZapIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">10x</h3>
                                <p className="text-sm text-muted-foreground">Complexité gérée vs agent seul</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <WorkflowIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">100%</h3>
                                <p className="text-sm text-muted-foreground">Traçabilité des décisions</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <RefreshCwIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Auto</h3>
                                <p className="text-sm text-muted-foreground">Récupération sur erreur</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </AnimationContainer>

            {/* Qu'est-ce qu'un système multi-agents */}
            <AnimationContainer delay={0.25}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Au-delà de l&apos;agent unique
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Un système où plusieurs agents spécialisés travaillent ensemble
                    </p>

                    <Card className="p-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-red-400">❌ Agent unique classique</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Essaie de tout faire seul</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Limité par un seul contexte LLM</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Pas de spécialisation par domaine</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Difficile de gérer workflows complexes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-1">•</span>
                                        <span>Échec complet si une étape rate</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-green-400">✓ Système multi-agents</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <span>Agents spécialisés par expertise</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <span>Orchestration et coordination intelligente</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <span>Parallélisation des tâches indépendantes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <span>Workflows complexes avec branchements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <span>Récupération automatique sur échec</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </AnimationContainer>

            {/* Patterns d'orchestration */}
            <AnimationContainer delay={0.3}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Patterns d&apos;orchestration
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Différentes architectures selon la complexité
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <WorkflowIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Séquentiel supervisé</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Un agent superviseur orchestre une chaîne d&apos;agents spécialisés qui s&apos;exécutent
                                        les uns après les autres. Idéal pour workflows linéaires complexes.
                                    </p>
                                    <div className="bg-muted/30 p-3 rounded text-xs font-mono">
                                        Superviseur → Agent A → Agent B → Agent C → Résultat
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Ex: Traitement commande (validation → vérification stock → paiement → expédition)
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <GitBranchIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Parallèle avec agrégation</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Plusieurs agents travaillent simultanément sur différents aspects, puis un agent
                                        agrégateur synthétise leurs résultats.
                                    </p>
                                    <div className="bg-muted/30 p-3 rounded text-xs font-mono">
                                        Dispatcher → [A, B, C] en parallèle → Agrégateur → Résultat
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Ex: Analyse marché (agent concurrence + agent prix + agent tendances)
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <ArrowRightLeftIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Hiérarchique à niveaux</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Organisation pyramidale avec agents managers qui délèguent à des agents workers
                                        spécialisés. Permet de gérer une grande échelle.
                                    </p>
                                    <div className="bg-muted/30 p-3 rounded text-xs font-mono">
                                        Chef Agent → [Manager A, Manager B] → [Workers A1, A2, B1, B2]
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Ex: Traitement masse de documents (chef → managers par type → extracteurs)
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <RefreshCwIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Collaboratif itératif</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Agents échangent et itèrent ensemble jusqu&apos;à convergence vers une solution
                                        optimale. Débat et consensus entre agents experts.
                                    </p>
                                    <div className="bg-muted/30 p-3 rounded text-xs font-mono">
                                        [Agent 1 ⟷ Agent 2 ⟷ Agent 3] × N itérations → Consensus
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Ex: Décision complexe (expert juridique + financier + technique débattent)
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </AnimationContainer>

            {/* Cas d'usage complexes */}
            <AnimationContainer delay={0.4}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Cas d&apos;usage complexes
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Quand un seul agent ne suffit pas
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                        <Card className="p-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/3">
                                    <div className="w-full h-48 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                        <DatabaseIcon className="w-20 h-20 text-[#0071dc]" />
                                    </div>
                                    <Badge className="mb-3">RH & Recrutement</Badge>
                                    <h3 className="text-2xl font-semibold mb-3">Pipeline de recrutement automatisé</h3>
                                </div>
                                <div className="flex-1">
                                    <p className="text-muted-foreground mb-6">
                                        Système de 8 agents qui gère le recrutement de bout en bout : pré-qualification,
                                        screening CV, évaluation technique, vérification références, scoring candidats.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                1
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Parser CV</p>
                                                <p className="text-sm text-muted-foreground">Extraction structurée compétences, expériences, formations</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                2
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Matching Poste</p>
                                                <p className="text-sm text-muted-foreground">Calcul similarité sémantique CV vs description de poste</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                3
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Vérification Technique</p>
                                                <p className="text-sm text-muted-foreground">Validation compétences techniques via quiz adaptatifs</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                4
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Scoring Final</p>
                                                <p className="text-sm text-muted-foreground">Agrégation pondérée + génération rapport détaillé</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-2 text-[#fcb239]">
                                            <TimerIcon className="w-4 h-4" />
                                            <span>-70% temps screening</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#fcb239]">
                                            <Users2Icon className="w-4 h-4" />
                                            <span>+40% qualité candidats</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/3">
                                    <div className="w-full h-48 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                        <LayersIcon className="w-20 h-20 text-[#0071dc]" />
                                    </div>
                                    <Badge className="mb-3">Assurance</Badge>
                                    <h3 className="text-2xl font-semibold mb-3">Traitement automatique sinistres</h3>
                                </div>
                                <div className="flex-1">
                                    <p className="text-muted-foreground mb-6">
                                        Système de 12 agents gérant le cycle complet : réception déclaration, validation éligibilité,
                                        évaluation montant, détection fraude, orchestration experts, décision paiement.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                1
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Réception Multicanal</p>
                                                <p className="text-sm text-muted-foreground">Email, formulaire web, appel → extraction données structurées</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                2
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Vérification Contrat</p>
                                                <p className="text-sm text-muted-foreground">Check couverture, franchises, exclusions, validité</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                3
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Détection Fraude</p>
                                                <p className="text-sm text-muted-foreground">ML patterns suspects + vérification cohérence déclarations</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                4
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Orchestrateur Experts</p>
                                                <p className="text-sm text-muted-foreground">Dispatch cas complexes vers experts humains + suivi</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0071dc]/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                                5
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium">Agent Décision & Paiement</p>
                                                <p className="text-sm text-muted-foreground">Calcul indemnisation + déclenchement virement + notification</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-2 text-[#fcb239]">
                                            <TimerIcon className="w-4 h-4" />
                                            <span>3j → 2h traitement</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#fcb239]">
                                            <ShieldCheckIcon className="w-4 h-4" />
                                            <span>+85% détection fraude</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </AnimationContainer>

            {/* Architecture technique */}
            <AnimationContainer delay={0.5}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Stack technique
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Frameworks d&apos;orchestration de pointe
                    </p>

                    <Card className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <CodeIcon className="w-5 h-5 text-[#0071dc]" />
                                    Orchestration
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">LangGraph (Anthropic/LangChain)</p>
                                            <p className="text-sm text-muted-foreground">Graphes d&apos;états pour workflows complexes</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">AutoGen (Microsoft)</p>
                                            <p className="text-sm text-muted-foreground">Conversations multi-agents avec rôles</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">CrewAI</p>
                                            <p className="text-sm text-muted-foreground">Équipes d&apos;agents avec hiérarchie</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <BrainCircuitIcon className="w-5 h-5 text-[#0071dc]" />
                                    Infrastructure
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Message Queue (RabbitMQ, Kafka)</p>
                                            <p className="text-sm text-muted-foreground">Communication asynchrone entre agents</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">State Management (Redis, PostgreSQL)</p>
                                            <p className="text-sm text-muted-foreground">Mémoire partagée et persistance</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Monitoring (Prometheus, Grafana)</p>
                                            <p className="text-sm text-muted-foreground">Observabilité complète du système</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </AnimationContainer>

            {/* CTA */}
            <AnimationContainer delay={0.6}>
                <Card className="p-8 md:p-12 bg-gradient-to-br from-[#0071dc]/10 to-[#fcb239]/10 border-[#0071dc]/20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Résolvez vos problèmes complexes
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Concevons ensemble un système multi-agents adapté à votre cas d&apos;usage métier.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                            Discuter de votre projet
                        </Link>
                        <Link href="/methodologie" className={buttonVariants({ size: "lg", variant: "outline" })}>
                            Notre approche
                        </Link>
                    </div>
                </Card>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
}
