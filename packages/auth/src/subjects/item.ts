import { z } from 'zod'

import { itemSchema } from '../models/item'

const itemSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Item'), itemSchema]),
])

type ItemSubject = z.infer<typeof itemSubject>

export { itemSubject }

export type { ItemSubject }
