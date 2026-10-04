export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Dragon Shelter Wiki",
  shortName: "Dragon Shelter",
  logoText: "DS",
  tagline: "Dragon Guides, Farming Tips & Cozy Fantasy Walkthroughs",
  description: "Your cozy fantasy guide to Dragon Shelter! Explore dragon companion guides, farming and crafting tips, exploration details, and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dragon-shelter-wiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dragon-shelter-wiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2712590/Dragon_Shelter/",
  heroVideoId: "ESHU227b4JM", // Dragon Shelter - Launch Trailer (Curve Games)
  social: {
    discord: "https://discord.com/game/dragon-shelter-1428208844722409642",
    youtube: "https://www.youtube.com/@CurveGames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
