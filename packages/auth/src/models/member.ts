import { z } from 'zod'

const memberSchema = z.object({
  __typename: z.literal('Member').default('Member'),
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
})

type Member = z.infer<typeof memberSchema>

export { memberSchema }

export type { Member }
