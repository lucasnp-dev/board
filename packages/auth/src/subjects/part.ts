import { z } from 'zod'

import { partSchema } from '../models/part'

const partSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Part'), partSchema]),
])

type PartSubject = z.infer<typeof partSubject>

export { partSubject }

export type { PartSubject }
