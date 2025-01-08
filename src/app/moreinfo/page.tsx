"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const MoreinfoPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <Suspense>
        <div>{id}</div>
        <div>More info</div>
      </Suspense>
    </>
  );
};
export default MoreinfoPage;
