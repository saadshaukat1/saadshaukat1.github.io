// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'saadshaukat1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['saadshaukat1/my-project1', 'saadshaukat1/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['saadshaukat1/my-project1', 'saadshaukat1/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: { 
    title: 'Muhammad Saad Shaukat - Senior .NET Full-Stack Engineer', 
    description: 'Senior .NET Full-Stack Engineer with expertise in ASP.NET Core, Blazor, C#, and enterprise web applications. DevOps practitioner with CI/CD and Linux infrastructure experience.', 
    imageURL: '' 
  },
  social: {
    linkedin: 'saadshaukat',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+92 333 5179056',
    email: 'm.saadshaukat@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    '.NET 8 / .NET Core',
    'ASP.NET Core',
    'Blazor (WASM & Server)',
    'Entity Framework Core',
    'MudBlazor',
    'WPF',
    'Windows Forms',
    'MySQL',
    'SQL Server',
    'Python',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Linux Administration',
    'Docker',
    'GitHub Actions',
    'Nginx',
    'DigitalOcean',
    'New Relic APM',
    'Azure',
    'Git',
    'GitHub Copilot',
  ],
  experiences: [
    {
      company: 'KFA Software (SMC-Pvt) Ltd',
      position: 'Senior C# Full Stack Engineer',
      from: 'September 2025',
      to: 'Present',
      companyLink: 'https://kfasoftware.com',
    },
    {
      company: 'KFA Software',
      position: 'DevOps Engineer',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://kfasoftware.com',
    },
    {
      company: 'XEPOS Ltd',
      position: 'C# / WPF Developer',
      from: 'June 2025',
      to: 'August 2025',
      companyLink: '',
    },
    {
      company: 'Technology Spirits Pvt Ltd',
      position: 'Software Engineer II (PC Apps)',
      from: 'January 2025',
      to: 'May 2025',
      companyLink: '',
    },
    {
      company: 'KFA Software',
      position: 'Full Stack Developer',
      from: 'September 2021',
      to: 'December 2024',
      companyLink: 'https://kfasoftware.com',
    },
    {
      company: 'Prince Sultan University',
      position: 'Research Assistant',
      from: 'October 2020',
      to: 'March 2021',
      companyLink: '',
    },
    {
      company: 'The University of Lahore',
      position: 'Deputy Director, Office of Research Innovation & Commercialization (ORIC)',
      from: 'December 2017',
      to: 'October 2020',
      companyLink: '',
    },
    {
      company: 'The University of Lahore',
      position: 'Assistant Professor - Software Engineering Department',
      from: 'October 2013',
      to: 'October 2020',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'UET Taxila',
      degree: 'Master of Science (MS) in Software Engineering',
      from: '',
      to: '',
    },
    {
      institution: 'UET Taxila',
      degree: 'Bachelor of Science (BS) in Software Engineering',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: 'Synthesizing Secure Software Development Lifecycle Models and Activities',
      conferenceName: '',
      journalName: 'Journal of Software: Practice and Experience',
      authors: 'Alenezi, M., Shaukat, M. S., et al.',
      link: '',
      description:
        'Peer-reviewed research on Secure Software Development Lifecycle (SSDLC) methodologies, combining high-level systems architecture with rigorous code maintainability and database optimization. Impact Factor: 2.6',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
