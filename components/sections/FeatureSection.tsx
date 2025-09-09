
import React from 'react';
import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "計画策定",
    date: "2024年1月",
    content: "プロジェクト計画と要件定義のフェーズ。",
    category: "計画",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "設計",
    date: "2024年2月",
    content: "UI/UXデザインとシステムアーキテクチャ設計。",
    category: "設計",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "開発",
    date: "2024年3月",
    content: "コア機能の実装と継続的なテスト。",
    category: "開発",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "テスト",
    date: "2024年4月",
    content: "ユーザー受け入れテストと品質保証。",
    category: "テスト",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "リリース",
    date: "2024年5月",
    content: "最終展開と製品の市場リリース。",
    category: "リリース",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

const FeatureSection = () => {
    return (
        <section className="relative bg-black text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-4">事業ロードマップ</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    私たちの革新への歩みは、明確なビジョンと計画に基づいています。主要なマイルストーンをインタラクティブにご覧ください。
                </p>
            </div>
            {/* The timeline component creates its own full-height container */}
            <RadialOrbitalTimeline timelineData={timelineData} />
        </section>
    );
}

export default FeatureSection;
