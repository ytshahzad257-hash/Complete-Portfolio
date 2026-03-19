import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  HeartHandshake,
  LifeBuoy,
  Lock,
  Network,
  ShieldCheck,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string;
  detail: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  detail: string;
}

export interface MembershipItem {
  title: string;
  organization: string;
  detail: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

export interface ToolGroup {
  title: string;
  tools: string[];
}

export interface CertificationItem {
  title: string;
  provider: string;
  date: string;
  summary: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  summary: string;
  focus: string[];
  href?: string;
}

export interface PublicationItem {
  title: string;
  source: string;
  year: string;
  doi: string;
}

export interface ActivityItem {
  title: string;
  period: string;
  description: string;
}

export interface SeminarItem {
  title: string;
  organization: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  email: string;
}

export const siteConfig = {
  name: 'Muhammad Shahzad',
  title: 'Cybersecurity Analyst, Research Collaborator, and Secure Systems Professional',
  nationality: 'Pakistani',
  location: 'Islamabad, Pakistan',
  phone: '+92 318 8149647',
  email: 'studyofficial257@gmail.com',
  github: 'https://github.com/ytshahzad257-hash',
  googleScholar: 'https://scholar.google.com/citations?user=VzztNbYAAAAJ&hl=en&oi=sra',
  linkedin: 'https://www.linkedin.com/in/muhammad-shahzad-585b90343',
  researchGate: 'https://www.researchgate.net/profile/Muhammad-Shahzad-Khadim-2',
  summary:
    'Computer Science graduate from Kohat University of Science and Technology specializing in cybersecurity, penetration testing, and secure system design. Experienced in identifying vulnerabilities through OWASP methodologies, securing web applications, and contributing to UK-based remote research collaboration while advancing formal cybersecurity training.',
};

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Education', path: '/education' },
  { label: 'Skills', path: '/skills' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Publications', path: '/publications' },
  { label: 'Activities', path: '/volunteering' },
  { label: 'Contact', path: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteConfig.github },
  { label: 'Google Scholar', href: siteConfig.googleScholar },
  { label: 'LinkedIn', href: siteConfig.linkedin },
  { label: 'ResearchGate', href: siteConfig.researchGate },
];

export const stats: StatItem[] = [
  {
    label: 'Focus Areas',
    value: 'Cybersecurity',
    detail: 'Penetration testing, secure web development, and system hardening.',
  },
  {
    label: 'Academic Standing',
    value: 'BSCS 3.33/4.00',
    detail: 'Kohat University of Science and Technology, 2021-2025.',
  },
  {
    label: 'Research Collaboration',
    value: 'UK-Based',
    detail:
      'Co-authoring publications with researchers connected to the University of Reading.',
  },
];

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Kohat University of Science and Technology',
    period: '2021-2025',
    detail: 'CGPA 3.33/4.00',
  },
  {
    title:
      'Higher Secondary School Certificate (F.Sc. Pre-Engineering)',
    institution: 'Karwan Model College, Kohat',
    period: '2018-2020',
    detail: '899/1100',
  },
  {
    title: 'Secondary School Certificate (SSC - Science Group)',
    institution: 'APSACS Kohat',
    period: '2016-2018',
    detail: '812/1100',
  },
];

export const memberships: MembershipItem[] = [
  {
    title: 'Remote Research Collaboration',
    organization: 'UK-Based',
    detail:
      'Co-author of research publications through remote collaboration with University of Reading researchers.',
  },
  {
    title: 'Officially Enrolled in Cybersecurity Certification Program',
    organization: 'St. Louis Community College, USA',
    detail:
      'Advancing formal cybersecurity knowledge through structured online coursework.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    description:
      'Core capabilities for offensive security analysis and secure system evaluation.',
    items: [
      'Ethical Hacking',
      'Penetration Testing',
      'OWASP Top 10',
      'Vulnerability Assessment',
      'Post-Exploitation',
      'Reporting',
      'Information Gathering',
      'Vulnerability Scanning',
      'Social Engineering Awareness',
    ],
  },
  {
    title: 'Network Security and Support',
    icon: Network,
    description:
      'Infrastructure security, access control, and enterprise support foundations.',
    items: [
      'Network Security',
      'LAN/WAN',
      'Routers',
      'Switches',
      'Firewalls',
      'Active Directory',
    ],
  },
  {
    title: 'Ethical Hacking Tools',
    icon: Lock,
    description:
      'Hands-on toolchain for reconnaissance, exploitation, and validation.',
    items: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Hydra', 'SQLmap'],
  },
  {
    title: 'Network Security Tools',
    icon: Wrench,
    description:
      'Operational tools used for traffic analysis, simulation, and network hardening.',
    items: [
      'Wireshark',
      'Cisco Packet Tracer',
      'pfSense',
      'Windows Server / Active Directory',
      'Linux Network Utilities',
    ],
  },
  {
    title: 'Web Development',
    icon: Code2,
    description:
      'Modern web technologies applied to secure, maintainable application delivery.',
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js'],
  },
  {
    title: 'Personal / Soft Skills',
    icon: Users,
    description:
      'Communication and execution strengths that support research and team delivery.',
    items: ['Leadership', 'Teamwork', 'Problem Solving', 'Time Management'],
  },
];

export const toolGroups: ToolGroup[] = [
  {
    title: 'Security Toolkit',
    tools: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Hydra', 'SQLmap'],
  },
  {
    title: 'Network Stack',
    tools: ['Wireshark', 'Cisco Packet Tracer', 'pfSense', 'LAN/WAN Diagnostics'],
  },
  {
    title: 'Infrastructure',
    tools: ['Windows Server', 'Active Directory', 'Linux Network Utilities'],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'Foundations of Cybersecurity',
    provider: 'Google',
    date: 'March 10, 2025',
    summary:
      'Introduced core security principles, defensive practices, risk awareness, and security operations foundations.',
    href: 'https://coursera.org/share/89c9489f6169ef207c094922e6a746c2',
  },
  {
    title: 'Ethical Hacker',
    provider: 'Cisco NetAcad',
    date: 'March 10, 2025',
    summary:
      'Focused on offensive security concepts, reconnaissance, exploitation paths, and responsible testing workflows.',
    href: 'https://www.credly.com/badges/226285c2-9139-4c3f-baea-d88a4a5a5a88',
  },
  {
    title: 'Network Security and Support',
    provider: 'Cisco NetAcad',
    date: 'March 10, 2025',
    summary:
      'Covered support operations, device security, troubleshooting, and practical network defense concepts.',
    href: 'https://www.credly.com/badges/b261050b-4108-42e4-ba64-288ac7b1e61e',
  },
  {
    title: 'Junior Cybersecurity Analyst',
    provider: 'Cisco NetAcad',
    date: 'October 23, 2025',
    summary:
      'Expanded analytical workflow, event monitoring, vulnerability interpretation, and incident response foundations.',
    href: 'https://www.credly.com/badges/872a6d3c-f30e-4821-9867-fec3cd8868fe',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'DEV K SYSTEM SOFTWARE HOUSE',
    role: 'Junior Cybersecurity Analyst',
    location: 'Pakistan',
    period: 'July 01, 2023 to Present',
    description:
      'Performed web penetration testing, identified OWASP vulnerabilities using Kali Linux tools, produced technical reports, remediation guidance, security documentation, and supported network, firewall, Active Directory, and web application hardening.',
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'VulnTrack',
    period: 'Feb 08, 2024 - Mar 30, 2024',
    summary:
      'A web application security testing project centered on structured vulnerability discovery, validation, and documentation.',
    focus: ['Web Security Testing', 'OWASP Methodology', 'Reporting'],
  },
  {
    title: 'SecureAudit',
    period: 'May 04, 2024 - Jul 02, 2024',
    summary:
      'A penetration testing engagement for web applications with emphasis on risk classification and remediation guidance.',
    focus: ['Penetration Testing', 'Risk Analysis', 'Technical Documentation'],
  },
  {
    title: 'Emergency Care (Final Year Project)',
    period: 'Aug 10, 2024 - Jul 23, 2025',
    summary:
      'A final year academic project designed to support emergency response coordination through a structured digital workflow.',
    focus: [
      'Applied Software Engineering',
      'System Design',
      'Academic Project Delivery',
    ],
  },
  {
    title: 'SmartTask',
    period: 'Sep 15, 2025 - Present',
    summary:
      'A web-based task management system focused on usability, productivity workflows, and scalable interface design.',
    focus: ['React', 'Task Management', 'Web Application Architecture'],
  },
  {
    title: 'Personal Portfolio Website',
    period: 'Feb 03, 2026 - Feb 24, 2026',
    summary:
      'A refined personal portfolio website showcasing professional achievements, research, and security-oriented project work.',
    focus: [
      'Personal Branding',
      'Responsive UI',
      'Modern Frontend Engineering',
    ],
  },
];

export const publications: PublicationItem[] = [
  {
    title:
      'Video is Worth a Thousand Images: Exploring the Latest Trends in Long Video Generation',
    source: 'ACM Computing Surveys',
    year: '2025',
    doi: 'https://doi.org/10.1145/3771724',
  },
  {
    title:
      'GlobalGeoTree: A Multi-Granular Vision-Language Dataset for Global Tree Species Classification',
    source: 'Earth System Science Data',
    year: '2026',
    doi: 'https://doi.org/10.5194/essd-2025-613',
  },
];

export const volunteering: ActivityItem[] = [
  {
    title: 'Cybersecurity Mentor (Volunteer)',
    period: 'Dec 03, 2025 to Feb 15, 2026',
    description:
      'Supported learners by simplifying key cybersecurity topics, practical workflows, and safe security practices.',
  },
  {
    title: 'Open Source Contributor (Cybersecurity Projects)',
    period: 'Jan 07, 2026 to Present',
    description:
      'Contributed to cybersecurity-oriented open source initiatives and community-focused tooling improvements.',
  },
  {
    title: 'Community Cybersecurity Support Initiative',
    period: 'Mar 01, 2026 to Present',
    description:
      'Helped improve digital security awareness and practical guidance for community-facing initiatives.',
  },
];

export const seminars: SeminarItem[] = [
  {
    title: 'Cybersecurity Awareness Seminar',
    organization: 'Kohat University of Science and Technology',
  },
  {
    title: 'Web Application Security and OWASP Top 10 Seminar',
    organization: 'Zyntech Online Professional Training Platform',
  },
  {
    title:
      'Emerging Trends in Computer Science and Artificial Intelligence Seminar',
    organization: 'KUST',
  },
];

export const references: ReferenceItem[] = [
  {
    name: 'Dr. Zeeshan Iqbal',
    role: 'Assistant Professor',
    email: 'zeeshan@kust.edu.pk',
  },
  {
    name: 'Dr. Muhammad Ali Zeb',
    role: 'Lecturer',
    email: 'alizeb@kust.edu.pk',
  },
  {
    name: 'Mr. Faisal Baseer',
    role: 'Lecturer',
    email: 'faisal.baseer@kust.edu.pk',
  },
];

export const pageDescriptions = {
  home:
    'Professional portfolio homepage for Muhammad Shahzad, cybersecurity analyst and research collaborator.',
  about: 'Professional background, biography, and career focus of Muhammad Shahzad.',
  education:
    'Academic history, memberships, and research collaboration profile of Muhammad Shahzad.',
  skills:
    'Cybersecurity, network security, web development, and soft skills of Muhammad Shahzad.',
  certifications:
    'Professional cybersecurity certifications and external verification links.',
  experience: 'Professional cybersecurity experience and impact summary.',
  projects: 'Featured security, software, and academic projects by Muhammad Shahzad.',
  publications:
    'Research publications and DOI references associated with Muhammad Shahzad.',
  volunteering:
    'Volunteer roles, open source activity, and seminars attended by Muhammad Shahzad.',
  contact:
    'Contact details, references, and professional inquiry form for Muhammad Shahzad.',
};

export const quickHighlights = [
  {
    title: 'Security Assessment',
    icon: ShieldCheck,
    text: 'OWASP-aligned vulnerability discovery and remediation guidance.',
  },
  {
    title: 'Research Mindset',
    icon: BookOpen,
    text: 'Publication-oriented collaboration grounded in technical rigor.',
  },
  {
    title: 'Professional Delivery',
    icon: BriefcaseBusiness,
    text: 'Clear reporting, communication, and stakeholder-ready presentation.',
  },
  {
    title: 'Community Contribution',
    icon: HeartHandshake,
    text: 'Volunteer mentorship and community cybersecurity support.',
  },
];

export const pageIcons = {
  education: GraduationCap,
  certifications: Award,
  projects: LifeBuoy,
};
