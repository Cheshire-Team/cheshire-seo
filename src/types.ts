export interface FaviconConfig {
  ico?: string;
  png?: string;
  appleTouchIcon?: string;
  manifest?: string;
  themeColor?: string;
}

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraphConfig {
  type?: 'website' | 'article' | 'profile' | 'book' | 'music';
  title?: string;
  description?: string;
  url?: string;
  images?: OpenGraphImage[];
  siteName?: string;
  video?: string;
  music?: string;
  fallbackImage?: boolean;
}

export interface TwitterConfig {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
  fallbackCard?: boolean;
}

export interface RobotsConfig {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
}

export interface AlternateLanguage {
  href: string;
  hreflang: string;
}

export interface GeoMetaConfig {
  region?: string;
  placename?: string;
}

export interface CheshireSEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterConfig;
  robots?: RobotsConfig;
  additionalMetaTags?: Array<{
    name: string;
    content: string;
  }>;
  viewport?: boolean | string;
  language?: string;
  geo?: GeoMetaConfig;
  alternateLanguages?: AlternateLanguage[];
  facebookAppId?: string;
  structuredData?: object;
  favicon?: FaviconConfig;
}