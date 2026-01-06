import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import Link from "next/link";

const MethodologiePage = () => {
    const steps = [
        {
            number: "01",
            title: "Cadrage",
            description: "Définition précise de l'objectif, analyse des contraintes (données, RGPD, SI) et identification des risques potentiels.",
            deliverables: ["Cahier des charges", "Analyse de faisabilité", "Matrice de risques"]
        },
        {
            number: "02",
            title: "Design agentique",
            description: "Conception de l'architecture des agents : rôles, outils disponibles, politiques d'action et limites opérationnelles.",
            deliverables: ["Schéma d'architecture", "Spécification des agents", "Stratégie d'orchestration"]
        },
        {
            number: "03",
            title: "Prototype contrôlé",
            description: "Développement et tests sur données représentatives dans un environnement sécurisé avec validation manuelle.",
            deliverables: ["Prototype fonctionnel", "Rapport de tests", "Métriques de performance"]
        },
        {
            number: "04",
            title: "Intégration",
            description: "Connexion aux APIs et systèmes existants, développement des interfaces nécessaires et tests d'intégration.",
            deliverables: ["APIs documentées", "Connecteurs SI", "Documentation technique"]
        },
        {
            number: "05",
            title: "Tests & validation",
            description: "Tests approfondis du comportement, de la sécurité et de la qualité avec des scénarios réels et edge cases.",
            deliverables: ["Plan de tests", "Rapports de validation", "Certification sécurité"]
        },
        {
            number: "06",
            title: "Déploiement & exploitation",
            description: "Mise en production avec monitoring, logging structuré et processus d'amélioration continue.",
            deliverables: ["Plan de déploiement", "Dashboard de monitoring", "Documentation d'exploitation"]
        }
    ];

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="Méthodologie" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Une méthode d&apos;ingénierie pour livrer <span className="text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                des agents fiables
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Notre approche structurée garantit que chaque agent IA est conçu, testé et déployé avec rigueur.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
                    {steps.map((step, index) => (
                        <AnimationContainer key={index} delay={0.2 + index * 0.1}>
                            <Card className="p-8 h-full border-border/50 bg-gradient-to-br from-background to-muted/20 hover:border-[#0071dc]/50 transition-all">
                                <div className="flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0071dc] to-[#fcb239] flex items-center justify-center mb-6">
                                        <span className="text-2xl font-bold text-white">{step.number}</span>
                                    </div>
                                    <CardHeader className="p-0 mb-4">
                                        <CardTitle className="text-xl">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 flex-1">
                                        <p className="text-sm text-muted-foreground mb-6">
                                            {step.description}
                                        </p>
                                        <div>
                                            <h4 className="font-semibold mb-3 text-xs uppercase tracking-wide text-foreground">Livrables</h4>
                                            <ul className="space-y-2">
                                                {step.deliverables.map((deliverable, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                        <CheckCircle2Icon className="w-4 h-4 text-[#0071dc] flex-shrink-0 mt-0.5" />
                                                        <span>{deliverable}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </AnimationContainer>
                    ))}
                </div>


                <AnimationContainer delay={0.8}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Prêt à démarrer avec une approche rigoureuse ?</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Discutons de votre projet et de la manière dont notre méthodologie peut s&apos;adapter à vos besoins.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild size="lg">
                                <Link href="https://calix.novalitix.com/novalitix/15min" target="_blank" rel="noopener noreferrer">
                                    Parler à un expert
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">
                                    Décrivez-nous votre besoin
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default MethodologiePage;
