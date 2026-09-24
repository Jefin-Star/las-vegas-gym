import { MembershipPlan, Facility } from '../types';

export const GYM_DETAILS = {
  name: "LAS VEGAS",
  tagline: "Unleash Your Peak Physique & Elite Fitness",
  phone: "8606047585",
  whatsappNumber: "8606047585",
  whatsappUrl: "https://wa.me/918606047585",
  email: "faizushemi@gmail.com",
  instagramUrl: "https://www.instagram.com/las______vegas_?stkn=MTBheG15d3k0YmNleA==",
  instagramHandle: "@las______vegas_",
  coordinates: "8°52'23.0\"N 76°38'29.6\"E",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=8.8730471,76.6415502",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.2857628276834!2d76.6415502!3d8.873047099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e32dcc6aecd7%3A0x24cb112f46f9f440!2sLas%20vegas%20fitness%20centre!5e1!3m2!1sen!2sin!4v1790253704080!5m2!1sen!2sin",
  logoPath: "/lash-vegas-logo.jpg",
  heroImagePath: "/gym-hero.jpg"
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-1m",
    name: "1 Month Starter",
    duration: "1 Month",
    totalPrice: 1500,
    pricePerMonth: 1500,
    admissionFee: 700,
    membershipFee: 800,
    hasAdmissionFee: true,
    badge: "Flexible Entry",
    popular: false,
    savingsText: "₹700 one-time admission + ₹800 monthly fee",
    features: [
      "Full gym equipment & weights access",
      "Morning & evening batch flexibility",
      "Initial workout schedule guidance",
      "Locker & changing room access",
      "No long-term commitment required"
    ]
  },
  {
    id: "plan-3m",
    name: "3 Months Momentum",
    duration: "3 Months",
    totalPrice: 2500,
    pricePerMonth: 833,
    admissionFee: 0,
    hasAdmissionFee: false,
    badge: "Zero Admission Fee",
    popular: false,
    savingsText: "Save ₹2,000 compared to monthly renews",
    features: [
      "NO Admission Fee (₹0)",
      "Continuous 90-day progress tracking",
      "Full access to strength & cardio decks",
      "Personalized training split advice",
      "Complimentary locker service"
    ]
  },
  {
    id: "plan-6m",
    name: "6 Months Transformation",
    duration: "6 Months",
    totalPrice: 3999,
    pricePerMonth: 666,
    admissionFee: 0,
    hasAdmissionFee: false,
    badge: "Most Popular",
    popular: true,
    savingsText: "Only ₹666/month • Save over ₹5,000",
    features: [
      "NO Admission Fee (₹0)",
      "Massive ₹5,000+ total savings",
      "Custom body recomposition program",
      "Free diet & nutrition consultation",
      "Priority trainer assistance & spot checks",
      "Locker & changing facility included"
    ]
  },
  {
    id: "plan-1y",
    name: "1 Year Elite Annual",
    duration: "12 Months",
    totalPrice: 6000,
    pricePerMonth: 500,
    admissionFee: 0,
    hasAdmissionFee: false,
    badge: "Best Value • ₹500/mo",
    popular: false,
    savingsText: "Unbeatable ₹500/month • Save ₹12,000",
    features: [
      "NO Admission Fee (₹0)",
      "Rock-bottom rate of just ₹500/month",
      "Full 365-day membership privilege",
      "Comprehensive bodybuilding & fitness roadmap",
      "Nutritional guidance & quarterly review",
      "VIP community access & support"
    ]
  }
];

export const TIMINGS_SCHEDULE = {
  morning: {
    title: "Morning Session",
    start: "05:30",
    end: "10:00",
    display: "5:30 AM – 10:00 AM",
    description: "Ideal for early-bird strength workouts, high energy cardio, and starting your day with maximum vigor."
  },
  evening: {
    title: "Evening Session",
    start: "16:00",
    end: "21:30",
    display: "4:00 PM – 9:30 PM",
    description: "Peak hypertrophy hours, high-intensity training, and after-work strength and conditioning."
  },
  sunday: {
    title: "Sunday",
    display: "Closed",
    description: "Dedicated full-rest and muscle recovery day. Maintenance and deep sanitization of the club."
  }
};

export const FACILITIES: Facility[] = [
  {
    id: "weights",
    title: "Heavy-Duty Free Weights",
    description: "Olympic barbells, calibrated bumper plates, cast-iron dumbbells up to 50kg+, and ergonomic EZ-bars for serious muscle building.",
    badge: "Strength Zone",
    icon: "Dumbbell"
  },
  {
    id: "racks",
    title: "Power Cages & Squat Stations",
    description: "Multi-station heavy steel power racks, competition bench presses, and dedicated deadlift platforms with shock-absorbent turf.",
    badge: "Powerlifting",
    icon: "Shield"
  },
  {
    id: "hypertrophy",
    title: "Targeted Resistance Machines",
    description: "Precision biomechanical pin-loaded and plate-loaded selectorized equipment targeting back, chest, legs, shoulders, and arms.",
    badge: "Bodybuilding",
    icon: "Activity"
  },
  {
    id: "cardio",
    title: "Endurance & Cardio Deck",
    description: "Commercial grade treadmills, cross-trainers, assault bikes, and rowing ergometers for stamina conditioning and fat loss.",
    badge: "Cardio",
    icon: "Flame"
  },
  {
    id: "coaching",
    title: "Expert Coaching & Guidance",
    description: "Hands-on technique correction, posture checks, progressive overload tracking, and tailored guidance for all experience levels.",
    badge: "Certified",
    icon: "Award"
  },
  {
    id: "amenities",
    title: "Clean Lockers & Amenities",
    description: "Hygienic changing areas, personal storage lockers, purified drinking water, and high-flow air conditioning ventilation.",
    badge: "Hygiene",
    icon: "Sparkles"
  }
];

export const GYM_RULES = [
  "Carry clean indoor sports shoes and a workout towel at all times.",
  "Always re-rack weights and dumbbells after completing your sets.",
  "Respect fellow athletes, trainers, and maintain a motivating atmosphere.",
  "Follow timing slots: Morning 5:30 AM – 10:00 AM & Evening 4:00 PM – 9:30 PM."
];
