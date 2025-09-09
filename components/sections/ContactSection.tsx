
import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-black py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          未来のプロジェクトを、<br className="sm:hidden" />共に始めませんか？
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
          私たちのテクノロジーが、あなたのビジネスをどう変革できるかご案内します。まずはお気軽にご相談ください。
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-transform transform hover:scale-105"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
