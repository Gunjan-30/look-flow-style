import { motion } from "framer-motion";
import { Product } from "@/data/shopData";

interface FloatingProductCardProps {
  product: Product;
  index: number;
  onTap: (product: Product) => void;
}

const FloatingProductCard = ({ product, index, onTap }: FloatingProductCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 + index * 0.15, ease: "easeOut" }}
      onClick={() => onTap(product)}
      className="glass rounded-2xl p-2 pr-3 flex items-center gap-2.5 min-w-0"
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 text-left">
        <p className="text-[11px] font-body text-primary-foreground truncate max-w-[100px] text-shadow">
          {product.name}
        </p>
        <p className="text-[11px] font-body font-semibold text-primary-foreground/90 text-shadow">
          {product.price}
        </p>
      </div>
    </motion.button>
  );
};

export default FloatingProductCard;
