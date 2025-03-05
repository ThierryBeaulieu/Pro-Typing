interface MajorCertification {
  name: string;
  subCertifications: Certification[];
}

interface Certification {
  name: string;
  wordsPerMinute: number[];
}

const majorCertifications: MajorCertification[] = [
  {
    name: 'Advanced',
    subCertifications: [
      { name: 'Associate Typist', wordsPerMinute: [40, 45, 50, 55] },
      { name: 'Certified Typist', wordsPerMinute: [60, 65, 70, 75] },
      { name: 'Proficient Typist', wordsPerMinute: [80, 85, 90, 95] },
    ],
  },
  {
    name: 'Professional',
    subCertifications: [
      { name: 'Advanced Typist', wordsPerMinute: [100, 105, 110, 115] },
      { name: 'Expert Typist', wordsPerMinute: [120, 125, 130, 135] },
      { name: 'Master Typist', wordsPerMinute: [140, 145, 150, 155] },
    ],
  },
  {
    name: 'Elite',
    subCertifications: [
      { name: 'Elite Typist', wordsPerMinute: [160, 165, 170, 175] },
      { name: 'Distinguished Typist', wordsPerMinute: [180, 185, 190, 195] },
      { name: 'Virtuoso Typist', wordsPerMinute: [200, 205, 210, 215] },
    ],
  },
  {
    name: 'Grandmaster',
    subCertifications: [
      { name: 'Grandmaster Typist', wordsPerMinute: [220, 225, 230, 235] },
      { name: 'Pinnacle Typist', wordsPerMinute: [240, 245, 250, 255] },
      { name: 'Legend Typist', wordsPerMinute: [260, 265, 270, 275] },
    ],
  },
  {
    name: 'Hall of Fame',
    subCertifications: [
      { name: 'Hall of Fame Typist', wordsPerMinute: [280, 285, 290, 295] },
      { name: 'World-Class Typist', wordsPerMinute: [300, 305, 310, 315] },
      { name: 'Record-Breaking Typist', wordsPerMinute: [320, 325, 330, 335] },
    ],
  },
];

export default majorCertifications;
