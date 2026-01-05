import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, CheckCircle2Icon, BrainCircuitIcon, ShieldCheckIcon, CodeIcon, LayersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                Ingénierie agentique
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </span>
                        </button>
                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            Des agents IA et systèmes multi-agents <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                                conçus pour des environnements réels
                            </span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                            Novalitix conçoit, intègre et opère des agents IA (mono-agent et multi-agents) pour automatiser des tâches,
                            <br className="hidden md:block" />
                            <span className="hidden md:block">assister les équipes et orchestrer des processus — avec une approche d&apos;ingénierie, pas des promesses marketing.</span>
                        </p>
                        <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                            <Button asChild>
                                <Link href="/contact" className="flex items-center">
                                    Nous contacter
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="/contact" className="flex items-center">
                                    Décrire votre besoin
                                </Link>
                            </Button>
                        </div>
                    </AnimationContainer>

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam
                                size={250}
                                duration={12}
                                delay={9}
                            />
                            <Image
                                src="/assets/dashboard-dark.svg"
                                alt="Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >

            {/* Stats Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.3}>
                    <div className="py-12 border-y border-border/40">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                                    100%
                                </div>
                                <p className="text-sm text-muted-foreground">Architecture documentée</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                                    3-6
                                </div>
                                <p className="text-sm text-muted-foreground">Semaines cadrage → prod</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                                    24/7
                                </div>
                                <p className="text-sm text-muted-foreground">Monitoring & logs</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                                    RGPD
                                </div>
                                <p className="text-sm text-muted-foreground">Conformité garantie</p>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Tech Stack Logos */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.35}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase mb-8">
                                Technologies & Frameworks que nous maîtrisons
                            </h2>
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                                        <CodeIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">LangChain</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                        <BrainCircuitIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">OpenAI</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                        <LayersIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">Anthropic</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                        <ShieldCheckIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">AutoGen</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                        <CheckCircle2Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-medium">LlamaIndex</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* What We Deliver Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-3xl md:text-4xl font-medium font-heading text-foreground mb-12">
                                Ce que nous livrons
                            </h2>
                            <div className="mt-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <Card className="p-6">
                                        <CardHeader className="p-0 mb-4">
                                            <CardTitle className="text-lg">Agents IA prêts à intégrer</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li>• Agents conversationnels</li>
                                                <li>• Agents d&apos;analyse</li>
                                                <li>• Agents opérationnels</li>
                                                <li>• Systèmes multi-agents</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card className="p-6">
                                        <CardHeader className="p-0 mb-4">
                                            <CardTitle className="text-lg">Support & assistance</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-sm text-muted-foreground">
                                                Support interne/externe, assistants métiers adaptés à vos processus spécifiques.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="p-6">
                                        <CardHeader className="p-0 mb-4">
                                            <CardTitle className="text-lg">Analyse & reporting</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-sm text-muted-foreground">
                                                Synthèse, détection, reporting automatisé et alertes intelligentes.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="p-6">
                                        <CardHeader className="p-0 mb-4">
                                            <CardTitle className="text-lg">Automatisation</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-sm text-muted-foreground">
                                                Workflows, exécution d&apos;actions, back-office et orchestration multi-agents.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Why Multi-Agents Section */}
            <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                        <MagicBadge title="Approche" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Pourquoi &quot;agents & multi-agents&quot;
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-3xl">
                            Parce que le B2B est digital-first. Les décisions se préparent avant le premier échange : votre solution doit être lisible et crédible en ligne.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <div className="py-8 max-w-4xl mx-auto">
                        <Card className="p-8">
                            <CardContent className="p-0">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-medium">Un socle technologique agnostique</h3>
                                        <p className="text-muted-foreground">
                                            Nous sélectionnons les modèles et frameworks en fonction de votre contexte : confidentialité, coût, latence, intégration SI, exigences RGPD.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-medium">Adapté à vos contraintes</h3>
                                        <p className="text-muted-foreground">
                                            Notre approche d&apos;ingénierie garantit que chaque solution est taillée pour vos besoins réels, sans compromis sur la qualité.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Solutions Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Solutions" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Des solutions agentiques, du cadrage au déploiement
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Nous concevons des agents IA adaptés à vos processus métiers et vos contraintes techniques.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full py-8 gap-4 md:gap-8">
                    <AnimationContainer delay={0.2}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <BrainCircuitIcon strokeWidth={1.5} className="w-10 h-10 text-violet-500 mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents conversationnels
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Répondre, guider, qualifier, assister vos utilisateurs et équipes.
                                </p>
                                <Link href="/solutions/agents-conversationnels" className="mt-auto pt-4 text-sm text-violet-500 hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.3}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <LayersIcon strokeWidth={1.5} className="w-10 h-10 text-fuchsia-500 mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents d&apos;analyse
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Connecter, analyser, alerter, synthétiser vos données.
                                </p>
                                <Link href="/solutions/agents-analyse" className="mt-auto pt-4 text-sm text-fuchsia-500 hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.4}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <CodeIcon strokeWidth={1.5} className="w-10 h-10 text-blue-500 mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Systèmes multi-agents
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Décomposer un problème complexe, coordonner, contrôler.
                                </p>
                                <Link href="/solutions/systemes-multi-agents" className="mt-auto pt-4 text-sm text-blue-500 hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                    <AnimationContainer delay={0.5}>
                        <MagicCard className="group md:py-8 h-full">
                            <div className="flex flex-col items-start justify-start w-full h-full">
                                <ShieldCheckIcon strokeWidth={1.5} className="w-10 h-10 text-green-500 mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-2">
                                    Agents sur mesure
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Pour vos processus spécifiques et vos outils internes.
                                </p>
                                <Link href="/solutions/agents-sur-mesure" className="mt-auto pt-4 text-sm text-green-500 hover:underline">
                                    Découvrir →
                                </Link>
                            </div>
                        </MagicCard>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper>

            {/* Comparison Table Section */}
            <MaxWidthWrapper className="py-16">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center mb-12">
                        <MagicBadge title="Comparaison" />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Pourquoi choisir Novalitix
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl">
                            Notre approche d&apos;ingénierie vs les solutions généralistes ou les promesses marketing
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <Card className="overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-muted/50">
                                    <tr className="border-b">
                                        <th className="px-6 py-4 text-left font-medium">Critères</th>
                                        <th className="px-6 py-4 text-center font-medium text-violet-500">Novalitix</th>
                                        <th className="px-6 py-4 text-center font-medium text-muted-foreground">Agences web</th>
                                        <th className="px-6 py-4 text-center font-medium text-muted-foreground">Solutions SaaS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b hover:bg-muted/20 transition-colors">
                                        <td className="px-6 py-4 text-sm">Agents IA personnalisés</td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-muted-foreground">—</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-yellow-500">△</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/20 transition-colors">
                                        <td className="px-6 py-4 text-sm">Systèmes multi-agents</td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-muted-foreground">—</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-muted-foreground">—</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/20 transition-colors">
                                        <td className="px-6 py-4 text-sm">Architecture documentée</td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-yellow-500">△</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-muted-foreground">—</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/20 transition-colors">
                                        <td className="px-6 py-4 text-sm">Intégration SI/ERP/CRM</td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-yellow-500">△</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/20 transition-colors">
                                        <td className="px-6 py-4 text-sm">Contrôle total des données</td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-muted-foreground">—</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="px-6 py-4 text-sm">Promesses vérifiables</td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <CheckCircle2Icon className="w-5 h-5 text-green-500 mx-auto" />
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-muted-foreground">—</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Use Cases Visual Section */}
            <MaxWidthWrapper className="py-16">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center mb-12">
                        <MagicBadge title="Cas d'usage" />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Comment nos clients utilisent nos agents
                        </h2>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimationContainer delay={0.2}>
                        <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="w-full h-48 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-lg mb-4 flex items-center justify-center">
                                <BrainCircuitIcon className="w-20 h-20 text-violet-500" />
                            </div>
                            <CardHeader className="p-0 mb-3">
                                <CardTitle className="text-xl">Support client intelligent</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Agent conversationnel qui répond aux questions complexes, accède aux bases de données internes et escalade si nécessaire.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-500">RAG</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-500">API</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-500">24/7</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                    <AnimationContainer delay={0.3}>
                        <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
                                <LayersIcon className="w-20 h-20 text-blue-500" />
                            </div>
                            <CardHeader className="p-0 mb-3">
                                <CardTitle className="text-xl">Analyse automatisée</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Agent d&apos;analyse qui parcourt des milliers de documents, extrait des insights et génère des rapports synthétiques.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">NLP</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">Alertes</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">BI</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                    <AnimationContainer delay={0.4}>
                        <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
                                <CodeIcon className="w-20 h-20 text-green-500" />
                            </div>
                            <CardHeader className="p-0 mb-3">
                                <CardTitle className="text-xl">Orchestration multi-agents</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Système de 3+ agents qui collaborent : recherche, analyse, validation et exécution automatisées.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">AutoGen</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">Workflow</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">Complexe</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper>

            {/* Proof Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Ce que vous obtenez" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Novalitix vous accompagne avec rigueur
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Nous livrons des solutions complètes et documentées, prêtes à être exploitées en production.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Une architecture claire et documentée</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Schémas, spécifications techniques et documentation complète pour une compréhension totale du système.
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Une intégration testée</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Tests dans votre environnement réel avec vos contraintes spécifiques et vos outils existants.
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Des garde-fous robustes</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Traçabilité complète, limites définies et validation des actions pour garantir la fiabilité.
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <CheckCircle2Icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Un plan d&apos;exploitation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Monitoring, logs structurés et processus d&apos;amélioration continue pour une maintenance optimale.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.3}>
                    <div className="flex justify-center mt-12">
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Parler à un expert
                                <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>


            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Transformez vos processus avec des agents IA fiables
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                                Passez d&apos;une idée à une solution en production avec une approche d&apos;ingénierie rigoureuse. Pas de promesses marketing, juste des livrables concrets et documentés.
                            </p>
                            <div className="mt-6 flex gap-4">
                                <Button asChild>
                                    <Link href="/contact">
                                        Nous contacter
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="/methodologie">
                                        Notre méthodologie
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default HomePage
