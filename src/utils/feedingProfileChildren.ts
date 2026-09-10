export type FeedingChild = { id: number; name: string; imageUrl?: string };

export const parsePreparedChildren = (children: unknown[]): FeedingChild[] =>
  children
    .filter((child): child is Record<string, unknown> =>
      Boolean(child && typeof child === "object")
    )
    .map((child) => ({
      id: Number(child.id),
      name: String(child.name || "Baby"),
      imageUrl:
        typeof child.image_url === "string" && child.image_url.trim()
          ? child.image_url.trim()
          : undefined,
    }))
    .filter((child) => Number.isInteger(child.id) && child.id > 0);
