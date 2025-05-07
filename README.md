
# Cheshire SEO

`@vacjs/cheshire-seo` is a simple and flexible SEO configuration package for React (compatible with Next.js). It helps you manage SEO-related meta tags for your application, including Open Graph, Twitter cards, structured data, favicons, language, geographic info, and more.

## Installation

Install via npm:

```bash
npm install @vacjs/cheshire-seo
```

Or using yarn:

```bash
yarn add @vacjs/cheshire-seo
```

## Basic Usage

Use the `CheshireSEO` component to manage SEO meta tags in your React (Next.js) app.

```tsx
import React from 'react';
import { CheshireSEO } from '@vacjs/cheshire-seo';

const App = () => {
  return (
    <>
      <CheshireSEO
        title="My Page Title"
        description="This is the description of the page."
        keywords={['SEO', 'react', 'cheshire']}
      />
      <h1>Hello World</h1>
    </>
  );
};

export default App;
```

This renders:

```html
<title>My Page Title</title>
<meta name="description" content="This is the description of the page.">
<meta name="keywords" content="SEO, react, cheshire">
```

## Intermediate Usage

Add Open Graph, Twitter cards, robots meta tags, and favicons:

```tsx
<CheshireSEO
  title="My Page Title"
  description="This is the description of the page."
  keywords="SEO, react, cheshire"
  openGraph={{
    type: 'website',
    title: 'My Page Title',
    description: 'OG description',
    url: 'https://example.com',
    siteName: 'ExampleSite',
    images: [{ url: 'https://example.com/image.jpg', width: 800, height: 600, alt: 'Image alt' }]
  }}
  twitter={{
    card: 'summary_large_image',
    site: '@example',
    creator: '@creator'
  }}
  robots={{
    index: true,
    follow: true
  }}
  favicon={{
    ico: '/favicon.ico',
    png: '/favicon.png'
  }}
/>
```

## Advanced Usage (All Props)

```tsx
<CheshireSEO
  title="My Advanced Page"
  description="Detailed SEO setup"
  keywords={['advanced', 'SEO', 'react']}
  canonicalUrl="https://www.example.com"
  openGraph={{
    type: 'website',
    title: 'My Advanced Page',
    description: 'An advanced OG setup',
    url: 'https://www.example.com',
    siteName: 'ExampleSite',
    images: [
      { url: 'https://www.example.com/image.jpg', width: 1200, height: 630, alt: 'OG Image' }
    ],
    video: 'https://www.example.com/video.mp4',
    music: 'https://www.example.com/track.mp3',
    fallbackImage: true
  }}
  twitter={{
    card: 'summary_large_image',
    site: '@example',
    creator: '@creator',
    fallbackCard: true
  }}
  robots={{
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: false
  }}
  additionalMetaTags={[
    { name: 'author', content: 'Example Author' },
    { name: 'theme-color', content: '#ffffff' }
  ]}
  viewport="width=device-width, initial-scale=1"
  language="en"
  geo={{
    region: 'US',
    placename: 'New York'
  }}
  alternateLanguages={[
    { href: 'https://www.example.com/es', hreflang: 'es' },
    { href: 'https://www.example.com/fr', hreflang: 'fr' }
  ]}
  facebookAppId="1234567890"
  structuredData={{
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: "My Advanced Page",
    description: "Advanced structured data",
    url: "https://www.example.com"
  }}
  favicon={{
    ico: '/favicon.ico',
    png: '/favicon.png',
    appleTouchIcon: '/apple-touch-icon.png',
    manifest: '/site.webmanifest',
    themeColor: '#ffffff'
  }}
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Page title |
| `description` | `string` | Meta description |
| `keywords` | `string` \| `string[]` | Keywords meta tag |
| `canonicalUrl` | `string` | Canonical URL |
| `openGraph` | `OpenGraphConfig` | Open Graph metadata |
| `twitter` | `TwitterConfig` | Twitter Card metadata |
| `robots` | `RobotsConfig` | Robots meta tag |
| `additionalMetaTags` | `{ name: string, content: string }[]` | Custom meta tags |
| `viewport` | `boolean` \| `string` | Viewport config (`true` = default, or custom string) |
| `language` | `string` | `<meta http-equiv="content-language">` |
| `geo` | `GeoMetaConfig` | Geographic region & placename |
| `alternateLanguages` | `AlternateLanguage[]` | `<link rel="alternate" hreflang="...">` |
| `facebookAppId` | `string` | Facebook App ID meta tag |
| `structuredData` | `object` | JSON-LD structured data |
| `favicon` | `FaviconConfig` | Favicon and related meta |

## Change Log

### 1.0.4

- Added support for:
  - Custom Open Graph fallback images
  - Twitter Card fallback logic
  - Geo and language meta tags
  - Alternate language support
  - Facebook App ID
  - Custom additional meta tags
  - Comprehensive Favicon support (ICO, PNG, Apple Touch Icon, Manifest, Theme Color)
- Refined prop typings for improved DX
- Improved internal validation of structured data

## License

This package is open-source and available under the MIT License.