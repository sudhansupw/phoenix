import { account, databases } from "../../lib/appwrite";
import { redirect } from "react-router-dom";
const conversationLoader = async ({ params }) => {
   const { conversationId } = params;
   const data = {}
   
   try {
    data.user = await account.get();
    
   //  console.log("User account fetched:", data.user);
   }catch (err){
      console.log(`Error getting user account: ${err.message}`); 
      return redirect("/login");
   } 

   try {
      data.conversation = await databases.getDocument(
         import.meta.env.VITE_APPWRITE_DATABASE_ID,
         import.meta.env.VITE_APPWRITE_COLLECTION_ID,
         conversationId
      )
   } catch (err) {
      console.log(`Error getting conversation: ${err.message}`);
       throw err;
   }

   return data;
}

export default conversationLoader;