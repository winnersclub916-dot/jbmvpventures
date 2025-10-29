import {
  GraduationCap,
  Stethoscope,
  Shield,
  Package,
  BookOpen,
  Target,
  Users,
  Truck,
  Wheat,
  Hammer,
  Plane,
  Car,
  Shirt,
  Briefcase,
  DollarSign,
  Fuel,
  Facebook,
  Linkedin,
  Youtube,
  Instagram
} from "lucide-react";

export const SERVICES = [
  {
    id: 1,
    title: "WINNERS Training Program",
    description:
      "Comprehensive training programs to develop skills and expertise across various industries.",
    icon: GraduationCap,
    "What We Offer": {
      items: [
        { title: "Website & Mobile App Development" },
        { title: "Financial Management For Freelancers" },
        { title: "1–On–1 Expert Mentorship" },
        { title: "Job & Placement Support" },
        { title: "Website & Mobile App Designing" },
      ],
      description: `Our training programs offer both offline and online courses designed to help you become self-employed in the IT sector. Learn essential skills in website and mobile app development, along with financial self-sufficiency to manage your freelance or business career. We provide expert guidance in web design, app development, and money management for entrepreneurs. With hands-on training, personalized mentorship, and job placement support, we equip you with the tools you need to succeed in the fast-growing IT industry.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Front-End Developer" },
        { title: "Full-Stack Developer" },
        { title: "Mobile App Developer" },
        {
          type: "offline",
          description: `"In-Person, Immersive Learning" with a brief description of the campus experience.`,
        },
        {
          type: "online",
          description: `Flexible, remote-first classes with a note on live sessions and recorded content.`,
        },
      ],
    },
  },
  {
    id: 2,
    title: "WINNERS Medical",
    description: "Healthcare services and medical solutions for communities and individuals.",
    icon: Stethoscope,
    "What We Offer": {
      items: [
        { title: "Primary Healthcare Support" },
        { title: "Medical Camps & Awareness Programs" },
        { title: "Telemedicine Services" },
        { title: "Pharmacy & Lab Support" },
        { title: "Emergency Assistance" },
      ],
      description: `Providing accessible and affordable healthcare solutions, including primary care, health camps, telemedicine, and emergency response services for individuals and communities.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Healthcare Management" },
        { title: "First Aid & Basic Life Support" },
        { title: "Medical Assistance Training" },
        { type: "offline", description: "Hands-on hospital-based training." },
        { type: "online", description: "Virtual health consultation training." },
      ],
    },
  },
  {
    id: 3,
    title: "WINNERS Insurance",
    description: "Protective insurance services covering various aspects of life and business.",
    icon: Shield,
    "What We Offer": {
      items: [
        { title: "Life Insurance" },
        { title: "Health & Accident Coverage" },
        { title: "Business Protection Plans" },
        { title: "Investment-Linked Policies" },
        { title: "Claim Support Services" },
      ],
      description: `Comprehensive insurance plans to safeguard your personal and professional life with reliable protection, quick claims, and expert advice.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Insurance Sales Training" },
        { title: "Policy & Claim Management" },
        { title: "Customer Support Handling" },
        { type: "offline", description: "On-site policy consultation workshops." },
        { type: "online", description: "Digital insurance platform operations." },
      ],
    },
  },
  {
    id: 4,
    title: "WINNERS Food Production & Packing",
    description: "Quality food production and packaging services for diverse markets.",
    icon: Package,
    "What We Offer": {
      items: [
        { title: "Food Manufacturing" },
        { title: "Packaging Solutions" },
        { title: "Distribution Support" },
        { title: "Quality Control" },
        { title: "Private Label Production" },
      ],
      description: `We ensure top-quality food production and packaging solutions that meet safety standards and consumer demand.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Food Safety Management" },
        { title: "Production Line Operation" },
        { title: "Quality Testing" },
        { type: "offline", description: "Hands-on food processing training." },
        { type: "online", description: "Hygiene & safety certification courses." },
      ],
    },
  },
  {
    id: 5,
    title: "WINNERS Education",
    description: "Educational services and learning opportunities for all age groups.",
    icon: BookOpen,
    "What We Offer": {
      items: [
        { title: "Online & Offline Courses" },
        { title: "Skill Development Programs" },
        { title: "Coaching for Competitive Exams" },
        { title: "E-Learning Platform" },
        { title: "Mentorship & Counseling" },
      ],
      description: `Empowering learners through holistic educational services and skill development programs to foster lifelong learning.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Teaching & Training Skills" },
        { title: "E-Learning Management" },
        { title: "Educational Leadership" },
        { type: "offline", description: "Interactive classroom workshops." },
        { type: "online", description: "Self-paced and live training programs." },
      ],
    },
  },
  {
    id: 6,
    title: "WINNERS Marketing Centers",
    description: "Strategic marketing solutions and promotional services for businesses.",
    icon: Target,
    "What We Offer": {
      items: [
        { title: "Digital Marketing" },
        { title: "Brand Promotion" },
        { title: "Market Research" },
        { title: "Advertising Solutions" },
        { title: "Social Media Campaigns" },
      ],
      description: `Offering tailored marketing strategies that boost brand presence, engagement, and sales through modern digital tools.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "SEO & SEM" },
        { title: "Social Media Marketing" },
        { title: "Content Creation" },
        { type: "offline", description: "Live branding workshops." },
        { type: "online", description: "Digital marketing certifications." },
      ],
    },
  },
  {
    id: 7,
    title: "WINNERS Club",
    description: "Exclusive membership benefits and networking opportunities.",
    icon: Users,
    "What We Offer": {
      items: [
        { title: "Elite Member Access" },
        { title: "Events & Conferences" },
        { title: "Business Networking" },
        { title: "Discount Programs" },
        { title: "Exclusive Rewards" },
      ],
      description: `Join a community of achievers and enjoy networking events, mentorship, and unique member privileges.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Leadership & Networking" },
        { title: "Event Management" },
        { title: "Community Building" },
        { type: "offline", description: "In-person events & seminars." },
        { type: "online", description: "Virtual collaboration training." },
      ],
    },
  },
  {
    id: 8,
    title: "WINNERS Courier Services",
    description: "Reliable courier and logistics services for all your delivery needs.",
    icon: Truck,
    "What We Offer": {
      items: [
        { title: "Local & National Delivery" },
        { title: "Parcel Tracking" },
        { title: "Express Shipping" },
        { title: "E-Commerce Logistics" },
        { title: "Safe Handling & Storage" },
      ],
      description: `Delivering trust with every parcel through reliable, fast, and secure courier solutions.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Logistics Management" },
        { title: "Customer Handling" },
        { title: "Route Optimization" },
        { type: "offline", description: "Fleet & warehouse training." },
        { type: "online", description: "Logistics system software courses." },
      ],
    },
  },
  {
    id: 9,
    title: "WINNERS Agriculture",
    description: "Agricultural services and farming solutions for sustainable growth.",
    icon: Wheat,
    "What We Offer": {
      items: [
        { title: "Farming Support" },
        { title: "Agro-Technology" },
        { title: "Organic Cultivation" },
        { title: "Supply Chain Support" },
        { title: "Training for Farmers" },
      ],
      description: `Empowering farmers through innovative agricultural practices, technology, and sustainable methods.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Organic Farming" },
        { title: "Agro-Business Management" },
        { title: "Soil & Crop Management" },
        { type: "offline", description: "On-field practical farming sessions." },
        { type: "online", description: "Remote agri-tech learning." },
      ],
    },
  },
  {
    id: 10,
    title: "WINNERS Construction",
    description: "Professional construction and building services for various projects.",
    icon: Hammer,
    "What We Offer": {
      items: [
        { title: "Residential & Commercial Projects" },
        { title: "Structural Design" },
        { title: "Project Management" },
        { title: "Material Supply" },
        { title: "Site Supervision" },
      ],
      description: `Delivering durable and efficient construction solutions for modern infrastructure needs.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Site Engineering" },
        { title: "Project Planning" },
        { title: "AutoCAD & Design" },
        { type: "offline", description: "Construction site training." },
        { type: "online", description: "Architectural design tutorials." },
      ],
    },
  },
  {
    id: 11,
    title: "WINNERS Travel & Tourism",
    description: "Travel planning and tourism services for memorable experiences.",
    icon: Plane,
    "What We Offer": {
      items: [
        { title: "Tour Packages" },
        { title: "Flight & Hotel Booking" },
        { title: "Travel Insurance" },
        { title: "Guided Tours" },
        { title: "Visa Assistance" },
      ],
      description: `Making travel easier and more exciting with comprehensive tour and travel management services.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Tour Management" },
        { title: "Customer Service" },
        { title: "Travel Planning" },
        { type: "offline", description: "Hospitality and on-site experience." },
        { type: "online", description: "Travel management courses." },
      ],
    },
  },
  {
    id: 12,
    title: "WINNERS Vehicle Sales & Service",
    description: "Vehicle sales, maintenance, and automotive services.",
    icon: Car,
    "What We Offer": {
      items: [
        { title: "Vehicle Sales" },
        { title: "Servicing & Maintenance" },
        { title: "Spare Parts Supply" },
        { title: "Test Drives & Demos" },
        { title: "Warranty Assistance" },
      ],
      description: `Your one-stop destination for vehicle sales, service, and maintenance with expert support.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Automobile Maintenance" },
        { title: "Sales & Customer Relations" },
        { title: "Vehicle Diagnostics" },
        { type: "offline", description: "Workshop-based mechanical training." },
        { type: "online", description: "Automotive technology courses." },
      ],
    },
  },
  {
    id: 13,
    title: "WINNERS Garments, Textile & Handloom",
    description: "Quality textile and handloom products with traditional craftsmanship.",
    icon: Shirt,
    "What We Offer": {
      items: [
        { title: "Fabric Production" },
        { title: "Handloom Products" },
        { title: "Garment Design" },
        { title: "Retail & Wholesale" },
        { title: "Export Support" },
      ],
      description: `Blending tradition with modern trends in garments, textiles, and handloom craftsmanship.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Textile Design" },
        { title: "Tailoring & Stitching" },
        { title: "Fashion Merchandising" },
        { type: "offline", description: "Weaving and tailoring workshops." },
        { type: "online", description: "Fashion design e-learning." },
      ],
    },
  },
  {
    id: 14,
    title: "WINNERS Job Consulting",
    description: "Career guidance and job placement services for professionals.",
    icon: Briefcase,
    "What We Offer": {
      items: [
        { title: "Career Counseling" },
        { title: "Interview Preparation" },
        { title: "Resume Building" },
        { title: "Placement Assistance" },
        { title: "Skill Assessment" },
      ],
      description: `Helping individuals find the right career path and connecting them with top employers through professional consulting.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Communication Skills" },
        { title: "Corporate Readiness" },
        { title: "Recruitment Process" },
        { type: "offline", description: "Mock interview sessions." },
        { type: "online", description: "Career development webinars." },
      ],
    },
  },
  {
    id: 15,
    title: "WINNERS Chit Funds & Finance",
    description: "Financial services and investment opportunities for wealth creation.",
    icon: DollarSign,
    "What We Offer": {
      items: [
        { title: "Chit Fund Management" },
        { title: "Investment Planning" },
        { title: "Personal Loans" },
        { title: "Financial Consultancy" },
        { title: "Wealth Creation Programs" },
      ],
      description: `Empowering individuals and businesses with financial literacy and reliable investment options.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Financial Management" },
        { title: "Investment Strategy" },
        { title: "Account Handling" },
        { type: "offline", description: "Finance workshops and training." },
        { type: "online", description: "Investment planning tutorials." },
      ],
    },
  },
  {
    id: 16,
    title: "WINNERS Fuels & LPG Agency",
    description: "Fuel distribution and LPG agency services for communities.",
    icon: Fuel,
    "What We Offer": {
      items: [
        { title: "Fuel Supply" },
        { title: "LPG Distribution" },
        { title: "Energy Management" },
        { title: "Safety Training" },
        { title: "Retail Network Support" },
      ],
      description: `Reliable fuel and LPG distribution services ensuring safety, efficiency, and energy reliability.`,
    },
    "Master the Skills That Matter": {
      items: [
        { title: "Energy Management" },
        { title: "Safety & Compliance" },
        { title: "Logistics Coordination" },
        { type: "offline", description: "Hands-on LPG safety workshops." },
        { type: "online", description: "Energy and logistics certification." },
      ],
    },
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Tomorrow: How Our Coding Bootcamp Changed 50 Lives",
    category: "Education",
    featured: true,
    image: "/CodingBootcamp.jpg",
    excerpt: "Discover how our comprehensive coding bootcamp transformed the lives of 50 individuals, providing them with the skills and confidence to pursue successful careers in technology.",
    content: `
      <p>In a world where technology drives innovation and opportunity, access to quality education remains a critical barrier for many. Our WINNERS Training Program has been at the forefront of breaking down these barriers, and today we share the inspiring story of how our coding bootcamp transformed 50 lives.</p>
      
      <h2>The Challenge</h2>
      <p>Many individuals in our communities face significant obstacles when trying to enter the tech industry. Limited access to quality education, financial constraints, and lack of mentorship often prevent talented people from pursuing their dreams in technology.</p>
      
      <h2>Our Solution</h2>
      <p>Our comprehensive coding bootcamp was designed to address these challenges head-on. We provided:</p>
      <ul>
        <li>Intensive hands-on training in modern web development</li>
        <li>Expert mentorship from industry professionals</li>
        <li>Financial support and flexible payment options</li>
        <li>Job placement assistance and career guidance</li>
        <li>Ongoing support even after graduation</li>
      </ul>
      
      <h2>The Results</h2>
      <p>Six months after launching our program, we're proud to report that all 50 participants have successfully completed the bootcamp. More importantly:</p>
      <ul>
        <li>85% of graduates secured employment within 3 months</li>
        <li>Average salary increase of 150% for employed graduates</li>
        <li>12 graduates started their own tech businesses</li>
        <li>100% of participants reported increased confidence and skills</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Maria, a single mother of two, went from working part-time retail jobs to becoming a full-stack developer at a leading tech company. "The program didn't just teach me to code," she says, "it gave me the confidence to believe in my potential."</p>
      
      <p>Ahmed, a recent college graduate struggling to find work, is now running his own web development agency. "The mentorship and practical training were invaluable," he reflects. "I learned not just how to code, but how to think like a developer."</p>
      
      <h2>Looking Forward</h2>
      <p>This success has inspired us to expand our program. We're now planning to launch specialized tracks in mobile app development, data science, and cybersecurity. Our goal is to reach 200 students in the next year and continue building a diverse, skilled workforce for the digital economy.</p>
      
      <p>The transformation we've witnessed goes beyond just technical skills. We've seen confidence grow, families stabilize, and communities strengthen. When we invest in education, we're not just building careers – we're building futures.</p>
    `,
    author: "WINNERS Education Team",
    readTime: "8 min read",
    tags: ["Education", "Technology", "Success Stories", "Training"]
  },
  {
    id: 2,
    title: "Mobile Health Clinics: Bringing Care To Remote Communities",
    category: "Healthcare",
    featured: false,
    image: "/Healthcare.jpg",
    excerpt: "Our mobile health clinics are revolutionizing healthcare access in remote areas, bringing essential medical services directly to communities that need them most.",
    content: `
      <p>Access to quality healthcare shouldn't be determined by where you live. Yet, millions of people in remote and underserved communities face significant barriers to receiving even basic medical care. Our WINNERS Medical initiative is changing this reality through innovative mobile health clinics.</p>
      
      <h2>The Healthcare Gap</h2>
      <p>In many rural and remote areas, the nearest hospital or clinic can be hours away. This distance, combined with transportation costs and time constraints, often means that preventable conditions go untreated and chronic diseases go unmanaged.</p>
      
      <h2>Our Mobile Solution</h2>
      <p>Our fully equipped mobile health clinics bring comprehensive medical services directly to communities. Each clinic includes:</p>
      <ul>
        <li>Primary care consultation rooms</li>
        <li>Basic diagnostic equipment</li>
        <li>Pharmacy services</li>
        <li>Health education materials</li>
        <li>Emergency response capabilities</li>
      </ul>
      
      <h2>Impact in Numbers</h2>
      <p>Since launching our mobile clinic program six months ago:</p>
      <ul>
        <li>We've served over 2,500 patients across 15 communities</li>
        <li>Conducted 500+ health screenings</li>
        <li>Provided 1,200+ consultations</li>
        <li>Distributed essential medications to 800+ patients</li>
        <li>Identified and referred 150+ cases requiring specialized care</li>
      </ul>
      
      <h2>Community Stories</h2>
      <p>In the village of Sundarpur, our mobile clinic identified a diabetes epidemic that had gone undetected. Through our screening program, we found 23 individuals with previously undiagnosed diabetes and provided them with immediate care and ongoing management support.</p>
      
      <p>Mrs. Priya, a 65-year-old grandmother, hadn't seen a doctor in over five years due to mobility issues. Our mobile clinic brought care to her doorstep, managing her hypertension and improving her quality of life significantly.</p>
      
      <h2>Technology Integration</h2>
      <p>We're leveraging telemedicine technology to connect our mobile clinics with specialists in urban centers. This allows us to provide expert consultations even in the most remote locations, ensuring that patients receive the best possible care regardless of geography.</p>
      
      <h2>Future Expansion</h2>
      <p>Building on our success, we're planning to add three more mobile clinics to our fleet and expand our services to include dental care, mental health support, and maternal health services. Our goal is to reach 50 communities by the end of next year.</p>
    `,
    author: "WINNERS Medical Team",
    readTime: "6 min read",
    tags: ["Healthcare", "Community", "Mobile Clinics", "Accessibility"]
  },
  {
    id: 3,
    title: "She Leads: Empowering Women Entrepreneurs in Rural Areas",
    category: "Women Empowerment",
    featured: false,
    image: "/WomenEmpowerment.jpg",
    excerpt: "Our women's entrepreneurship program is creating opportunities for rural women to start and grow their own businesses, fostering economic independence and community development.",
    content: `
      <p>Economic empowerment of women is not just a social justice issue – it's an economic imperative. When women thrive, communities thrive. Our "She Leads" program is dedicated to breaking down barriers and creating opportunities for women entrepreneurs in rural areas.</p>
      
      <h2>The Challenge</h2>
      <p>Women in rural areas face unique challenges when starting businesses: limited access to capital, lack of business training, social constraints, and limited market access. These barriers prevent many talented women from realizing their entrepreneurial potential.</p>
      
      <h2>Our Approach</h2>
      <p>The "She Leads" program provides comprehensive support for women entrepreneurs:</p>
      <ul>
        <li>Business skills training and mentorship</li>
        <li>Access to micro-financing and grants</li>
        <li>Market linkage and networking opportunities</li>
        <li>Technology training for digital business</li>
        <li>Peer support groups and community building</li>
      </ul>
      
      <h2>Success Metrics</h2>
      <p>In the past year, our program has achieved remarkable results:</p>
      <ul>
        <li>150 women have completed our entrepreneurship training</li>
        <li>120 women have started their own businesses</li>
        <li>Average monthly income increase of 200%</li>
        <li>95% of businesses are still operational after one year</li>
        <li>Created 300+ jobs in local communities</li>
      </ul>
      
      <h2>Inspiring Stories</h2>
      <p>Sunita, a mother of three from a small village, started a handmade textile business after completing our program. She now employs 15 other women and exports her products to three countries. "The program gave me not just skills, but confidence," she says.</p>
      
      <p>Kavita transformed her family's small dairy farm into a thriving organic dairy business, supplying fresh milk and dairy products to nearby towns. She's now training other women in sustainable farming practices.</p>
      
      <h2>Community Impact</h2>
      <p>The ripple effects of women's entrepreneurship extend far beyond individual success. We've observed:</p>
      <ul>
        <li>Increased school enrollment among girls in participating communities</li>
        <li>Improved family nutrition and healthcare</li>
        <li>Enhanced social status and decision-making power for women</li>
        <li>Strengthened local economies through job creation</li>
      </ul>
      
      <h2>Technology Integration</h2>
      <p>We're helping women entrepreneurs leverage digital tools to expand their reach. From social media marketing to e-commerce platforms, technology is enabling rural women to access national and international markets.</p>
      
      <h2>Looking Ahead</h2>
      <p>Our goal is to reach 500 women entrepreneurs in the next two years and create a sustainable ecosystem of women-led businesses that can serve as models for other communities. We're also developing partnerships with financial institutions to improve access to credit for women entrepreneurs.</p>
    `,
    author: "WINNERS Women Empowerment Team",
    readTime: "7 min read",
    tags: ["Women Empowerment", "Entrepreneurship", "Rural Development", "Economic Growth"]
  },
  {
    id: 4,
    title: "From Dropout to Graduate: The Power Of Second Chances",
    category: "Education",
    featured: false,
    image: "/Education.jpg",
    excerpt: "Our alternative education program is giving dropouts a second chance at success, proving that it's never too late to pursue your dreams and build a better future.",
    content: `
      <p>Education is a fundamental right, but for many, circumstances beyond their control interrupt their learning journey. Our alternative education program believes in the power of second chances and the potential that lies within every individual, regardless of their past.</p>
      
      <h2>The Reality of Educational Dropouts</h2>
      <p>Millions of young people drop out of school each year due to various reasons: financial constraints, family responsibilities, health issues, or simply not finding the traditional education system suitable for their learning style. These individuals often face limited opportunities and social stigma.</p>
      
      <h2>Our Second Chance Program</h2>
      <p>We've developed a comprehensive alternative education system that includes:</p>
      <ul>
        <li>Flexible learning schedules that accommodate work and family commitments</li>
        <li>Practical, skill-based curriculum relevant to current job markets</li>
        <li>Individualized learning plans tailored to each student's needs</li>
        <li>Emotional and psychological support to rebuild confidence</li>
        <li>Career counseling and job placement assistance</li>
      </ul>
      
      <h2>Transformative Results</h2>
      <p>Our program has achieved remarkable success in helping dropouts rebuild their lives:</p>
      <ul>
        <li>200+ students have completed our alternative education program</li>
        <li>85% of graduates have secured stable employment</li>
        <li>60% have pursued higher education or professional certifications</li>
        <li>Average income increase of 180% post-graduation</li>
        <li>95% report improved self-confidence and life satisfaction</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Rajesh dropped out of school at 16 to support his family after his father's illness. At 28, he joined our program and discovered a passion for computer programming. Today, he's a successful software developer and mentors other students in our program.</p>
      
      <p>Priya left school due to early marriage and family responsibilities. Through our program, she completed her education and started a small business. She's now pursuing a degree in business administration while running her successful enterprise.</p>
      
      <h2>Holistic Support</h2>
      <p>We understand that educational challenges often stem from deeper issues. Our program provides:</p>
      <ul>
        <li>Counseling services to address emotional and psychological barriers</li>
        <li>Financial assistance for students facing economic hardship</li>
        <li>Family support and education to create a supportive home environment</li>
        <li>Peer support groups to build community and reduce isolation</li>
      </ul>
      
      <h2>Community Impact</h2>
      <p>The success of our graduates creates positive ripple effects in their communities. Many become role models and mentors, inspiring others to pursue their educational goals. We've seen increased enrollment in our program as word spreads about the transformative impact.</p>
      
      <h2>Future Vision</h2>
      <p>We're expanding our program to include specialized tracks in emerging fields like renewable energy, digital marketing, and healthcare. Our goal is to reach 1,000 students in the next three years and create a model that can be replicated in other regions.</p>
    `,
    author: "WINNERS Education Team",
    readTime: "8 min read",
    tags: ["Education", "Second Chances", "Alternative Learning", "Success Stories"]
  },
  {
    id: 5,
    title: "Green Revolution: Solar Power Transforms Village Life",
    category: "Sustainability",
    featured: false,
    image: "/Sustainability.jpg",
    excerpt: "Our solar power initiative is bringing clean, reliable energy to rural communities, transforming lives and creating new economic opportunities while protecting the environment.",
    content: `
      <p>Access to reliable electricity is a fundamental need that many rural communities still lack. Our solar power initiative is not just bringing light to dark homes – it's illuminating new possibilities for economic growth, education, and quality of life.</p>
      
      <h2>The Energy Challenge</h2>
      <p>In many rural areas, unreliable or non-existent electricity access limits economic opportunities, affects education quality, and impacts healthcare delivery. Traditional energy sources are often expensive, polluting, or simply unavailable.</p>
      
      <h2>Our Solar Solution</h2>
      <p>We've implemented a comprehensive solar power program that includes:</p>
      <ul>
        <li>Community solar microgrids for reliable electricity</li>
        <li>Individual home solar systems for remote households</li>
        <li>Solar-powered water pumps for agriculture</li>
        <li>Solar street lighting for safety and security</li>
        <li>Training programs for local solar technicians</li>
      </ul>
      
      <h2>Impact on Communities</h2>
      <p>Our solar initiative has transformed 25 villages, bringing power to over 5,000 households:</p>
      <ul>
        <li>100% of participating villages now have reliable electricity</li>
        <li>Average household energy costs reduced by 70%</li>
        <li>50+ new businesses started due to reliable power access</li>
        <li>School attendance increased by 40% in electrified villages</li>
        <li>Healthcare facilities can now operate 24/7</li>
      </ul>
      
      <h2>Economic Transformation</h2>
      <p>Reliable electricity has unlocked new economic opportunities. Local entrepreneurs have started businesses that were previously impossible:</p>
      <ul>
        <li>Cold storage facilities for agricultural products</li>
        <li>Small-scale manufacturing units</li>
        <li>Digital services and internet cafes</li>
        <li>Food processing and packaging businesses</li>
      </ul>
      
      <h2>Environmental Benefits</h2>
      <p>Our solar initiative is making a significant environmental impact:</p>
      <ul>
        <li>Reduced carbon emissions by 200 tons annually</li>
        <li>Eliminated dependence on diesel generators</li>
        <li>Improved air quality in participating villages</li>
        <li>Created awareness about renewable energy benefits</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>In the village of Greenfield, our solar microgrid enabled the local school to install computers and internet connectivity. Students now have access to digital learning resources, and the school has become a community learning center.</p>
      
      <p>Mohan, a local farmer, used solar-powered irrigation to transform his small plot into a thriving organic farm. He now supplies fresh vegetables to nearby towns and employs five other villagers.</p>
      
      <h2>Local Capacity Building</h2>
      <p>We've trained 30 local technicians to maintain and repair solar systems, creating sustainable local expertise and employment opportunities. These technicians are now providing services to neighboring villages, creating a ripple effect of clean energy adoption.</p>
      
      <h2>Future Expansion</h2>
      <p>Building on our success, we're planning to expand to 50 more villages in the next two years. We're also exploring innovative applications like solar-powered cold storage for agricultural products and solar water purification systems.</p>
    `,
    author: "WINNERS Sustainability Team",
    readTime: "7 min read",
    tags: ["Sustainability", "Solar Power", "Rural Development", "Clean Energy"]
  },
  {
    id: 6,
    title: "Unity in Action: How One Neighborhood Changed Everything",
    category: "Community",
    featured: false,
    image: "/Community.jpg",
    excerpt: "When neighbors come together with a shared vision, incredible things happen. Discover how one community transformed their neighborhood through collective action and mutual support.",
    content: `
      <p>True change happens when communities unite around a common purpose. The story of Riverside Heights demonstrates the incredible power of collective action and how neighbors working together can transform not just their immediate surroundings, but their entire future.</p>
      
      <h2>The Challenge</h2>
      <p>Riverside Heights was once a struggling neighborhood facing multiple challenges: deteriorating infrastructure, limited economic opportunities, safety concerns, and a lack of community cohesion. Residents felt isolated and powerless to effect change.</p>
      
      <h2>The Turning Point</h2>
      <p>Everything changed when a group of residents decided to take action. They organized the first neighborhood meeting in years, bringing together people from different backgrounds, ages, and economic situations to discuss their shared challenges and dreams.</p>
      
      <h2>Community-Led Initiatives</h2>
      <p>From that first meeting, several initiatives emerged:</p>
      <ul>
        <li>Neighborhood cleanup and beautification projects</li>
        <li>Community garden and urban farming program</li>
        <li>Youth mentorship and after-school programs</li>
        <li>Local business development and support network</li>
        <li>Safety patrol and community watch program</li>
      </ul>
      
      <h2>Measurable Impact</h2>
      <p>The transformation has been remarkable:</p>
      <ul>
        <li>Crime rates reduced by 60% in the past year</li>
        <li>Property values increased by 35%</li>
        <li>15 new local businesses opened</li>
        <li>Community garden produces 2,000 pounds of fresh vegetables annually</li>
        <li>95% of residents report feeling safer and more connected</li>
      </ul>
      
      <h2>Stories of Transformation</h2>
      <p>Mrs. Johnson, a retired teacher, started the neighborhood's first community library in her garage. What began with 50 books now houses over 2,000 volumes and serves as a learning center for children and adults alike.</p>
      
      <p>The Martinez family transformed their empty lot into a community playground, organizing weekend work parties where neighbors of all ages came together to build swings, slides, and picnic areas.</p>
      
      <h2>Economic Revitalization</h2>
      <p>The neighborhood's economic transformation has been equally impressive:</p>
      <ul>
        <li>Local entrepreneurs received support and mentorship</li>
        <li>Residents started buying from local businesses</li>
        <li>Tourism increased due to the neighborhood's reputation</li>
        <li>New residents are choosing to move to the area</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>The Riverside Heights story teaches us several important lessons:</p>
      <ul>
        <li>Change starts with a single conversation</li>
        <li>Everyone has something valuable to contribute</li>
        <li>Small actions can create big impacts</li>
        <li>Community ownership leads to sustainable change</li>
        <li>Diversity strengthens community bonds</li>
      </ul>
      
      <h2>Replication and Scaling</h2>
      <p>Inspired by Riverside Heights' success, we're working to replicate this model in other neighborhoods. We've developed a community organizing toolkit and are training facilitators to help other communities start their own transformation journeys.</p>
      
      <h2>Looking Forward</h2>
      <p>Riverside Heights continues to evolve, with new initiatives including a community center, senior care program, and environmental sustainability projects. The neighborhood has become a model for community-led development and a source of inspiration for others.</p>
    `,
    author: "WINNERS Community Team",
    readTime: "8 min read",
    tags: ["Community", "Unity", "Transformation", "Collective Action"]
  },
  {
    id: 7,
    title: "Artisan Revival: Traditional Crafts Meet Modern Markets",
    category: "Culture",
    featured: false,
    image: "/Culture.jpg",
    excerpt: "Our artisan support program is preserving traditional crafts while creating new economic opportunities, bridging the gap between heritage and modern market demands.",
    content: `
      <p>Traditional crafts represent more than just beautiful objects – they carry the stories, skills, and cultural heritage of communities. Our artisan revival program is ensuring these precious traditions not only survive but thrive in the modern economy.</p>
      
      <h2>The Challenge</h2>
      <p>Traditional artisans face numerous challenges in today's market: competition from mass-produced goods, limited access to modern marketing channels, lack of business skills, and dwindling interest from younger generations in learning traditional crafts.</p>
      
      <h2>Our Comprehensive Approach</h2>
      <p>We've developed a multi-faceted program to support traditional artisans:</p>
      <ul>
        <li>Skills preservation and training programs</li>
        <li>Modern business and marketing education</li>
        <li>Access to e-commerce and digital platforms</li>
        <li>Quality improvement and standardization</li>
        <li>Market linkage and export opportunities</li>
      </ul>
      
      <h2>Program Impact</h2>
      <p>Our artisan support program has achieved significant results:</p>
      <ul>
        <li>500+ artisans have participated in our programs</li>
        <li>Average income increase of 250% for participating artisans</li>
        <li>150+ traditional craft techniques documented and preserved</li>
        <li>50+ new apprentices trained in traditional crafts</li>
        <li>Products now sold in 15 countries through our network</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Master weaver Lakshmi, whose family has been creating handloom textiles for generations, was struggling to compete with machine-made fabrics. Through our program, she learned digital marketing and now sells her products globally through online platforms, increasing her income fivefold.</p>
      
      <p>Potter Rajesh combined traditional techniques with modern designs to create a unique product line. His pottery is now featured in high-end stores and he's training the next generation of artisans.</p>
      
      <h2>Cultural Preservation</h2>
      <p>Beyond economic benefits, our program is preserving cultural heritage:</p>
      <ul>
        <li>Documenting traditional techniques and processes</li>
        <li>Creating apprenticeship programs for young people</li>
        <li>Organizing cultural festivals and exhibitions</li>
        <li>Building museums and cultural centers</li>
        <li>Developing educational materials about traditional crafts</li>
      </ul>
      
      <h2>Innovation and Adaptation</h2>
      <p>We encourage artisans to innovate while respecting tradition:</p>
      <ul>
        <li>Incorporating modern designs with traditional techniques</li>
        <li>Using sustainable and eco-friendly materials</li>
        <li>Developing new product lines for contemporary markets</li>
        <li>Creating collaborative pieces with modern artists</li>
      </ul>
      
      <h2>Market Development</h2>
      <p>We've created multiple channels for artisans to reach customers:</p>
      <ul>
        <li>Online marketplace partnerships</li>
        <li>Pop-up shops in urban centers</li>
        <li>Cultural tourism and craft tours</li>
        <li>Corporate gifting and bulk orders</li>
        <li>International trade fair participation</li>
      </ul>
      
      <h2>Future Vision</h2>
      <p>We're expanding our program to include more craft categories and developing a comprehensive artisan certification system. Our goal is to create a sustainable ecosystem where traditional crafts can flourish alongside modern innovation.</p>
    `,
    author: "WINNERS Culture Team",
    readTime: "7 min read",
    tags: ["Culture", "Artisans", "Traditional Crafts", "Heritage"]
  },
  {
    id: 8,
    title: "Mental Health Matters: Breaking Stigma in Communities",
    category: "Health",
    featured: false,
    image: "/Health.jpg",
    excerpt: "Our mental health awareness program is breaking down barriers and creating supportive communities where mental wellness is prioritized and stigma is eliminated.",
    content: `
      <p>Mental health is as important as physical health, yet it remains one of the most misunderstood and stigmatized aspects of human wellness. Our mental health awareness program is working to change this reality, one community at a time.</p>
      
      <h2>The Mental Health Crisis</h2>
      <p>Mental health issues affect millions of people worldwide, yet many suffer in silence due to stigma, lack of awareness, and limited access to care. In many communities, mental health problems are still viewed as personal weaknesses rather than treatable medical conditions.</p>
      
      <h2>Our Holistic Approach</h2>
      <p>We've developed a comprehensive mental health program that addresses multiple aspects:</p>
      <ul>
        <li>Community education and awareness campaigns</li>
        <li>Training for community health workers</li>
        <li>Counseling and therapy services</li>
        <li>Peer support groups and networks</li>
        <li>Crisis intervention and emergency support</li>
      </ul>
      
      <h2>Breaking Down Barriers</h2>
      <p>Our program has made significant progress in reducing mental health stigma:</p>
      <ul>
        <li>Conducted 200+ awareness sessions reaching 10,000+ people</li>
        <li>Trained 50 community health workers in mental health basics</li>
        <li>Established 25 peer support groups across communities</li>
        <li>Provided counseling services to 1,500+ individuals</li>
        <li>Reduced stigma indicators by 70% in participating communities</li>
      </ul>
      
      <h2>Community Stories</h2>
      <p>Ravi, a young man struggling with depression, found hope through our peer support group. "I thought I was alone in my struggles," he says. "The group showed me that mental health challenges are common and treatable. Today, I'm not just better – I'm helping others who are going through similar experiences."</p>
      
      <p>Mrs. Sharma, a community leader, initially resisted our mental health program. After attending our awareness sessions, she became one of our strongest advocates, helping to organize mental health workshops in her neighborhood.</p>
      
      <h2>Preventive Care</h2>
      <p>We focus heavily on prevention and early intervention:</p>
      <ul>
        <li>Stress management workshops for students and workers</li>
        <li>Parenting programs that promote emotional well-being</li>
        <li>Workplace mental health initiatives</li>
        <li>School-based mental health education</li>
        <li>Community resilience building programs</li>
      </ul>
      
      <h2>Access to Care</h2>
      <p>We've made mental health services more accessible through:</p>
      <ul>
        <li>Mobile counseling units for remote areas</li>
        <li>Telehealth services for ongoing support</li>
        <li>Sliding scale fees based on ability to pay</li>
        <li>Multilingual services for diverse communities</li>
        <li>Integration with primary healthcare services</li>
      </ul>
      
      <h2>Cultural Sensitivity</h2>
      <p>Our approach respects cultural beliefs while promoting evidence-based care:</p>
      <ul>
        <li>Working with traditional healers and religious leaders</li>
        <li>Adapting interventions to local cultural contexts</li>
        <li>Using culturally appropriate language and examples</li>
        <li>Respecting family and community structures</li>
      </ul>
      
      <h2>Future Goals</h2>
      <p>We're expanding our program to reach more communities and developing specialized services for vulnerable populations including children, elderly, and people with disabilities. Our vision is a world where mental health is treated with the same importance as physical health.</p>
    `,
    author: "WINNERS Health Team",
    readTime: "8 min read",
    tags: ["Mental Health", "Awareness", "Community Support", "Wellness"]
  },
  {
    id: 9,
    title: "Waste To Wealth: Recycling Program Creates Jobs",
    category: "Environment",
    featured: false,
    image: "/Environment.jpg",
    excerpt: "Our innovative waste management program is not just cleaning up communities – it's creating employment opportunities and generating income while protecting the environment.",
    content: `
      <p>Waste management is one of the biggest challenges facing modern communities, but it also represents one of the greatest opportunities. Our "Waste to Wealth" program is transforming how communities handle waste while creating economic opportunities and protecting the environment.</p>
      
      <h2>The Waste Challenge</h2>
      <p>Improper waste management leads to environmental pollution, health hazards, and lost economic opportunities. Many communities lack proper waste collection systems, and valuable materials that could be recycled or repurposed end up in landfills or polluting the environment.</p>
      
      <h2>Our Circular Economy Approach</h2>
      <p>We've developed a comprehensive waste management system that includes:</p>
      <ul>
        <li>Community-based waste collection and sorting</li>
        <li>Recycling and upcycling facilities</li>
        <li>Composting programs for organic waste</li>
        <li>Education and awareness campaigns</li>
        <li>Job creation in the waste management sector</li>
      </ul>
      
      <h2>Economic Impact</h2>
      <p>Our program has created significant economic opportunities:</p>
      <ul>
        <li>200+ jobs created in waste management and recycling</li>
        <li>50+ small businesses started around waste processing</li>
        <li>Average monthly income of $300 for waste workers</li>
        <li>Local economy boosted by $2 million annually</li>
        <li>Cost savings of $500,000 in waste management for municipalities</li>
      </ul>
      
      <h2>Environmental Benefits</h2>
      <p>The environmental impact has been substantial:</p>
      <ul>
        <li>80% reduction in waste going to landfills</li>
        <li>500 tons of recyclable materials recovered monthly</li>
        <li>200 tons of compost produced annually</li>
        <li>Significant reduction in air and water pollution</li>
        <li>Conservation of natural resources through recycling</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Former waste picker Sunil now runs a successful recycling business, employing 15 people and processing 10 tons of waste daily. "The program gave me dignity and a sustainable livelihood," he says. "I'm not just cleaning the environment – I'm building a business."</p>
      
      <p>Community leader Priya organized her neighborhood to participate in our waste segregation program. The community now has the cleanest streets in the city and generates income from selling sorted recyclables.</p>
      
      <h2>Innovation and Technology</h2>
      <p>We're incorporating technology to improve efficiency:</p>
      <ul>
        <li>Mobile apps for waste collection scheduling</li>
        <li>GPS tracking for waste collection vehicles</li>
        <li>Automated sorting machines for large-scale operations</li>
        <li>Digital platforms connecting waste generators with processors</li>
      </ul>
      
      <h2>Community Engagement</h2>
      <p>Community participation is central to our success:</p>
      <ul>
        <li>Regular education sessions on waste reduction</li>
        <li>Incentive programs for proper waste segregation</li>
        <li>Community clean-up drives and competitions</li>
        <li>Youth engagement through environmental clubs</li>
      </ul>
      
      <h2>Scaling and Replication</h2>
      <p>We're working to replicate this model in other communities and developing partnerships with local governments and businesses. Our goal is to create a network of waste-to-wealth programs that can serve as models for sustainable waste management.</p>
      
      <h2>Future Vision</h2>
      <p>We're exploring new opportunities in waste processing, including biogas production from organic waste and manufacturing products from recycled materials. Our vision is a world where waste is seen as a resource rather than a problem.</p>
    `,
    author: "WINNERS Environment Team",
    readTime: "7 min read",
    tags: ["Environment", "Recycling", "Job Creation", "Sustainability"]
  }
];

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
    ariaLabel: "Facebook",
    hoverColor: "hover:text-blue-400"
  },
  {
    name: "LinkedIn", 
    href: "#",
    icon: Linkedin,
    ariaLabel: "LinkedIn",
    hoverColor: "hover:text-blue-400"
  },
  {
    name: "YouTube",
    href: "#", 
    icon: Youtube,
    ariaLabel: "YouTube",
    hoverColor: "hover:text-red-400"
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram, 
    ariaLabel: "Instagram",
    hoverColor: "hover:text-pink-400"
  }
];
