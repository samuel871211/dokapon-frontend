export function getRandomIntInclusive(min: number, max: number) {
  [min, max] = [Math.ceil(Math.min(min, max)), Math.floor(Math.max(min, max))];
  return Math.floor(Math.random() * (max - min + 1) + min);
}
