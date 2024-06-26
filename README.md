# Board

## Overview
Board is a SaaS RBCA platform that helps manage various parts of a meeting effectively.

## Functional Requirements

1. **User Management**
   - The system should allow the user to sign up.
   - The system should allow the user to delete and edit a user.
   - The system should allow a user to have a name, email, cell phone number, picture, and member.

2. **Member Management**
   - The system should allow the user to create, edit, and delete a member.
   - The system should allow a member to have a role, name, designation, organization, and user.

3. **Meeting Management**
   - The system should allow the user to read a meeting.
   - The system should allow the user to create, edit, and delete a meeting.
   - The system should allow a meeting to have a date and description.

4. **Item Management**
   - The system should allow each meeting to have multiple items.
   - The system should allow item ordering.
   - The system should allow a item have a type, this field is enum.
   - The system should allow a item have a description, meeting_id, and parent_id.

5. **Organization Management**
   - The system should allow the user to create, update, and delete an organization.
   - The system should allow an organization to have a name, picture, and domain.

6. **Part**
   - The system should allow the user to create, update, and delete a part.
   - The system should allow an appartment to have a Item and Member.

7. **To Be Defined**
   - Language support (pt-BR, en-US).

## Non-Functional Requirements

1. **Database**
   - PostgreSQL;
   - Cloud: Vercel;
   - ORM: Prisma.

2. **Project Setup**
   - Cloud: Vercel.
   - Turbopack Monorepo.

3. **Security**
   - If there is a password, it must be encrypted.

## Business Rules

1. **User**
   - If there is a member with your name, the user can sign up.
   - The user can delete, create, read, or update a user if their role is admin or dev.
   - The user can delete, create, read, or update their own user.
   - Name and member fields are required.

2. **Member**
   - The user can update, delete, or create a member if their role is admin or dev.
   - The user can create, read, update, or delete their own member.
   - Organization, designation, and role fields are required.
   - Name is required if user field is empty.

3. **Meeting**
   - The user can create, read, update, or delete a meeting if their role is admin or dev.
   - Date and description fields are required.
   - Sections are required in all meetings.
   - The meeting can be type meeting, ministery, or cart.

4. **Item**
   - The user can create, read, update, or delete a item if their role is admin or dev.
   - Description field is required.
   - It can be a SECTION, PART or SHARED.
   - SECTION must had a childrens.
   - PART must have a parent.
   - SHARED can be both and not had a member.

5. **Organization**
   - The user can create an organization.
   - The user can update and delete and organization their own member.
   - Name is required.
   - Domain is composed of a name.

6. **Part**
   - The user can create, read, update, or delete a appartment if their role is dev, admin, or member.
   - The Item and Member fields is required.

## Installation and Configuration

### Prerequisites
 - Node.js(>=18.x)
 - npm or pnpm
- A PostgreSQL database

### Clone the repository

Ensure you have the appropriate access rights to clone this private repository.

```bash
git clone https://github.com/lucasnp-dev/board.git
```

### Install dependencies

```bash
npm install
# or
pnpm install
```

### Environment setup

Create a `.env` file in the root of the project with the following variables:

```plaintext
DATABASE_URL=url
JWT_SECRET=secret
```

### Start the development server

```bash
npm run dev
# or
pnpm run dev
```

## Contribution

## Access Control

This project is private. Ensure you have the necessary permissions to access and contribute to the repository. Contact the repository owner for access.

## Branching Strategy
 - main: The production branch.
 - dev: The development branch. Merge your feature branches here.
 - feature/your-feature: Feature branches for new features or bug fixes.

## Code Review
All changes should be submitted via pull requests. Ensure your code is reviewed and approved by at least one other team member before merging.

## Security

### Data Protection
Ensure all sensitive data is stored securely and encrypted where applicable.

## Access Control
Limit access to the repository to authorized team members only. Regularly review and update access permissions.

## License
This project is licensed under the MIT License.