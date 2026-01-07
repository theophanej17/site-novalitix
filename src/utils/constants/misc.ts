import {
  Activity,
  BadgeDollarSign,
  BarChart3Icon,
  MessageCircleDashed,
} from "lucide-react";

export const DEFAULT_AVATAR_URL =
  "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
  {
    name: "Edulearnia",
    logo: "/assets/edulearnia.png",
  },
  {
    name: "Go To Jaan",
    logo: "/assets/go-to-japan.png",
  },
] as const;

export const PROCESS = [
  {
    title: "Support Débordé",
    description:
      "Votre support client répond aux mêmes 50 questions tous les jours. Temps de réponse de 4h. Satisfaction en chute libre.",
    icon: MessageCircleDashed,
  },
  {
    title: "Data Entry Interminable",
    description:
      "Vos commerciaux passent 60% de leur temps sur de la saisie au lieu de closer des deals. Un gâchis de talents.",
    icon: BarChart3Icon,
  },
  {
    title: "Rapports Manuels",
    description:
      "Vos analystes compilent manuellement des rapports Excel pendant des heures. Des insights qui arrivent trop tard.",
    icon: Activity,
  },
  {
    title: "Coûts qui Explosent",
    description:
      "Vous recrutez pour faire face à la croissance, mais les coûts explosent et la qualité stagne. Le scaling est impossible.",
    icon: BadgeDollarSign,
  },
] as const;

export const FEATURES = [
  {
    title: "Link shortening",
    description: "Create short links that are easy to remember and share.",
  },
  {
    title: "Advanced analytics",
    description: "Track and measure the performance of your links.",
  },
  {
    title: "Password protection",
    description: "Secure your links with a password.",
  },
  {
    title: "Custom QR codes",
    description: "Generate custom QR codes for your links.",
  },
  {
    title: "Link expiration",
    description: "Set an expiration date for your links.",
  },
  {
    title: "Team collaboration",
    description: "Share links with your team and collaborate in real-time.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Marie Dupont",
    username: "Head of Operations @ Edulearnia",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 3,
    review:
      "On qualifiait manuellement 300 leads/mois. Maintenant l'agent IA en traite 3000 avec un meilleur taux de conversion. Notre équipe commerciale se concentre enfin sur le closing. ROI positif en 2.1 mois.",
  },
] as const;


export const AI_FRAMEWORKS = [
  {
    name: "LangChain",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/langchain-color.png",
  },
  {
    name: "OpenAI",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/openai.png",
  },
  {
    name: "Anthropic",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/anthropic.png",
  },
  {
    name: "Ollama",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/ollama.png",
  },
  {
    name: "n8n",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/n8n-color.png",
  },
  
  {
    name: "Hugging Face",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/huggingface.png",
  },
  {
    name: "Google AI",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/google.png",
  },
  {
    name: "Mistral AI",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/mistral.png",
  },
  {
    name: "Perplexity",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/perplexity.png",
  },
  {
    name: "Cohere",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/cohere.png",
  },
  {
    name: "Azure",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/azure.png",
  },
  {
    name: "AWS Bedrock",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/aws.png",
  },
  {
    name: "Groq",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/grok.png"
  },
  {
    name: "Langfuse",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/light/langfuse-color.png",
  },
  {
    name: "Replicate",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/replicate.png",
  },
  {
    name: "GitHub",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/github.png",
  },
  {
    name: "Vercel AI",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/vercel.png",
  },
];