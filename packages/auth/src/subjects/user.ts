import { z } from 'zod'

import { userSchema } from '../models/user'

const userSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('User'), userSchema]),
])

type UserSubject = z.infer<typeof userSubject>

export { userSubject }

export type { UserSubject }
