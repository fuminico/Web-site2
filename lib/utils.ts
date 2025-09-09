
type ClassValue = string | number | null | boolean | undefined | { [key: string]: boolean } | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      if (input.length) {
        const inner = cn(...input);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (typeof input === 'object') {
      for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key) && input[key]) {
          classes.push(key);
        }
      }
    }
  }

  // This simplified implementation joins classes and removes basic duplicates.
  // It is NOT a replacement for tailwind-merge, which intelligently handles
  // conflicting Tailwind CSS classes.
  const classSet = new Set(classes);
  return Array.from(classSet).join(' ');
}
