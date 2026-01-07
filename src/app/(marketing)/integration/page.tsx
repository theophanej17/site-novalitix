import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { ArrowRightIcon, DatabaseIcon, GlobeIcon, SettingsIcon, WorkflowIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const IntegrationPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="Intégration" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Intégrer des agents IA dans <span className="text-transparent bg-gradient-to-r from-[#0071dc] to-[#fcb239] bg-clip-text">
                                vos systèmes existants
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Le développement web n&apos;est pas notre produit principal. Il sert à intégrer vos agents : interfaces, APIs, dashboards, connecteurs, workflows.
                        </p>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <Card className="p-8 mb-12 bg-gradient-to-br from-[#0071dc]/10 to-[#fcb239]/10 border-[#0071dc]/20">
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

                {/* Integration Types Section */}
                <AnimationContainer delay={0.3}>
                    <div className="pb-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left side - Phone mockup */}
                            <div className="flex items-center justify-center">
                                <div className="relative w-full max-w-[300px] aspect-[9/16]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0071dc]/20 to-[#fcb239]/20 rounded-3xl blur-3xl"></div>
                                    <div className="relative bg-neutral-900 rounded-[3rem] border-[6px] border-neutral-800 overflow-hidden shadow-2xl">
                                        <div className="aspect-[9/16] bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 flex flex-col">
                                            {/* Status bar */}
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="text-xs font-medium text-muted-foreground">9:42</div>
                                                <div className="flex gap-1">
                                                    <div className="w-4 h-4 rounded-full bg-[#0071dc]/30"></div>
                                                    <div className="w-4 h-4 rounded-full bg-[#fcb239]/30"></div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 flex flex-col justify-center gap-4">
                                                <div className="bg-card/50 backdrop-blur rounded-2xl p-4 border border-border/50">
                                                    <GlobeIcon className="w-8 h-8 text-[#0071dc] mb-2" />
                                                    <div className="text-xs font-medium mb-1">Dashboard</div>
                                                    <div className="text-[10px] text-muted-foreground">Admin panel</div>
                                                </div>
                                                <div className="bg-card/50 backdrop-blur rounded-2xl p-4 border border-border/50">
                                                    <div className="h-2 w-full bg-[#0071dc]/20 rounded-full mb-2">
                                                        <div className="h-2 w-2/3 bg-gradient-to-r from-[#0071dc] to-[#fcb239] rounded-full"></div>
                                                    </div>
                                                    <div className="text-[10px] text-muted-foreground">Performance</div>
                                                </div>
                                                <div className="bg-card/50 backdrop-blur rounded-2xl p-4 border border-border/50">
                                                    <SettingsIcon className="w-8 h-8 text-[#fcb239] mb-2" />
                                                    <div className="text-xs font-medium mb-1">API Status</div>
                                                    <div className="text-[10px] text-muted-foreground">Connected</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Integration types list */}
                            <div className="space-y-6">
                                {/* Web apps / Admin tools */}
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0071dc]/20 to-[#0071dc]/5 flex items-center justify-center border border-[#0071dc]/30 group-hover:border-[#0071dc]/60 transition-all flex-shrink-0">
                                        <GlobeIcon className="w-6 h-6 text-[#0071dc]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Web apps / Admin tools</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Dashboards, interfaces conversationnelles, outils d&apos;administration pour gérer et monitorer vos agents IA en temps réel.
                                        </p>
                                    </div>
                                </div>

                                {/* APIs internes */}
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fcb239]/20 to-[#fcb239]/5 flex items-center justify-center border border-[#fcb239]/30 group-hover:border-[#fcb239]/60 transition-all flex-shrink-0">
                                        <SettingsIcon className="w-6 h-6 text-[#fcb239]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">APIs internes</h3>
                                        <p className="text-sm text-muted-foreground">
                                            APIs REST ou GraphQL sécurisées pour que vos applications existantes puissent communiquer avec les agents intelligents.
                                        </p>
                                    </div>
                                </div>

                                {/* CRM / ERP */}
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0071dc]/20 to-[#0071dc]/5 flex items-center justify-center border border-[#0071dc]/30 group-hover:border-[#0071dc]/60 transition-all flex-shrink-0">
                                        <DatabaseIcon className="w-6 h-6 text-[#0071dc]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">CRM / ERP / Outils métiers</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Intégration bidirectionnelle avec Salesforce, SAP, Microsoft Dynamics, ou tout autre système d&apos;entreprise existant.
                                        </p>
                                    </div>
                                </div>

                                {/* Workflows */}
                                <div className="flex gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fcb239]/20 to-[#fcb239]/5 flex items-center justify-center border border-[#fcb239]/30 group-hover:border-[#fcb239]/60 transition-all flex-shrink-0">
                                        <WorkflowIcon className="w-6 h-6 text-[#fcb239]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">Workflows n8n / Scripts / Automatisations</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Intégration transparente dans vos workflows d&apos;automatisation existants : n8n, Zapier, Make, scripts personnalisés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.7}>
                    <div className="py-14 mb-8">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase mb-8 tracking-wider">
                                Technologies & Frameworks que nous maîtrisons
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-10 max-w-7xl mx-auto">
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://www.perplexity.ai/favicon.svg"
                                            alt="Perplexity"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Perplexity</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://avatars.githubusercontent.com/u/126733545?s=200&v=4"
                                            alt="LangChain"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain rounded"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">LangChain</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://openai.com/favicon.ico"
                                            alt="OpenAI"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">OpenAI</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://www.anthropic.com/images/icons/safari-pinned-tab.svg"
                                            alt="Anthropic"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Anthropic</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://ollama.com/public/ollama.png"
                                            alt="Ollama"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Ollama</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-16 h-16 rounded-lg bg-white/90 flex items-center justify-center p-2">
                                        <Image
                                            src="https://n8n.io/favicon.ico"
                                            alt="n8n"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">n8n</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                                            alt="Hugging Face"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Hugging Face</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg"
                                            alt="Google AI"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Google AI</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://github.githubassets.com/favicons/favicon.svg"
                                            alt="GitHub"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">GitHub</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://sdk.vercel.ai/icon.png"
                                            alt="Vercel AI"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Vercel AI</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://cohere.com/favicon-32x32.png"
                                            alt="Cohere"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Cohere</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://azure.microsoft.com/favicon.ico"
                                            alt="Azure"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Azure</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico"
                                            alt="AWS Bedrock"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">AWS Bedrock</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg"
                                            alt="Groq"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Groq</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://langfuse.com/images/favicon.svg"
                                            alt="Langfuse"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Langfuse</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-all duration-300">
                                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center p-4 border border-border/20 hover:border-border/40 transition-all">
                                        <Image
                                            src="https://replicate.com/favicon.ico"
                                            alt="Replicate"
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-center text-muted-foreground">Replicate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.8}>
                    <div className="flex flex-col items-center justify-center text-center py-12">
                        <h2 className="text-3xl font-medium mb-4">Parlons de votre infrastructure</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl">
                            Décrivez-nous vos systèmes existants et nous vous proposerons une stratégie d&apos;intégration adaptée.
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

export default IntegrationPage;
