import { z } from 'zod'

import { memberSchema } from '../models/member'

const memberSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Member'), memberSchema]),
])

type MemberSubject = z.infer<typeof memberSubject>

export { memberSubject }

export type { MemberSubject }
