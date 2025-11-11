import type { Variants, Transition } from 'framer-motion';

export const easeEmphasized = [0.16, 1, 0.3, 1] as const;
export const easeSoft = [0.22, 1, 0.36, 1] as const;
export const easeAccent = [0.33, 1, 0.68, 1] as const;
export const easeFlow = [0.2, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeEmphasized },
  },
};

export const fadeInSoft: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeSoft },
  },
};

export const staggerUp: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeSoft },
  },
};

export const riseIn: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeEmphasized },
  },
};

export const fadeInFromBlur: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: easeSoft },
  },
};

export const scrollReveal = (
  delay = 0,
  customTransition?: Partial<Transition>
): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.75,
      ease: easeSoft,
      ...customTransition,
    },
  },
});

