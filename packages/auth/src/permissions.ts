import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './role'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  admin(user, { can }) {
    can('manage', 'all')
  },
  manager(user, { can }) {},
  editor(user, { can }) {},
  user(_, { can }) {},
}
