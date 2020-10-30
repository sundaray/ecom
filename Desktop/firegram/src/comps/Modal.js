import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const closeModalHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={closeModalHandler}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
        src={selectedImg}
        alt="enlarged pic"
      />
    </motion.div>
  );
};

export default Modal;
