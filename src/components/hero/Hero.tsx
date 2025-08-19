import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-200 to-orange-400 text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        ساخت منو آنلاین رایگان برای رستوران و کافه
      </h1>
      <p className="text-lg mb-6">
        با میسکا منوی خودتان را آنلاین کنید و مشتریان خود را بیشتر کنید
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-lg">
        شروع کنید
      </button>
    </section>
  );
}