# Defiant Integrations - Premium Consulting Website

## Overview

This is a premium consulting website for Defiant Integrations, designed to rival McKinsey & Company's digital authority and sophistication. The application is built as a modern full-stack web application using React, Express, and TypeScript with a focus on creating a high-end consulting firm digital presence.

## Recent Changes

- **January 22, 2025**: Created dedicated HVAC industry page with comprehensive content about smart technology solutions for HVAC businesses. Added routing and navigation integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot reloading with Vite integration in development mode

### Design System
- **Color Palette**: Premium consulting aesthetic with navy (#1a2332), charcoal (#2d3748), electric blue (#0066cc), and cyan accents (#00bcd4)
- **Typography**: 
  - Headlines: Serif fonts (Playfair Display) for elegance
  - Body: Clean sans-serif (Inter) for readability
  - Code: Monospace (JetBrains Mono) for technical elements
- **Components**: Comprehensive UI library with consistent styling and behavior

## Key Components

### Navigation System
- **Mega Menu**: Complex navigation with industry-specific dropdowns
- **Responsive Design**: Mobile-first approach with collapsible navigation
- **Industry Categories**: Organized by business types (Trades, Consumer Services, Professional Services, etc.)
- **Industry Pages**: Dedicated pages for specific industries (e.g., HVAC) with detailed service offerings

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Management**: Drizzle ORM with type-safe database operations
- **Migrations**: Database schema versioning with drizzle-kit

### UI Components
- **Radix Primitives**: Accessible, unstyled components as foundation
- **Custom Components**: Branded components following design system
- **Responsive Components**: Mobile-optimized layouts and interactions

## Data Flow

### Client-Server Communication
1. **API Routes**: RESTful endpoints prefixed with `/api`
2. **Query Management**: TanStack Query handles caching, synchronization, and error states
3. **Type Safety**: Shared TypeScript types between client and server
4. **Error Handling**: Centralized error handling with user-friendly messages

### Development Workflow
1. **Hot Reloading**: Vite development server with instant updates
2. **Type Checking**: TypeScript compiler ensures type safety across the stack
3. **Database Operations**: Drizzle ORM provides type-safe database queries
4. **Build Process**: Separate client and server builds for production deployment

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for server builds
- **vite**: Fast build tool and development server
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay

### Authentication & Sessions
- **connect-pg-simple**: PostgreSQL session store
- **express-session**: Session management middleware

## Deployment Strategy

### Production Build
1. **Client Build**: Vite bundles React application into static assets
2. **Server Build**: esbuild compiles Express server to single JavaScript file
3. **Database**: Drizzle migrations ensure schema is up-to-date
4. **Environment**: Production configuration with optimized builds

### Development Environment
1. **Concurrent Processes**: Client and server run simultaneously
2. **Database Sync**: `db:push` command synchronizes schema changes
3. **Hot Reloading**: Instant feedback during development
4. **Error Handling**: Runtime error overlays for debugging

### Key Architectural Decisions

#### Database Choice
- **PostgreSQL**: Chosen for reliability, ACID compliance, and complex query support
- **Neon Database**: Serverless PostgreSQL for scalability and cost efficiency
- **Drizzle ORM**: Type-safe queries with excellent TypeScript integration

#### Frontend Framework
- **React**: Mature ecosystem with extensive component libraries
- **TypeScript**: Type safety reduces runtime errors and improves developer experience
- **Tailwind CSS**: Utility-first approach enables rapid UI development

#### State Management
- **TanStack Query**: Specialized for server state with caching and synchronization
- **Local State**: React's built-in state management for UI-specific state

#### Component Library
- **Radix UI**: Accessible, unstyled primitives provide solid foundation
- **shadcn/ui**: Pre-built components following modern design patterns
- **Custom Components**: Branded components specific to Defiant Integrations

This architecture provides a solid foundation for a premium consulting website with room for growth and scalability while maintaining type safety and developer experience.