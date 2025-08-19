import React from "react";

const featureList = [
  { title: "مدیریت آسان منو", description: "اضافه کردن، ویرایش و حذف محصولات به راحتی" },
  { title: "چت هوشمند AI", description: "پیشنهاد و تحلیل منو با هوش مصنوعی" },
  { title: "نمایش روی نقشه", description: "مشتریان می‌توانند نزدیک‌ترین شما را پیدا کنند" },
];

export default function Features() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">ویژگی‌ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featureList.map((feature) => (
          <div key={feature.title} className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}