"use client";

import { useSearchParams } from "next/navigation";

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
export default MoreinfoPage;
