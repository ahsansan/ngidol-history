import Router from "next/router";
import { useEffect } from "react";

export default function PageNotFound() {
  useEffect(() => {
    Router.push("/");
  }, []);
  return (
    <div className="text-center block">
      <p>Halaman Tidak Ditemukan</p>
    </div>
  );
}
