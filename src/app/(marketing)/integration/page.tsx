import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, DatabaseIcon, GlobeIcon, SettingsIcon, WorkflowIcon } from "lucide-react";
import Link from "next/link";

const IntegrationPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="Intégration" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Intégrer des agents IA dans <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
                                vos systèmes existants
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Le développement web n&apos;est pas notre produit principal. Il sert à intégrer vos agents : interfaces, APIs, dashboards, connecteurs, workflows.
                        </p>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <Card className="p-8 mb-12 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border-violet-500/20">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl">Notre approche : agents d&apos;abord, apps ensuite</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground">
                                Nous ne sommes pas une agence web. Nous concevons des agents IA intelligents et les intégrons dans votre écosystème technique existant. Le développement d&apos;interfaces et d&apos;APIs est un moyen, pas une fin.
                            </p>
                        </CardContent>
                    </Card>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
                    <AnimationContainer delay={0.3}>
                        <MagicCard className="h-full p-8">
                            <GlobeIcon className="w-12 h-12 text-violet-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Web apps / Admin tools</CardTitle>
                                <CardDescription>
                                    Interfaces utilisateur pour interagir avec vos agents
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    Dashboards, interfaces conversationnelles, outils d&apos;administration pour gérer et monitorer vos agents IA.
                                </p>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.4}>
                        <MagicCard className="h-full p-8">
                            <SettingsIcon className="w-12 h-12 text-fuchsia-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">APIs internes</CardTitle>
                                <CardDescription>
                                    Points d&apos;entrée pour vos systèmes
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    APIs REST ou GraphQL pour que vos applications existantes puissent communiquer avec les agents.
                                </p>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.5}>
                        <MagicCard className="h-full p-8">
                            <DatabaseIcon className="w-12 h-12 text-blue-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">CRM / ERP / Outils métiers</CardTitle>
                                <CardDescription>
                                    Connecteurs vers vos systèmes d&apos;information
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    Intégration avec Salesforce, SAP, Microsoft Dynamics, ou tout autre système d&apos;entreprise.
                                </p>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.6}>
                        <MagicCard className="h-full p-8">
                            <WorkflowIcon className="w-12 h-12 text-green-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Workflows n8n / Scripts / Automatisations</CardTitle>
                                <CardDescription>
                                    Orchestration avec vos outils existants
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground">
                                    Intégration dans vos workflows d&apos;automatisation existants (n8n, Zapier, Make, scripts personnalisés).
                                </p>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>
                </div>

                <AnimationContainer delay={0.7}>
                    <Card className="p-8 mb-16">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-2xl">Notre stack d&apos;intégration</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-medium mb-4">Frontend & Interfaces</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• React / Next.js pour les interfaces web</li>
                                        <li>• Composants UI modernes et accessibles</li>
                                        <li>• Interfaces conversationnelles (chat, voix)</li>
                                        <li>• Dashboards de monitoring en temps réel</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4">Backend & APIs</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• APIs REST / GraphQL / Webhooks</li>
                                        <li>• Authentification & autorisation (OAuth, JWT)</li>
                                        <li>• Rate limiting & sécurité</li>
                                        <li>• Documentation OpenAPI / Swagger</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4">Connecteurs & Intégrations</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Connecteurs CRM/ERP standards</li>
                                        <li>• Bases de données (SQL, NoSQL, Vector DB)</li>
                                        <li>• Services cloud (AWS, Azure, GCP)</li>
                                        <li>• Intégrations sur mesure</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4">Monitoring & Observabilité</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Logs structurés et traçabilité</li>
                                        <li>• Métriques de performance</li>
                                        <li>• Alertes et notifications</li>
                                        <li>• Outils de debugging</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AnimationContainer>

                <AnimationContainer delay={0.8}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Parlons de votre infrastructure</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Décrivez-nous vos systèmes existants et nous vous proposerons une stratégie d&apos;intégration adaptée.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Parler intégration
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default IntegrationPage;
