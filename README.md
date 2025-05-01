# Next.js Authentication with Microsoft Entra ID (Azure AD)

This project demonstrates how to implement authentication in a Next.js application using Next-Auth v5 with Microsoft Entra ID (formerly Azure AD) as the authentication provider.

## Features

- 🔐 Microsoft Entra ID Authentication
- 🚀 Next.js 15.3.1
- 🛡️ Protected routes
- 👤 User profile page
- 🔄 Automatic route protection with middleware

## Prerequisites

Before you begin, ensure you have:

1. Node.js installed (Latest LTS version recommended)
2. A Microsoft Azure account
3. Registered an application in Microsoft Entra ID (Azure AD)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
AUTH_SECRET=
AUTH_MICROSOFT_ENTRA_ID_ID=your_client_id
AUTH_MICROSOFT_ENTRA_ID_SECRET=your_client_secret
AUTH_MICROSOFT_ENTRA_ID_TENANT_ID=your_tenant_id
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd authjs-azure-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
src/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── profile/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── login-button.tsx
│   ├── logout-button.tsx
│   └── navbar.tsx
├── auth.ts
└── middleware.ts
```

## Key Features Explained

1. **Authentication Flow**

   - Uses Next-Auth v5 for authentication
   - Microsoft Entra ID provider configuration in `src/auth.ts`
   - Protected routes handling in `src/middleware.ts`

2. **Components**

   - `LoginButton`: Handles Microsoft login
   - `LogoutButton`: Manages user logout
   - `Navbar`: Responsive navigation with conditional rendering

3. **Pages**
   - Home page (`/`): Login page for unauthenticated users
   - Profile page (`/profile`): Protected route showing user information

## Protected Routes

The following routes are protected and require authentication:

- `/profile` - User profile page

Unauthenticated users will be redirected to the home page.

## Customization

1. **Styling**

   - The project uses TailwindCSS for styling
   - Customize the theme in `tailwind.config.js`

2. **Protected Routes**
   - Add more protected routes in `src/middleware.ts`
   ```typescript
   const protectedRoutes = ["/profile", "/your-new-route"];
   ```

## Building for Production

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```
