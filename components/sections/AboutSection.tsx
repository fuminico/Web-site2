
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-900/50 text-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-base font-semibold leading-7 text-blue-400">私たちのビジョン</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">テクノロジーで、未来を加速させる</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            未来創研は、単なるソフトウェア開発企業ではありません。私たちは、人工知能、機械学習、そして人間中心のインタラクションデザインを核として、これまでにない価値を創造する研究開発機関です。
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            私たちの使命は、複雑な課題を解決し、ビジネスの可能性を最大限に引き出す革新的なソリューションを提供することです。お客様と共に、未来のスタンダードを築き上げます。
          </p>
        </div>
        <div className="w-full h-80 rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/800/600?grayscale&blur=2" 
              alt="Abstract technology background" 
              className="w-full h-full object-cover" 
            />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
