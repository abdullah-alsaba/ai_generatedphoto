import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://ai-generatedphoto.vercel.app",
});

export const { signIn, signUp, signOut, useSession } = authClient;
