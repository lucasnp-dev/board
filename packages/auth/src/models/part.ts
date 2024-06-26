import { z } from 'zod'

const partSchema = z.object({
  __typename: z.literal('Part').default('Part'),
  id: z.string(),
  organizationId: z.string(),
})

type Part = z.infer<typeof partSchema>

export { partSchema }

export type { Part }
