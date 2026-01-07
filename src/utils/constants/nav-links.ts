import { BrainCircuitIcon, CodeIcon, LayersIcon, ShieldCheckIcon, SettingsIcon, BookOpenIcon, NewspaperIcon, HelpCircleIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Solutions",
        href: "/solutions",
        menu: [
            {
                title: "Agents conversationnels",
                tagline: "Répondre, guider, qualifier, assister",
                href: "/solutions/agents-conversationnels",
                icon: BrainCircuitIcon,
            },
            {
                title: "Agents d'analyse",
                tagline: "Connecter, analyser, alerter, synthétiser",
                href: "/solutions/agents-analyse",
                icon: LayersIcon,
            },
            {
                title: "Systèmes multi-agents",
                tagline: "Décomposer, coordonner, contrôler",
                href: "/solutions/systemes-multi-agents",
                icon: CodeIcon,
            },
            {
                title: "Agents sur mesure",
                tagline: "Pour vos processus spécifiques",
                href: "/solutions/agents-sur-mesure",
                icon: ShieldCheckIcon,
            },
        ],
    },
    {
        title: "Expertise",
        href: "/expertise",
    },
    {
        title: "Intégration",
        href: "/integration",
    },
    {
        title: "Méthodologie",
        href: "/methodologie",
    },
    {
        title: "Ressources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Articles sur l'ingénierie agentique",
                href: "https://blog.novalitix.com/",
                icon: NewspaperIcon,
            },
            {
                title: "Events",
                tagline: "Événements et webinaires",
                href: "https://events.novalitix.com/",
                icon: BookOpenIcon,
            },
        ]
    },
    {
        title: "À propos",
        href: "/a-propos",
    },
];
