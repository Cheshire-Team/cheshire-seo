import React from 'react';
import Head from 'next/head';
import {
  Title,
  Description,
  Keywords,
  Canonical,
  OpenGraph,
  Twitter,
  Robots,
  Additional,
  Viewport,
  Favicon,
  LanguageMeta,
  GeoMeta,
  AlternateLanguages,
  FacebookAppId,
  StructuredData
} from './core';
import { CheshireSEOProps } from './types';

const CheshireSEO: React.FC<CheshireSEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  openGraph,
  twitter,
  robots,
  additionalMetaTags,
  viewport = true,
  language,
  geo,
  alternateLanguages,
  facebookAppId,
  structuredData,
  favicon
}) => {
  return (
    <Head>
      {Title(title)}
      {Description(description)}
      {Keywords(keywords)}
      {Canonical(canonicalUrl)}
      {OpenGraph(openGraph)}
      {Twitter(twitter)}
      {Robots(robots)}
      {Additional(additionalMetaTags)}
      {Viewport(viewport)}
      {Favicon(favicon)}
      {LanguageMeta(language)}
      {GeoMeta(geo)}
      {AlternateLanguages(alternateLanguages)}
      {FacebookAppId(facebookAppId)}
      {StructuredData(structuredData)}
    </Head>
  );
};

export default CheshireSEO;