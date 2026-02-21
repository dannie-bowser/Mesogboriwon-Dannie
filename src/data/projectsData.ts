import pcone from "@/assets/pcone.png";
import pctwo from "@/assets/pctwo.png";
import pcthree from "@/assets/pcthree.png";
import pcfour from "@/assets/pcfour.png";
import pcfive from "@/assets/pcfive.jpg";
import pcsix from "@/assets/pcsix.png";
import asilithumbnail from "@/assets/Asilithumbnail.png";
import asiliSlide1 from "@/assets/Email Design Asilli[slide1].png";
import asiliSlide2 from "@/assets/Email Design Asilli[slide2].png";

export interface Document {
  name: string;
  type: string; // e.g., 'PDF', 'DOC', 'DOCX'
  url: string;
}

export interface Project {
  title: string;
  slug: string;
  client: string;
  image: string; // Thumbnail image for cards
  gallery?: string[]; // Full-size images for zoom/gallery view
  documents?: Document[]; // Documents like email copy, specs, etc.
  description: string;
  fullDescription?: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  tags: string[];
  challenge?: string;
  solution?: string;
  results?: string;
}

export const projectsData: Project[] = [
  {
    title: "E-commerce Series",
    slug: "HTML-welcome-series",
    client: "Asili Creations",
    image: asilithumbnail,
    gallery: [asiliSlide1, asiliSlide2],
    documents: [
      { name: "Asili HTML Email Templates", type: "ZIP", url: "/downloads/asili-emails.zip" }
    ],
    description:
      "Asili Creations is an e-commerce brand focused on delivering thoughtfully crafted products with a strong emphasis on quality, storytelling, and customer experience through digital channels.",
    fullDescription:
      "For this project, I designed and built an 8-email HTML welcome series for Asili Creations. I started by designing each email in Figma, then translated the designs into clean, fully responsive HTML emails that work across major email clients. To keep the visuals consistent and on-brand, I also used AI tools for advanced image generation.",
    challenge:
      "The challenge was making sure the emails stayed visually consistent and functional across different devices and email clients, while still reflecting the brand's style.",
    solution:
      "I handled the full process end-to-end — from Figma designs to hand-coded responsive HTML. Each of the 8 emails was optimized for mobile and desktop, carefully structured for email compatibility, and featured enhanced AI-generated hero visuals to support the brand's look and feel.",
    metrics: [
      { label: "Emails Designed", value: "Trust & Sales email" },
      { label: "Design → HTML", value: "Fully Responsive" },
      { label: "Focus", value: "Clean, On-Brand Emails" },
    ],
    tags: ["HTML Emails", "Figma to HTML", "E-commerce", "Email Automation"],
  },
  {
    title: "SaaS Re-engagement Campaign",
    slug: "saas-reengagement-campaign",
    client: "TechStart Pro",
    image: pctwo,
    gallery: [pctwo, pctwo, pctwo, pctwo, pctwo, pctwo],
    description:
      "Created targeted re-engagement campaign that brought back 35% of inactive users and generated $200K in recovered revenue.",
    fullDescription:
      "TechStart Pro had thousands of inactive users who hadn't logged in for 90+ days. Instead of letting them churn, we designed a strategic re-engagement campaign that reminded users of the platform's value and offered incentives to return.",
    challenge:
      "TechStart Pro was losing valuable customers to inactivity. Their product was excellent, but users had simply moved on or forgotten about the platform.",
    solution:
      "We created a 4-email re-engagement sequence: Email 1 - 'We miss you' with user-specific success stories, Email 2 - New features showcase, Email 3 - Exclusive discount for returning users, Email 4 - Limited-time offer. We segmented by user behavior and product usage.",
    metrics: [
      { label: "Users Reactivated", value: "1,200+" },
      { label: "Click Rate", value: "45%" },
      { label: "Revenue Recovered", value: "$200K" },
    ],
    tags: ["Re-engagement", "SaaS", "Automation"],
  },
  {
    title: "B2B Lead Nurture Workflow",
    slug: "b2b-lead-nurture-workflow",
    client: "GrowthLabs",
    image: pcthree,
    gallery: [pcthree, pcthree, pcthree, pcthree, pcthree, pcthree],
    description:
      "Developed comprehensive nurture workflow that shortened sales cycle by 30% and improved lead-to-customer conversion by 55%.",
    fullDescription:
      "GrowthLabs was experiencing a long sales cycle with many leads falling through the cracks. We designed an intelligent nurture workflow that kept prospects engaged while providing the sales team with quality signals for outreach.",
    challenge:
      "GrowthLabs had strong lead generation but a lengthy sales cycle. Many leads were getting lost in the process, and the sales team lacked clear visibility into prospect engagement.",
    solution:
      "We created a 12-email nurture sequence with intelligent branching: leads who engaged with product demos received different content than those interested in case studies. We integrated with their CRM to score leads and alert sales when prospects were sales-ready.",
    metrics: [
      { label: "Conversion Rate", value: "+55%" },
      { label: "Sales Cycle", value: "-30%" },
      { label: "Qualified Leads", value: "450+" },
    ],
    tags: ["B2B", "Lead Nurture", "Automation"],
  },
  {
    title: "Product Launch Campaign",
    slug: "product-launch-campaign",
    client: "InnovateTech",
    gallery: [pcfour, pcfour, pcfour, pcfour, pcfour, pcfour],
    image: pcfour,
    description:
      "Orchestrated multi-touch product launch campaign achieving 10,000+ pre-orders and $500K in first-week revenue.",
    fullDescription:
      "InnovateTech was launching a revolutionary new product and needed to generate buzz and pre-orders from their existing audience. We designed a coordinated email campaign that built anticipation and drove massive pre-order numbers.",
    challenge:
      "InnovateTech needed to create maximum excitement around their new product launch while converting a significant portion of their email list into pre-order customers.",
    solution:
      "We developed a 6-email campaign sequence: Teaser emails with product hints, exclusive early access for VIP customers, detailed feature breakdowns with comparison to competitors, influencer testimonials, and limited-time launch offers with countdown timers.",
    metrics: [
      { label: "Pre-orders", value: "10K+" },
      { label: "Open Rate", value: "58%" },
      { label: "Week 1 Revenue", value: "$500K" },
    ],
    tags: ["Product Launch", "Campaign Strategy", "B2C"],
  },
  {
    title: "Customer Retention Campaign",
    slug: "customer-retention-campaign",
    client: "RetailEdge",
    gallery: [pcone, pcone, pcone, pcone, pcone, pcone],
    image: pcone,
    description:
      "Strategic retention program that increased customer lifetime value by 120% and reduced churn by 45%.",
    fullDescription:
      "RetailEdge was experiencing high customer churn after the initial purchase. We developed a comprehensive retention strategy that kept customers engaged and increased repeat purchase rates.",
    challenge:
      "RetailEdge had great acquisition but poor retention. Most customers made a single purchase and never returned, leading to high customer acquisition costs relative to lifetime value.",
    solution:
      "We implemented a multi-tier retention system: post-purchase thank you emails, educational content about product usage, loyalty program promotion, and personalized product recommendations based on purchase history. We also set up win-back campaigns for at-risk customers.",
    metrics: [
      { label: "Lifetime Value", value: "+120%" },
      { label: "Repeat Purchase", value: "+65%" },
      { label: "Churn Reduction", value: "-45%" },
    ],
    tags: ["Retention", "E-commerce", "Loyalty"],
  },
  {
    title: "Email Automation Series",
    slug: "email-automation-series",
    client: "MarketFlow",
    gallery: [pcfive, pcfive, pcfive, pcfive, pcfive, pcfive],
    image: pcfive,
    description:
      "Built complete automation ecosystem that scaled email operations and increased revenue by 180% without hiring additional staff.",
    fullDescription:
      "MarketFlow's team was overwhelmed managing manual email campaigns. We designed a comprehensive automation system that handled repetitive tasks while improving personalization and results.",
    challenge:
      "MarketFlow's team was spending 40+ hours per week on manual email tasks, limiting their ability to scale. They needed an efficient automation system without losing the personal touch.",
    solution:
      "We implemented a complete automation ecosystem: sign-up automations, behavioral triggers, dynamic content personalization, lead scoring, and advanced segmentation. All workflows were integrated with their CRM and e-commerce platform for seamless data flow.",
    metrics: [
      { label: "Revenue Increase", value: "+180%" },
      { label: "Time Saved", value: "40 hrs/week" },
      { label: "Email Volume", value: "3x growth" },
    ],
    tags: ["Automation", "Workflow", "Scaling"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};
