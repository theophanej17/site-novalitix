import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MagicBadge from "@/components/ui/magic-badge";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center py-12">
                        <MagicBadge title="Contact" />
                        <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-5xl md:text-6xl !leading-[1.15] w-full font-heading">
                            Parlez-nous de votre <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
                                besoin
                            </span>
                        </h1>
                        <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-3xl">
                            Nous répondons mieux avec du contexte. Décrivez votre activité, votre processus à automatiser, vos outils et vos contraintes.
                        </p>
                    </div>
                </AnimationContainer>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
                    <AnimationContainer delay={0.2} className="lg:col-span-2">
                        <Card className="p-6">
                            <CardHeader className="p-0 mb-6">
                                <CardTitle className="text-2xl">Formulaire de contact</CardTitle>
                                <CardDescription>
                                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nom complet *</Label>
                                            <Input id="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email *</Label>
                                            <Input id="email" type="email" placeholder="john@exemple.com" required />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="company">Entreprise *</Label>
                                            <Input id="company" placeholder="Votre entreprise" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Téléphone</Label>
                                            <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="activity">Votre activité *</Label>
                                        <Input id="activity" placeholder="Décrivez brièvement votre activité" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="process">Processus à automatiser *</Label>
                                        <Textarea
                                            id="process"
                                            placeholder="Quel processus souhaitez-vous automatiser ?"
                                            rows={3}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="tools">Vos outils (CRM/ERP/app)</Label>
                                        <Input id="tools" placeholder="Salesforce, SAP, application custom..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="constraints">Vos contraintes (données, RGPD, délais)</Label>
                                        <Textarea
                                            id="constraints"
                                            placeholder="Décrivez vos contraintes techniques, légales ou temporelles..."
                                            rows={3}
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full md:w-auto">
                                        Envoyer la demande
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </AnimationContainer>

                    <AnimationContainer delay={0.3} className="space-y-6">
                        <Card className="p-6">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Informations de contact</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 space-y-4">
                                <div className="flex items-start gap-3">
                                    <MailIcon className="w-5 h-5 text-violet-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:contact@novalitix.com" className="text-muted-foreground hover:text-foreground">
                                            contact@novalitix.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <PhoneIcon className="w-5 h-5 text-fuchsia-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Téléphone</p>
                                        <p className="text-muted-foreground">+33 (0)1 XX XX XX XX</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPinIcon className="w-5 h-5 text-blue-500 mt-0.5" />
                                    <div>
                                        <p className="font-medium">Localisation</p>
                                        <p className="text-muted-foreground">France</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border-violet-500/20">
                            <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl">Besoin d&apos;aide ?</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Consultez notre documentation et nos ressources pour en savoir plus sur nos solutions agentiques.
                                </p>
                                <Button variant="outline" asChild className="w-full">
                                    <a href="/resources/blog">
                                        Voir les ressources
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default ContactPage;
