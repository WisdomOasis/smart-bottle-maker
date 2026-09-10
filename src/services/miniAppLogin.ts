import { login } from "@ray-js/ray";
import { createMiniAppAuthorizationCoordinator } from "@/services/miniAppAuthorization";

const requestPlatformLoginCode = () =>
  new Promise<string>((resolve, reject) => {
    login({
      success: (result: { code?: string }) => resolve(result?.code || ""),
      fail: reject,
    });
  });

const coordinator = createMiniAppAuthorizationCoordinator(
  requestPlatformLoginCode
);

export const runWithMiniAppAuthorization = <T>(
  operation: (code: string) => Promise<T>
): Promise<T> => coordinator.run(operation);
