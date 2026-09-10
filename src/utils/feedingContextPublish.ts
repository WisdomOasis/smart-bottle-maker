export type FeedingContextSaveStage = "validation" | "publish" | "readback";

export class FeedingContextSaveError extends Error {
  readonly stage: FeedingContextSaveStage;

  readonly detail?: unknown;

  constructor(stage: FeedingContextSaveStage, detail?: unknown) {
    super(stage);
    this.name = "FeedingContextSaveError";
    this.stage = stage;
    this.detail = detail;
  }
}

export const feedingContextSaveMessage = (error: unknown): string => {
  if (error instanceof FeedingContextSaveError) {
    if (error.stage === "readback") {
      return "The device didn’t confirm the baby profile.";
    }
    if (error.stage === "publish") {
      return "Couldn’t send this baby profile to the device.";
    }
  }
  return "Couldn’t save this baby profile. Try again.";
};

export const publishFeedingContext = async (input: {
  context: string;
  isOnline: boolean;
  publish: (payload: Record<string, unknown>) => Promise<unknown>;
}): Promise<{ contextLength: number; result: unknown }> => {
  if (!input.isOnline || !input.context || input.context.length > 512) {
    throw new FeedingContextSaveError("validation");
  }

  try {
    const result = await input.publish({
      feeding_record_context: input.context,
    });
    if (result === false) throw new FeedingContextSaveError("publish", result);
    return { contextLength: input.context.length, result };
  } catch (error) {
    if (error instanceof FeedingContextSaveError) throw error;
    throw new FeedingContextSaveError("publish", error);
  }
};
