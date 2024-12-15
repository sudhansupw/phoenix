import PropTypes from "prop-types";
import {motion} from "framer-motion"


const Snackbar = ({snackbar}) => {

  const snackbarVariant = {
    hidden: {scaleY: 0},
    visible: {
      scaleY:1,
      transition:{
        duration:0.2,
        ease:[0.05, 0.7, 0.1, 1]
      }
    }
  }
    return (
     <>
       {snackbar.open && (
        <motion.div
        variants={snackbarVariant}
        initial = " hidden"
        exit={{
          opacity:0,
          transition: {
            duration:0.15,
            ease: "easeOut",
          },
        }}
        animate = "visible" 
        className={`snackbar ${snackbar.type}`}>
         <motion.span>{snackbar.message}</ motion.span>
       </motion.div>
       )}
     </>
   )
}

  Snackbar.propTypes = {
    snackbar:PropTypes.object,
  }

export default Snackbar