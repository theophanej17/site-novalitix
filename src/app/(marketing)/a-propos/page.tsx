"use client";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, TargetIcon, ShieldIcon, CodeIcon, HeartHandshakeIcon, BrainCircuitIcon, LayersIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InfiniteScroller } from "@/components/ui/InfiniteScroller";
import { AI_FRAMEWORKS } from "@/utils/constants/misc";

const AboutPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="À propos" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Novalitix évolue : de l&apos;IA & data vers <span className="text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                l&apos;ingénierie agentique
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Novalitix a d&apos;abord accompagné des projets de data et d&apos;intégration IA. Aujourd&apos;hui, nous concentrons notre savoir-faire sur les agents IA et les systèmes multi-agents : conception, intégration, exploitation.
                        </p>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="flex flex-col items-center justify-center relative w-full text-center mb-12">
                        <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-5xl lg:text-6xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent">
                            Notre mission
                        </h2>
                        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
                            Rendre l&apos;IA agentique accessible aux entreprises en proposant une approche d&apos;ingénierie rigoureuse, transparente et adaptée aux contraintes réelles du monde professionnel. Pas de promesses marketing, juste des livrables concrets et documentés.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
                    <AnimationContainer delay={0.3}>
                        <Card className="h-full p-8">
                            <TargetIcon className="w-12 h-12 text-[#0071dc] mb-4" />
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
                            <ShieldIcon className="w-12 h-12 text-[#fcb239] mb-4" />
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
                            <CodeIcon className="w-12 h-12 text-[#0071dc] mb-4" />
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
                            <HeartHandshakeIcon className="w-12 h-12 text-[#fcb239] mb-4" />
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

                <AnimationContainer delay={0.65}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Nos valeurs" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Du cadrage au Déploiement
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Nous concevons des agents IA adaptés à vos processus métiers et vos contraintes techniques.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full py-8 gap-4 md:gap-8 pb-16">
                    <AnimationContainer delay={0.66}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <BrainCircuitIcon strokeWidth={1.5} className="w-10 h-10 text-[#0071dc] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents conversationnels
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Répondre, guider, qualifier, assister vos utilisateurs et équipes.
                                </p>
                                <Link href="/solutions/agents-conversationnels" className="mt-auto pt-4 text-sm text-[#0071dc] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.67}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <LayersIcon strokeWidth={1.5} className="w-10 h-10 text-[#fcb239] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents d&apos;analyse
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Connecter, analyser, alerter, synthétiser vos données.
                                </p>
                                <Link href="/solutions/agents-analyse" className="mt-auto pt-4 text-sm text-[#fcb239] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.68}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <CodeIcon strokeWidth={1.5} className="w-10 h-10 text-[#0071dc] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Systèmes multi-agents
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Décomposer un problème complexe, coordonner, contrôler.
                                </p>
                                <Link href="/solutions/systemes-multi-agents" className="mt-auto pt-4 text-sm text-[#0071dc] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.69}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <ShieldIcon strokeWidth={1.5} className="w-10 h-10 text-[#fcb239] mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents sur mesure
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Pour vos processus spécifiques et vos outils internes.
                                </p>
                                <Link href="/solutions/agents-sur-mesure" className="mt-auto pt-4 text-sm text-[#fcb239] hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                </div>

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

                <AnimationContainer delay={0.8}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Envie d&apos;en savoir plus ?</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Discutons de votre projet et de la manière dont nous pouvons vous accompagner.
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

export default AboutPage;
