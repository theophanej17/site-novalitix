import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import { ArrowRightIcon, TargetIcon, ShieldIcon, CodeIcon, HeartHandshakeIcon } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="À propos" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Novalitix évolue : de l&apos;IA & data vers <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
                                l&apos;ingénierie agentique
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Novalitix a d&apos;abord accompagné des projets de data et d&apos;intégration IA. Aujourd&apos;hui, nous concentrons notre savoir-faire sur les agents IA et les systèmes multi-agents : conception, intégration, exploitation.
                        </p>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <Card className="p-8 mb-12">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-2xl">Notre mission</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground text-lg">
                                Rendre l&apos;IA agentique accessible aux entreprises en proposant une approche d&apos;ingénierie rigoureuse, transparente et adaptée aux contraintes réelles du monde professionnel.
                            </p>
                        </CardContent>
                    </Card>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
                    <AnimationContainer delay={0.3}>
                        <Card className="h-full p-8">
                            <TargetIcon className="w-12 h-12 text-violet-500 mb-4" />
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
                            <ShieldIcon className="w-12 h-12 text-fuchsia-500 mb-4" />
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
                            <CodeIcon className="w-12 h-12 text-blue-500 mb-4" />
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
                            <HeartHandshakeIcon className="w-12 h-12 text-green-500 mb-4" />
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

                <AnimationContainer delay={0.7}>
                    <Card className="p-8 mb-16 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border-violet-500/20">
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-2xl">Notre expertise</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-medium mb-4">Technologies & frameworks</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• LangChain, LangGraph, LlamaIndex</li>
                                        <li>• OpenAI, Anthropic, modèles open-source</li>
                                        <li>• Orchestration multi-agents (AutoGen, CrewAI)</li>
                                        <li>• RAG, embeddings, vector databases</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium mb-4">Domaines d&apos;application</h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Support client & assistants métiers</li>
                                        <li>• Analyse de données & reporting automatisé</li>
                                        <li>• Automatisation de workflows complexes</li>
                                        <li>• Orchestration de systèmes multi-agents</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
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
                                    Nous contacter
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/methodologie">
                                    Notre méthodologie
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
