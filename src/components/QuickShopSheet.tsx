import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { Product } from "@/data/shopData";
import { useState } from "react";

interface QuickShopSheetProps {
  product: Product | null;
  onClose: () => void;
}

const QuickShopSheet = ({ product, onClose }: QuickShopSheetProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-50"
        onClick={onClose}
      />
      <motion.div
        key="sheet"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-3xl max-h-[70dvh] overflow-hidden"
      >
        <div className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div className="w-2 h-2" />
            <div className="w-10 h-1 rounded-full bg-border" />
            <button onClick={onClose} className="p-1">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="flex gap-4">
            <div className="w-28 h-36 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {product.name}
              </h3>
              <p className="text-accent font-body font-semibold text-lg mt-1">
                {product.price}
              </p>
              <p className="text-muted-foreground text-xs font-body mt-1">
                Inclusive of all taxes
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-body font-medium text-foreground mb-2">
              Select Size
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-xl text-sm font-body transition-all ${
                    selectedSize === size
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full mt-6 mb-2 py-4 rounded-2xl bg-foreground text-background font-body font-medium text-sm flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickShopSheet;
