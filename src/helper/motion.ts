import type { Variants } from "motion/react";

/* Shared vocabulary for the scroll reveals on the main page. The hero in
   pages/Home runs the same easing and distances but fires on mount off a
   `heroLoaded` flag; everything below the fold has to wait until it is
   actually on screen, so these go through whileInView + REVEAL_VIEWPORT. */

/** Expo-out. Same curve the hero headline uses. */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/** Fire once, a fifth of the way in — a full-height section never reaches 0.5. */
export const REVEAL_VIEWPORT = { once: true, amount: 0.2 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE_OUT_EXPO },
  },
};

/** Shorter travel for items inside an already-revealed block. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

/** Cards and logo tiles: a touch of scale so grids read as one wave. */
export const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/**
 * Parent that walks its children instead of the hero's hand-written delay
 * ladder — the grids are built from `.map()`, so per-index delays would mean
 * threading the index into every transition.
 */
export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/* Every inner page opens on a full-bleed photo hero that is above the fold on
   arrival, so those blocks animate on mount (`animate`) instead of
   whileInView — an IntersectionObserver that is already satisfied fires at an
   unpredictable point relative to the route transition. Same curve and travel
   as the Home headline so the two entrances read as one system. */

export const fadeUpHero: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: EASE_OUT_EXPO },
  },
};

/** The bg-black60 scrim over a hero photo: lifts the image out of black. */
export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};
