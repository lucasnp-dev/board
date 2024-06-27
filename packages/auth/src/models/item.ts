import { z } from 'zod'

const itemSchema = z.object({
  __typename: z.literal('Item').default('Item'),
  id: z.string(),
  organizationId: z.string(),
})

type Item = z.infer<typeof itemSchema>

export { itemSchema }

export type { Item }
