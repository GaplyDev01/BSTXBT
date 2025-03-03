# BlockSwarms Development Guide

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type check with TypeScript
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test -- -t "test name"` - Run a specific test by name
- `npm run test -- tests/path/to/specific.test.js` - Run a specific test file
- `npm run format` - Format code with Prettier

## Code Style Guidelines
- **Architecture**: Clean architecture with domain-driven design (core → application → infrastructure → presentation)
- **Component Names**: PascalCase for components (e.g., `ConnectWalletButton.tsx`), camelCase for utilities
- **File Organization**: Feature-first organization within clean architecture layers
- **Typing**: Strong TypeScript typing with explicit interfaces, generics, and JSDoc comments
- **Imports**: Group external libraries first, then internal imports using module aliases (@/core/*, @/infrastructure/*, etc.)
- **Error Handling**: Use try/catch with specific error types, logger.error for reporting, provide fallback UI
- **Testing**: Jest with React Testing Library, descriptive test names, comprehensive mocking
- **Components**: React functional components with explicit prop interfaces and return types
- **State Management**: Zustand for global state, React hooks for local state
- **Styling**: TailwindCSS with class-variance-authority for component variants

## Project Structure
- **src/core**: Domain models, interfaces, business logic
- **src/application**: Services and use cases that orchestrate domain logic
- **src/infrastructure**: External services implementations, adapters, tools
- **src/presentation**: React components, hooks, contexts for UI
- **src/shared**: Cross-cutting concerns like logging, utilities, and types
- **tests**: Integration and unit tests with the .test.{ts,tsx,js,jsx} extension

## Cursor Rules
Detailed development guidelines are available in the `.cursor/rules/` directory:
- `blockswarms-rules.md` - General coding standards
- `testing-rules.md` - Testing patterns and practices
- `solana-integration.md` - Blockchain integration guidelines
- `ai-integration.md` - AI provider integration standards
- `consolidation-guidelines.md` - Codebase consolidation and organization

This Next.js App Router project follows clean architecture principles with strict TypeScript checking. All imports should use the path aliases defined in tsconfig.json. Follow existing patterns when adding new code.