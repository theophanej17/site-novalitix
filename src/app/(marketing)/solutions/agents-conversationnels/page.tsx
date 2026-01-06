import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MessageSquareIcon, BrainCircuitIcon, LanguagesIcon, ClockIcon, ShieldCheckIcon, TrendingUpIcon, CheckCircle2Icon, ZapIcon, RefreshCwIcon, UsersIcon, BarChartIcon, LockIcon } from "lucide-react";
import Link from "next/link";

export default function AgentsConversationnelsPage() {
    return (
        <MaxWidthWrapper className="py-20">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">
                        <MessageSquareIcon className="w-3 h-3 mr-1" />
                        Solutions IA
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent">
                        Agents conversationnels intelligents
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        Transformez vos interactions client avec des agents conversationnels qui comprennent le contexte,
                        accèdent à vos données métier et gèrent des conversations complexes en temps réel.
                    </p>
                </div>
            </AnimationContainer>

            {/* Hero Visual Section */}
            <AnimationContainer delay={0.2}>
                <div className="mb-20">
                    <Card className="p-8 bg-gradient-to-br from-[#0071dc]/10 to-[#fcb239]/10 border-[#0071dc]/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <BrainCircuitIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">95%</h3>
                                <p className="text-sm text-muted-foreground">Précision de compréhension</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <ClockIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">&lt;2s</h3>
                                <p className="text-sm text-muted-foreground">Temps de réponse moyen</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <LanguagesIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">40+</h3>
                                <p className="text-sm text-muted-foreground">Langues supportées</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </AnimationContainer>

            {/* Capacités principales */}
            <AnimationContainer delay={0.3}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Capacités avancées
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Nos agents conversationnels vont bien au-delà des chatbots classiques
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <BrainCircuitIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Compréhension contextuelle</h3>
                                    <p className="text-muted-foreground">
                                        Maintient le contexte sur plusieurs tours de conversation, comprend les références
                                        implicites et adapte ses réponses selon l&apos;historique.
                                    </p>
                                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Mémoire conversationnelle
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Résolution de coréférences
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Gestion des ambiguïtés
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <ZapIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Accès aux données métier</h3>
                                    <p className="text-muted-foreground">
                                        Connecté à vos bases de données, CRM, ERP et API pour fournir des réponses
                                        personnalisées et à jour en temps réel.
                                    </p>
                                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Intégration CRM/ERP
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            APIs REST/GraphQL
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Bases de données SQL/NoSQL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <RefreshCwIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Actions automatisées</h3>
                                    <p className="text-muted-foreground">
                                        Exécute des actions concrètes : créer des tickets, réserver des rendez-vous,
                                        modifier des commandes, envoyer des notifications.
                                    </p>
                                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Workflows automatisés
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Validation multi-étapes
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Notifications temps réel
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <LanguagesIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Multilingue natif</h3>
                                    <p className="text-muted-foreground">
                                        Détection automatique de la langue, traduction à la volée et adaptation
                                        culturelle des réponses pour une expérience globale.
                                    </p>
                                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Détection automatique
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Traduction instantanée
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Adaptation culturelle
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </AnimationContainer>

            {/* Cas d'usage */}
            <AnimationContainer delay={0.4}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Cas d&apos;usage métier
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Déployés avec succès dans différents secteurs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6 h-full">
                            <div className="w-full h-40 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                <UsersIcon className="w-16 h-16 text-[#0071dc]" />
                            </div>
                            <Badge className="mb-3">Support client</Badge>
                            <h3 className="text-xl font-semibold mb-3">Assistant support niveau 1-2</h3>
                            <p className="text-muted-foreground mb-4">
                                Gère 80% des demandes courantes : statut de commande, FAQ, troubleshooting basique,
                                escalade intelligente vers les humains.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-[#fcb239]">
                                    <TrendingUpIcon className="w-4 h-4" />
                                    <span>-60% tickets support</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#fcb239]">
                                    <ClockIcon className="w-4 h-4" />
                                    <span>Disponible 24/7</span>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 h-full">
                            <div className="w-full h-40 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                <BarChartIcon className="w-16 h-16 text-[#0071dc]" />
                            </div>
                            <Badge className="mb-3">E-commerce</Badge>
                            <h3 className="text-xl font-semibold mb-3">Conseiller produit intelligent</h3>
                            <p className="text-muted-foreground mb-4">
                                Recommandations personnalisées basées sur l&apos;historique, aide au choix produit,
                                gestion panier et commandes, suivi livraison.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-[#fcb239]">
                                    <TrendingUpIcon className="w-4 h-4" />
                                    <span>+35% taux conversion</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#fcb239]">
                                    <ShieldCheckIcon className="w-4 h-4" />
                                    <span>+25% panier moyen</span>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 h-full">
                            <div className="w-full h-40 bg-gradient-to-br from-[#fcb239]/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                                <LockIcon className="w-16 h-16 text-[#fcb239]" />
                            </div>
                            <Badge className="mb-3">Banque & Assurance</Badge>
                            <h3 className="text-xl font-semibold mb-3">Conseiller financier virtuel</h3>
                            <p className="text-muted-foreground mb-4">
                                Consultation solde, opérations courantes, demandes crédit, devis assurance,
                                conformité réglementaire intégrée.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-[#fcb239]">
                                    <ShieldCheckIcon className="w-4 h-4" />
                                    <span>100% conforme RGPD</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#fcb239]">
                                    <LockIcon className="w-4 h-4" />
                                    <span>Sécurité bancaire</span>
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
                        Architecture technique
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Une stack moderne et éprouvée
                    </p>

                    <Card className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <BrainCircuitIcon className="w-5 h-5 text-[#0071dc]" />
                                    Modèles LLM
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">GPT-4, Claude 3.5 Sonnet</p>
                                            <p className="text-sm text-muted-foreground">Compréhension et génération avancées</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Fine-tuning métier</p>
                                            <p className="text-sm text-muted-foreground">Adaptation à votre vocabulaire et processus</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">RAG (Retrieval Augmented Generation)</p>
                                            <p className="text-sm text-muted-foreground">Réponses basées sur vos documents</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <ZapIcon className="w-5 h-5 text-[#0071dc]" />
                                    Infrastructure
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">LangChain / LangGraph</p>
                                            <p className="text-sm text-muted-foreground">Orchestration des agents</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Vector databases (Pinecone, Qdrant)</p>
                                            <p className="text-sm text-muted-foreground">Recherche sémantique rapide</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">API Gateway + Load Balancer</p>
                                            <p className="text-sm text-muted-foreground">Scalabilité et haute disponibilité</p>
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
                        Prêt à déployer votre agent conversationnel ?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Discutons de votre cas d&apos;usage et concevons ensemble la solution adaptée à vos besoins.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                            Démarrer un projet
                        </Link>
                        <Link href="/methodologie" className={buttonVariants({ size: "lg", variant: "outline" })}>
                            Notre méthodologie
                        </Link>
                    </div>
                </Card>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
}
