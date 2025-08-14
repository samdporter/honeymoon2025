# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based honeymoon fund website that allows wedding guests to contribute to specific items for a couple's honeymoon. The application displays donation items in categorized grids with progress tracking and integrates with Monzo for payment processing.

## Architecture

### Component Structure
- **Layout Component** (`layout.js`): Main app wrapper with header, footer, and decorative styling
- **Pages**: Simple page components (currently just `Home`)
- **Components**: Reusable UI components organized by functionality
  - `DonationCard`: Individual donation item display with Monzo payment integration
  - `DonationGrid`: Main grid displaying all donation items with filtering and progress tracking
  - `StorySection`: Static content section describing the honeymoon plans

### Data Layer
- **Entities**: JSON schema definitions for data structures
  - `DonationItem`: Defines the structure for honeymoon fund items with categories (accommodation, food_drink, activities, transport, experiences)
- **Data Loading**: `DonationItem.list()` method used to fetch donation items (implementation not visible in current codebase)

### Key Features
- Category-based filtering system with predefined categories
- Progress tracking with visual progress bar showing funding percentage
- Monzo payment integration via deep links
- Responsive design with gradient backgrounds and smooth animations
- Purchase status tracking (items can be marked as purchased)

### Import Paths
The codebase uses path aliases with `@/` prefix for imports:
- `@/components/ui/*`: UI component library (Card, Button, Badge, Skeleton)
- `@/entities/*`: Data entity definitions
- `@/utils`: Utility functions (createPageUrl referenced but not implemented in visible code)

### Styling
- Uses Tailwind CSS with custom gradient color schemes (rose/pink/amber palette)
- Implements glassmorphism effects with backdrop-blur
- Hover animations and smooth transitions throughout
- Mobile-responsive grid layouts

## Build & Development Commands

### Development
- `npm run dev`: Start development server (http://localhost:5173)
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

### Dependencies
- React 18 with Vite build system
- Tailwind CSS for styling
- React Router for routing
- Lucide React for icons

## Development Notes

### Payment Integration
The DonationCard component includes Monzo payment integration. The Monzo URL pattern used is:
```
https://monzo.me/your-monzo-handle/${amount}?description=${description}
```
Note: The current implementation uses a placeholder "your-monzo-handle" that needs to be replaced with actual Monzo details.

### Data Management
- Items are loaded asynchronously through `DonationItem.list("category")`
- State management is handled with React hooks (useState, useEffect)
- No external state management library is currently in use

### Missing Implementation Details
- The `@/utils` module and `createPageUrl` function are referenced but not implemented
- The actual `DonationItem.list()` implementation is not visible
- No build tools, package.json, or development scripts are present in the visible codebase