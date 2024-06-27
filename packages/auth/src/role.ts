import z from 'zod'

const roleSchema = z.union([
  z.literal('dev'),
  z.literal('admin'), // manage all
  z.literal('manager'), // manage mettings and others designations
  z.literal('editor'), // manage designations
  z.literal('user'), // view only
])

type Role = z.infer<typeof roleSchema>

export { roleSchema }
export type { Role }
