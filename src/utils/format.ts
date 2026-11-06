// Shared date formatting, so post lists and post pages never format
// the same date in two different ways.

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatLongDate(date: Date, lang: 'en' | 'fa' = 'en'): string {
  // fa-IR renders the date in the Jalali calendar, which is what
  // Persian readers expect; en-US renders the Gregorian date.
  const locale = lang === 'fa' ? 'fa-IR' : 'en-US';
  return date.toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
