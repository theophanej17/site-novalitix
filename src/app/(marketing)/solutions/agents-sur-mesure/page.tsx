import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ShieldCheckIcon, WrenchIcon, RocketIcon, FileCodeIcon, BrainCircuitIcon, CheckCircle2Icon, ZapIcon, Users2Icon, SettingsIcon, TestTubeIcon, BookOpenIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

export default function AgentsSurMesurePage() {
    return (
        <MaxWidthWrapper className="py-20">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">
                        <WrenchIcon className="w-3 h-3 mr-1" />
                        Solutions personnalisées
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent">
                        Agents IA sur mesure
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        Votre cas d&apos;usage est unique. Nous concevons des agents IA parfaitement adaptés à vos processus,
                        vos données et vos objectifs métier spécifiques.
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
                                    <WrenchIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">100%</h3>
                                <p className="text-sm text-muted-foreground">Personnalisé à vos besoins</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <RocketIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">3-6</h3>
                                <p className="text-sm text-muted-foreground">Semaines livraison MVP</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <FileCodeIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Full</h3>
                                <p className="text-sm text-muted-foreground">Code source livré</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                                <p className="text-sm text-muted-foreground">Support & maintenance</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </AnimationContainer>

            {/* Pourquoi sur mesure */}
            <AnimationContainer delay={0.25}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Pourquoi choisir du sur mesure ?
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Les solutions génériques ne répondent pas aux défis métier spécifiques
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <SettingsIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Adapté à vos processus</h3>
                                    <p className="text-muted-foreground mb-3">
                                        L&apos;agent s&apos;intègre parfaitement dans vos workflows existants, respecte vos
                                        règles métier et s&apos;adapte à votre vocabulaire spécifique.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Mapping de vos processus actuels
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Respect de vos règles de gestion
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Terminologie métier intégrée
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
                                    <h3 className="text-xl font-semibold mb-2">Intégration profonde</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Connexion native à vos systèmes (ERP, CRM, bases de données propriétaires),
                                        pas de middleware générique qui ralentit.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            APIs personnalisées pour vos systèmes
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Accès direct à vos bases de données
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Authentification SSO/LDAP
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <BrainCircuitIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Données propriétaires</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Fine-tuning sur vos données historiques, RAG optimisé pour vos documents,
                                        connaissance approfondie de votre contexte métier.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Entraînement sur vos données
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Base de connaissances personnalisée
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Amélioration continue
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheckIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Propriété complète</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Vous recevez le code source complet, la documentation architecture et pouvez
                                        déployer on-premise ou cloud selon vos contraintes.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Code source livré
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Déploiement on-premise possible
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Aucun vendor lock-in
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </AnimationContainer>

            {/* Notre processus */}
            <AnimationContainer delay={0.3}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Notre processus de conception
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Une approche méthodique en 6 étapes
                    </p>

                    <div className="space-y-6">
                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                                    1
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-semibold">Découverte & Cadrage</h3>
                                        <Badge variant="outline">1 semaine</Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Ateliers avec vos équipes pour comprendre en profondeur votre besoin, vos contraintes,
                                        vos processus actuels et définir les critères de succès.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Interviews stakeholders</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Audit systèmes existants</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Définition périmètre MVP</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                                    2
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-semibold">Design Architecture</h3>
                                        <Badge variant="outline">1 semaine</Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Conception de l&apos;architecture technique, choix des modèles LLM, design des workflows
                                        d&apos;agents et stratégie d&apos;intégration avec vos systèmes.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Schéma architecture détaillé</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Choix stack technique</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Plan intégration SI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                                    3
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-semibold">Développement MVP</h3>
                                        <Badge variant="outline">2-4 semaines</Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Construction du MVP avec les fonctionnalités core, itérations rapides basées sur vos
                                        retours et tests en conditions réelles sur un sous-ensemble de données.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Sprints hebdomadaires</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Démos régulières</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Ajustements continus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                                    4
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-semibold">Tests & Validation</h3>
                                        <Badge variant="outline">1 semaine</Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Tests fonctionnels, tests de charge, validation qualité avec vos utilisateurs finaux
                                        et ajustements basés sur les métriques de performance.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Tests automatisés</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>UAT avec utilisateurs</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Benchmark performance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                                    5
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-semibold">Déploiement</h3>
                                        <Badge variant="outline">3-5 jours</Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Mise en production progressive avec monitoring renforcé, plan de rollback et
                                        accompagnement de vos équipes sur les premières semaines.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Déploiement progressif</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Monitoring 24/7</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Formation utilisateurs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                                    6
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-semibold">Support & Évolution</h3>
                                        <Badge variant="outline">Continu</Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">
                                        Maintenance corrective, amélioration continue basée sur l&apos;usage réel, ajout de
                                        nouvelles fonctionnalités et optimisation des performances.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Support technique 24/7</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Mises à jour régulières</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            <span>Nouvelles features</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </AnimationContainer>

            {/* Ce que vous recevez */}
            <AnimationContainer delay={0.4}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Livrables complets
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Transparence totale et propriété du code
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-[#0071dc]/10 flex items-center justify-center mx-auto mb-4">
                                <FileCodeIcon className="w-8 h-8 text-[#0071dc]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Code Source</h3>
                            <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Code Python/TypeScript complet</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Tests unitaires & intégration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>CI/CD configuré</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Repository Git privé</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-[#0071dc]/10 flex items-center justify-center mx-auto mb-4">
                                <BookOpenIcon className="w-8 h-8 text-[#0071dc]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                            <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Architecture technique détaillée</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Guide d&apos;installation</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>API Reference complète</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Guides utilisateur</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-[#0071dc]/10 flex items-center justify-center mx-auto mb-4">
                                <TestTubeIcon className="w-8 h-8 text-[#0071dc]" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Qualité & Monitoring</h3>
                            <ul className="text-sm text-muted-foreground space-y-2 text-left">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Dashboards monitoring</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Alertes configurées</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Logs centralisés</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239] flex-shrink-0" />
                                    <span>Métriques performance</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </AnimationContainer>

            {/* CTA */}
            <AnimationContainer delay={0.5}>
                <Card className="p-8 md:p-12 bg-gradient-to-br from-[#0071dc]/10 to-[#fcb239]/10 border-[#0071dc]/20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Discutons de votre projet sur mesure
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Chaque projet est unique. Partagez-nous votre besoin et recevez une proposition personnalisée
                        sous 48h avec estimation de délais et budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                            Décrire mon besoin
                        </Link>
                        <Link href="/methodologie" className={buttonVariants({ size: "lg", variant: "outline" })}>
                            Notre méthodologie complète
                        </Link>
                    </div>
                    <div className="mt-8 pt-8 border-t flex items-center justify-center gap-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <ClockIcon className="w-4 h-4" />
                            <span>Réponse sous 48h</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users2Icon className="w-4 h-4" />
                            <span>Atelier découverte offert</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheckIcon className="w-4 h-4" />
                            <span>NDA si nécessaire</span>
                        </div>
                    </div>
                </Card>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
}
