import reformer from "@/assets/class-reformer-new.png";
import mat from "@/assets/class-clinical-new.png";
import yoga from "@/assets/class-yoga-new.png";
import meditation from "@/assets/class-sauna-new.png";
import stretch from "@/assets/class-stretch-new.png";
import digital from "@/assets/class-digital-new.png";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";
import instructor4 from "@/assets/instructor-4.jpg";

export const classes = [
  {
    slug: "reformer-pilates",
    name: "Reformer Pilates",
    image: reformer,
    short:
      "Build core strength, improve posture, increase flexibility, and develop full-body control using reformer equipment.",
    long: "Build core strength, improve posture, increase flexibility, and develop full-body control using reformer equipment.",
    duration: "50 min",
    level: "All levels",
  },
  {
    slug: "digital-reformer-classes",
    name: "Digital Reformer Classes",
    image: digital,
    short:
      "Technology-enhanced reformer sessions that provide precision, performance tracking, and an engaging workout experience.",
    long: "Technology-enhanced reformer sessions that provide precision, performance tracking, and an engaging workout experience.",
    duration: "45 min",
    level: "All levels",
  },
  {
    slug: "clinical-pilates",
    name: "Clinical Pilates",
    image: mat,
    short:
      "Personalized Pilates programs designed to support rehabilitation, injury prevention, and long-term movement health.",
    long: "Personalized Pilates programs designed to support rehabilitation, injury prevention, and long-term movement health.",
    duration: "50 min",
    level: "Rehab & Recovery",
  },
  {
    slug: "stretch-strength",
    name: "Stretch + Strength",
    image: stretch,
    short:
      "Improve flexibility, mobility, balance, and functional strength through guided movement sessions.",
    long: "Improve flexibility, mobility, balance, and functional strength through guided movement sessions.",
    duration: "45 min",
    level: "All levels",
  },
  {
    slug: "yoga",
    name: "Yoga",
    image: yoga,
    short:
      "Restore balance through mindful movement, breathing exercises, and flexibility-focused yoga classes.",
    long: "Restore balance through mindful movement, breathing exercises, and flexibility-focused yoga classes.",
    duration: "60 min",
    level: "All levels",
  },
  {
    slug: "infrared-sauna",
    name: "Infrared Sauna",
    image: meditation,
    short:
      "Relax and recover with infrared heat therapy to reduce muscle tension, improve circulation, and enhance recovery.",
    long: "Relax and recover with infrared heat therapy to reduce muscle tension, improve circulation, and enhance recovery.",
    duration: "30 min",
    level: "Recovery",
  },
] as const;

export const pillars = [
  { title: "Stronger", desc: "Build core strength, improve posture & stability." },
  { title: "Balanced", desc: "Enhance flexibility, mobility and body awareness." },
  { title: "Rejuvenated", desc: "Reduce stress and restore energy from within." },
  { title: "Mindful", desc: "Feel more connected, focused and empowered." },
] as const;

export const instructors = [
  { name: "Tayla", role: "Founder & Instructor", image: instructor1 },
  { name: "Lauren", role: "Pilates Instructor", image: instructor2 },
  { name: "Maddison", role: "Pilates Instructor", image: instructor3 },
  { name: "Chloe", role: "Yoga Instructor", image: instructor4 },
] as const;

export const specialOffers = [
  {
    name: "Gift Vouchers",
    price: "",
    unit: "",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/gift_cards/add?mbo_id=70&source=buy_now_link&link_type=gift_card",
    description:
      "Give your loved ones gift of strength, balance & longevity and make them feel special as they are with a gift that nourishes from the inside out. Our Gift cards offer the perfect blend of physical challenge and mental restoration through the power of Pilates",
    features: [],
    buttonText: "Give the gift of wellness",
  },
  {
    name: "Intro Offer",
    price: "$40",
    unit: "4 for $40!",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_contract?mbo_item_id=117",
    description: "",
    features: [
      "3X reformer classes for $40 (50 min.)",
      "1 X Sauna access (30 min.)",
      "Valid for 1 month · Available to new client",
      "Special discount available when you sign up for a membership during the Intro offer period",
    ],
    buttonText: "Start Something New",
  },
  {
    name: "Reformer Pilates Casual",
    price: "$28",
    unit: "",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100076",
    description: "Valid for 1 month from purchase date",
    features: [
      "Access studio from 5am - 10pm at your convenience",
      "First On-boarding session must be booked during the staff hours",
    ],
    buttonText: "Get Moving",
  },
] as const;

export const weeklyMemberships = [
  {
    name: "Seamless Weekly Membership",
    price: "$47.25",
    unit: "/week",
    saveBadge: "Save 10%",
    originalPrice: "$52.25",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_contract?mbo_item_id=120",
    description: "Unlimited Reformer, Mat, Yoga, HIIT Hybrid, Stretch + Strength and much more",
    features: [
      "Unlimited Infrared Sauna",
      "10% off on Weekly Direct Debit (Month Special)",
      "Welcome Pack Included",
      "Access studio from 5am - 10pm at your convenience",
      "No joining fee",
      "Auto Renewing until cancelled",
      "First On-boarding session must be booked during the staff hours",
    ],
    buttonText: "Jump In",
  },
  {
    name: "6 Month Value Commitment",
    price: "$45.50",
    unit: "/week",
    saveBadge: "",
    originalPrice: "",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_contract?mbo_item_id=119",
    description: "Unlimited Reformer, Mat, Yoga, HIIT Hybrid, Stretch + Strength and much more",
    features: [
      "Unlimited Infrared Sauna",
      "2 Weeks Free",
      "Welcome Pack Included",
      "Access studio from 5am - 10pm at your convenience",
      "No joining fee",
      "Auto Renewing",
      "6-Month Contract",
      "First On-boarding session must be booked during the staff hours",
    ],
    buttonText: "Start 6-Month Plan",
  },
  {
    name: "12 Month Value commitment",
    price: "$42.50",
    unit: "/week",
    saveBadge: "",
    originalPrice: "",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_contract?mbo_item_id=118",
    description: "Unlimited Reformer, Mat, Yoga, HIIT Hybrid, Stretch + Strength and much more",
    features: [
      "Unlimited Infrared Sauna",
      "5 Weeks Free",
      "Welcome Pack Included",
      "Access studio from 5am - 10pm at your convenience",
      "No joining fee",
      "Auto Renewing",
      "12-Month Contract",
      "First On-boarding session must be booked during the staff hours",
    ],
    buttonText: "Start Year of Wellness",
  },
] as const;

export const pilatesSessionPacks = [
  {
    name: "5 Pack Digital Reformer Pilates",
    price: "$120",
    unit: "",
    saveBadge: "Save 14%",
    originalPrice: "$28 / session",
    discountedPrice: "$24.00 / session",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100039",
    description: "Digital Reformer, Mat, Yoga, HIIT Hybrid, Stretch + Strength and much more:",
    features: [
      "Access studio from 5am - 10pm at your convenience",
      "First On-boarding session must be booked during the staff hours",
      "Valid for 2 months from purchase date",
    ],
    buttonText: "Buy and Save",
  },
  {
    name: "10 Pack Digital Reformer Pilates",
    price: "$210",
    unit: "",
    saveBadge: "Save 25%",
    originalPrice: "$28 / session",
    discountedPrice: "$21.00 / session",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100040",
    description: "Digital Reformer, Mat, Yoga, HIIT Hybrid, Stretch + Strength and much more:",
    features: [
      "Access studio from 5am - 10pm at your convenience",
      "First On-boarding session must be booked during the staff hours",
      "Valid for 3 months from purchase date",
    ],
    buttonText: "Buy and Save",
  },
  {
    name: "20 Pack Digital Reformer Pilates",
    price: "$360",
    unit: "",
    saveBadge: "Save 36%",
    originalPrice: "$28 / session",
    discountedPrice: "$18.00 / session",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100041",
    description: "Digital Reformer, Mat, Yoga, HIIT Hybrid, Stretch + Strength and much more:",
    features: [
      "Access studio from 5am - 10pm at your convenience",
      "First On-boarding session must be booked during the staff hours",
      "Valid for 6 months from purchase date",
    ],
    buttonText: "Buy and Save",
  },
] as const;

export const infraredSaunaPacks = [
  {
    name: "Infrared Sauna Casual (45 Mins)",
    price: "$25",
    unit: "",
    saveBadge: "",
    originalPrice: "",
    discountedPrice: "",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100044",
    description: "Access to the infrared sauna:",
    features: ["Valid for 1 month from purchase date"],
    buttonText: "Buy Now",
  },
  {
    name: "Infrared Sauna Casual for Two (45 Mins)",
    price: "$40",
    unit: "",
    saveBadge: "Save 20%",
    originalPrice: "$25 / session",
    discountedPrice: "$20.00 / session",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100048",
    description: "Access the Infrared Sauna:",
    features: ["Valid for 1 month from purchase date", "Applies for 2 people"],
    buttonText: "Connect and Relax",
  },
  {
    name: "5 Pack Infrared Sauna (45 Mins)",
    price: "$110",
    unit: "",
    saveBadge: "Save 12%",
    originalPrice: "$25 / session",
    discountedPrice: "$22.00 / session",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100022",
    description: "Access the Infrared Sauna:",
    features: ["Valid for 2 months from purchase date"],
    buttonText: "Buy and Save",
  },
  {
    name: "10 Pack Infrared Sauna (45 Mins)",
    price: "$210",
    unit: "",
    saveBadge: "Save 16%",
    originalPrice: "$25 / session",
    discountedPrice: "$21.00 / session",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100023",
    description: "Access the Infrared Sauna:",
    features: ["Valid for 3 months from purchase date"],
    buttonText: "Buy and Save",
  },
  {
    name: "20 Pack Infrared Sauna (45 Mins)",
    price: "$360",
    unit: "",
    saveBadge: "Save 28%",
    originalPrice: "$25 / session",
    discountedPrice: "$18.00 / session",
    url: "https://cart.mindbodyonline.com/sites/129220/cart/add_service?mbo_item_id=100024",
    description: "Access the Infrared Sauna:",
    features: ["Valid for 6 months from purchase date"],
    buttonText: "Buy and Save",
  },
] as const;

export const schedule = [
  {
    day: "Monday",
    sessions: [
      ["6:00", "Reformer Pilates", "Tayla"],
      ["9:30", "Mat Pilates", "Lauren"],
      ["17:30", "Reformer Pilates", "Maddison"],
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      ["6:30", "Yoga Flow", "Chloe"],
      ["10:00", "Reformer Pilates", "Tayla"],
      ["18:00", "Meditation", "Chloe"],
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      ["6:00", "Reformer Pilates", "Maddison"],
      ["9:30", "Mat Pilates", "Tayla"],
      ["17:30", "Reformer Pilates", "Lauren"],
    ],
  },
  {
    day: "Thursday",
    sessions: [
      ["6:30", "Yoga Flow", "Chloe"],
      ["10:00", "Reformer Pilates", "Lauren"],
      ["18:00", "Reformer Pilates", "Maddison"],
    ],
  },
  {
    day: "Friday",
    sessions: [
      ["6:00", "Reformer Pilates", "Tayla"],
      ["9:30", "Meditation", "Chloe"],
      ["17:00", "Mat Pilates", "Maddison"],
    ],
  },
  {
    day: "Saturday",
    sessions: [
      ["7:30", "Reformer Pilates", "Lauren"],
      ["9:00", "Yoga Flow", "Chloe"],
      ["10:30", "Reformer Pilates", "Tayla"],
    ],
  },
] as const;
