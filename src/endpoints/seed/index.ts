import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
]

const globals: GlobalSlug[] = ['header', 'footer']

const categories = ['Web Design', 'Branding', 'SEO', 'Development', 'E-Commerce', 'Digital Marketing']

const CF_ACCOUNT_HASH = 'zqlO_f93Gilxz6zHS6qT_w'
const cfImage = (id: string) =>
  `https://imagedelivery.net/${CF_ACCOUNT_HASH}/${id}/w=1920`

const IMAGES = {
  post1: cfImage('6ec88a2c-e337-45ff-b0c6-76bdf355c900'),
  post2: cfImage('c8c2c5ed-f625-4900-f3db-009706da8a00'),
  post3: cfImage('4ba80e1e-0912-48e7-82c6-d719c3835500'),
  block1: cfImage('bec5ddea-92df-49b3-793e-18a1fad86d00'),
  block2: cfImage('53ea7703-cf46-4c52-003a-5ba4f86d9400'),
}

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  payload.logger.info(`— Clearing collections and globals...`)

  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, block1Buffer, block2Buffer] =
    await Promise.all([
      fetchFileByURL(IMAGES.post1),
      fetchFileByURL(IMAGES.post2),
      fetchFileByURL(IMAGES.post3),
      fetchFileByURL(IMAGES.block1),
      fetchFileByURL(IMAGES.block2),
    ])

  const [demoAuthor, image1Doc, image2Doc, image3Doc, block1Doc, block2Doc] =
    await Promise.all([
      payload.create({
        collection: 'users',
        data: {
          name: 'Demo Author',
          email: 'demo-author@example.com',
          password: 'password',
        },
      }),
      payload.create({
        collection: 'media',
        data: image1,
        file: image1Buffer,
      }),
      payload.create({
        collection: 'media',
        data: image2,
        file: image2Buffer,
      }),
      payload.create({
        collection: 'media',
        data: image2,
        file: image3Buffer,
      }),
      payload.create({
        collection: 'media',
        data: { alt: 'Demo portfolio screenshot' },
        file: block1Buffer,
      }),
      payload.create({
        collection: 'media',
        data: { alt: 'Demo portfolio screenshot' },
        file: block2Buffer,
      }),
    ])

  payload.logger.info(`— Seeding categories...`)

  const categoryDocs = await Promise.all(
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category.toLowerCase().replace(/\s+/g, '-'),
        },
      }),
    ),
  )

  const catByName = (name: string) => {
    const doc = categoryDocs.find((c) => c.title === name)
    return doc ? doc.id : undefined
  }

  payload.logger.info(`— Seeding posts...`)

  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({
      heroImage: image1Doc,
      blockImage: block1Doc,
      author: demoAuthor,
      categories: [catByName('Web Design'), catByName('Development')].filter((id): id is number => id != null),
    }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({
      heroImage: image2Doc,
      blockImage: block2Doc,
      author: demoAuthor,
      categories: [catByName('Branding'), catByName('Digital Marketing')].filter(
        (id): id is number => id != null,
      ),
    }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({
      heroImage: image3Doc,
      blockImage: block1Doc,
      author: demoAuthor,
      categories: [catByName('SEO'), catByName('Digital Marketing')].filter((id): id is number => id != null),
    }),
  })

  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: home({ metaImage: image2Doc }),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData({ contactForm: contactForm }),
    }),
  ])

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Blog',
              url: '/posts',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Cascade Online Design',
              newTab: true,
              url: 'https://cascadeonlinedesign.com/',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()
  const contentType = res.headers.get('content-type') || 'image/jpeg'
  const ext = contentType.includes('webp') ? 'webp' : contentType.includes('png') ? 'png' : 'jpg'

  const segments = new URL(url).pathname.split('/').filter(Boolean)
  const imageId = segments.length >= 2 ? segments[segments.length - 2] : segments[0]
  const name = `${(imageId || 'image').slice(0, 12)}.${ext}`

  return {
    name,
    data: Buffer.from(data),
    mimetype: contentType,
    size: data.byteLength,
  }
}
