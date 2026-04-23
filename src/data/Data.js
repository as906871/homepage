import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import { FaPills, FaHeartbeat, FaBrain, FaDna } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import {
  BsCalendarCheck,
  BsPeopleFill,
  BsClipboardCheck,
  BsFileEarmarkMedical,
} from "react-icons/bs";

export const treatments = [
  {
    title: "Mental Health",
    description:
      "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
    image:
      "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=400&q=80",
    reverse: false,
  },
  {
    title: "Addiction And Recovery",
    description:
      "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response.",
    image:
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&q=80",
    reverse: true,
  },
  {
    title: "Supervised Medical Weight Loss",
    description:
      "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    reverse: false,
  },
];

export const testimonials = [
  {
    quote:
      "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Agiets Inc",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Maria Johnson",
    company: "Health First",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "James Williams",
    company: "Wellness Corp",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    quote:
      "Exceptional care and compassionate providers. They truly listened to my concerns and helped me create a treatment plan that works for my lifestyle.",
    name: "Sarah Davis",
    company: "Self-employed",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    quote:
      "The staff is wonderful and the care is top-notch. They truly go above and beyond for each patient",
    name: "David Chen",
    company: "Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "The staff is wonderful and the care is top-notch. They truly go above and beyond for each patient",
    name: "Lisa Thompson",
    company: "Creative Studio",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    quote:
      "Professional, empathetic, and genuinely invested in my recovery. I highly recommend Ada Psychiatry.",
    name: "Robert Brown",
    company: "Finance Group",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    quote:
      "The staff is wonderful and the care is top-notch. They truly go above and beyond for each patient.",
    name: "Amanda White",
    company: "Education Inc",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

export const steps = [
  { number: "01", icon: <BsCalendarCheck />, label: "Schedule an appointment" },
  { number: "02", icon: <BsPeopleFill />, label: "Connect with your provider" },
  {
    number: "03",
    icon: <BsClipboardCheck />,
    label: "Discuss your comprehensive assessment",
  },
  {
    number: "04",
    icon: <BsFileEarmarkMedical />,
    label: "Receive your individualized treatment plan",
  },
];

export const states = [
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    state: "Arizona",
    type: "In-person and Virtual appointment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=400&q=80",
    state: "Washington",
    type: "Virtual appointment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=400&q=80",
    state: "Oregon",
    type: "Virtual appointment",
  },
];

export const services = [
  { icon: <MdOutlinePsychology size={28} />, label: "Psychiatric Evaluation" },
  { icon: <FaPills size={28} />, label: "Medication Management" },
  { icon: <FaHeartbeat size={28} />, label: "Supportive Psychotherapy" },
  { icon: <FaBrain size={28} />, label: "ADHD Screening" },
  { icon: <RiMentalHealthLine size={28} />, label: "MAT Treatment" },
  { icon: <FaDna size={28} />, label: "Gene Sight Testing" },
];

export const whyReasons = [
  {
    title: "Convenient access",
    description:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
  },
  {
    title: "Concierge approach",
    description:
      "Personalized care tailored to your unique needs and circumstances.",
  },
  {
    title: "High quality service",
    description:
      "Top-tier psychiatric services backed by years of experience and training.",
  },
  {
    title: "Trusted and empathic providers",
    description:
      "Our providers genuinely care about your well-being and recovery.",
  },
];

export const footerLinks = {
  "Quick Links": ["Who We Are", "What We Treat", "Services", "Contact Us"],
  Resources: ["FAQs", "Blog", "Fees and Insurance"],
  Legal: ["Terms", "Privacy", "Return Policy", "Cookie Settings"],
};

export const socialIcons = [
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaTiktok />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];

export const faqs = [
  {
    question: "Is Ada psychiatry confidential?",
    answer:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home. All sessions are fully confidential and comply with HIPAA regulations.",
    defaultOpen: true,
  },
  {
    question: "What is the best way to schedule an appointment?",
    answer:
      'You can schedule an appointment directly through our website by clicking "Book an Appointment," or by calling our office during business hours Monday through Thursday, 8:00 AM – 4:00 PM.',
    defaultOpen: false,
  },
  {
    question: "Do you prescribe controlled substance medication?",
    answer:
      "Our providers evaluate each patient individually. Controlled substances may be prescribed when clinically appropriate and in accordance with all applicable regulations and guidelines.",
    defaultOpen: false,
  },
  {
    question: "How long does the initial appointment take?",
    answer:
      "Initial psychiatric evaluations typically last 60–90 minutes. This allows our providers adequate time to thoroughly assess your needs and develop a comprehensive treatment plan.",
    defaultOpen: false,
  },
];

export const slides = [
  {
    heading: "Need A Mental\nHealth Provider?",
    subheading: "No Look Further",
    description:
      "Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=85",
  },
  {
    heading: "Compassionate Care\nFor Every Mind",
    subheading: "You Are Not Alone",
    description:
      "We provide personalized psychiatric care in-person and virtually, tailored to your unique journey toward wellness.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&q=85",
  },
  {
    heading: "Start Your Recovery\nJourney Today",
    subheading: "Expert Support Awaits",
    description:
      "From addiction recovery to mental wellness, our team of experts is here to guide you every step of the way.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85",
  },
  {
    heading: "Virtual & In-Person\nAppointments",
    subheading: "Convenient Access",
    description:
      "Meet your provider from the comfort of your own home or visit us in person. We are here for you.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1600&q=85",
  },
  {
    heading: "Trusted Mental\nHealth Providers",
    subheading: "Empathic & Experienced",
    description:
      "Our team of board-certified providers is committed to delivering high-quality, evidence-based psychiatric care.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1600&q=85",
  },
];
