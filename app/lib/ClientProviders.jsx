"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/app/lib/apolloClient"; // Your Apollo client configuration

export default function ClientProviders({ children }) {
   return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
