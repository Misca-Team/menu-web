import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="flex max-w-[1320px] ml-auto mr-auto">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            راهی نو برای نمایش منوی دیجیتال شما!
          </h1>
          <p className="text-lg mb-6">
            تجربه ای مدرن و بروز را به کاربران خود ارائه دهید. قابلیت مدیریت چندین کسب و کار، بهینه سازی برای گوگل و طراحی سازگار با انواع دستگاه ها بخشی از امکانات میسکا هست.
          </p>
          <div className="flex justify-end">
          <Link href="/auth/signin" className="bg-purple-600 text-white px-6 py-3 rounded-lg">شروع رایگان</Link>
          </div>
        </div>
        <div className="flex-1">
          ss
        </div>
      </div>
    </section>
  );
}