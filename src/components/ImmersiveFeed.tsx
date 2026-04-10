import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronUp } from "lucide-react";
import { Theme, Product } from "@/data/shopData";
import QuickShopSheet from "./QuickShopSheet";

interface ImmersiveFeedProps {
  theme: Theme;
  onBack: () => void;
}

const ImmersiveFeed = ({ theme, onBack }: ImmersiveFeedProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchDeltaY = useRef(0);

  const looks = theme.looks;
  const currentLook = looks[currentIndex];

  const handleSwipe = useCallback(
    (direction: "up" | "down") => {
      if (isTransitioning) return;
      if (direction === "up" && currentIndex < looks.length - 1) {
        setIsTransitioning(true);
        setCurrentIndex((i) => i + 1);
        setShowSwipeHint(false);
        setTimeout(() => setIsTransitioning(false), 500);
      } else if (direction === "down" && currentIndex > 0) {
        setIsTransitioning(true);
        setCurrentIndex((i) => i - 1);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    },
    [currentIndex, looks.length, isTransitioning]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaY.current = touchStartY.current - e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaY.current) > 50) {
      handleSwipe(touchDeltaY.current > 0 ? "up" : "down");
    }
    touchDeltaY.current = 0;
  };

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 30) {
        handleSwipe(e.deltaY > 0 ? "up" : "down");
      }
    },
    [handleSwipe]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={onBack}
        className="absolute top-12 left-4 z-40 glass rounded-full p-2"
      >
        <ArrowLeft className="w-5 h-5 text-primary-foreground" />
      </motion.button>

      {/* Progress dots */}
      <div className="absolute top-12 right-4 z-40 flex flex-col gap-1.5">
        {looks.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "h-5 bg-primary-foreground"
                : "h-1.5 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Look slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentLook.id}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          {/* Background image with slow zoom */}
          <motion.img
            src={currentLook.image}
            alt={currentLook.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          />

          {/* Gradient overlays - softer fade for readability without competing with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />
          <div className="absolute bottom-0 left-0 right-0 h-[28%] bg-gradient-to-t from-black/50 to-transparent" />

          {/* Title block */}
          <div className="absolute top-24 left-5 right-16 z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-3xl font-semibold text-white text-shadow"
            >
              {currentLook.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-white/70 font-body text-sm mt-1 text-shadow"
            >
              {currentLook.subtitle}
            </motion.p>
          </div>

          {/* Bottom section */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-5 flex flex-col items-center gap-3" style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom))' }}>
            {/* Product name microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white/60 text-xs font-body tracking-widest uppercase text-shadow"
            >
              {currentLook.product.name}
            </motion.p>

            {/* Swipe hint */}
            {showSwipeHint && currentIndex === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-1"
              >
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronUp className="w-4 h-4 text-white/40" />
                </motion.div>
                <span className="text-white/35 text-xs font-body">
                  Swipe up for more
                </span>
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowDetails(true)}
              className="w-full max-w-sm py-4 px-6 rounded-full font-body font-semibold text-[15px] tracking-wide"
              style={{
                backgroundColor: 'rgba(45, 30, 60, 0.88)',
                color: '#FFFFFF',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              View Product Details – {currentLook.product.price}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Product detail sheet */}
      <AnimatePresence>
        {showDetails && (
          <QuickShopSheet
            product={currentLook.product}
            onClose={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImmersiveFeed;
