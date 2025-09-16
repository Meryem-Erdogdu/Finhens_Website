# Financial Health Analytics Platform

## Overview

This is a full-stack financial health analytics platform called "Finhens" that provides AI-powered insights for small and mid-sized enterprises (SMEs). The application features a modern React frontend with a comprehensive landing page showcasing financial health monitoring capabilities, dashboard analytics, and pricing plans. The backend is built with Express.js and uses PostgreSQL with Drizzle ORM for data persistence. The platform is designed to help businesses make data-driven financial decisions through real-time monitoring and advanced analytics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the main application framework
- **Vite** as the build tool and development server for fast development experience
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and API caching
- **Shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with CSS variables for theming
- **Dark theme** design system with custom color palette and glass morphism effects

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **ESM modules** throughout the codebase for modern JavaScript standards
- **Middleware-based request logging** with timing and response capture
- **Error handling middleware** for centralized error management
- **Memory storage interface** with plans for database integration
- **Session management** using connect-pg-simple for PostgreSQL session store

### Database & ORM
- **PostgreSQL** as the primary database (configured via Neon serverless)
- **Drizzle ORM** for type-safe database operations and migrations
- **Drizzle-Zod** integration for automatic schema validation
- **User schema** with username/password authentication structure
- **Migration system** using drizzle-kit for database version control

### Development & Build System
- **Monorepo structure** with shared TypeScript types between client and server
- **Vite development server** with HMR (Hot Module Replacement)
- **ESBuild** for server bundling in production
- **Path aliases** for clean imports (@/, @shared/, @assets/)
- **TypeScript strict mode** with comprehensive type checking

### UI/UX Design Decisions
- **Component-driven architecture** with reusable UI primitives
- **Responsive design** with mobile-first approach
- **Accessibility focus** through Radix UI base components
- **Glass morphism effects** and gradient overlays for modern aesthetic
- **Financial dashboard mockups** showcasing health scores, cash flow, and risk metrics
- **Landing page sections** including hero, features, pricing, and integration displays

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless** - Serverless PostgreSQL database connection
- **drizzle-orm** and **drizzle-zod** - Type-safe ORM with validation
- **@tanstack/react-query** - Server state management and caching
- **wouter** - Lightweight React routing library

### UI Component Libraries
- **@radix-ui/* components** - Accessible component primitives (accordion, dialog, dropdown, etc.)
- **lucide-react** - Icon library for consistent iconography
- **class-variance-authority** - Utility for component variant management
- **tailwindcss** - Utility-first CSS framework

### Development Tools
- **vite** - Build tool and development server
- **tsx** - TypeScript execution for development
- **@replit/vite-plugin-*** - Replit-specific development enhancements

### Authentication & Session Management
- **connect-pg-simple** - PostgreSQL session store for Express sessions
- **crypto** - Node.js built-in for UUID generation and security

### Utility Libraries
- **date-fns** - Date manipulation and formatting
- **clsx** and **tailwind-merge** - Conditional CSS class utilities
- **nanoid** - Unique ID generation
- **cmdk** - Command palette functionality