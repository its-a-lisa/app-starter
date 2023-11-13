import * as React from "react";
import {
  PlasmicLogoutButton,
  DefaultLogoutButtonProps
} from "./plasmic/app_starter/PlasmicLogoutButton";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { PLASMIC_AUTH_DATA_KEY } from "../utils/cache-keys";
import { mutate } from "swr";

export interface LogoutButtonProps extends DefaultLogoutButtonProps {}

function LogoutButton_(props: LogoutButtonProps, ref: HTMLElementRefOf<"div">) {
  const [supabaseClient] = React.useState(() => createPagesBrowserClient());
  const router = useRouter();

  return <PlasmicLogoutButton 
  root={{ ref }} 
  {...props} 
  logoutBtn={{
    onClick: async () => {
      await supabaseClient.auth.signOut();
      await mutate(PLASMIC_AUTH_DATA_KEY);
      router.reload();
    },
  }}
  />;
}

const LogoutButton = React.forwardRef(LogoutButton_);
export default LogoutButton;
