import { BaseLayout } from "@/views";
import type { AppProps } from "next/app";
import "./styles.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" />
      </BaseLayout>
    </ThemeProvider>
  );
}
