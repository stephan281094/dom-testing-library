export interface waitForOptions {
  /**
   * Restrict your query using a container, defaults to `document.body`.
   */
  container?: HTMLElement
  /**
   * Maximum wait time in milliseconds, defaults to 1000ms.
   */
  timeout?: number
  /**
   * Interval in milliseconds, defaults to 50ms.
   */
  interval?: number
  onTimeout?: (error: Error) => Error
  mutationObserverOptions?: MutationObserverInit
}

export function waitFor<T>(
  callback: () => Promise<T> | T,
  options?: waitForOptions,
): Promise<T>
