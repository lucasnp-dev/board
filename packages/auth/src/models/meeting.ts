import { z } from 'zod'

const meetingSchema = z.object({
  __typename: z.literal('Meeting').default('Meeting'),
  id: z.string(),
  owerId: z.string(),
  type: z.enum(['meeting', 'ministery', 'cart']),
})

type Meeting = z.infer<typeof meetingSchema>

export { meetingSchema }

export type { Meeting }
