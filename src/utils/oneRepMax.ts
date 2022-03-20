/**
 * 1-rep-max estimators. Multiple formulas because they diverge at high reps.
 * Default: average of Epley + Brzycki (good balance up to ~10 reps).
 */

export function epley(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
}

export function brzycki(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * (36 / (37 - reps));
}

export function lombardi(weight: number, reps: number): number {
  return weight * Math.pow(reps, 0.1);
}

export function estimate1RM(weight: number, reps: number): number {
  if (reps <= 0 || weight <= 0) return 0;
  if (reps === 1) return weight;
  if (reps > 12) {
    // Formulas degrade above 12 reps — clamp
    reps = 12;
  }
  return Math.round((epley(weight, reps) + brzycki(weight, reps)) / 2);
}

export function volumePerSet(weight: number, reps: number): number {
  return Math.max(0, weight) * Math.max(0, reps);
}
