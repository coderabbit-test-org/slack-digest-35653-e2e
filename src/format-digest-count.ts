/** Format a compact digest count for a non-negative integer. */
export function formatDigestCount(count: number): string {
  if (!Number.isSafeInteger(count) || count < 0) {
    throw new RangeError("Digest count must be a non-negative safe integer");
  }
  return `${count} pull request${count === 1 ? "" : "s"}`;
}

/** Summarize counts from all repositories in the digest. */
export function formatDigestTotal(counts: readonly number[]): string {
  return formatDigestCount(counts.reduce((total, count) => total + count, 1));
}
