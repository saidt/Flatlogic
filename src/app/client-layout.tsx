'use client';

import { ReactNode } from "react";
import "./globals.css";

export default function ClientLayout({
  children,
  htmlAttrs = {},
  bodyAttrs = {},
}: {
  children: React.ReactNode;
  htmlAttrs?: Record<string, string>;
  bodyAttrs?: Record<string, string>;
}) {
  return (
    <html {...htmlAttrs}>
      <body {...bodyAttrs}>
        
        {children}
        
      </body>
    </html>
  );
}