// import { AnimationSequence, useAnimate } from "framer-motion";
// import { useEffect } from "react";

// export const useAnimation = (isOpen: boolean) => {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     const buttonAnimations = isOpen
//       ? [["div", { transform: "rotate(0deg)" }, { duration: 0.25 }]]
//       : [["div", { transform: "rotate(90deg)" }, { duration: 0.25 }]];
//     animate([...buttonAnimations] as AnimationSequence);
//   }, [isOpen]);

//   return scope;
// };
