type ProfileSession = {
  session: string;
  expiresAt: number;
  children: { id: number }[];
};

/** A single refresh covers both local expiration and a server-expired response. */
export const finalizeProfileSession = async (input: {
  prepared: ProfileSession | null;
  childId: number;
  refresh: () => Promise<ProfileSession>;
  finalize: (session: string, childId: number) => Promise<string>;
  now?: () => number;
}): Promise<string> => {
  const now = input.now ?? (() => Date.now() / 1000);
  let { prepared } = input;
  let refreshed = false;
  const refresh = async () => {
    refreshed = true;
    prepared = await input.refresh();
  };
  if (
    !prepared?.session ||
    !Number.isFinite(prepared.expiresAt) ||
    prepared.expiresAt <= now()
  ) {
    await refresh();
  }
  const finalize = () => {
    if (!prepared?.children.some((child) => child.id === input.childId)) {
      throw new Error("profile_unavailable");
    }
    return input.finalize(prepared.session, input.childId);
  };
  try {
    return await finalize();
  } catch (error) {
    if (
      refreshed ||
      !(error instanceof Error) ||
      error.message !== "provisioning session has expired"
    )
      throw error;
    await refresh();
    return finalize();
  }
};
