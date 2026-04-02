https://app.inngest.com/env/production/runs
https://polaris-five-phi.vercel.app/

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**What We're Building** - 
Polaris is a browser-based IDE inspired by Cursor AI, 

**featuring:**
Real-time collaborative code editing
AI-powered code suggestions and quick edit (Cmd+K)
Conversation-based AI assistant
In-browser code execution with WebContainer
GitHub import/export integration
Multi-file project management


**Tech Stack**
Category	Technologies
**Frontend**	Next.js 16, React 19, TypeScript, Tailwind CSS 4
**Editor**	CodeMirror 6, Custom Extensions, One Dark Theme
**Backend**	Convex (Real-time DB), Inngest (Background Jobs)
**AI	Claude** Sonnet 4 (preferred) or Gemini 2.0 Flash (free tier)
**Auth**	Clerk (with GitHub OAuth)
**Execution**	WebContainer API, xterm.js
UI	shadcn/ui, Radix UI


**Part 1 Contents (Chapters 1-12)**

**Phase 1: Foundation & Sponsor Technologies**
Chapter 1: Project Setup, UI Library & Theme
Chapter 2: Clerk Authentication & Protected Routes
Chapter 3: Convex Database & Real-time Setup
Chapter 4: Inngest - Background Jobs & Non-Blocking UI
Chapter 5: Firecrawl - Teaching AI with Live Documentation
Chapter 6: Sentry - Error Tracking & LLM Monitoring
Chapter 7: Projects Dashboard & Landing Page

**Phase 2: File System & Editor**
Chapter 8: Project IDE Layout & Resizable Panes
Chapter 9: File Explorer - Full Implementation
Chapter 10: Code Editor & State Management

**Phase 3: AI Features (Partial)**
Chapter 11: AI Suggestions & Quick Edit
Chapter 12: Conversation System

**Part 2 Contents (Chapters 13-16)** 
Chapter 13: AI Agent & Tools (AgentKit, file management tools)
Chapter 14: WebContainer, Terminal & Preview
Chapter 15: GitHub Import & Export
Chapter 16: AI Project Creation & Final Polish


**Getting Started**
Prerequisites
Node.js 20.09+
npm or pnpm

**Accounts needed:**
Clerk - Authentication
Convex - Database
Inngest - Background jobs
Anthropic or Google AI Studio - AI API (one required)
Firecrawl - Web scraping (optional)
Sentry - Error tracking (optional)

**Installation**
cd polaris
Install dependencies:

npm install
Set up environment variables:

cp .env.example .env.local
Configure your .env.local with the required keys:

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Convex
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
POLARIS_CONVEX_INTERNAL_KEY=  # Generate a random string

# AI Provider (choose one)
ANTHROPIC_API_KEY=        # Preferred - Claude Sonnet 4
GOOGLE_GENERATIVE_AI_API_KEY=  # Free alternative - Gemini 2.0 Flash

# Firecrawl (optional)
FIRECRAWL_API_KEY=

# Sentry (optional)
SENTRY_DSN=
Start the Convex development server:

npx convex dev
In a new terminal, start the Next.js development server:

npm run dev
In another terminal, start the Inngest dev server:

npx inngest-cli@latest dev
Open http://localhost:3000

**Project Structure**
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── messages/      # Conversation API
│   │   ├── suggestion/    # AI suggestions
│   │   └── quick-edit/    # Cmd+K editing
│   └── projects/          # Project pages
├── components/            # Shared components
│   ├── ui/               # shadcn/ui components
│   └── ai-elements/      # AI conversation components
├── features/
│   ├── auth/             # Authentication
│   ├── conversations/    # AI chat system
│   ├── editor/           # CodeMirror setup
│   │   └── extensions/   # Custom extensions
│   ├── preview/          # WebContainer (Part 2)
│   └── projects/         # Project management
├── inngest/              # Inngest client
└── lib/                  # Utilities

convex/
├── schema.ts             # Database schema
├── projects.ts           # Project queries/mutations
├── files.ts              # File operations
├── conversations.ts      # Conversation operations
└── system.ts             # Internal API for Inngest


**Features Implemented (Part 1)**
Editor
Syntax highlighting for JS, TS, CSS, HTML, JSON, Markdown, Python
Line numbers and code folding
Minimap overview
Bracket matching and indentation guides
Multi-cursor editing
AI Features
Real-time code suggestions with ghost text
Quick edit with Cmd+K (select code + natural language instruction)
Selection tooltip for quick actions
Conversation sidebar with message history
File Management
File explorer with folder hierarchy
Create, rename, delete files and folders
VSCode-style file icons
Tab-based file navigation
Auto-save with debouncing
Real-time
Convex-powered instant updates
Optimistic UI updates
Background job processing with Inngest
Current Limitations (Part 1)

**These features are planned for Part 2:**
AI agent cannot yet modify files (mock response only)
No message cancellation
No past conversations dialog
No code preview/execution
No GitHub integration
No AI project generation

**Scripts**
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint

Part 1: Chapters 1-12
Part 2: Chapters 13-16

Authentication
Clerk - Add authentication to your app in minutes, not days.

Database
Convex - The real-time database that makes building collaborative apps a breeze.

Background Jobs
Inngest - Reliable background jobs and event-driven workflows.

Web Scraping
Firecrawl - Turn any website into LLM-ready data.

Error Tracking
Sentry - See what's broken and fix it fast.

Code Review
CodeRabbit - AI-powered code reviews that catch bugs before your users do.

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


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


