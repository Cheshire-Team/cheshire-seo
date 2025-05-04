export interface FaviconConfig {
  ico?: string;
  png?: string;
  appleTouchIcon?: string;
  manifest?: string;
  themeColor?: string;
}

export interface CheshireSEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  openGraph?: {
    type?: 'website' | 'article' | 'profile' | 'book' | 'music';
    title?: string;
    description?: string;
    url?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    siteName?: string;
    video?: string;
    music?: string;
    fallbackImage?: boolean;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    fallbackCard?: boolean;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
  additionalMetaTags?: Array<{
    name: string;
    content: string;
  }>;
  viewport?: boolean | string;
  language?: string;
  geo?: {
    region?: string;
    placename?: string;
  };
  alternateLanguages?: Array<{
    href: string;
    hreflang: string;
  }>;
  facebookAppId?: string;
  structuredData?: object;
  favicon?: FaviconConfig;
}