import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { BrainCircuitIcon, CodeIcon, LayersIcon, ShieldCheckIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const SolutionsPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="Solutions" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Solutions agentiques <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
                                adaptées à vos cas d&apos;usage
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Nous n&apos;installons pas une &quot;IA générique&quot;. Nous concevons des agents adaptés à vos règles, vos données et vos outils.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
                    <AnimationContainer delay={0.2}>
                        <MagicCard className="h-full p-8">
                            <BrainCircuitIcon className="w-12 h-12 text-violet-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-2xl">Agents conversationnels</CardTitle>
                                <CardDescription className="text-base">
                                    Répondre, guider, qualifier, assister
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-muted-foreground mb-6">
                                    Support interne/externe, assistants métiers qui comprennent votre contexte et peuvent interagir avec vos systèmes.
                                </p>
                                <Button asChild variant="outline">
                                    <Link href="/solutions/agents-conversationnels">
                                        En savoir plus
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.3}>
                        <MagicCard className="h-full p-8">
                            <LayersIcon className="w-12 h-12 text-fuchsia-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-2xl">Agents d&apos;analyse</CardTitle>
                                <CardDescription className="text-base">
                                    Connecter, analyser, alerter, synthétiser
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-muted-foreground mb-6">
                                    Agents qui se connectent à vos sources de données, détectent des patterns et génèrent des insights actionnables.
                                </p>
                                <Button asChild variant="outline">
                                    <Link href="/solutions/agents-analyse">
                                        En savoir plus
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.4}>
                        <MagicCard className="h-full p-8">
                            <CodeIcon className="w-12 h-12 text-blue-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-2xl">Systèmes multi-agents</CardTitle>
                                <CardDescription className="text-base">
                                    Décomposer, coordonner, contrôler
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-muted-foreground mb-6">
                                    Pour les processus complexes nécessitant plusieurs rôles spécialisés avec coordination et garde-fous.
                                </p>
                                <Button asChild variant="outline">
                                    <Link href="/solutions/systemes-multi-agents">
                                        En savoir plus
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>

                    <AnimationContainer delay={0.5}>
                        <MagicCard className="h-full p-8">
                            <ShieldCheckIcon className="w-12 h-12 text-green-500 mb-4" />
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-2xl">Agents sur mesure</CardTitle>
                                <CardDescription className="text-base">
                                    Pour vos processus spécifiques
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-muted-foreground mb-6">
                                    Conception d&apos;agents entièrement personnalisés pour vos workflows et outils internes uniques.
                                </p>
                                <Button asChild variant="outline">
                                    <Link href="/solutions/agents-sur-mesure">
                                        En savoir plus
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </MagicCard>
                    </AnimationContainer>
                </div>

                <AnimationContainer delay={0.6}>
                    <Card className="p-8 mb-16">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-2xl">À qui s&apos;adressent nos solutions ?</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="font-medium mb-2">Équipes opérationnelles</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Support, ops, sales qui veulent automatiser les tâches répétitives et améliorer la productivité.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">DSI / CTO / Innovation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Leaders techniques cherchant à intégrer l&apos;IA de manière contrôlée et mesurable.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-2">Startups deep tech</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Produits data-driven nécessitant des agents IA embarqués dans leur solution.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </AnimationContainer>

                <AnimationContainer delay={0.7}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Prêt à démarrer ?</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Décrivez-nous votre cas d&apos;usage et nous vous proposerons une approche adaptée à vos contraintes.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Décrire votre cas d&apos;usage
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default SolutionsPage;
