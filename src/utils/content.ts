import { Variant } from './types';

export const navbarData = {
  logo: '/images/logoWithText.png',
  navlinks: [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Books',
      link: '/book',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ],
  button: {
    btnText: 'Explore Our Books',
    btnLink: '#',
  },
};

export const footerData = {
  title: 'Newsletter Signup',
  title2: 'Stay Updated',
  description:
    'Join out mailing list and stay updated on book releases, behind-the-scenes content, and special offers including:',
  description2:
    'Join our mailing list to receive updates on new releases, author events, and special offers!',
  content: [
    '- Early access to new books',
    '- Exclusive artwork reveals',
    '- Author updates and insights',
    '- Educational resource downloads',
    '- Special event invitations',
  ],
  emailPlaceholder: 'Your Email Address',
  btnText: 'Subscribe',
  btnLink: '#',
  image: '/images/footerImage.png',
  rights: '© 2024 Creative Nudge Press LLC. All rights reserved.',
  element: '/svg/starWithGlasses.svg',
};

export const aboutPageData = {
  herosection: {
    title: 'About Creative Nudge Press',
    description: 'Discover our story, mission, and the passion that drives us.',
    backgroundImg: '/images/commonHeroBg.png',
    leftIcon: '/svg/star.svg',
    rightIcon: '/svg/book.svg',
  },
  ourStory: {
    title: 'Our Story',
    description: [
      "Creative Nudge Press emerged from a deeply personal mission in 2024. Our founder recognized a gap in children's literature – a need for stories that not only entertain but also empower young readers to face life's challenges with courage and resilience.",
      "What started as a dream is becoming reality with our inaugural book launch on December 1st, 2024. This milestone represents more than just publishing a book; it's about bringing stories to life that reflect diverse experiences and help children navigate their own journeys with confidence.",
      'As a smaller independent publishing house, every aspect of Creative Nudge Press is infused with personal dedication and care – from story development to collaboration with talented illustrators and editors. Our small size is our strength, allowing us to maintain intimate connections with our stories and readers.',
    ],
    sideImage: '/images/ourStorySecondImg.png',
    imgOrder: 2,
    textOrder: 1,
    textLeftIcon: '/svg/star.svg',
    textRightIcon: '/svg/sparrow.svg',
    imgRightIcon: '/svg/rainbow.svg',
  },
  outMissionAndVision: {
    title: 'Our Mission & Vision ',
    description: 'Our Commitment to a Better Future',
    content: [
      {
        icon: '/svg/mission.svg',
        subTitle: 'Mission',
        subDescription: `Creative Nudge Press is on a mission to transform lives through literature. We publish books that capture the richness of human experiences, inspire readers to pursue their passions, and provide the knowledge needed to overcome obstacles and achieve success.`,
      },
      {
        icon: '/svg/vision.svg',
        subTitle: 'Vision',
        subDescription: ` We envision a world where every individual has access to literature that empowers them to grow, succeed, and embrace their unique journey.`,
      },
    ],
    elements: [
      {
        icon: '/svg/starWithRainbow.svg',
        width: 186.17,
        height: 168.38,
      },
      {
        icon: '/svg/rainbow2.svg',
        width: 153,
        height: 90.71,
      },
    ],
  },
  ourFoundation: {
    title: 'Our Foundation',
    isDescriptionTop: false,
    description: `Today, Creative Nudge Press creates books that do more than entertain—they empower young readers to embrace their unique journeys while developing the resilience to face life's challenges. Each story is carefully crafted to spark joy, inspire courage, and remind children that they are never alone in their experiences.`,
    cards: [
      {
        id: 1,
        image: '/svg/Inspiration.svg',
        title: 'Inspiration',
        desc: 'We create content that sparks creativity and motivation in our readers.',
      },
      {
        id: 2,
        image: '/svg/empowerment.svg',
        title: 'Empowerment',
        desc: 'Our books provide tools and knowledge for personal growth and success.',
      },
      {
        id: 3,
        image: '/svg/authenticity.svg',
        title: 'Authenticity',
        desc: 'We ensure all our stories and information are genuine and impactful.',
      },
      {
        id: 4,
        image: '/svg/excellence.svg',
        title: 'Excellence',
        desc: 'We are committed to maintaining high-quality publishing standards in all our work.',
      },
    ],
  },
  profile: {
    image: '/images/profile.png',
    name: 'Karina Vunnam',
    description1: 'The Heart Behind Creative Nudge Press',
    description2: [
      `Creative Nudge Press was born from a deeply personal understanding of literature's transformative power. Growing up between Mumbai, Singapore, and the United States, our founder Karina Vunnam experienced firsthand how stories can bridge worlds, build resilience, and illuminate paths forward`,
      `"Books were my constant companions during times of profound change," Karina shares. "From reading on the streets of Mumbai to discovering Project Gutenberg's treasures, I found that great literature has no boundaries—it speaks to the universal human experience while celebrating our unique journeys."`,
      `This belief in the democratization of reading shaped Creative Nudge Press's core mission. Through her journey from the streets of Mumbai to Stanford University, Karina witnessed how access to education and literature can transform lives. As both a software developer and publisher, she works to make meaningful stories accessible to all children, believing that every young reader deserves to see themselves in books while discovering worlds beyond their own.`,
    ],
    expertise: [
      {
        icon: '/svg/author.svg',
        title: 'Author',
      },
      {
        icon: '/svg/publisher.svg',
        title: 'Publisher',
      },
      {
        icon: '/svg/editor.svg',
        title: 'Editor',
      },
      {
        icon: '/svg/creativeDirector.svg',
        title: 'Creative Director',
      },
      {
        icon: '/svg/communityBuilder.svg',
        title: 'Community Builder',
      },
      {
        icon: '/svg/visionary.svg',
        title: 'Visionary',
      },
    ],
    element: '/svg/sparrowYellow.svg',
  },
};

export const HomeHeroData = {
  HeroSection: {
    title: 'Transforming Lives Through Literature',
    image: '/images/homeBg.png',
    description:
      'Capturing the richness of human experiences, inspiring passions, and providing the knowledge to overcome obstacles.',
    slogan: '"Spark inspiration, fuel aspiration, ignite motivation."',
    button: {
      btnlink: '',
      label: 'Explore Our Books',
      variant: '',
    },
  },
  OurBooksSection: {
    title: 'Our Books',
    description: 'Explore books you can read now and those coming soon.',
    cards: [
      {
        id: 1,
        title: 'Mumbai Street Siblings Series',
        image: '/images/mumbaiStreetSiblingsSeries.png',
        description: [
          'Follow the heartwarming adventures of three siblings living on the streets of Mumbai, as they navigate life with resilience and love.',
          ` Coming soon: "Amit's Sweet Surprise"`,
        ],
      },
      {
        id: 1,
        title: 'The Day I Met... Series',
        image: '/images/theDaySeries.png',
        description: [
          "An empowering series helping children face life's challenges with courage and resilience. Each book introduces a metaphorical obstacle, teaching valuable lessons through fantastical, whimsical adventures.",
          'Join our young heroes as they conquer the Abyss, scale the Wall, and weather the Tempest',
        ],
      },
      {
        id: 1,
        title: 'Mumbai Street Siblings Series',
        image: '/images/upcomingProjects.png',
        description: [
          "We're working on exciting new books to inspire and empower readers of all ages. Stay tuned for announcements about our upcoming releases!",
          'Sign up for our newsletter to get updates',
        ],
      },
    ],
  },
  WhatWeDoSection: {
    title: 'What We Do?',
    description: 'Explore books you can read now and those coming soon.',
    isDescriptionTop: true,
    cards: [
      {
        id: 1,
        image: '/svg/books.svg',
        title: "Children's Books",
        desc: 'We create captivating stories that reflect diverse experiences, helping young readers explore the world and discover their potential.',
      },
      {
        id: 2,
        image: '/svg/leaf.svg',
        title: 'Nonfiction',
        desc: 'Our nonfiction titles provide practical, motivational guidance to empower readers in their personal and professional lives.',
      },
      {
        id: 3,
        image: '/svg/user.svg',
        title: 'Author Support',
        desc: 'We nurture new voices and support authors throughout their publishing journey, from manuscript to marketing.',
      },
      {
        id: 4,
        image: '/svg/heart.svg',
        title: 'Community Engagement',
        desc: 'Through blogs, events, and resources, we foster a vibrant community of readers and writers passionate about transformative literature.',
      },
    ],
  },
  JoinOurCreativeCommunitySection: {
    image: '/svg/rainbow.svg',
    title: 'Join Our Creative Community',
    description:
      "Are you a writer of children's stories or nonfiction looking for a partner in your publishing journey? We're always seeking new and interesting voices to join our creative family.",
    subdescritpion:
      "If you have a manuscript that aligns with our mission to inspire, educate, and empower readers, we'd love to hear from you!",
    button: {
      btnlink: '',
      label: 'Contact Us About Your Manuscript',
      variant: '',
    },
  },
};

export const Book = {
  herosection: {
    title: 'Our Books',
    description:
      'Inspiring stories and empowering knowledge for readers of all ages.',
    backgroundImg: '/images/commonHeroBg.png',
    leftIcon: '/svg/bird.svg',
    rightIcon: '/svg/plane.svg',
  },
  TransformativeLiterature: {
    title: 'Transformative Literature for All Ages',
    description: [
      "At Creative Nudge Press, we publish books that inspire, educate, and empower. Our catalog includes heartwarming children's series and insightful nonfiction guides, all designed to spark creativity, foster personal growth, and provide valuable knowledge.",
    ],
    sideImage: '/images/transformative.png',
    imgOrder: 2,
    textOrder: 1,
    textLeftIcon: '/svg/star.svg',
    textRightIcon: '/svg/sparrow.svg',
  },
  ChildrenBooks: {
    heading: "Children's Books",
    image: '/images/commingsoon.png',
    title: 'Mumbai Street Siblings Series',
    desc: 'Follow the heartwarming adventures of three resilient siblings navigating life on the streets of Mumbai. This series celebrates the power of family, hope, and the indomitable human spirit.',
    title1: "Amit's Sweet Surprise",
    desc1:
      'Join Amit, the youngest of the siblings, as he follows the tantalizing scent of jalebi through the bustling streets of Mumbai. This adventure teaches valuable lessons about curiosity, family bonds, and the unexpected joys found in everyday life.',
    title2: 'Key Themes:',
    desc2: 'Sibling love, curiosity, Mumbai street life, resilience',
    icon: '/svg/watch.svg',
    title3: 'More Adventures Coming Soon!',
    desc3:
      'Stay tuned for more exciting stories featuring Anita, Sunita, and Amit as they explore their city, overcome challenges, and discover the magic in everyday moments.',
  },
  TheDayIMetSeries: {
    title: 'The Day I Met... Series',
    desc: "A captivating trilogy that empowers children to overcome life's challenges with courage and resilience. Each book introduces a metaphorical obstacle, teaching valuable lessons through fantastical, surrealist adventures filled with whimsy and drama.",
    title1: 'Key Themes:',
    desc1: ' Courage, Resilience, Personal Growth, Overcoming Obstacles',
    image: '/images/thedayimetseries.png',
    cards: [
      {
        icon: '/svg/compass.svg',
        title: 'The Day I Met the Abyss',
        desc: 'Leap into possibility!',
      },
      {
        icon: '/svg/wall.svg',
        title: 'The Day I Met the Wall',
        desc: 'Climb towards growth!',
      },
      {
        icon: '/svg/cloud.svg',
        title: 'The Day I Met the Tempest',
        desc: 'Weather any storm!',
      },
    ],
  },
  OurMission: {
    title: 'Aligned with Our Mission',
    description:
      "Every book we publish is carefully crafted to align with our mission of transforming lives through literature. Here's how our books embody our core values:",
    isDescriptionTop: true,
    cards: [
      {
        id: 1,
        image: '/svg/Inspiration.svg',
        title: 'Inspiration',
        desc: 'Our stories spark creativity and motivation, encouraging readers to dream big and pursue their passions.',
      },
      {
        id: 2,
        image: '/svg/empowerment.svg',
        title: 'Empowerment',
        desc: 'We provide tools and knowledge for personal growth, equipping readers to overcome obstacles and achieve success.',
      },
      {
        id: 3,
        image: '/svg/user.svg',
        title: 'Diversity',
        desc: 'Our books reflect a wide range of experiences, promoting understanding and empathy across cultures and backgrounds.',
      },
      {
        id: 4,
        image: '/svg/excellence.svg',
        title: 'Excellence',
        desc: 'We maintain high-quality publishing standards, ensuring each book delivers meaningful content and a delightful reading experience.',
      },
    ],
  },
  Nonfiction: {
    heading: 'Nonfiction',
    image: '/images/nonfiction.png',
    title: 'Transferred: Guide to Community College & Transferring',
    description:
      'An inspiring and practical guide for community college students aiming to transfer to top universities. This comprehensive resource provides step-by-step advice, real-life success stories, and actionable strategies to help students achieve their academic dreams.',
    points: [
      'Navigating the transfer process',
      'Building a competitive application',
      'Securing financial aid and scholarships',
      'Overcoming common challenges',
      'Success strategies for after transfer',
    ],
  },
};

export const blogPageData = {
  herosection: {
    title: 'Our Blog',
    description: 'Inspiration, Insights, and Ideas for Readers and Writers',
    backgroundImg: '/images/commonHeroBg.png',
    leftIcon: '/svg/openedBook.svg',
    rightIcon: '/svg/starWithGlasses.svg',
  },
  articles: {
    title: 'Featured Articles',
    description: 'Explore our Featured Articles you can read now.',
    blogs: [
      {
        id: 1,
        image: '/images/article1.png',
        title: "5 Strategies to Overcome Writer's Block",
        description:
          'Discover practical tips to reignite your creativity and get your writing flowing again...',
        btnText: 'Read More',
      },
      {
        id: 2,
        image: '/images/article2.png',
        title: "Behind the Scenes: Creating 'The Day I Met the Abyss'",
        description:
          'Take a journey with us as we explore the inspiration and process behind our latest book...',
        btnText: 'Read More',
      },
      {
        id: 3,
        image: '/images/article3.png',
        title: 'Cultivating Resilience in Children Through Literature',
        description:
          "Learn how stories can empower children to face life's challenges with courage and confidence...",
        btnText: 'Read More',
      },
    ],
  },
  exploreOurContent: {
    title: 'Explore Our Content',
    description: 'Explore our Content & Articles you can read now.',
    cards: [
      {
        cardTitle: 'Inspiration & Motivation',
        articles: [
          'Inspiration & Motivation',
          'Embracing Failure as a Stepping Stone',
          'The Power of Positive Thinking in Writing',
        ],
        textColor: '#FB8500',
      },
      {
        cardTitle: 'Writing & Publishing Tips',
        articles: [
          'Crafting Compelling Characters',
          'The Art of Self-Editing',
          'Navigating the Publishing Industry',
        ],
        textColor: '#083375',
      },
      {
        cardTitle: 'Behind the Scenes',
        articles: [
          'A Day in the Life of an Editor',
          'From Manuscript to Bookshelf: The Journey of a Book',
          'Collaborating with Illustrators',
        ],
        textColor: '#219EBC',
      },
      {
        cardTitle: 'Educational Content',
        articles: [
          'Fostering a Love for Reading in Children',
          "The Impact of Diversity in Children's Literature",
          'Using Stories to Teach Emotional Intelligence',
        ],
        textColor: '#ED2626',
      },
    ],
  },
  educationResources: {
    title: 'Educational Resources',
    cards: [
      {
        cardTitle: 'For Parents and Educators',
        description:
          'Download our free guides on using Creative Nudge Press books in educational settings:',
        descriptionDetails: [
          'Discussion Guide: The Mumbai Street Siblings Series',
          'Activity Workbook: The Day I Met... Series',
          'Lesson Plans: Fostering Resilience Through Stories',
        ],
        button: {
          btnText: 'Download Now',
          btnLink: '#',
        },
      },
      {
        cardTitle: 'For Readers',
        description:
          'Enhance your reading experience with these complementary materials:',
        descriptionDetails: [
          'Character Exploration Worksheets',
          'Reflection Journal Prompts',
          'Creative Writing Exercises Inspired by Our Books',
        ],
        button: {
          btnText: 'Access Resources',
          btnLink: '#',
          variant: Variant.OUTLINED,
        },
      },
    ],
    elements: [
      { source: '/svg/plane.svg', width: 145, height: 94.04, alt: 'plane' },
      {
        source: '/svg/openedBook.svg',
        width: 101.61,
        height: 84,
        alt: 'openedBook',
      },
    ],
  },
};

export const contactPageData = {
  herosection: {
    title: 'Contact Us',
    description:
      "We'd love to hear from you! Get in touch with Creative Nudge Press.",
    backgroundImg: '/images/commonHeroBg.png',
    leftIcon: '/svg/star.svg',
    rightIcon: '/svg/sparrowYellow.svg',
  },
  formData: {
    name: {
      label: 'name',
      placeholder: 'Enter Your Name',
    },
    email: {
      label: 'email',
      type: 'email',
      placeholder: 'Enter Your Email',
    },
    subject: {
      label: 'subject',
      placeholder: 'Enter the Subject',
    },
    message: {
      label: 'message',
      placeholder: 'Enter the Message',
    },

    btnText: 'Send Message',
    btnLink: '#',
    elements: [
      {
        source: '/svg/rainbow2.svg',
        width: 153,
        height: 90.71,
        alt: 'rainbow',
      },
      {
        source: '/svg/pencil.svg',
        width: 193.98,
        height: 200,
        alt: 'pencil',
      },
      {
        source: '/svg/multiplebooks.svg',
        width: 281.54,
        height: 202.37,
        alt: 'books',
      },
    ],
    leftElement: '/svg/plane.svg',
    rightElement: '/svg/sparrow.svg',
  },
  socialLinks: [
    {
      title: 'Reach Us Directly',
      links: [
        {
          icon: '/svg/email.svg',
        },
      ],
      description: 'contact@creativenudge.net',
    },
    {
      title: 'Connect with Us',
      links: [
        {
          icon: '/svg/x.svg',
          link: '#',
          alt: 'twitter',
        },
        {
          icon: '/svg/facebook.svg',
          link: '#',
          alt: 'facebook',
        },
        {
          icon: '/svg/instagram.svg',
          link: '#',
          alt: 'instagram',
        },
        {
          icon: '/svg/linkedIn.svg',
          link: '#',
          alt: 'linkedIn',
        },
      ],
      description: 'Follow us for updates and engage with our content!',
    },
  ],
};

export const detailBooksData = [
  {
    name: 'Mumbai Street Siblings Series',
    herosection: {
      title: "Journey Through Mumbai's Heart",
      description:
        "Follow three remarkable siblings as they turn Mumbai's bustling streets into a world of adventure, resilience, and love.",
      backgroundImg: '/images/bookdetailherobg.png',
      leftIcon: '/svg/book.svg',
      rightIcon: '/svg/rainbow2.svg',
    },
    seriesOverview: {
      heading: 'Series Overview',
      desc: "Welcome to the world of the Mumbai Street Siblings, where everyday challenges become extraordinary adventures. Meet Anita (12), Sunita (6), and Amit (4) – three siblings whose unbreakable bond helps them navigate life on Mumbai's vibrant streets with courage, creativity, and joy",
      cards: [
        {
          icon: '/svg/starboost.svg',
          title: 'Key Series Themes',
          points: [
            'Sibling love and protection',
            'Resilience in challenging circumstances',
            ' Indian culture and daily life',
            'Problem-solving and creativity',
            'Hope and perseverance',
            'Community and connection',
          ],
        },
        {
          icon: '/svg/profileuser.svg',
          title: 'Reading Level & Audience',
          points: [
            'Age Range: 3-8 years',
            'Format: Picture Book',
            ' Pages: 32 pages each',
            'Perfect for: Families, schools, and libraries seeking diverse, meaningful stories',
          ],
        },
      ],
    },
    currentBook: {
      heading: 'Current Book',
      image: '/images/sweetsurprise.png',
      title: "Amit's Sweet Surprise",
      points: [
        'Status: Coming Soon (December 2024)',
        'First book in series',
        'ISBN: 978-1-966193-00-5',
      ],
      title1: 'Book Descriptions',
      desc: "When little Amit follows his nose chasing the irresistible scent of jalebi through Mumbai's winding streets, his adventure launches a heartwarming tale of sibling love, determination, and the unexpected joys found in everyday life. Watch as Anita and Sunita work together to help their brother's sweet dream come true, discovering that the greatest treasures often come from the simplest moments shared together.",
      button: {
        btnText: 'Order Now',
        btnLink: '#',
      },
      cards: [
        {
          icon: '/svg/authentic.svg',
          title: 'Authentic',
          desc: 'Authentic representation of Mumbai street life',
        },
        {
          icon: '/svg/illustrations.svg',
          title: 'Illustrations',
          desc: "Rich, vibrant illustrations capturing the city's energy",
        },
        {
          icon: '/svg/word.svg',
          title: 'Word',
          desc: 'Hindi/Marathi words naturally woven into the story',
        },
        {
          icon: '/svg/discussion.svg',
          title: 'Discussion',
          desc: 'Discussion guide for families and educators',
        },
        {
          icon: '/svg/cultural.svg',
          title: 'Cultural',
          desc: 'Cultural notes about Mumbai and Indian sweets',
        },
      ],
    },

    upcomingBooks: {
      title: 'Upcoming Books',
      bgColor: 'cyanBlue',
      cards: [
        {
          id: 1,
          title: "Amit's Sweet Surprise",
          description: [
            'When the monsoon rains arrive in Mumbai, the siblings must use their creativity and resourcefulness to find shelter. A story about adaptability, teamwork, and finding comfort in each other despite challenging weather.',
          ],
          sideImage: '/images/monsoonsheltermumbai.png',
          imgOrder: 1,
          textOrder: 2,
          isTextBgWhite: false,
          leftIcon: '/svg/redsparrow.svg',
          rightIcon: '/svg/redbooks.svg',

          keymessage: {
            key: '────  Upcoming Books  ──── ',
            value: '',
          },
        },
        {
          id: 2,
          title: 'Diwali Delights',
          description: [
            "Experience the magic of India's festival of lights through the eyes of Anita, Sunita, and Amit as they find unique ways to participate in the celebrations. A tale of community, joy, and creating light in unexpected places.",
          ],
          sideImage: '/images/diwalidelights.png',
          imgOrder: 2,
          textOrder: 1,
          isTextBgWhite: true,
          leftIcon: '/svg/starhappy.svg',

          keymessage: {
            key: '────  Upcoming Books  ────',
            value: '',
          },
        },
        {
          id: 3,
          title: 'Karina Vunnam',
          description: [
            "Bringing Mumbai's Heart to Life",
            "This series springs from the vibrant memories of Karina Vunnam's own childhood adventures on the streets of Mumbai with her siblings. Growing up, Karina treasured the sweet moments shared with her family, even in challenging circumstances. Recognizing how stories about street children often focus solely on hardship, she felt called to share a different perspective—one filled with joy, love, and the everyday magic of childhood.",
            '"I wanted to show that beauty exists everywhere, even in unexpected places," says Karina.',
            `"These stories celebrate the resilience of children and the power of sibling bonds while giving voice to a community often overlooked in children's literature."`,
          ],
          sideImage: '/images/karinavunnam.png',
          imgOrder: 1,
          textOrder: 2,
          isTextBgWhite: false,

          rightIcon: '/svg/sparrowYellow.svg',

          keymessage: {
            key: '',
            value: '',
          },
        },
        {
          id: 4,
          title: 'Trần Hà Trang',
          description: [
            "Capturing Mumbai's Magic",
            "Hà Trang, an independent artist from Vietnam, brings the vibrant world of Mumbai to life through her enchanting illustrations. Her passion for art, which began in childhood, has evolved into a celebrated career in book cover and children's book illustration.",
            `"This story touched my heart deeply," Ha Trang shares. "While illustrating Amit's Sweet Surprise, I discovered not just India's rich visual culture, but the universal language of family love and childhood wonder. Each illustration is crafted to capture both the energy of Mumbai's streets and the tender moments between siblings."`,
          ],
          sideImage: '/images/mumbaitrang.png',
          imgOrder: 2,
          textOrder: 1,
          isTextBgWhite: true,
          leftIcon: '/svg/sparrow.svg',

          keymessage: {
            key: '',
            value: '',
          },
        },
      ],
    },
    socialData: {
      title: "Follow Ha Trang's artistic journey",
      lefticon: '/svg/star.svg',
      righticon: '/svg/plane.svg',
      icons: [
        {
          id: 1,
          title: 'Instagram',
          username: '@Tahtag.art',
          icon: '/svg/instagram.svg',
          link: 'https://www.instagram.com',
        },
        {
          id: 2,
          title: 'Behance',
          username: 'Tahtag',
          icon: '/svg/behance.svg',
          link: 'https://www.behance.net',
        },
      ],
    },
    behindTheScenes: {
      title: 'Behind the Scenes',
      lefticon: '/svg/sparrow.svg',
      righticon: '/svg/redsparrow.svg',
      centericon: '/svg/rainbow.svg',
      images: [
        '/images/scenes1.png',
        '/images/scenes2.png',
        '/images/scenes3.png',
      ],
    },
  },
  {
    name: 'The Day I Met... Series',
    herosection: {
      title: "Face Life's Challenges with Wonder",
      description:
        'A magical trilogy helping children discover their inner strength through fantastical adventures.',
      backgroundImg: '/images/thDayIMetTheSeriesHero.png',
      leftIcon: '/svg/blueplane.svg',
      rightIcon: '/svg/starhappy.svg',
    },
    seriesOverview: {
      heading: 'Series Overview',
      desc: "The Day I Met... series transforms life's biggest challenges into enchanting adventures. Through surreal landscapes and metaphorical companions, young readers learn to face their fears, overcome obstacles, and weather emotional storms with courage and resilience.",
      cards: [
        {
          icon: '/svg/starboost.svg',
          title: 'Key Series Themes',
          points: [
            '    Surrealist artwork and imaginative storytelling',
            'Therapeutic storytelling approach',
            'Discussion guides for parents and educators',
            'Activities for emotional development',
            ' Age-appropriate exploration of complex feelings',
          ],
        },
        {
          icon: '/svg/profileuser.svg',
          title: 'Reading Level & Audience',
          points: [
            ' Age Range: 4-9 years',
            'Format: Picture Books',
            'Pages: 32 pages each',
            ' Perfect for: Families, counselors, and educators looking to discuss emotional challenges',
          ],
        },
      ],
    },

    upcomingBooks: {
      title: 'The Books',
      bgColor: 'yellowish',
      cards: [
        {
          id: 1,
          title: 'The Day I Met the Abyss',
          description: [
            'Face the unknown with courage! When a child encounters a swirling void of uncertainty, they learn that what seems scary at first might hold unexpected possibilities. A story about turning fear into discovery.',
          ],
          sideImage: '/images/theDayIMetTheAbyss.png',
          imgOrder: 1,
          textOrder: 2,
          isTextBgWhite: true,

          keymessage: {
            key: 'Key Message:',
            value: '"Leap into possibility!"',
          },
        },
        {
          id: 2,
          title: 'The Day I Met the Wall',
          description: [
            'Sometimes we all face obstacles that seem too big to overcome. Join our hero as they learn to break down big challenges into smaller steps, discovering that every wall can become a climbing adventure.',
          ],
          sideImage: '/images/theDayIMetTheWall.png',
          imgOrder: 2,
          textOrder: 1,
          isTextBgWhite: false,

          keymessage: {
            key: 'Key Message:',
            value: '"Climb towards growth!"',
          },
        },
        {
          id: 3,
          title: 'The Day I Met the Tempest',
          description: [
            'Weather any storm with resilience! Experience how our protagonist learns to find calm within chaos and understand that all storms, no matter how fierce, eventually pass.',
          ],
          sideImage: '/images/theDayIMetTheTempest.png',
          imgOrder: 1,
          textOrder: 2,
          isTextBgWhite: true,

          keymessage: {
            key: 'Key Message:',
            value: '"Weather any storm!"',
          },
        },
      ],
    },
    moreInformations: {
      title: 'More Informations',
      desc: 'Another informations about The Day I Met... Series',
      cards: [
        {
          icon: '/svg/kickstarter.svg',
          title: 'Kickstarter Coming Soon!',
          desc: 'Be part of bringing these magical stories to life! Our Kickstarter campaign will feature:',
          points: [
            ' - Early bird specials',
            '- Exclusive artwork',
            '- Behind-the-scenes content',
            '- Special edition copies',
            ' - Educational resources',
            '- Community engagement opportunities',
          ],
        },
        {
          icon: '/svg/educationalResources.svg',
          title: 'Educational Resources',
          desc: 'Each book comes with:',
          points: [
            '   - Detailed discussion guides',
            '- Emotion exploration activities',
            '- Mindfulness exercises',
            ' - Creative writing prompts',
            '- Art therapy suggestions',
            '- Classroom activity ideas',
          ],
        },
        {
          icon: '/svg/impact.svg',
          title: 'Impact',
          desc: 'The Day I Met... series helps children:',
          points: [
            '  - Develop emotional vocabulary',
            ' - Build resilience and coping skills',
            '- Understand complex feelings',
            ' - Practice problem-solving',
            '- Boost self-confidence',
            '- Connect with others through shared experiences',
          ],
        },
      ],
    },
  },
];
