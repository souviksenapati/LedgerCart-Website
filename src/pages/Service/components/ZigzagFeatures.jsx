import { Link } from 'react-router-dom'
import AppHostingVisual from './visuals/AppHostingVisual'
import ObjectStorageVisual from './visuals/ObjectStorageVisual'
import DatabaseVisual from './visuals/DatabaseVisual'
import StaticSiteVisual from './visuals/StaticSiteVisual'
import AIVisual from './visuals/AIVisual'
import WebDevVisual from './visuals/WebDevVisual'
import ErpVisual from './visuals/ErpVisual'
import CybersecurityVisual from './visuals/CybersecurityVisual'
import fallbackServiceImageWebp from '../../../assets/hero.webp'

const zigzagRows = [
  {
    id: 'software-engineering',
    label: 'SOFTWARE ENGINEERING',
    title: 'Architecting robust systems\nfor modern enterprises',
    desc: 'From core system design to deployment, we build highly scalable software engineering backbones that drive your technology forward securely and efficiently.',
    features: ['System architecture design', 'Scalable microservices', 'High-performance computing', 'Legacy system modernization'],
    visual: <ErpVisual />,
    reverse: false,
    cta: 'Get Started',
    to: '/contact'
  },
  {
    id: 'software-development',
    label: 'SOFTWARE DEVELOPMENT',
    title: 'End-to-end custom\nsoftware solutions',
    desc: 'We craft tailor-made software solutions designed to solve your unique business challenges, with agile methodologies ensuring fast delivery and iterability.',
    features: ['Custom Enterprise Apps', 'API Development & Integration', 'Agile delivery methodology', 'Continuous maintenance'],
    visual: <AppHostingVisual />,
    reverse: true,
    cta: 'Discuss Your Project',
    to: '/contact'
  },
  {
    id: 'web-development',
    label: 'WEB DEVELOPMENT',
    title: 'Craft stunning and\nperformant websites',
    desc: 'Full-stack development for web applications and corporate websites. We deliver highly responsive, SEO-optimized, and conversion-focused web experiences.',
    features: ['Modern React & Next.js mastery', 'Scalable backend architectures', 'SEO optimization built-in', 'Mobile-first responsive design'],
    visual: <WebDevVisual />,
    reverse: false,
    cta: 'Build Your Site',
    to: '/contact'
  },
  {
    id: 'mobile-app',
    label: 'MOBILE APP DEVELOPMENT',
    title: 'Engaging mobile experiences\nfor iOS & Android',
    desc: 'Deliver seamless, high-performance mobile applications globally. We specialize in cross-platform and native development to reach your customers anywhere.',
    features: ['React Native & Flutter', 'Native iOS (Swift) & Android (Kotlin)', 'App Store Optimization (ASO)', 'Secure payment integration'],
    visual: <StaticSiteVisual />,
    reverse: true,
    cta: 'Start App Development',
    to: '/contact'
  },
  {
    id: 'ecommerce-development',
    label: 'E-COMMERCE DEVELOPMENT',
    title: 'High-converting scalable\nonline storefronts',
    desc: 'Build frictionless e-commerce platforms that offer lightning-fast browsing, secure global payments, and easy inventory management systems.',
    features: ['Headless commerce solutions', 'Shopify & Custom CMS', 'Frictionless checkout flows', 'Automated inventory mapping'],
    visual: <ObjectStorageVisual />,
    reverse: false,
    cta: 'Launch Store',
    to: '/contact'
  },
  {
    id: 'ui-ux',
    label: 'UI/UX DESIGN',
    title: 'Designing intuitive,\nuser-centric interfaces',
    desc: 'Enhance customer satisfaction and loyalty with beautiful, intuitive, and accessible user designs that seamlessly merge form and function.',
    features: ['Wireframing & Prototyping', 'User Research & Testing', 'Design systems creation', 'Accessibility compliance'],
    visual: <WebDevVisual />,
    reverse: true,
    cta: 'View Our Process',
    to: '/contact'
  },
  {
    id: 'game-development',
    label: 'GAME DEVELOPMENT',
    title: 'Immersive gaming\nexperiences and engines',
    desc: 'Develop captivating games across platforms with cutting-edge graphics, mechanics, and smooth multiplayer backend integrations.',
    features: ['Unity & Unreal Engine', 'Multiplayer architecture', 'Cross-platform porting', 'AR/VR game mechanics'],
    visual: <AIVisual />,
    reverse: false,
    cta: 'Explore Gaming',
    to: '/contact'
  },
  {
    id: 'digital-transformation',
    label: 'DIGITAL TRANSFORMATION',
    title: 'Modernizing businesses\nfrom the inside out',
    desc: 'Comprehensively digitize your operational workflows, migrating legacy monoliths to intelligent cloud architectures to unlock true efficiency.',
    features: ['Legacy system migration', 'Workflow automation', 'Cloud strategy & consulting', 'Change management mapping'],
    visual: <ErpVisual />,
    reverse: true,
    cta: 'Transform Now',
    to: '/contact'
  },
  {
    id: 'ai-ml',
    label: 'ARTIFICIAL INTELLIGENCE',
    title: 'Build intelligent apps\nwith AI & Machine Learning',
    desc: 'Integrate advanced AI into your business workflows. Build custom machine learning models, smart chatbots, and predictive analytics platforms.',
    features: ['Custom LLM integrations', 'Predictive analytics & forecasting', 'AI-powered chatbots', 'Automated workflows'],
    visual: <AIVisual />,
    reverse: false,
    cta: 'Explore AI',
    to: '/contact'
  },
  {
    id: 'cloud-engineering',
    label: 'CLOUD ENGINEERING',
    title: 'Scalable, secure cloud\ninfrastructure deployment',
    desc: 'Architect and deploy highly available environments on AWS, Azure, and GCP. Guarantee uptime with robust CI/CD and auto-scaling capabilities.',
    features: ['AWS, Azure, GCP expertise', 'Kubernetes & Docker', 'Serverless architectures', 'Infrastructure as Code (IaC)'],
    visual: <AppHostingVisual />,
    reverse: true,
    cta: 'Move to Cloud',
    to: '/contact'
  },
  {
    id: 'data-engineering',
    label: 'DATA ENGINEERING',
    title: 'Unlock insights from\ncomplex data pipelines',
    desc: 'Construct reliable data pipelines and warehouses to process vast amounts of unstructured data into clean, actionable business intelligence.',
    features: ['Data warehouse architecture', 'ETL pipeline automation', 'Real-time data streaming', 'Database optimization'],
    visual: <DatabaseVisual />,
    reverse: false,
    cta: 'Harness Your Data',
    to: '/contact'
  },
  {
    id: 'business-intelligence',
    label: 'BUSINESS INTELLIGENCE',
    title: 'Visualizing data for\nsmarter decisions',
    desc: 'Deploy custom dashboards and interactive reports allowing stakeholders to instantly comprehend operational metrics and forecast trends accurately.',
    features: ['Tableau & PowerBI integration', 'Custom reporting dashboards', 'KPI tracking', 'Predictive modeling'],
    visual: <DatabaseVisual />,
    reverse: true,
    cta: 'See BI Solutions',
    to: '/contact'
  },
  {
    id: 'ar-vr',
    label: 'AUGMENTED & VIRTUAL REALITY',
    title: 'Revolutionize reality\nwith immersive tech',
    desc: 'Create deeply engaging AR and VR applications for training, real-estate, e-commerce, and gaming that blur the line between digital and physical worlds.',
    features: ['Virtual training simulations', 'AR product visualization', 'Metaverse integrations', '3D modeling & mapping'],
    visual: <AIVisual />,
    reverse: false,
    cta: 'Enter the Metaverse',
    to: '/contact'
  },
  {
    id: 'iot',
    label: 'INTERNET OF THINGS (IoT)',
    title: 'Connecting devices\nfor smarter ecosystems',
    desc: 'Develop secure, edge-computed IoT networks that communicate seamlessly with your central cloud, powering smart homes, factories, and healthcare devices.',
    features: ['Edge computing architectures', 'Device fleet management', 'IoT security protocols', 'Real-time sensor telemetry'],
    visual: <ObjectStorageVisual />,
    reverse: true,
    cta: 'Connect Devices',
    to: '/contact'
  },
  {
    id: 'cyber-security',
    label: 'CYBERSECURITY',
    title: 'Protect your business\nwith Managed Security',
    desc: 'Stay ahead of sophisticated threats with our real-time 24/7 security monitoring. We ensure compliance, data privacy, and robust endpoint protection.',
    features: ['Real-time threat detection', 'Incident response & recovery', 'Compliance management (SOC II, ISO)', 'Vulnerability assessments'],
    visual: <CybersecurityVisual />,
    reverse: false,
    cta: 'Secure Your Data',
    to: '/contact'
  },
  {
    id: 'ai-agent',
    label: 'AI AGENT',
    title: 'Autonomous systems\nhandling complex tasks',
    desc: 'Deploy autonomous LLM-powered AI agents capable of reasoning, researching, and executing complex multi-step workflows without human intervention.',
    features: ['Autonomous task execution', 'Multi-agent orchestration', 'Custom knowledge base indexing', 'Integration with internal APIs'],
    visual: <AIVisual />,
    reverse: true,
    cta: 'Deploy AI Agents',
    to: '/contact'
  },
  {
    id: 'martech',
    label: 'MARKETING TECHNOLOGY',
    title: 'Marketing automation\nat scale',
    desc: 'Leverage powerful MarTech stacks that automate email flows, personalizations, and CRM synchronizations to drastically improve conversion rates.',
    features: ['CRM & CDP integration', 'Automated email workflows', 'Customer journey mapping', 'A/B testing architectures'],
    visual: <StaticSiteVisual />,
    reverse: false,
    cta: 'Automate Marketing',
    to: '/contact'
  },
  {
    id: 'digital-marketing',
    label: 'DIGITAL MARKETING',
    title: 'Data-driven campaigns\nthat drive growth',
    desc: 'From SEO domination to high-ROI paid media strategies, our digital marketing funnels guarantee visibility, lead generation, and sustained organic growth.',
    features: ['Technical SEO & Content Strategy', 'PPC & SEM Management', 'Social Media funnels', 'Conversion Rate Optimization (CRO)'],
    visual: <StaticSiteVisual />,
    reverse: true,
    cta: 'Grow Your Audience',
    to: '/contact'
  }
]

const serviceMediaById = {
  'software-engineering': {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    alt: 'Engineers reviewing software architecture on multiple screens'
  },
  'software-development': {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    alt: 'Developer writing and testing code in an IDE'
  },
  'web-development': {
    src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Web design and front-end development workflow'
  },
  'mobile-app': {
    src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Mobile app interface design on smartphone screens'
  },
  'ecommerce-development': {
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80',
    alt: 'E-commerce checkout and online retail shopping flow'
  },
  'ui-ux': {
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    alt: 'UI and UX wireframes and design prototypes'
  },
  'game-development': {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    alt: 'Game development setup with controller and display'
  },
  'digital-transformation': {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    alt: 'Digital transformation and enterprise technology systems'
  },
  'ai-ml': {
    src: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80',
    alt: 'Artificial intelligence and machine learning visualization'
  },
  'cloud-engineering': {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cloud infrastructure and connected global systems'
  },
  'data-engineering': {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    alt: 'Data pipeline dashboards and analytics charts'
  },
  'business-intelligence': {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Business intelligence charts and KPI reporting dashboard'
  },
  'ar-vr': {
    src: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1600&q=80',
    alt: 'Virtual reality headset and immersive experience setup'
  },
  iot: {
    src: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80',
    alt: 'IoT device network and connected sensors'
  },
  'cyber-security': {
    src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cybersecurity concept with digital lock and data protection'
  },
  'ai-agent': {
    src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
    alt: 'Autonomous AI agent concept and intelligent automation'
  },
  martech: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Marketing technology dashboards and campaign analytics'
  },
  'digital-marketing': {
    src: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1600&q=80',
    alt: 'Digital marketing strategy and content planning workspace'
  }
}

export default function ZigzagFeatures() {
  return (
    <section className="py-[100px] bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-20">
        {zigzagRows.map((row) => (
          <div id={row.id} key={row.label} className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${row.reverse ? 'lg:[direction:rtl]' : ''}`}>
            {/* Content */}
            <div className={row.reverse ? '[direction:ltr]' : ''}>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-orange-600 mb-3.5 tracking-[0.2em]">{row.label}</p>
              <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.5px] text-gray-900 dark:text-slate-100 mb-3.5 leading-[1.2]" style={{ whiteSpace: 'pre-line' }}>{row.title}</h2>
              <p className="text-[15px] text-gray-500 dark:text-slate-400 leading-[1.7] mb-5">{row.desc}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 mb-7">
                {row.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-slate-300">
                    <span className="text-orange-600 text-[13px] flex-shrink-0 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link to={row.to} className="inline-flex items-center px-6 py-3 text-[14px] font-semibold text-white bg-orange-600 rounded-[8px] hover:bg-orange-700 transition-all hover:shadow-md hover:shadow-orange-600/25 no-underline">
                {row.cta}
              </Link>
            </div>
            {/* Visual Wrapper without padding to let elements stretch natively if needed */}
            <div className={`relative bg-transparent h-[280px] flex items-center justify-center overflow-hidden ${row.reverse ? '[direction:ltr]' : ''}`}>
              <div className="relative z-10 w-full h-full rounded-[16px] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm group">
                <img
                  src={serviceMediaById[row.id]?.src}
                  alt={serviceMediaById[row.id]?.alt || row.label}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = fallbackServiceImageWebp
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/35 to-gray-900/10" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex rounded-full bg-orange-500/90 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white">
                    {row.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
