This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

1. Sign up for [Anthropic API](https://console.anthropic.com/) and get an API key.
2. Create `.env.local` in root and add:
   ```
   ANTHROPIC_API_KEY=your_key_here
   ```
   Restart dev server after adding.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Test AI Code Suggestions (Anthropic + CodeWork)

1. Authenticate (Clerk).
2. Create a new project.
3. Create/open a file (e.g., `test.js`).
4. Type partial code (e.g., `function hello(`) – ghost text appears after cursor.
5. Press **Tab** to accept suggestion.
6. Check browser Network tab for `/api/suggestion` calls to Claude 3.5 Haiku.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
