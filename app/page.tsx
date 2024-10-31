"use client"
import { useState } from "react";
import { Website, websites } from "./types";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  categoryCounts: Record<string, number>;
}

interface HeaderProps {
  totalWebsites: number;
  categoryCounts: Record<string, number>;
}

const Header = ({ totalWebsites,  }: HeaderProps) => (
  <div className="bg-gray-900 border-b border-gray-800 py-6 mb-8 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-white">Website Directory</h1>
        <a
          href="https://www.patreon.com/c/thisnaeem"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF424D] hover:bg-[#FF2A37] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41M2 21.6H5.5V2.41H2V21.6Z" />
          </svg>
          Support on Patreon
        </a>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          Curated collection of {totalWebsites} useful websites
        </p>
      </div>
    </div>
  </div>
);

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
  categoryCounts,
}: CategoryFilterProps) => (
  <div className="flex flex-wrap gap-2 mb-6">
    <button
      onClick={() => onCategoryChange(null)}
      className={`category-button ${
        activeCategory === null
          ? "category-button-active"
          : "category-button-inactive"
      }`}
    >
      All ({websites.length})
    </button>
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`category-button ${
          activeCategory === category
            ? "category-button-active"
            : "category-button-inactive"
        }`}
      >
        {category} ({categoryCounts[category]})
      </button>
    ))}
  </div>
);

const WebsiteCard = ({ website }: { website: Website }) => (
  <div className="website-card">
    <h3 className="text-xl font-semibold text-white mb-2">{website.title}</h3>
    <p className="text-gray-400 mb-4">{website.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
        {website.category}
      </span>
      <a
        href={website.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
      >
        Visit Site
        <span className="text-lg">→</span>
      </a>
    </div>
  </div>
);

const WebsiteDirectory = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [...new Set(websites.map((site) => site.category))];

  // Calculate category counts
  const categoryCounts = websites.reduce((acc, site) => {
    acc[site.category] = (acc[site.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const filteredWebsites = activeCategory
    ? websites.filter((site) => site.category === activeCategory)
    : websites;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header totalWebsites={websites.length} categoryCounts={categoryCounts} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebsites.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default WebsiteDirectory;
