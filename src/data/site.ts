// Site-wide metadata and links, used by the layout and the contact page
// so the same URLs are never written twice.

export const siteName = 'erffanhub-00';
export const siteDescription =
  'Learner, builder, and in love with breaking things to understand them.';
export const authorName = 'Erffan';
export const authorEmail = 'erffanhub@gmail.com';

export interface SocialLink {
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/erffanhub-00' },
  { label: 'Gist', url: 'https://gist.github.com/erffanhub-00' },
  { label: 'X', url: 'https://x.com/Erffanhub_00' },
  { label: 'Telegram', url: 'https://t.me/erffan_hub' },
  { label: 'Email', url: `mailto:${authorEmail}` },
  { label: 'RSS', url: '/rss.xml' },
];
