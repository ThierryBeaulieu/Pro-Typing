import { CertificationWrapper } from '../interfaces/CertificationsInterface';

const majorCertifications: CertificationWrapper[] = [
  {
    name: 'Advanced',
    certifications: [
      {
        name: 'Average Typist',
        range: '40-55 words per minute',
        description:
          'This range includes 40-50% of all people. This certification ensures that you are typing as fast as the average person.',
        wordsPerMinute: [40, 45, 50, 55],
      },
      {
        name: 'Certified Typist',
        range: '60-75 words per minute',
        description:
          'This range includes 25-30% of people. At this level, you are faster than the majority but not yet at the professional level.',
        wordsPerMinute: [60, 65, 70, 75],
      },
      {
        name: 'Proficient Typist',
        range: '80-95 words per minute',
        description:
          'This range includes about 15-20% of people. You are well above average and typing at a proficient speed.',
        wordsPerMinute: [80, 85, 90, 95],
      },
      {
        name: 'Advanced Typist',
        range: '100-115 words per minute',
        description:
          'Only about 10-15% of typists achieve this level. You are entering the professional category.',
        wordsPerMinute: [100, 105, 110, 115],
      },
      {
        name: 'Expert Typist',
        range: '120-135 words per minute',
        description:
          'This level is reached by roughly 5-10% of typists. You are a high-level typist with exceptional speed.',
        wordsPerMinute: [120, 125, 130, 135],
      },
      {
        name: 'Master Typist',
        range: '140-155 words per minute',
        description:
          'Less than 5% of typists achieve this level. You are among the fastest typists in the world.',
        wordsPerMinute: [140, 145, 150, 155],
      },
      {
        name: 'Elite Typist',
        range: '160-175 words per minute',
        description:
          'Only 2-3% of typists can reach this level. You are a highly skilled typist, nearing the top of the field.',
        wordsPerMinute: [160, 165, 170, 175],
      },
      {
        name: 'Distinguished Typist',
        range: '180-195 words per minute',
        description:
          'Achieved by less than 1% of typists. You are among the elite in typing speed.',
        wordsPerMinute: [180, 185, 190, 195],
      },
      {
        name: 'Virtuoso Typist',
        range: '200+ words per minute',
        description:
          'Only a small fraction of typists can hit this speed. You are in the top 0.1% of typists.',
        wordsPerMinute: [200, 205, 210, 215],
      },
    ],
  },
  {
    name: 'Master',
    certifications: [
      {
        name: 'Grandmaster Typist',
        range: '220-235 words per minute',
        description:
          'This level is incredibly rare, reached by only a handful of typists worldwide.',
        wordsPerMinute: [220, 225, 230, 235],
      },
      {
        name: 'Pinnacle Typist',
        range: '240-255 words per minute',
        description:
          'Only the most exceptional typists can achieve this speed, a rare feat.',
        wordsPerMinute: [240, 245, 250, 255],
      },
      {
        name: 'Legend Typist',
        range: '260-275 words per minute',
        description:
          'A level that is achieved by a very tiny number of typists globally, placing you in the realm of legends.',
        wordsPerMinute: [260, 265, 270, 275],
      },
    ],
  },
  {
    name: 'World Record',
    certifications: [
      {
        name: 'Hall of Fame Typist',
        range: '280-295 words per minute',
        description:
          'Only the absolute best typists in the world reach this category, and it is reserved for the fastest typists of all time.',
        wordsPerMinute: [280, 285, 290, 295],
      },
      {
        name: 'World-Class Typist',
        range: '300-315 words per minute',
        description:
          'A truly exceptional typist, a level only a very small group of people achieve.',
        wordsPerMinute: [300, 305, 310, 315],
      },
      {
        name: 'Record-Breaking Typist',
        range: '320-335 words per minute',
        description:
          'This level is reserved for typists who have set world records. It is a rare and outstanding achievement.',
        wordsPerMinute: [320, 325, 330, 335],
      },
    ],
  },
];

export default majorCertifications;
