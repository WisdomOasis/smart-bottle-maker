export const MINIAPP_LOGIN_TIMEOUT_MS = 15000;

export class MiniAppAuthorizationTimeoutError extends Error {
  constructor() {
    super("MiniApp login timed out. Try again.");
    this.name = "MiniAppAuthorizationTimeoutError";
    Object.setPrototypeOf(this, MiniAppAuthorizationTimeoutError.prototype);
  }
}

type LoginCodeRequester = () => Promise<string>;

const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new MiniAppAuthorizationTimeoutError()),
      timeoutMs
    );
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });

export const createMiniAppAuthorizationCoordinator = (
  requestLoginCode: LoginCodeRequester,
  timeoutMs = MINIAPP_LOGIN_TIMEOUT_MS
) => {
  let queue: Promise<void> = Promise.resolve();

  const run = <T>(operation: (code: string) => Promise<T>): Promise<T> => {
    const task = queue.then(async () => {
      const code = (await withTimeout(requestLoginCode(), timeoutMs)).trim();
      if (!code)
        throw new Error("MiniApp login did not return an authorization code");
      return operation(code);
    });
    queue = task.then(
      () => undefined,
      () => undefined
    );
    return task;
  };

  return { run };
};
