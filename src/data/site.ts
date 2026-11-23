/** Site-wide settings: author, AI disclosure, licence. Edit here to change them everywhere. */
export const SITE = {
  name: 'ICT Interactive',
  author: { name: 'Asil Aksoy', role: { en: 'ICT Teacher', tr: 'ICT Öğretmeni' } },
  year: 2026,
  repoUrl: 'https://github.com/asilaksoy/ict-networks',
  license: {
    name: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    summary: {
      en: 'You may use, share and adapt this material for free, for non-commercial purposes, if you credit the author and share your adaptations under the same licence.',
      tr: 'Bu materyali yazarını belirterek, ticari olmayan amaçlarla ücretsiz kullanabilir, paylaşabilir ve uyarlayabilirsiniz; uyarlamalar aynı lisansla paylaşılmalıdır.',
    },
  },
  ai: {
    short: {
      en: 'Developed by Asil Aksoy, ICT Teacher, with AI assistance.',
      tr: 'ICT Öğretmeni Asil Aksoy tarafından yapay zekâ desteğiyle geliştirilmiştir.',
    },
    long: {
      en: 'I developed this site with the help of artificial intelligence (Claude, by Anthropic). The code and the first drafts of the explanations and questions were produced with AI; I decided the topics, the structure and the changes.',
      tr: 'Bu siteyi yapay zekâ (Anthropic’in Claude modeli) desteğiyle geliştirdim. Kod ile konu anlatımlarının ve soruların ilk taslakları yapay zekâ ile hazırlandı; konuları, yapıyı ve yapılacak değişiklikleri ben belirledim.',
    },
  },
}
