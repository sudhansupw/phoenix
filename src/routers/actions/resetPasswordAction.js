import { redirect } from "react-router-dom";
import { account } from "../../lib/appwrite";

const resetPasswordAction = async({ request }) => {
   const formData = await request.formData()
   const url = new URL(request.url)

   console.log(url.searchParams.get('userId'));
   console.log(url.searchParams.get('secret'));
   
   try {
    await account.updateRecovery(
       url.searchParams.get('userId'), 
       url.searchParams.get('secret'),
       formData.get('password') 
    );

    return redirect('/login');
   } catch (err) {
    console.log(`Error updating password: ${err.message}`);

    return {
        message: err.message,
    }
    
   }
}

export default resetPasswordAction;