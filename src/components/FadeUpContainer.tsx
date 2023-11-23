import { m, LazyMotion, domAnimation } from "framer-motion";
interface Param {
  children: any;
  delay?: number;
}
const FadeUpContainer: React.FunctionComponent<Param> = ({
  children,
  delay = 0.15,
}) => {
  return (
    <span className="overflow-hidden inline-block">
      <LazyMotion features={domAnimation}>
        <m.span
          className="inline-block"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{
            delay: delay,
            y: { type: "spring", transition: { duration: 0.25 } },
          }}
        >
          {children}
        </m.span>
      </LazyMotion>
    </span>
  );
};

export default FadeUpContainer;
