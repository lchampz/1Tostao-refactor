import React from "react";
import { AuthProvider } from "../request/hooks/Auth";
import { ThemeProvider } from "../request/hooks/Theme";
import { LoadingProvider } from "../request/hooks/Loading";
import { RegexProvider } from "../request/hooks/Regex";
import { DropzoneProvider } from "../request/hooks/Dropzone";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <LoadingProvider>
            <RegexProvider>
              <DropzoneProvider>
                {children}
              </DropzoneProvider>
            </RegexProvider> 
          </LoadingProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
