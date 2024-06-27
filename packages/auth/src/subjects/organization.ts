import { z } from 'zod'

import { organizationSchema } from '../models/organization'

const organizationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([z.literal('Organization'), organizationSchema]),
])

type OrganizationSubject = z.infer<typeof organizationSubject>

export { organizationSubject }

export type { OrganizationSubject }
