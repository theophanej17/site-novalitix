import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LayersIcon, BarChart3Icon, FileTextIcon, TrendingUpIcon, BrainCircuitIcon, ZapIcon, CheckCircle2Icon, DatabaseIcon, SearchIcon, AlertCircleIcon, PieChartIcon, LineChartIcon } from "lucide-react";
import Link from "next/link";

export default function AgentsAnalysePage() {
    return (
        <MaxWidthWrapper className="py-20">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">
                        <LayersIcon className="w-3 h-3 mr-1" />
                        Solutions IA
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text text-transparent">
                        Agents d&apos;analyse de données
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                        Transformez vos données brutes en insights actionnables avec des agents IA qui analysent,
                        détectent des patterns et génèrent des rapports automatisés en langage naturel.
                    </p>
                </div>
            </AnimationContainer>

            {/* Hero Stats */}
            <AnimationContainer delay={0.2}>
                <div className="mb-20">
                    <Card className="p-8 bg-gradient-to-br from-[#0071dc]/10 to-[#fcb239]/10 border-[#0071dc]/20">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <BarChart3Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">1M+</h3>
                                <p className="text-sm text-muted-foreground">Lignes analysées/seconde</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <TrendingUpIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">92%</h3>
                                <p className="text-sm text-muted-foreground">Précision détection anomalies</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <ZapIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">-80%</h3>
                                <p className="text-sm text-muted-foreground">Temps création rapports</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-4">
                                    <FileTextIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">100%</h3>
                                <p className="text-sm text-muted-foreground">Automatisation rapports</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </AnimationContainer>

            {/* Capacités principales */}
            <AnimationContainer delay={0.3}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Capacités d&apos;analyse avancées
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Au-delà de la simple visualisation : intelligence analytique complète
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <SearchIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Analyse exploratoire automatique</h3>
                                    <p className="text-muted-foreground mb-3">
                                        L&apos;agent explore vos données, identifie les variables clés, détecte les corrélations
                                        et propose des axes d&apos;analyse pertinents sans configuration préalable.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Profiling automatique des datasets
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Détection de corrélations cachées
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Identification de patterns temporels
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <AlertCircleIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Détection d&apos;anomalies</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Surveillance continue avec alertes en temps réel sur les valeurs aberrantes,
                                        changements de tendance et comportements inhabituels.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Machine Learning (Isolation Forest, DBSCAN)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Seuils adaptatifs intelligents
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Alertes contextualisées avec explication
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <TrendingUpIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Prédictions et forecasting</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Modèles prédictifs pour anticiper les tendances, prévoir la demande et
                                        estimer les risques avec intervalles de confiance.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Séries temporelles (ARIMA, Prophet)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Modèles de régression avancés
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Intervalles de confiance et scenarios
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#0071dc]/10 flex items-center justify-center flex-shrink-0">
                                    <FileTextIcon className="w-6 h-6 text-[#0071dc]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Génération de rapports narratifs</h3>
                                    <p className="text-muted-foreground mb-3">
                                        Rapports automatiques en langage naturel qui expliquent les insights,
                                        contextualisent les chiffres et recommandent des actions.
                                    </p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Narration automatique des insights
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Visualisations adaptées au contexte
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                            Export multi-formats (PDF, PPT, HTML)
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
                        Applications métier
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Des analyses qui font la différence
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6 h-full">
                            <div className="w-full h-40 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                <BarChart3Icon className="w-16 h-16 text-[#0071dc]" />
                            </div>
                            <Badge className="mb-3">Finance</Badge>
                            <h3 className="text-xl font-semibold mb-3">Analyse de risque crédit</h3>
                            <p className="text-muted-foreground mb-4 text-sm">
                                Évaluation automatique du risque client basée sur l&apos;historique de paiement,
                                comportement d&apos;achat et signaux faibles. Score de risque actualisé en temps réel.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Scoring automatisé</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Alertes défaut de paiement</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Recommandations actions</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6 h-full">
                            <div className="w-full h-40 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-lg mb-4 flex items-center justify-center">
                                <PieChartIcon className="w-16 h-16 text-[#0071dc]" />
                            </div>
                            <Badge className="mb-3">Retail</Badge>
                            <h3 className="text-xl font-semibold mb-3">Optimisation stocks & pricing</h3>
                            <p className="text-muted-foreground mb-4 text-sm">
                                Analyse de la demande, détection des produits à rotation lente, optimisation des prix
                                selon l&apos;élasticité et la concurrence.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Prévision demande produit</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Alertes rupture stock</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Prix dynamique optimal</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6 h-full">
                            <div className="w-full h-40 bg-gradient-to-br from-[#fcb239]/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                                <LineChartIcon className="w-16 h-16 text-[#fcb239]" />
                            </div>
                            <Badge className="mb-3">Marketing</Badge>
                            <h3 className="text-xl font-semibold mb-3">Analyse performance campagnes</h3>
                            <p className="text-muted-foreground mb-4 text-sm">
                                Attribution multi-touch, segmentation comportementale automatique, identification
                                des canaux les plus performants et ROI par segment.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>ROI par canal/campagne</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Segmentation prédictive</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Optimisation budget</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </AnimationContainer>

            {/* Architecture technique */}
            <AnimationContainer delay={0.5}>
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Stack analytique
                    </h2>
                    <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        Outils et frameworks de pointe
                    </p>

                    <Card className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <DatabaseIcon className="w-5 h-5 text-[#0071dc]" />
                                    Traitement de données
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Pandas, Polars, DuckDB</p>
                                            <p className="text-sm text-muted-foreground">Manipulation rapide de gros volumes</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Apache Spark (si nécessaire)</p>
                                            <p className="text-sm text-muted-foreground">Traitement distribué massif</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Connecteurs multi-sources</p>
                                            <p className="text-sm text-muted-foreground">SQL, NoSQL, APIs, fichiers plats</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <BrainCircuitIcon className="w-5 h-5 text-[#0071dc]" />
                                    Machine Learning
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Scikit-learn, XGBoost, LightGBM</p>
                                            <p className="text-sm text-muted-foreground">Modèles prédictifs optimisés</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Prophet, ARIMA, LSTM</p>
                                            <p className="text-sm text-muted-foreground">Forecasting séries temporelles</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2Icon className="w-5 h-5 text-[#fcb239] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">LLM pour narration (GPT-4, Claude)</p>
                                            <p className="text-sm text-muted-foreground">Génération rapports intelligents</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <FileTextIcon className="w-5 h-5 text-[#0071dc]" />
                                Visualisation & Reporting
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Plotly, Matplotlib, Altair</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Dashboards interactifs Streamlit</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2Icon className="w-4 h-4 text-[#fcb239]" />
                                    <span>Export automatisé PDF/PPT</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </AnimationContainer>

            {/* CTA */}
            <AnimationContainer delay={0.6}>
                <Card className="p-8 md:p-12 bg-gradient-to-br from-[#0071dc]/10 to-[#fcb239]/10 border-[#0071dc]/20 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Exploitez pleinement vos données
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Transformons vos données en avantage compétitif avec des agents d&apos;analyse sur mesure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                            Discuter de votre projet
                        </Link>
                        <Link href="/solutions" className={buttonVariants({ size: "lg", variant: "outline" })}>
                            Voir toutes les solutions
                        </Link>
                    </div>
                </Card>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
}
