"use client";

import React, { useEffect, useState } from "react";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="antialiased overflow-hidden">
        {/* Loading state or nothing */}
      </div>
    );
  }

  return (
    <div className="antialiased">
      {children}
    </div>
  );
}