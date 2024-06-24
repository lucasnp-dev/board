import { z } from 'zod'

import { sectionSchema } from '../models/section'

const sectionSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Section'), sectionSchema]),
])

type SectionSubject = z.infer<typeof sectionSubject>

export { sectionSubject }

export type { SectionSubject }
