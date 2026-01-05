import { Metadata } from "next";

export const generateMetadata = ({
    title = `Novalitix - Agents IA et systèmes multi-agents pour entreprises`,
    description = `Novalitix conçoit des agents IA et systèmes multi-agents sur mesure pour automatiser vos processus métier. Architecture documentée, support 24/7, conformité RGPD.`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@novalitix",
    },
    // metadataBase: new URL(process.env.APP_DOMAIN!),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
