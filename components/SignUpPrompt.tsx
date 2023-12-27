import * as React from "react";
import {
  PlasmicSignUpPrompt,
  DefaultSignUpPromptProps
} from "./plasmic/app_starter/PlasmicSignUpPrompt";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useRouter } from "next/router";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { mutate } from "swr";
import { PLASMIC_AUTH_DATA_KEY } from "../utils/cache-keys";

export interface SignUpPromptProps extends DefaultSignUpPromptProps {}

function SignUpPrompt_(props: SignUpPromptProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter();
  const [supabaseClient] = React.useState(() => createPagesBrowserClient());
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [formError, setFormError] = React.useState("");

  return <PlasmicSignUpPrompt 
  root={{ ref }} 
  {...props} 
  isLoading={loading}
      isError={!!formError}
      emailInput={{
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        onClick: async () => {
          setFormError("");
          setLoading(true);

          try {
            let authFunction = null;
            if(props.isSignUpFlow) {
              authFunction = supabaseClient.auth.signUp({email, password})
            }
            else {
              authFunction = supabaseClient.auth.signInWithPassword({email, password})
            }

            const { error } = await authFunction

            if (error) {
              setFormError(error);
              setLoading(false);
              return;
            }
            await mutate(PLASMIC_AUTH_DATA_KEY);
            router.replace("/dashboard");
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        },
      }}
  />;
}

const SignUpPrompt = React.forwardRef(SignUpPrompt_);
export default SignUpPrompt;
