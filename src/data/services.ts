import dashboard from "@/assets/hero-dashboard.jpg";
import install from "@/assets/install.jpg";
import carplay from "@/assets/carplay.jpg";
import audio from "@/assets/audio.jpg";
import camera from "@/assets/camera.jpg";
import nightDrive from "@/assets/night-drive.jpg";
import workshop from "@/assets/workshop.jpg";

export type Service = {
  slug: string;
  title: string;
  index: string;
  summary: string;
  benefits: string[];
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "car-radio-upgrades",
    title: "Car Radio Upgrades",
    index: "01",
    summary:
      "Swap a tired factory head unit for a modern receiver with clean audio processing, digital tuning and controls that still feel native to your car.",
    benefits: ["Factory-fit dash kits", "Higher power pre-outs", "Digital & satellite radio"],
    image: install,
    alt: "Technician fitting a new car radio head unit into a dashboard",
  },
  {
    slug: "touchscreen-systems",
    title: "Touchscreen Systems",
    index: "02",
    summary:
      "Large, responsive capacitive displays fitted flush to your dash - no bulky brackets, no floating tablets, no rattles.",
    benefits: ['7" to 12.3" displays', "Anti-glare bonded glass", "Custom dash fabrication"],
    image: dashboard,
    alt: "Modern widescreen touchscreen infotainment display in a premium dashboard",
  },
  {
    slug: "apple-carplay",
    title: "Apple CarPlay",
    index: "03",
    summary:
      "Wired or wireless CarPlay with instant handover - maps, messages, music and Siri exactly where your eyes already are.",
    benefits: ["Wireless auto-connect", "Steering wheel Siri", "Split-screen navigation"],
    image: carplay,
    alt: "Car touchscreen running a phone projection interface with navigation and music",
  },
  {
    slug: "android-auto",
    title: "Android Auto",
    index: "04",
    summary:
      "Full Android Auto integration tuned for fast boot and stable wireless pairing, with Google Maps and Assistant built into the drive.",
    benefits: ["Wireless pairing", "Google Assistant voice", "Fast cold-boot handover"],
    image: nightDrive,
    alt: "Driver at night with illuminated dashboard and connected screen",
  },
  {
    slug: "bluetooth-audio",
    title: "Bluetooth & Audio Upgrades",
    index: "05",
    summary:
      "Component speakers, amplifiers, subwoofers and DSP tuning - engineered around your cabin, not a generic box of parts.",
    benefits: ["DSP time alignment", "Sound-deadened doors", "Hands-free call clarity"],
    image: audio,
    alt: "Premium component speaker installed in a luxury car door panel",
  },
  {
    slug: "backup-camera",
    title: "Backup Camera Integration",
    index: "06",
    summary:
      "Discreet reverse cameras wired to trigger automatically, with dynamic guide lines and low-light sensors that actually work at night.",
    benefits: ["Auto reverse trigger", "Low-light HD sensor", "Dynamic guide lines"],
    image: camera,
    alt: "Reverse camera view with parking guide lines shown on a dashboard screen",
  },
  {
    slug: "steering-wheel-controls",
    title: "Steering Wheel Controls",
    index: "07",
    summary:
      "Keep every original button alive. We map volume, track and voice controls to your new system so nothing about the drive changes.",
    benefits: ["Full button retention", "CAN-bus interfacing", "Chime & warning retention"],
    image: nightDrive,
    alt: "Hands on a leather steering wheel with illuminated audio controls",
  },
  {
    slug: "professional-installation",
    title: "Professional Installation",
    index: "08",
    summary:
      "Soldered, loomed and heat-shrunk wiring, torque-checked trim and a full function test before your keys come back.",
    benefits: ["No-splice wiring looms", "Trim-safe removal tools", "2-year workmanship warranty"],
    image: workshop,
    alt: "Professional car audio workshop with a dark sedan under focused lighting",
  },
];
