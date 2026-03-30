"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  /* this is to be change after the integration of backend of Login */
  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return null;
}
