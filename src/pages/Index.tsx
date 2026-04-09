import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeSelector from "@/components/ThemeSelector";
import ImmersiveFeed from "@/components/ImmersiveFeed";
import { Theme } from "@/data/shopData";

const Index = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  return (
    <div className="max-w-md mx-auto relative bg-background min-h-[100dvh] overflow-hidden">
      <AnimatePresence mode="wait">
        {!selectedTheme ? (
          <motion.div
            key="selector"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ThemeSelector onSelectTheme={setSelectedTheme} />
          </motion.div>
        ) : (
          <motion.div
            key="feed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ImmersiveFeed
              theme={selectedTheme}
              onBack={() => setSelectedTheme(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
