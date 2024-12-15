import { account } from "../lib/appwrite";

const logout = async (navigate) => {
    try {
        await account.deleteSession('current')
    } catch (err) {
       return console.log(`Error deleting user session: ${err.message}`);
        
    }

    return navigate('/login');
}

export default logout