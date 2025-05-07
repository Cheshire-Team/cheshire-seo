import React from 'react';
import { CheshireSEOProps, FaviconConfig } from './types';

const isValidStructuredData = (data: any): boolean => {
  try {
    JSON.stringify(data);
    return typeof data === 'object' && data !== null;
  } catch {
    return false;
  }
};

export function Title(text?: string) {
  return text ? <title>{text}</title> : null;
}

export function Description(text?: string) {
  if (!text) return null;
  return (
    <>
      <meta name="description" content={text} />
      <meta property="og:description" content={text} />
    </>
  );
}

export function Keywords(value?: string | string[]) {
  if (!value) return null;
  const content = typeof value === 'string' ? value : value.join(', ');
  return <meta name="keywords" content={content} />;
}

export function Canonical(url?: string) {
  if (!url) return null;
  return (
    <>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </>
  );
}

export function OpenGraph(openGraph?: CheshireSEOProps['openGraph']) {
  if (!openGraph) return null;

  const {
    type = 'website',
    title,
    description,
    url,
    siteName,
    images = [],
    video,
    music,
    fallbackImage = true
  } = openGraph;

  const imagesToRender = images.slice(0, 5);
  const hasImages = imagesToRender.length > 0;
  const shouldRenderFallback = fallbackImage && !hasImages && url;

  return (
    <>
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      
      {hasImages && imagesToRender.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          {image.width && <meta property="og:image:width" content={String(image.width)} />}
          {image.height && <meta property="og:image:height" content={String(image.height)} />}
          {image.alt && <meta property="og:image:alt" content={image.alt} />}
        </React.Fragment>
      ))}
      
      {shouldRenderFallback && <meta property="og:image" content={url} />}

      {video && <meta property="og:video" content={video} />}
      {music && <meta property="og:music:musician" content={music} />}
    </>
  );
}

export function Twitter(twitter?: CheshireSEOProps['twitter']) {
  if (!twitter) return null;

  const { card = 'summary', site, creator, fallbackCard = true } = twitter;

  return (
    <>
      {fallbackCard && <meta name="twitter:card" content={card} />}
      {site && <meta name="twitter:site" content={site} />}
      {creator && <meta name="twitter:creator" content={creator} />}
    </>
  );
}

export function Robots(config?: CheshireSEOProps['robots']) {
  if (!config) return null;

  const content = [
    config.index === false ? 'noindex' : 'index',
    config.follow === false ? 'nofollow' : 'follow',
    config.noarchive && 'noarchive',
    config.nosnippet && 'nosnippet',
    config.noimageindex && 'noimageindex'
  ]
    .filter(Boolean)
    .join(', ');

  return <meta name="robots" content={content} />;
}

export function Additional(tags?: CheshireSEOProps['additionalMetaTags']) {
  if (!tags || tags.length === 0) return null;
  return (
    <>
      {tags.map((tag, idx) => (
        <meta key={idx} name={tag.name} content={tag.content} />
      ))}
    </>
  );
}

export function Viewport(viewport?: CheshireSEOProps['viewport']) {
  if (viewport === false) return null;
  
  const content = typeof viewport === 'string' 
    ? viewport 
    : 'width=device-width, initial-scale=1';
  
  return <meta name="viewport" content={content} />;
}

export function Favicon(config?: FaviconConfig) {
  if (!config) return null;
  
  return (
    <>
      {config.ico && <link rel="icon" href={config.ico} type="image/x-icon" />}
      {config.png && <link rel="icon" href={config.png} type="image/png" />}
      {config.appleTouchIcon && (
        <link rel="apple-touch-icon" href={config.appleTouchIcon} />
      )}
      {config.manifest && <link rel="manifest" href={config.manifest} />}
      {config.themeColor && <meta name="theme-color" content={config.themeColor} />}
    </>
  );
}

export function LanguageMeta(lang?: string) {
  return lang ? <meta httpEquiv="content-language" content={lang} /> : null;
}

export function GeoMeta(geo?: CheshireSEOProps['geo']) {
  if (!geo) return null;
  return (
    <>
      {geo.region && <meta name="geo.region" content={geo.region} />}
      {geo.placename && <meta name="geo.placename" content={geo.placename} />}
    </>
  );
}

export function AlternateLanguages(alts?: CheshireSEOProps['alternateLanguages']) {
  if (!alts || alts.length === 0) return null;
  return (
    <>
      {alts.map((alt, idx) => (
        <link key={idx} rel="alternate" href={alt.href} hrefLang={alt.hreflang} />
      ))}
    </>
  );
}

export function FacebookAppId(id?: string) {
  return id ? <meta property="fb:app_id" content={id} /> : null;
}

export function StructuredData(data?: object) {
  if (!data || !isValidStructuredData(data)) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}