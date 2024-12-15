import { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import {  Form, useNavigation, useActionData } from 'react-router-dom';
import { banner } from '../assets/assets';
import TextField from '../components/TextField';
import { Button } from "../components/Button.jsx";
import { CircularProgress, LinearProgress } from '../components/Progress.jsx';
import { useSnackbar } from '../hooks/useSnackbar.js';
import { AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo.jsx';



function ResetLink() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (actionData) {
      console.log(actionData);
      
      showSnackbar({ message: actionData.message, 
      type: actionData.ok ? 'info' : 'error',
      timeOut: 8000,
    });
    }
  }, [actionData, showSnackbar]);

  return (
    <>
      <PageTitle title="Reset password" />
      
     <div className="relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
        {/* Left Column */}
        <div className="flex flex-col p-4">
          <Logo classes='mx-auto mb-auto lg:mx-0' />

          <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
            <h2 className="text-displaySmall font-semibold text-light-background dark:text-dark-onBackground text-center">
              Forgot your password?
            </h2>
            <p className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2">
              Enter your Email, and we'll send a password reset link
            </p>

            <Form method="POST" className="grid grid-cols-1 gap-4">
              <TextField 
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                helperText="The verification link sent to your email address wil be valid for 1 hour."
                required = {true}
                autoFocus = {true}
              />


              <Button type="submit" disabled={navigation.state === "submitting"}>
                {navigation.state === "submitting" ? (
                  <CircularProgress size="small" />
                ) : (
                  "Get link"
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

export default ResetLink;
