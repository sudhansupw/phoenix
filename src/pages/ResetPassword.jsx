import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import { Form, useNavigation, useActionData } from 'react-router-dom';
import { banner } from '../assets/assets';
import TextField from '../components/TextField';
import { Button } from "../components/Button.jsx";
import { CircularProgress, LinearProgress } from '../components/Progress.jsx';
import { useSnackbar } from '../hooks/useSnackbar.js';
import { AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo.jsx';


function ResetPassword() {
  const error = useActionData();
  const navigation = useNavigation();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (error?.message) {
      console.log(error.message);
      
      showSnackbar({ message: error.message, type: "error",});
    }
  }, [error, showSnackbar]);

  return (
    <>
      <PageTitle title="New password" />
      
     <div className="relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
        {/* Left Column */}
        <div className="flex flex-col p-4">
           <Logo classes='mx-auto mb-auto lg:mx-0' />

          <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
            <h2 className="text-displaySmall font-semibold text-light-background dark:text-dark-onBackground text-center">
              Set a new passwsord
            </h2>
            <p className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2">
             Please choose a password thst hasn't been used before. Must be at least 8 characters.
            </p>

            <Form method="POST" className="grid grid-cols-1 gap-4">
              
              <TextField 
                type="password"
                name="password"
                label="Password"
                placeholder="New password"
                required = {true}
                autoFocus = {true}
              />


              <Button type="submit" disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? (
                  <CircularProgress size="small" />
                ) : (
                  "Reset password"
                )}
              </Button>
            </Form>
          </div>

          <p className="mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0">
            &copy; {new Date().getFullYear()} codewithshadee. All rights reserved.
          </p>
        </div>

        {/* Right Column */}
        <aside className="hidden img-box lg:block lg:relative lg:rounded-large">
          <img src={banner} alt="Illustration of tools" className="img-cover" />
          <p className="absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm">
            Chat with Phoenix to supercharge your ideas.
          </p>
        </aside>
      </div>

      <AnimatePresence>
        {navigation.state === "loading" && (
          <LInearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
}

export default ResetPassword;
