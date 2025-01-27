import { gsap } from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// Define constants for clip paths
const CLIP_PATHS = {
  hidden: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  visible: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
} as const;

// Define common animation settings
const ANIMATION_CONFIG = {
  duration: 1.25,
  ease: 'power4.inOut',
} as const;

// Store the timeline globally so we can reuse it
let tl: gsap.core.Timeline | null = null;

/**
 * Creates and caches the transition timeline
 */
const getTransitionTimeline = (element: HTMLElement) => {
  if (!tl) {
    tl = gsap.timeline({ paused: true }).to(element, {
      clipPath: CLIP_PATHS.visible,
      ...ANIMATION_CONFIG,
    });
  }
  return tl;
};

/**
 * Animates the page transition overlay in
 */
export const animatePageIn = (): void => {
  const transitionOverlay = document.getElementById('transition-overlay');

  if (!transitionOverlay) {
    console.warn('Transition element not found');
    return;
  }

  const timeline = getTransitionTimeline(transitionOverlay);
  timeline.reverse();
};

/**
 * Animates the page transition overlay out and handles navigation
 * @param href The destination URL
 * @param router Next.js router instance
 */

export const animatePageOut = (
  href: string,
  router: AppRouterInstance
): void => {
  const transitionOverlay = document.getElementById('transition-overlay');

  if (!transitionOverlay) {
    console.warn('Transition element not found');
    router.push(href);
    return;
  }

  const timeline = getTransitionTimeline(transitionOverlay);
  timeline.play();

  timeline.eventCallback('onComplete', () => {
    router.push(href);
  });
};
