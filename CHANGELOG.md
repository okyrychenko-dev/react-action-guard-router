# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-03

### Added

- Initial release of `@okyrychenko-dev/react-action-guard-router`
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

### Documentation

- Comprehensive README with examples for all router types
- JSDoc comments for all public APIs
- Usage examples for common scenarios
- Custom dialog integration examples (Material-UI, Radix UI)
- Migration guide for different routers

[0.1.0]: https://github.com/okyrychenko-dev/react-action-guard-router/releases/tag/v0.1.0
