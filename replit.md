# Defiant Integrations - Premium Consulting Website

## Overview
This project is a premium consulting website for Defiant Integrations, aiming to establish a digital presence comparable to leading firms like McKinsey & Company. It's a modern full-stack web application designed to showcase high-end consulting services, focusing on various industry-specific solutions and strategic capabilities. The project features comprehensive lead capture functionality integrated with EspoCRM for automated lead processing across all major pages and interactions.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with a custom design system
- **UI Components**: Radix UI primitives supplemented by shadcn/ui
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Session Management**: PostgreSQL-backed sessions using `connect-pg-simple`

### Design System
- **Color Palette**: Premium consulting aesthetic utilizing navy, charcoal, electric blue, and cyan accents.
- **Typography**: Serif fonts (Playfair Display) for headlines, clean sans-serif (Inter) for body text, and monospace (JetBrains Mono) for technical elements.
- **Components**: A comprehensive UI library ensuring consistent styling and behavior.

### Key Features and Components
- **Navigation System**: Features a mega menu with industry-specific dropdowns, designed to be responsive and mobile-first. Industry categories include Trades, Consumer Services, Retail, and Professional Services, with 27 dedicated industry pages.
- **Lead Capture System**: Comprehensive modal-based lead capture functionality integrated across all major pages with direct EspoCRM integration for automated lead processing. Features multi-step forms with proper validation and error handling.
- **Database Schema**: Includes basic user management with username/password authentication. Schema managed with Drizzle ORM, supporting type-safe operations and migrations.
- **UI Components**: Built upon accessible Radix UI primitives and custom branded components with enhanced hover animations and interactive elements.
- **Data Flow**: RESTful API endpoints, TanStack Query for client-server communication (caching, synchronization, error states), and shared TypeScript types for end-to-end type safety.

### Recent Major Updates (January 2025)
- **Lead Capture Rollout**: Successfully implemented lead capture modal functionality across 10+ key pages including home, ai-strategy-development, technology-evaluation, data-architecture, process-automation, books, proof-of-concepts, and ai-adoption-article
- **EspoCRM Integration**: Full integration with EspoCRM API for automatic lead processing with proper field mapping (firstName, lastName, emailAddress, accountName, title, opportunityAmount)
- **Footer Functionality**: Updated footer buttons across all pages to trigger appropriate modals (lead capture for Contact/Careers, subscription modal for Subscribe, proper navigation for Blog)
- **UI Enhancements**: Added hover animations to blog cards, improved modal close button visibility, and enhanced user experience across interactive elements

### Key Architectural Decisions
- **Database**: PostgreSQL with Neon Database for reliability, scalability, and cost efficiency, combined with Drizzle ORM for type-safe queries.
- **Frontend Framework**: React and TypeScript chosen for their mature ecosystem, type safety, and development experience, with Tailwind CSS for rapid UI development.
- **State Management**: TanStack Query is used specifically for server state, while React's built-in hooks manage local UI state.
- **Component Library**: A combination of Radix UI for foundational accessibility, shadcn/ui for modern patterns, and custom components for branding.

## External Dependencies

### Core Dependencies
- `@neondatabase/serverless`: For serverless PostgreSQL connections.
- `drizzle-orm`: Type-safe database ORM.
- `@tanstack/react-query`: For server state management.
- `@radix-ui/*`: Accessible UI primitives.
- `tailwindcss`: Utility-first CSS framework.

### Authentication & Sessions
- `connect-pg-simple`: PostgreSQL session store.
- `express-session`: Session management middleware.