import catParty from "@/assets/cat-party.jpg";
import catSummer from "@/assets/cat-summer.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catToys from "@/assets/cat-toys.jpg";
import catCraft from "@/assets/cat-craft.jpg";
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
  product: Product;
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  looks: Look[];
}

const partyLooks: Look[] = [
  {
    id: "pastel-party",
    title: "Pastel Dreams",
    subtitle: "Soft, romantic, celebration-ready",
    image: lookPastel,
    product: {
      id: "p1",
      name: "Lavender Tutu Dress",
      price: "₹2,299",
      image: lookPastel,
      sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y"],
    },
  },
  {
    id: "festive-bright",
    title: "Festive Glow",
    subtitle: "Bold, bright, unapologetically fun",
    image: lookFestive,
    product: {
      id: "p4",
      name: "Sequin Party Romper",
      price: "₹1,999",
      image: lookFestive,
      sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y"],
    },
  },
  {
    id: "evening-dressy",
    title: "Evening Elegance",
    subtitle: "Timeless, refined, unforgettable",
    image: lookEvening,
    product: {
      id: "p7",
      name: "Velvet Bow Dress",
      price: "₹2,799",
      image: lookEvening,
      sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y", "3-4Y"],
    },
  },
  {
    id: "coord-party",
    title: "Sunset Co-ord",
    subtitle: "Comfortable, playful, celebration-friendly",
    image: lookCoord,
    product: {
      id: "p10",
      name: "Cotton Co-ord Set",
      price: "₹1,599",
      image: lookCoord,
      sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y"],
    },
  },
];

const singleLook = (id: string, title: string, subtitle: string, image: string, productName: string, price: string): Look[] => [
  {
    id,
    title,
    subtitle,
    image,
    product: {
      id: `${id}-p`,
      name: productName,
      price,
      image,
      sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y"],
    },
  },
];

export const themes: Theme[] = [
  {
    id: "party-wear",
    title: "Party Wear",
    subtitle: "Dress up, stand out, celebrate",
    image: catParty,
    looks: partyLooks,
  },
  {
    id: "summer-wear",
    title: "Summer Wear",
    subtitle: "Light, breezy styles for sunny days",
    image: catSummer,
    looks: singleLook("summer-breeze", "Sunny Days", "Light, breezy, effortless", catSummer, "Linen Summer Set", "₹1,499"),
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "Little details, big charm",
    image: catAccessories,
    looks: singleLook("accessories-charm", "Little Charms", "Tiny touches that complete the look", catAccessories, "Knit Cap & Bib Set", "₹899"),
  },
  {
    id: "toys",
    title: "Toys",
    subtitle: "Playtime favourites for every little one",
    image: catToys,
    looks: singleLook("toys-play", "Playtime Picks", "Soft, colorful, endlessly fun", catToys, "Wooden Toy Bundle", "₹1,299"),
  },
  {
    id: "art-craft",
    title: "Art & Craft",
    subtitle: "Spark creativity through play",
    image: catCraft,
    looks: singleLook("craft-create", "Little Creators", "Crayons, color, imagination", catCraft, "Mini Art Kit", "₹799"),
  },
];
