/** Site-wide settings: author, AI disclosure, licence. Edit here to change them everywhere. */
export const SITE = {
  name: 'ICT Networks',
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
      en: 'This platform was developed by Asil Aksoy, ICT Teacher, with the assistance of artificial intelligence (Claude, by Anthropic). The teacher planned the project, set the requirements and directed the content; AI was used to write the code and to draft the learning material and questions.',
      tr: 'Bu platform, ICT Öğretmeni Asil Aksoy tarafından yapay zekâ (Anthropic’in Claude modeli) desteğiyle geliştirilmiştir. Projeyi öğretmen planlamış, gereksinimleri belirlemiş ve içeriği yönlendirmiştir; kodun yazılmasında ve ders içeriği ile soruların taslağının hazırlanmasında yapay zekâ kullanılmıştır.',
    },
  },
}
