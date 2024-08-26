import { AuthProvider } from "@/context/authContext";
import { EmailProvider } from "@/context/emailContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_TOKEN_API_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <EmailProvider>
          <Component {...pageProps} />
        </EmailProvider>
      </AuthProvider>
      <ToastContainer />
    </GoogleOAuthProvider>
  );
}

export default MyApp;
