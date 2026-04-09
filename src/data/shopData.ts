import themeParty from "@/assets/theme-party.jpg";
import themeBeach from "@/assets/theme-beach.jpg";
import themeSleepwear from "@/assets/theme-sleepwear.jpg";
import themeTravel from "@/assets/theme-travel.jpg";
import themePlaytime from "@/assets/theme-playtime.jpg";
import lookPastel from "@/assets/look-pastel-party.jpg";
import lookFestive from "@/assets/look-festive-bright.jpg";
import lookEvening from "@/assets/look-evening-dressy.jpg";
import lookCoord from "@/assets/look-coord-party.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  sizes: string[];
}

export interface Look {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  products: Product[];
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  looks: Look[];
}

export const themes: Theme[] = [
  {
    id: "party-wear",
    title: "Party Wear",
    subtitle: "Dress up, stand out, celebrate",
    image: themeParty,
    looks: [
      {
        id: "pastel-party",
        title: "Pastel Dreams",
        subtitle: "Soft, romantic, celebration-ready",
        image: lookPastel,
        products: [
          { id: "p1", name: "Lavender Midi Dress", price: "₹4,299", image: lookPastel, sizes: ["XS", "S", "M", "L"] },
          { id: "p2", name: "Pearl Necklace Set", price: "₹1,899", image: lookPastel, sizes: ["One Size"] },
          { id: "p3", name: "Nude Block Heels", price: "₹2,599", image: lookPastel, sizes: ["36", "37", "38", "39", "40"] },
        ],
      },
      {
        id: "festive-bright",
        title: "Festive Glow",
        subtitle: "Bold, bright, unapologetically fun",
        image: lookFestive,
        products: [
          { id: "p4", name: "Sequin Party Dress", price: "₹5,999", image: lookFestive, sizes: ["XS", "S", "M", "L"] },
          { id: "p5", name: "Statement Earrings", price: "₹999", image: lookFestive, sizes: ["One Size"] },
          { id: "p6", name: "Faux Fur Stole", price: "₹2,199", image: lookFestive, sizes: ["One Size"] },
        ],
      },
      {
        id: "evening-dressy",
        title: "Evening Elegance",
        subtitle: "Timeless, refined, unforgettable",
        image: lookEvening,
        products: [
          { id: "p7", name: "Black Velvet Gown", price: "₹7,499", image: lookEvening, sizes: ["XS", "S", "M", "L", "XL"] },
          { id: "p8", name: "Crystal Drop Earrings", price: "₹1,499", image: lookEvening, sizes: ["One Size"] },
          { id: "p9", name: "Glitter Stilettos", price: "₹3,299", image: lookEvening, sizes: ["36", "37", "38", "39"] },
        ],
      },
      {
        id: "coord-party",
        title: "Sunset Co-ord",
        subtitle: "Comfortable, playful, celebration-friendly",
        image: lookCoord,
        products: [
          { id: "p10", name: "Red Co-ord Set", price: "₹3,799", image: lookCoord, sizes: ["XS", "S", "M", "L"] },
          { id: "p11", name: "Gold Hoop Earrings", price: "₹799", image: lookCoord, sizes: ["One Size"] },
          { id: "p12", name: "Strappy Sandals", price: "₹1,999", image: lookCoord, sizes: ["36", "37", "38", "39", "40"] },
        ],
      },
    ],
  },
  {
    id: "beach-looks",
    title: "Beach Looks",
    subtitle: "Sun-kissed, breezy, effortless",
    image: themeBeach,
    looks: [],
  },
  {
    id: "sleepwear",
    title: "Sleepwear",
    subtitle: "Luxe comfort, all night long",
    image: themeSleepwear,
    looks: [],
  },
  {
    id: "travel-essentials",
    title: "Travel Essentials",
    subtitle: "Chic on the go, anywhere",
    image: themeTravel,
    looks: [],
  },
  {
    id: "play-time",
    title: "Play Time",
    subtitle: "Bold colors, free spirits",
    image: themePlaytime,
    looks: [],
  },
];
