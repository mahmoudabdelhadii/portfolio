import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element | false | undefined;
  width?: "fit-content" | "100%";
  delay?: number;
  from?: "top" | "bottom" | "left" | "right";
  once?: boolean | true;
}

const Reveal: React.FunctionComponent<Props> = ({
  children,
  width,
  delay,
  from,
  once,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      if (from === "left") {
        mainControls.start("visibleleft");
      } else if (from === "right") {
        mainControls.start("visibleright");
      } else {
        mainControls.start("visible");
      }
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          hiddenleft: {
            opacity: 0,
            x: -75,
          },
          visibleleft: {
            opacity: 1,
            x: 0,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
          visibleright: {
            opacity: 1,
            x: 0,
          },
          hiddenright: {
            opacity: 0,
            x: 75,
          },
        }}
        initial={
          from === "left"
            ? "hiddenleft"
            : from === "right"
            ? "hiddenright"
            : "hidden"
        }
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay ? delay : 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
