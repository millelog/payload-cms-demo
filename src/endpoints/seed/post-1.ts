import type { Category, Media, User } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

export type PostArgs = {
  heroImage: Media
  blockImage: Media
  author: User
  categories?: (number | Category)[]
}

export const post1: (args: PostArgs) => RequiredDataFromCollectionSlug<'posts'> = ({
  heroImage,
  blockImage,
  author,
  categories = [],
}) => {
  return {
    slug: 'why-your-business-needs-a-modern-website',
    _status: 'published',
    authors: [author],
    categories,
    content: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Your website is your most powerful sales tool. In 2026, a modern, high-performance site is no longer optional — it is essential for growth.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: 'Demo Content',
              blockType: 'banner',
              content: {
                root: {
                  type: 'root',
                  children: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 1,
                          mode: 'normal',
                          style: '',
                          text: 'Note:',
                          version: 1,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: ' This is sample content for the Cascade Online Design demo. You can edit this post from the ',
                          version: 1,
                        },
                        {
                          type: 'link',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'admin dashboard',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          fields: {
                            linkType: 'custom',
                            newTab: true,
                            url: '/admin',
                          },
                          format: '',
                          indent: 0,
                          version: 3,
                        },
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: '.',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  version: 1,
                },
              },
              style: 'info',
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'First Impressions Happen Online',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Before a potential customer ever walks through your door or picks up the phone, they visit your website. Studies consistently show that users form an opinion about a business within the first few seconds of landing on their site. A dated design, slow load times, or a confusing layout sends a clear message: this business is not keeping up. A modern website communicates professionalism, credibility, and attention to detail — all before a single word is read.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Mobile-First Is No Longer a Buzzword',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Over 60% of web traffic now comes from mobile devices. If your website does not look and perform flawlessly on a phone, you are losing more than half of your potential audience. Modern web design starts with the smallest screen and scales up, ensuring that every visitor gets a seamless experience regardless of their device. This is not just about shrinking content to fit — it is about rethinking navigation, touch targets, and content hierarchy for the way people actually use the web today.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'block',
            fields: {
              blockName: '',
              blockType: 'mediaBlock',
              media: blockImage.id,
            },
            format: '',
            version: 2,
          },
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Performance Drives Conversions',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h2',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Speed matters more than ever. A one-second delay in page load time can result in a 7% reduction in conversions. Modern websites are built with performance at the core — optimized images, efficient code, and smart caching strategies that ensure your pages load in under two seconds. When your site is fast, visitors stay longer, explore more, and are far more likely to become customers.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'At Cascade Online Design, we build websites that combine stunning visual design with the technical performance that drives real business results. Whether you need a complete redesign or a ground-up build, we focus on creating sites that work as hard as you do.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description:
        'Your website is your most powerful sales tool. Learn why a modern, high-performance website is essential for business growth in 2026.',
      image: heroImage.id,
      title: 'Why Your Business Needs a Modern Website in 2026',
    },
    relatedPosts: [],
    title: 'Why Your Business Needs a Modern Website in 2026',
  }
}
