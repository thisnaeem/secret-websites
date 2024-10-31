// app/page.tsx
"use client";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from "react";
import { Website, websites, isUrlExists, generateId } from "./types";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

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

interface AddWebsiteFormProps {
  onAdd: (website: Website) => void;
  onClose: () => void;
  existingCategories: string[];
}

const Header = ({ totalWebsites }: HeaderProps) => (
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
}: CategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialDisplayCount = 5;

  const visibleCategories = isExpanded ? categories : categories.slice(0, initialDisplayCount);
  const hiddenCategoriesCount = categories.length - initialDisplayCount;

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2 mb-2">
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
        {visibleCategories.map((category) => (
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
      
      {categories.length > initialDisplayCount && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1 mt-2"
        >
          {isExpanded ? (
            <>
              Show Less
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 15l7-7 7 7" 
                />
              </svg>
            </>
          ) : (
            <>
              Show {hiddenCategoriesCount} More
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
};

const AddWebsiteForm = ({ onAdd, onClose, existingCategories }: AddWebsiteFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    category: '',
    newCategory: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isNewCategory, setIsNewCategory] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.url.trim()) {
      newErrors.url = 'URL is required';
    } else {
      try {
        new URL(formData.url);
        if (isUrlExists(formData.url)) {
          newErrors.url = 'This URL already exists in the directory';
        }
      } catch {
        newErrors.url = 'Please enter a valid URL';
      }
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!isNewCategory && !formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (isNewCategory && !formData.newCategory.trim()) {
      newErrors.newCategory = 'Please enter a new category name';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newWebsite: Website = {
        id: generateId(),
        title: formData.title.trim(),
        url: formData.url.trim(),
        description: formData.description.trim(),
        category: isNewCategory ? formData.newCategory.trim() : formData.category
      };

      onAdd(newWebsite);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Add New Website</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Website Title"
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              URL
            </label>
            <input
              type="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="https://example.com"
            />
            {errors.url && (
              <p className="text-red-400 text-sm mt-1">{errors.url}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
              placeholder="Brief description of the website"
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="block text-sm font-medium text-gray-300">
                Category
              </label>
              <button
                type="button"
                onClick={() => setIsNewCategory(!isNewCategory)}
                className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
              >
                {isNewCategory ? 'Select Existing' : 'Add New'}
              </button>
            </div>

            {isNewCategory ? (
              <input
                type="text"
                value={formData.newCategory}
                onChange={(e) => setFormData({ ...formData, newCategory: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="New Category Name"
              />
            ) : (
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select a category</option>
                {existingCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}
            {(errors.category || errors.newCategory) && (
              <p className="text-red-400 text-sm mt-1">
                {errors.category || errors.newCategory}
              </p>
            )}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Add Website
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

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

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [localWebsites, setLocalWebsites] = useState<Website[]>(websites);

  const categories = [...new Set(localWebsites.map((site) => site.category))];

  const categoryCounts = localWebsites.reduce((acc, site) => {
    acc[site.category] = (acc[site.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const filteredWebsites = activeCategory
    ? localWebsites.filter((site) => site.category === activeCategory)
    : localWebsites;

  const handleAddWebsite = (newWebsite: Website) => {
    setLocalWebsites([...localWebsites, newWebsite]);
  };

  return (
    <div className={`min-h-screen bg-gray-900 ${plusJakartaSans.className}`}>
      <Header
        totalWebsites={localWebsites.length}
        categoryCounts={categoryCounts}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex justify-between items-center mb-6">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            categoryCounts={categoryCounts}
          />
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Website
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebsites.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>

        {showAddForm && (
          <AddWebsiteForm
            onAdd={handleAddWebsite}
            onClose={() => setShowAddForm(false)}
            existingCategories={categories}
          />
        )}
      </main>
    </div>
  );
}