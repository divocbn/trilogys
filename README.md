# Project Structure Documentation

## Overview

This project appears to be a monorepo containing a web application and shared packages. It uses technologies like Next.js, React, Tailwind CSS, TypeScript, and various tooling configurations.

## Key Components

### Apps

- `web`: The main Next.js web application

### Packages

- `db`: Database utilities and schema
- `ui`: Shared UI components 
- `eslint-config`: ESLint configuration
- `prettier-config`: Prettier configuration
- `tailwind-config`: Tailwind CSS configuration
- `tsconfig`: TypeScript configuration

### Tooling

- ESLint
- Prettier  
- Tailwind CSS
- TypeScript
- GitHub Actions

## Notable Files/Directories

- `apps/web`: Contains the main Next.js web application code
- `packages/db`: Database schema and utilities
- `packages/ui`: Reusable React components
- `tooling`: Contains various tool configurations
- `turbo.json`: Turborepo configuration
- `.github/workflows`: CI pipeline configuration

## Key Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma (for database)
- tRPC
- Turborepo

## Setup and Development

The project uses pnpm for package management. Key scripts:

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm lint`: Run linters
- `pnpm format`: Format code

Environment variables are managed via `.env` files.

## Deployment

The project is configured for deployment on Vercel, with instructions provided in the README.

## Additional Notes

- The project uses a monorepo structure to share code between packages
- Custom UI components and theming are implemented
- There is a focus on type safety with TypeScript usage throughout
- The codebase follows consistent formatting and linting rules

This structure allows for a modular, maintainable codebase with shared configurations and components across the project.