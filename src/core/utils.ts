import type { ConfirmDialogConfig } from './types';

/**
 * Resolves a condition value (boolean or function returning boolean)
 *
 * @param condition - Boolean value or function
 * @returns Resolved boolean value
 */
export function resolveCondition(condition: boolean | (() => boolean)): boolean {
  return typeof condition === 'function' ? condition() : condition;
}

type Thenable = {
  then: (...args: unknown[]) => unknown;
};

const hasThen = (value: unknown): value is Thenable =>
  typeof value === 'object' && value !== null && 'then' in value;

/**
 * Checks if a value behaves like a Promise (thenable)
 */
export function isThenable<T>(value: unknown): value is PromiseLike<T> {
  if (!hasThen(value)) {
    return false;
  }
  return typeof value.then === 'function';
}

export type ConfirmResultSync = {
  kind: 'sync';
  confirmed: boolean;
};

export type ConfirmResultAsync = {
  kind: 'async';
  promise: Promise<boolean>;
};

export type ConfirmResult = ConfirmResultSync | ConfirmResultAsync;

/**
 * Normalizes custom confirm result into sync or async branch.
 */
export function resolveConfirmResult(
  message: string,
  onConfirm: ((message: string) => boolean | PromiseLike<boolean>) | undefined,
  fallbackConfirm: (message: string) => boolean
): ConfirmResult {
  if (!onConfirm) {
    return { kind: 'sync', confirmed: fallbackConfirm(message) };
  }

  const result = onConfirm(message);
  if (isThenable<boolean>(result)) {
    return { kind: 'async', promise: Promise.resolve(result) };
  }

  return { kind: 'sync', confirmed: result };
}

/**
 * Generates a unique blocker ID based on scope and timestamp
 *
 * @param prefix - Prefix for the ID
 * @param scope - Optional scope
 * @returns Unique blocker ID
 */
export function createBlockerId(prefix: string, scope?: string | string[]): string {
  const scopePart = scope ? `-${Array.isArray(scope) ? scope.join('-') : scope}` : '';
  const timestamp = Date.now();
  return `${prefix}${scopePart}-${timestamp}`;
}

/**
 * Creates default confirmation dialog configuration
 *
 * @param message - Custom message or undefined for default
 * @param title - Custom title or undefined for default
 * @param confirmText - Custom confirm button text or undefined for default
 * @param cancelText - Custom cancel button text or undefined for default
 * @returns Complete dialog configuration
 */
export function createDialogConfig(
  message?: string,
  title?: string,
  confirmText?: string,
  cancelText?: string
): ConfirmDialogConfig {
  return {
    title: title ?? 'Confirm Navigation',
    message: message ?? 'Are you sure you want to leave? Changes you made may not be saved.',
    confirmText: confirmText ?? 'Leave',
    cancelText: cancelText ?? 'Stay',
  };
}

/**
 * Checks if a value is defined and not empty
 *
 * @param value - Value to check
 * @returns True if value is defined and not empty
 */
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

/**
 * Normalizes scope to an array
 *
 * @param scope - String or array of strings
 * @returns Array of scope strings
 */
export function normalizeScope(scope: string | string[] | undefined): string[] {
  if (!scope) {
    return [];
  }
  return Array.isArray(scope) ? scope : [scope];
}
