# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-01-25

### Added

- 🚀 Initial release of `@okyrychenko-dev/react-action-guard-router`
- **React Router v6+ Integration**
  - `useNavigationBlocker` hook for blocking navigation
  - `usePrompt` hook for simple confirmation dialogs
  - Full support for React Router's `useBlocker` API
  - Scope-based and condition-based blocking
- **TanStack Router Integration**
  - `useNavigationBlocker` hook using TanStack Router's history blocking
  - Full support for modern type-safe routing
  - Scope-based and condition-based blocking
- **Next.js Integration**
  - Pages Router support with full navigation blocking (Next.js 9+)
  - App Router support with documented limitations (Next.js 13.4+ for stable support)
  - Separate exports for each router type
- **Core Utilities**
  - `useBeforeUnload` hook for browser unload protection
  - Utility functions for condition resolution and scope handling
  - Shared types and interfaces
- **Features**
  - Automatic integration with `react-action-guard` scope system
  - **Custom Dialog Support** via `onConfirm` callback
    - Support for both synchronous and asynchronous dialog handlers
    - Race condition prevention in React Router adapter with sequence tracking
    - Error logging for debugging Promise rejections
  - **useDialogState Helper Hook**
    - Simplifies custom dialog state management
    - Generic type support for custom message data
    - Promise-based confirmation flow
  - Browser `beforeunload` event protection
  - Customizable confirmation dialogs
  - TypeScript support with full type inference
  - Tree-shakeable with subpath exports
  - Callbacks for block/allow events
  - Automatic cleanup on unmount

- 📚 **Comprehensive Storybook Documentation** (12 interactive stories):
  - **React Router stories** (7 examples):
    - `AsyncConfirm` - Asynchronous confirmation dialogs
    - `CombinedSources` - Combining multiple blocking sources
    - `CustomDialog` - Custom dialog implementations
    - `PrioritizedBlockers` - Priority-based blocking scenarios
    - `ScopeSync` - Multi-component scope synchronization
    - `UsePrompt` - Simple prompt hook usage
    - `WindowConfirm` - Browser native confirmation dialogs
  - **Next.js stories** (2 examples):
    - `NextAppRouterDemo` - App Router navigation blocking
    - `NextPagesRouterDemo` - Pages Router navigation blocking
  - **TanStack Router stories** (1 example):
    - `TanStackRouterDemo` - TanStack Router navigation blocking
  - **Core utilities story**:
    - `BrowserUnload` - Browser unload protection demo
  - **Introduction story** with package overview

- 🧩 **Storybook Components Library** (14 reusable components):
  - `ActionButtons` - Standardized action button layouts
  - `BlockerItem` - Blocker information display with utilities
  - `CodeBlock` - Syntax-highlighted code examples
  - `ConfirmDialog` - Customizable confirmation dialog with CSS
  - `DebugPanel` - Real-time blocker state visualization with CSS
  - `FormField` - Form input components
  - `InfoBox` - Information callouts
  - `MockRouterProvider` - React Router test provider
  - `MockTanStackRouterProvider` - TanStack Router test provider
  - `NavigationSimulator` - Navigation interaction simulator with CSS
  - `StatusDisplay` - Blocking status indicator
  - `StoryContainer` - Story wrapper layout
  - `ScopeSync` - Scope coordination styles (CSS)
  - Shared CSS styles for consistent presentation

### Documentation

- 📖 Comprehensive README with examples for all router types
- 💻 JSDoc comments for all public APIs
- 📚 Usage examples for common scenarios
- 🎨 Custom dialog integration examples (Material-UI, Radix UI)
- 🗺️ Migration guide for different routers
- 📘 Interactive Storybook documentation with live examples

### Testing

- ✅ Full test coverage with vitest
- 🧪 Added `handleConfirmation` utility tests
- 🔬 Enhanced core utility function tests
- 🛠️ Test helpers for all router types

### Development

- 📦 Storybook integration with development scripts (`storybook`, `build-storybook`)
- 🔧 ESLint configuration with `curly: ["error", "all"]` rule
- 🧰 Dev dependencies: Storybook packages, `clsx`, `remark-gfm`

### Requirements

- **Peer Dependencies**:
  - `@okyrychenko-dev/react-action-guard` ^0.7.0
  - `react` ^18.0.0 || ^19.0.0
  - One of: `react-router-dom` ^6.0.0, `@tanstack/react-router` ^1.0.0, or `next` ^9.0.0

[Unreleased]: https://github.com/okyrychenko-dev/react-action-guard-router/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/okyrychenko-dev/react-action-guard-router/releases/tag/v0.1.0
