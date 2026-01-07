'use client';

import { useState } from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { Zap, Shield, Code, TrendingUp, Play } from "lucide-react";

interface ShowcaseTab {
    id: string;
    label: string;
    category: string;
    icon: React.ReactNode;
    description: string;
    image: string;
    color: string;
}

const showcaseTabs: ShowcaseTab[] = [
    {
        id: "itops",
        label: "IT Ops",
        category: "IT Ops can",
        icon: <Zap className="w-4 h-4" />,
        description: "On-board new employees",
        image: "/assets/dashboard-dark.svg",
        color: "from-purple-500/20 to-purple-600/20"
    },
    {
        id: "secops",
        label: "Sec Ops",
        category: "Sec Ops can",
        icon: <Shield className="w-4 h-4" />,
        description: "Enrich security incident tickets",
        image: "/assets/dashboard-dark.svg",
        color: "from-blue-500/20 to-blue-600/20"
    },
    {
        id: "devops",
        label: "Dev Ops",
        category: "Dev Ops can",
        icon: <Code className="w-4 h-4" />,
        description: "Convert natural language into API calls",
        image: "/assets/dashboard-dark.svg",
        color: "from-green-500/20 to-green-600/20"
    },
    {
        id: "sales",
        label: "Sales",
        category: "Sales can",
        icon: <TrendingUp className="w-4 h-4" />,
        description: "Generate customer insights from reviews",
        image: "/assets/dashboard-dark.svg",
        color: "from-orange-500/20 to-orange-600/20"
    },
    {
        id: "you",
        label: "You",
        category: "You can",
        icon: <Play className="w-4 h-4" />,
        description: "Watch this video to hear our pitch",
        image: "/assets/dashboard-dark.svg",
        color: "from-pink-500/20 to-pink-600/20"
    }
];

export function InteractiveShowcase() {
    const [activeTab, setActiveTab] = useState<string>("itops");

    const currentTab = showcaseTabs.find(tab => tab.id === activeTab) || showcaseTabs[0];

    return (
        <div className="w-full space-y-8">
            {/* Tabs Header */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto px-4">
                {showcaseTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            relative group rounded-xl p-4 md:p-6
                            border-2 transition-all duration-300
                            ${activeTab === tab.id
                                ? 'border-[#0071dc] bg-gradient-to-br ' + tab.color + ' shadow-lg shadow-[#0071dc]/20'
                                : 'border-border/30 bg-background/50 hover:border-yellow-500 hover:bg-yellow-500/10'
                            }
                        `}
                    >
                        <div className="flex flex-col items-start gap-2 text-left">
                            <div className={`
                                p-2 rounded-lg transition-colors
                                ${activeTab === tab.id
                                    ? 'bg-[#0071dc]/10 text-[#0071dc]'
                                    : 'bg-muted text-muted-foreground'
                                }
                            `}>
                                {tab.icon}
                            </div>
                            <div>
                                <p className={`
                                    text-xs font-medium mb-1
                                    ${activeTab === tab.id
                                        ? 'text-[#0071dc]'
                                        : 'text-muted-foreground'
                                    }
                                `}>
                                    {tab.category}
                                </p>
                                <p className={`
                                    text-sm font-medium leading-tight
                                    ${activeTab === tab.id
                                        ? 'text-foreground'
                                        : 'text-muted-foreground'
                                    }
                                `}>
                                    {tab.description}
                                </p>
                            </div>
                        </div>

                        {/* Active indicator */}
                        {activeTab === tab.id && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#0071dc] rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Image Display */}
            <div className="relative px-2">
                <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                    <BorderBeam
                        size={250}
                        duration={12}
                        delay={9}
                    />
                    <div className="relative overflow-hidden rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border">
                        <Image
                            key={activeTab}
                            src={currentTab.image}
                            alt={currentTab.category}
                            width={1200}
                            height={1200}
                            quality={100}
                            className="rounded-md lg:rounded-xl w-full h-auto transition-opacity duration-300"
                        />
                    </div>
                    <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                    <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                </div>
            </div>
        </div>
    );
}
