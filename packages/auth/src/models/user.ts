import { z } from 'zod'

import { roleSchema } from '../role'

const userSchema = z.object({
  id: z.string(),
  role: roleSchema,
})

type User = z.infer<typeof userSchema>

export { userSchema }

export type { User }
