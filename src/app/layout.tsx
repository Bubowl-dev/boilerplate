"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/styles/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
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
            <main>{children}</main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
