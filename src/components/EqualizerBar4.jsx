import { motion } from "framer-motion";



function EqualizerBar4({isPlaying}) {
  const barVariants = {
    initial: { height: "2px" },
    animate: { height: isPlaying?  ["33px", "2px", "33px"] : ["2px"] },
    transition: { duration: 0.5, repeat: Infinity },
  };

  return (
    <motion.div
      style={{
        width: "10px",
        height: "2px",
        background: "white",
        margin: "0 45px",
        position: "absolute",
        bottom: '0'
      }}
      variants={barVariants}
      initial="initial"
      animate="animate"
      transition={barVariants.transition}
    />
  );
}

export default EqualizerBar4;
