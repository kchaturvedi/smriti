const site_name = 'A wonderful site'
const title = 'Kartik Chaturvedi — Developer. Writer. Futurist.'
const description = 'I help create tools that make the internet a better platform for human progress.'
const keywords = 'comma,separated,works'

export default {
  // titleTemplate: '%s — Kartik Chaturvedi',
  title,
  description,
  canonical: 'https://ikartik.com',
  additionalMetaTags: [{
    name: 'keywords',
    content: keywords
  }],
  openGraph: {
    type: 'website',
    url: 'https://ikartik.com',
    title,
    description,
    site_name,
    images: [
      // TODO add image
    ]
  },
  twitter: {
    handle: '@itskrtk',
    site: '@itskrtk',
    cardType: 'summary_large_image'
  }
}
