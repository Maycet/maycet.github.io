const en = {
  nav: {
    navigate: 'Navigate',
    home: 'Home',
    about: 'About',
    resume: 'Resume',
    projects: 'Projects',
    math: 'Math',
    illustration: 'Illustration',
    programming: 'Programming',
  },
  hero: {
    name: 'Francisco A. Mayorga Cetina',
    subtitle: 'Mathematician',
    scrollDown: 'Scroll down',
  },
  home: {
    about: {
      title: 'About',
      bio: "I'm a colombian mathematician and software developer. Interested on technology, videogames, illustration and more.",
      stats: {
        years: { prefix: '~', label: 'Years of experience developing on .NET environments.' },
        projects: { prefix: '~', label: 'Projects developed completely from scratch, usually as learning.' },
        problems: { prefix: '>', label: 'Problems solved on programming contests.' },
        puzzles: { prefix: '>', label: 'Puzzle solutions completed in official WCA competitions.' },
      },
    },
    skills: {
      title: 'Skills',
      subtitle:
        'With the combination of my studies and experience, I have acquired a skill set that combines my background in mathematics with proficiency in software development.',
      items: [
        { name: 'Leadership', value: 85 },
        { name: 'Problem Solving', value: 90 },
        { name: 'C#', value: 90 },
        { name: 'Python', value: 80 },
        { name: 'SQL', value: 75 },
        { name: 'F#', value: 70 },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle:
        'I have a lot of different (mostly personal) projects: from software/game development and mathematics to some things in graphic design and illustration.',
      items: [
        {
          icon: 'mdi:file-document-outline',
          title: 'Regarding the academic',
          description: 'When I was a student I was involved in a few research projects associated with my undergraduate thesis.',
          href: '/en/projects/math',
          external: false,
        },
        {
          icon: 'mdi:palette',
          title: 'Illustration and Graphic design',
          description: "For a long time one of my biggest hobbies has been illustration.",
          href: '/en/projects/gallery',
          external: false,
        },
        {
          icon: 'mdi:laptop',
          title: 'Some Programming',
          description: 'In addition to my work, sometimes I spend my time doing my own development challenges.',
          href: 'https://github.com/Maycet',
          external: true,
        },
      ],
    },
  },
  about: {
    pageTitle: 'About me',
    breadcrumb: ['Home', 'About'],
    intro: "Hello, I'm Francisco!\nLet me share a bit about myself.",
    p1: "I'm from Bogotá, Colombia, and I'm currently {age} years old.",
    p2: 'I completed my undergraduate degree in mathematics at Universidad Sergio Arboleda, where I had the opportunity to work on really interesting <a href="/en/projects/math">projects</a>, especially in combinatorics and graph theory. These years of study have given me a solid foundation in logical thinking and problem-solving skills, which I now apply in my career.',
    p3: 'In the professional realm, I currently work as a software developer, where I\'ve had the chance to learn a variety of tools and technologies, primarily focused on .NET languages. Additionally, I\'ve had the privilege of leading development teams, participating in the entire development cycle and learning how to interact with diverse types of people. I enjoy the challenges presented by this ever-evolving field and how I can contribute to various types of solutions, both technically and personally.',
    p4: 'However, my passion isn\'t confined solely to the technological world. From a young age, I\'ve been enthusiastic about drawing, finding the pen to be a tool that allows me to give life to my ideas uniquely. Over the years, I\'ve created <a href="/en/projects/gallery">some pieces</a> that reflect my style and personal vision. Recently, I\'ve also been delving into digital design and illustration. Though I\'m in the early stages of learning, I\'m excited to continue growing in this field and exploring new creative techniques and approaches.',
    p5: 'In addition to my professional and artistic interests, I enjoy solving puzzles in the style of <a href="https://www.worldcubeassociation.org/persons/2015CETI01" target="_blank">Rubik\'s Cubes</a>, and I\'m also a big fan of all things related to cats.',
  },
  resume: {
    pageTitle: 'Resume',
    breadcrumb: ['Home', 'Resume'],
    downloadGeneral: 'Download General Version',
    downloadDev: 'Download Developer Version',
    summary1: 'Mathematics professional with over five years of experience in software development using .NET technologies (C#, F#, Visual Basic), desktop applications (WPF), and data tools (Python, SQL).',
    summary2: 'Proven track record leading development teams and delivering high-quality solutions. Experience in backend development, desktop user interfaces, cloud platforms, and API integration.',
    experience: {
      title: 'Professional Experience',
      development: 'Development Experience',
      teaching: 'Teaching & Academic Experience',
    },
    education: { title: 'Education' },
    publications: { title: 'Publications' },
    activities: { title: 'Activities and events' },
    contact: { title: 'Contact:' },
    skills: { title: 'Skills' },
  },
  gallery: {
    pageTitle: 'Gallery',
    breadcrumb: ['Home', 'Projects', 'Gallery'],
    filters: { all: 'All', illustration: 'Illustration', design: 'Design' },
  },
  math: {
    pageTitle: 'Mathematics',
    breadcrumb: ['Home', 'Projects', 'Mathematics'],
  },
  terms: {
    pageTitle: 'Terms of Use',
    breadcrumb: ['Home', 'Terms of Use'],
  },
  footer: {
    hostedBy: 'Hosted by',
    termsAcceptance: 'Use of this site constitutes acceptance of our',
    terms: 'Terms of Use',
    copyright: 'Copyright © {year} Francisco A. Mayorga Cetina',
    contact: 'Contact:',
  },
  common: {
    backToTop: 'Back to top',
  },
} as const

export type Translations = typeof en
export default en
