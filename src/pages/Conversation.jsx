import React from 'react'
import { easeOut, motion } from 'framer-motion'
import PageTitle from '../components/PageTitle'
import { useLoaderData, useLocation } from 'react-router-dom'
import UserPrompt from '../components/UserPrompt'
import AiResponse from '../components/AiResponse'
import PromptPreloader from '../components/PromptPreloader'
import { usePromptPreloader } from '../hooks/userPromptPreloader'

function Conversation() {

    const { conversation: {title, chats},
  } = useLoaderData() || {};

  const { promptPreloaderVAlue } = usePromptPreloader();

  const location = useLocation();
    
  return (
    <>
     {/* Meta title */}
     <PageTitle title={`${title} | Phoenix`} />

     <motion.div 
     className="max-w-[720px] mx-auto !will-change-auto"
     initial={!location.state?._isRedirect && { opacity: 0}}
     animate={{ opacity: 1}}
     transition={{ duration: 0.2, delay: 0.05, ease: "easeOut"}}
     >
      
      {chats.map((chat) => (
        <div key={chat.$id}>
          {/* UserPrompt */}
          <UserPrompt text={chat.user_prompt} />

        {/* AiResponse */}
        <AiResponse aiResponse={chat.ai_response} />
        </div>
      ))}
     </motion.div>


      {promptPreloaderVAlue && (
         <PromptPreloader propmtValue={promptPreloaderVAlue} />
      )}
    </>
  )
}

export default Conversation;