
# Cheshire SEO

`cheshire-seo` is a simple and flexible SEO configuration package for React. It helps you easily manage SEO-related meta tags for your application, including Open Graph, Twitter, structured data, and more.

## Installation

To install `@vacjs/cheshire-seo`, run the following command in your project:

```bash
npm install @vacjs/cheshire-seo
```

or

```bash
yarn add @vacjs/cheshire-seo
```

## Basic Usage

Once installed, you can use the `CheshireSEO` component to manage SEO tags in your React application.

### Example: Basic Usage

In the simplest form, you can set up the title, description, and keywords meta tags.

```tsx
import React from 'react';
import CheshireSEO from '@vacjs/cheshire-seo';

const App = () => {
  return (
    <div>
      <CheshireSEO
        title="My Page Title"
        description="This is the description of the page."
        keywords="SEO, react, cheshire"
      />
      <h1>Welcome to My Website</h1>
    </div>
  );
};

export default App;
```

This will automatically generate the following meta tags in the `<head>` section of your HTML:

```html
<title>My Page Title</title>
<meta name="description" content="This is the description of the page." />
<meta name="keywords" content="SEO, react, cheshire" />
```

## Intermediate Usage

You can also configure additional SEO properties like Open Graph, Twitter cards, robots meta tags, and favicon settings.

### Example: Medium Usage

```tsx
import React from 'react';
import CheshireSEO from '@vacjs/cheshire-seo';

const App = () => {
  return (
    <div>
      <CheshireSEO
        title="My Page Title"
        description="This is the description of the page."
        keywords="SEO, react, cheshire"
        openGraph={{
          type: 'website',
          title: 'My Page Title',
          description: 'Open Graph description',
          url: 'https://www.mysite.com',
          images: [{ url: 'https://www.mysite.com/image.jpg', width: 800, height: 600 }]
        }}
        twitter={{
          card: 'summary_large_image',
          site: '@MySite',
          creator: '@CreatorName'
        }}
        robots={{
          index: true,
          follow: true
        }}
        favicon={{
          ico: '/path/to/favicon.ico',
          png: '/path/to/favicon.png'
        }}
      />
      <h1>Welcome to My Website</h1>
    </div>
  );
};

export default App;
```

This will generate:

- Open Graph meta tags (og:type, og:title, og:description, etc.)
- Twitter card meta tags
- Robots meta tag
- Favicon links

## Advanced Usage

For more advanced use cases, you can add custom structured data, language settings, geo meta tags, alternate languages, and Facebook App ID.

### Example: Advanced Usage

```tsx
import React from 'react';
import CheshireSEO from '@vacjs/cheshire-seo';

const App = () => {
  return (
    <div>
      <CheshireSEO
        title="My Page Title"
        description="This is the description of the page."
        keywords="SEO, react, cheshire"
        openGraph={{
          type: 'website',
          title: 'My Page Title',
          description: 'Open Graph description',
          url: 'https://www.mysite.com',
          images: [{ url: 'https://www.mysite.com/image.jpg', width: 800, height: 600 }],
          siteName: 'MySite'
        }}
        twitter={{
          card: 'summary_large_image',
          site: '@MySite',
          creator: '@CreatorName'
        }}
        robots={{
          index: true,
          follow: true
        }}
        structuredData={{
          '@context': 'http://schema.org',
          '@type': 'WebPage',
          name: 'My Page Title',
          description: 'Structured data description',
          url: 'https://www.mysite.com'
        }}
        viewport="width=device-width, initial-scale=1"
        language="en"
        geo={{
          region: 'US',
          placename: 'New York'
        }}
        alternateLanguages={[
          { href: 'https://www.mysite.com/es', hreflang: 'es' },
          { href: 'https://www.mysite.com/fr', hreflang: 'fr' }
        ]}
        facebookAppId="1234567890"
        favicon={{
          ico: '/path/to/favicon.ico',
          png: '/path/to/favicon.png',
          appleTouchIcon: '/path/to/apple-touch-icon.png',
          themeColor: '#ffffff'
        }}
      />
      <h1>Welcome to My Website</h1>
    </div>
  );
};

export default App;
```

This configuration will:

- Include structured data in JSON-LD format
- Set the viewport and language meta tags
- Add geo tags for region and placename
- Define alternate languages for SEO
- Link a Facebook App ID
- Set the favicon and Apple Touch Icon

## Available Props

### `CheshireSEO` Props

- **title**: (string) The title of the page.
- **description**: (string) The description of the page.
- **keywords**: (string | string[]) The keywords for the page.
- **canonicalUrl**: (string) The canonical URL of the page.
- **openGraph**: (object) Open Graph configuration (see OpenGraph component).
- **twitter**: (object) Twitter card configuration (see Twitter component).
- **robots**: (object) Robots meta configuration (see Robots component).
- **additionalMetaTags**: (array) Custom meta tags to add.
- **viewport**: (string | boolean) The viewport meta tag (default: `true`).
- **language**: (string) The language of the page (e.g., 'en').
- **geo**: (object) Geographic meta tags (region, placename).
- **alternateLanguages**: (array) Alternate language links.
- **facebookAppId**: (string) Facebook App ID.
- **structuredData**: (object) Structured data in JSON-LD format.
- **favicon**: (object) Favicon configuration (see Favicon component).

## License

This package is open-source and available under the MIT License.