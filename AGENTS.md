# AGENTS.md - Coding Agent Instructions

## Project Overview

Next.js 16 portfolio website using React 19, TypeScript, and Tailwind CSS v4.

## Build/Lint Commands

```bash
# Install dependencies
bun install

# Development server (runs on localhost:3000)
bun dev

# Production build
bun build

# Start production server
bun start

# Run ESLint
bun lint

# Lint specific files
bun lint app/page.tsx

# Note: No testing framework configured yet
```

## Technology Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Runtime**: React 19.2.0
- **Language**: TypeScript 5+ (strict mode)
- **Styling**: Tailwind CSS v4 + DaisyUI v5
- **Package Manager**: Bun
- **Linting**: ESLint v9 with flat config

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - all strict TypeScript rules apply
- Use explicit type annotations for function parameters and return types
- Type imports: `import type { Metadata } from "next"`
- Prefer `interface` over `type` for object shapes
- Use `Readonly<T>` for immutable props

### Naming Conventions

- **Components**: PascalCase (e.g., `RootLayout`, `HomePage`)
- **Files**: kebab-case for pages, PascalCase for components (e.g., `page.tsx`, `UserCard.tsx`)
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase with descriptive names

### Imports

- React/Next imports first
- Third-party imports second
- Local imports last, sorted by path depth
- Use path alias `@/*` for imports from project root
- CSS imports: `import "./globals.css"`

### Component Structure

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function ComponentName({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // JSX here
  );
}
```

### Styling (Tailwind v4)

- Tailwind configured via PostCSS (no tailwind.config file)
- DaisyUI plugin enabled in `globals.css`
- Use semantic color classes (e.g., `bg-primary`, `text-base-content`)
- Prefer composition over custom CSS
- Global styles in `app/globals.css` using `@import "tailwindcss"`

### Error Handling

- Use Next.js error boundaries for route errors
- Prefer early returns for conditional rendering
- Type all async function returns explicitly

### File Organization

```
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── globals.css     # Global styles
├── favicon.ico     # Site favicon
└── [routes]/       # Route directories
```

## Configuration Files

- `eslint.config.mjs` - ESLint flat config (v9+)
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript paths: `@/*` maps to `./*`
- `postcss.config.mjs` - PostCSS with Tailwind v4
- `bun.lock` - Bun lockfile

## Notes

- No testing framework configured (add Jest/Vitest if needed)
- No Prettier configured (rely on ESLint)
- No CI/CD pipelines configured
- No Cursor/Copilot rules exist yet
