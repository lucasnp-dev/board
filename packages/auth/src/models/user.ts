import { z } from 'zod'

import { roleSchema } from '../role'
import { organizationSchema } from './organization'

const userSchema = z.object({
  id: z.string(),
  role: roleSchema,
  organization: organizationSchema,
})

type User = z.infer<typeof userSchema>

export { userSchema }

export type { User }
