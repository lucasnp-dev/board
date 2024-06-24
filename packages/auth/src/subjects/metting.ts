import { z } from 'zod'

import { meetingSchema } from '../models/meeting'

const meetingSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Meeting'), meetingSchema]),
])

type MeetingSubject = z.infer<typeof meetingSubject>

export { meetingSubject }

export type { MeetingSubject }
