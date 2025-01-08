"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const MoreinfoPageWithSuspense = () => {
  return (
    <Suspense>
      <MoreinfoPage />
    </Suspense>
  );
};

const MoreinfoPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <div>{id}</div>
      <div>More info</div>
    </>
  );
};
export default MoreinfoPageWithSuspense;
