import type { ArchiveEntry } from "./types";

import { books } from "./books";
import { essays } from "./essays";
import { reviews } from "./reviews";
import { interviews } from "./interviews";
import { newsletters } from "./newsletter";
import { podcasts } from "./podcasts";

export type { ArchiveEntry } from "./types";

export const archive: ArchiveEntry[] = [
  ...books,
  ...essays,
  ...reviews,
  ...interviews,
  ...newsletters,
  ...podcasts,
].sort(
  (a, b) =>
    new Date(b.date).getTime() -
    new Date(a.date).getTime()
);