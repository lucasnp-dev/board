import { z } from 'zod'

import { roleSchema } from '../role'
import { memberSchema } from './member'

const userSchema = z.object({
  __typename: z.literal('User').default('User'),
  id: z.string(),
  role: roleSchema,
  member: memberSchema,
})

type User = z.infer<typeof userSchema>

export { userSchema }

export type { User }
