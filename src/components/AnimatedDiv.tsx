import { motion, Variants } from "framer-motion";
import { ComponentProps } from "react";

type PropsT = {
  children: React.ReactNode;
} & ComponentProps<"div">;

export default function AnimatedDiv({ children, className }: PropsT) {
  const anim = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const scaleOpacity: Variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  };
  return (
    <motion.div {...anim(scaleOpacity)} className={className}>
      {children}
    </motion.div>
  );
}
