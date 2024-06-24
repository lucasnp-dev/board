import { z } from 'zod'

const sectionSchema = z.object({
  __typename: z.literal('Section').default('Section'),
  id: z.string(),
  owerId: z.string(),
})

type Section = z.infer<typeof sectionSchema>

export { sectionSchema }

export type { Section }
