import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './role'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  dev(_user, { can }) {
    can('manage', 'all')
  },
  admin(user, { can, cannot }) {
    can('manage', 'all')

    cannot('manage', ['Item', 'Meeting', 'Part', 'Member', 'Organization'])
    can('manage', ['Item', 'Meeting', 'Part', 'Member'], {
      organizationId: { $eq: user.member.organizationId },
    })

    can('manage', 'Organization', {
      id: { $eq: user.member.organizationId },
    })

    cannot('manage', 'User')
    can('manage', 'User', {
      id: { $eq: user.id },
    })
  },
  manager(user, { can, cannot }) {
    cannot('manage', ['Item', 'Meeting', 'Part'])
    can('manage', ['Item', 'Meeting', 'Part'], {
      organizationId: { $eq: user.member.organizationId },
    })

    cannot('manage', ['User', 'Member'])
    can('read', 'Member', {
      userId: { $eq: user.id },
    })
    can('manage', 'User', {
      id: { $eq: user.id },
    })
  },
  editor(user, { can, cannot }) {
    cannot('manage', ['Item', 'Meeting', 'Part'])
    can('manage', ['Item', 'Part'], {
      organizationId: { $eq: user.member.organizationId },
    })

    can('manage', 'Meeting', {
      organizationId: { $eq: user.member.organizationId },
      type: { $ne: 'meeting' },
    })

    cannot('manage', ['User', 'Member'])
    can('read', 'Member', {
      userId: { $eq: user.id },
    })
    can('manage', 'User', {
      id: { $eq: user.id },
    })
  },
  user(user, { can, cannot }) {
    can('read', 'Meeting')
    cannot('manage', ['User', 'Member'])
    can('read', 'Member', {
      userId: { $eq: user.id },
    })
    can('manage', 'User', {
      id: { $eq: user.id },
    })
  },
}
