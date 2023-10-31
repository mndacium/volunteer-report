import { BaseLayout } from "@/views";
import type { AppProps } from "next/app";
import "./styles.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}
