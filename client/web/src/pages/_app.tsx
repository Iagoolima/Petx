import { AuthProvider } from "@/context/authContext";
import { EmailProvider } from "@/context/emailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";

const clientId =
process.env.NEXT_PUBLIC_GOOGLE_TOKEN_API_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <EmailProvider>
          <Component {...pageProps} />
        </EmailProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
