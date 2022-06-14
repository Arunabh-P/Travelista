import { motion } from "framer-motion";

const ErrorMessage = ({ children }) => {
  return (
    <>
      <motion.div animate={{ x: 50 }}>
        <motion.p className="text-danger">{children}</motion.p>
      </motion.div>
    </>
  );
};

export default ErrorMessage;