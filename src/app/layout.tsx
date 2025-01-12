"use client";

import { Suspense, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/config/styles/fonts";
import { StyledComponentsRegistry } from "@/config/lib/registry";
import { theme } from "@/config/styles/theme";
import { GlobalStyles } from "@/config/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <body className={fontNames}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <main>
              <Suspense>{children}</Suspense>
            </main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
