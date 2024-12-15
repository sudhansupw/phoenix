import PropTypes from "prop-types";
import UserPrompt from "./UserPrompt";
import AiResponse from "./AiResponse";
import Skeleton from "./Skeleton";

const PromptPreloader = ({ promtValue })  => {
  return (
    <div className="max-w-[700px] mx-auto">
       <UserPrompt text={promtValue} />

       <AiResponse>
         <Skeleton />
       </AiResponse>
    </div>
  )
}

PromptPreloader.propTypes = {
    promtValue: PropTypes.string,
}

export default PromptPreloader;