import { motion } from "framer-motion";
import { themes, Theme } from "@/data/shopData";

interface ThemeSelectorProps {
  onSelectTheme: (theme: Theme) => void;
}

const ThemeSelector = ({ onSelectTheme }: ThemeSelectorProps) => {
  return (
    <div className="min-h-[100dvh] bg-background px-4 py-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 pt-4"
      >
        <h1 className="font-display text-3xl font-semibold text-foreground tracking-tight">
          Discover
        </h1>
        <p className="text-muted-foreground font-body text-sm mt-1">
          Choose a vibe, explore the looks
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {themes.map((theme, index) => (
          <motion.button
            key={theme.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            onClick={() => onSelectTheme(theme)}
            className={`relative overflow-hidden rounded-2xl ${
              index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[3/4]"
            } group`}
            whileTap={{ scale: 0.97 }}
            layoutId={`theme-card-${theme.id}`}
          >
            <img
              src={theme.image}
              alt={theme.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
              <h2 className="font-display text-lg font-semibold text-primary-foreground text-shadow">
                {theme.title}
              </h2>
              <p className="text-primary-foreground/70 text-xs font-body mt-0.5">
                {theme.subtitle}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
