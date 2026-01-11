import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook pour animer les éléments au scroll
 * @param {React.RefObject} ref - Référence de l'élément à animer
 * @param {Object} options - Options d'animation
 */
export const useScrollAnimation = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const {
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0 },
      duration = 1,
      ease = "power3.out",
      stagger = 0,
      delay = 0,
      triggerStart = "top 80%",
      triggerEnd = "bottom 20%",
      scrub = false,
    } = options;

    const element = ref.current;

    gsap.fromTo(
      element,
      from,
      {
        ...to,
        duration,
        ease,
        stagger,
        delay,
        scrollTrigger: {
          trigger: element,
          start: triggerStart,
          end: triggerEnd,
          scrub,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, options]);
};

/**
 * Hook pour animer les enfants d'un élément au scroll
 * @param {React.RefObject} ref - Référence du conteneur
 * @param {Object} options - Options d'animation
 */
export const useScrollAnimationChildren = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const {
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0 },
      duration = 1,
      ease = "power3.out",
      stagger = 0.2,
      triggerStart = "top 80%",
    } = options;

    const element = ref.current;

    gsap.fromTo(
      element.children,
      from,
      {
        ...to,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: element,
          start: triggerStart,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, options]);
};
