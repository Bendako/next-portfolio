"use client";

import { unstable_ViewTransition as ViewTransition } from 'react';
import React from 'react';

// This component ensures ViewTransition is only rendered on the client
export default function ViewTransitionWrapper({ children }: { children: React.ReactNode }) {
  return <ViewTransition>{children}</ViewTransition>;
} 