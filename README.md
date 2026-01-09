This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Live Demo: https://mern-auth-psi-nine.vercel.app/register

🔐 React Authentication & Protected Dashboard (Mocked)

A frontend authentication project built with Next.js (App Router) that simulates a real-world login flow using mock authentication, token-based route protection, and localStorage.
The project demonstrates clean architecture, predictable state flow, and common frontend best practices.

## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
📌 Features
✅ Authentication (Mocked)

Login with Email & Password

Mock authentication logic (no real backend)

Token stored in localStorage

Basic token expiry handling

✅ Protected Routes

Dashboard accessible only after login

Automatic redirect to Login if unauthenticated

Auto logout when token expires

✅ Dashboard

Displays logged-in user data (from localStorage)

Clean, minimal UI

Uses React useState & useEffect

✅ Logout

Clears token & user data

Redirects to Login page

⭐ Bonus Implementations

Axios HTTP Interceptors

Automatically attaches token to requests

Handles unauthorized responses (401)

Environment-based configuration

API base URL managed via .env.local

Token expiry simulation

Mimics real JWT expiry behavior

🛠 Tech Stack

Next.js 13+ (App Router)

React

TypeScript

Tailwind CSS

Axios

localStorage (mock auth)

📂 Project Structure

src/
├── app/
│   ├── page.tsx              # Entry redirect logic
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── register/
│   │   └── page.tsx          # Register page
│   └── dashboard/
│       └── page.tsx          # Protected dashboard
│
├── components/
│   ├── Navbar.tsx
│   ├── Input.tsx
│   └── Button.tsx
│
├── lib/
│   ├── auth.ts               # Mock auth logic
│   ├── token.ts              # Token & expiry handling
│   └── axios.ts              # Axios instance + interceptors
│
└── .env.local


🔄 Authentication Flow

User logs in with email & password

App generates a dummy token with expiry

Token & user info stored in localStorage

Dashboard validates token before rendering

On logout or token expiry → user redirected to login



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
