// app/page.tsx
"use client";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState, useEffect } from "react";
import { Website } from "@prisma/client";
import { addWebsite, fetchWebsites } from "@/lib/api";
import { defaultWebsites } from '@/data/sites';

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
  onAdd: (website: Omit<Website, "id" | "createdAt" | "updatedAt">) => Promise<void>;
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
          All ({Object.values(categoryCounts).reduce((a, b) => a + b, 0)})
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onAdd({
          title: formData.title.trim(),
          url: formData.url.trim(),
          description: formData.description.trim(),
          category: isNewCategory ? formData.newCategory.trim() : formData.category
        });
        onClose();
      } catch (error) {
        if (error instanceof Error) {
          setErrors({ submit: error.message });
        } else {
          setErrors({ submit: 'Failed to add website' });
        }
      } finally {
        setIsSubmitting(false);
      }
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
            disabled={isSubmitting}
          >
            ✕
          </button>
        </div>

        {errors.submit && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-4">
            {errors.submit}
          </div>
        )}

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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            ) : (
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                disabled={isSubmitting}
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
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                      fill="none"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Adding...
                </>
              ) : (
                'Add Website'
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="flex flex-col items-center gap-4">
      <svg className="animate-spin h-10 w-10 text-blue-500" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <p className="text-gray-400">Loading websites...</p>
    </div>
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="bg-red-500/10 border border-red-500 rounded-lg p-6 max-w-md w-full mx-4">
      <p className="text-red-500 text-center mb-4">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Try again
      </button>
    </div>
  </div>
);

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [localWebsites, setLocalWebsites] = useState<Website[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadWebsites();
  }, []);

  async function loadWebsites() {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchWebsites();
      console.log(data)
      if (Array.isArray(data)) {
        setLocalWebsites([...data, ...defaultWebsites]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Error loading websites:", err);
      setError(
        "Failed to load websites. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  }


  const handleAddWebsite = async (
    newWebsite: Omit<Website, "id" | "createdAt" | "updatedAt">
  ) => {
    try {
      const addedWebsite = await addWebsite(newWebsite);
      setLocalWebsites((prev) => [addedWebsite, ...prev]);
      setShowAddForm(false);
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      } else {
        throw new Error("Failed to add website");
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const categories = [...new Set(localWebsites.map((site) => site.category))];

  const categoryCounts = localWebsites.reduce((acc, site) => {
    acc[site.category] = (acc[site.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const filteredWebsites = activeCategory
    ? localWebsites.filter((site) => site.category === activeCategory)
    : localWebsites;

  return (
    <div className={`min-h-screen bg-gray-900 ${plusJakartaSans.className}`}>
      <Header
        totalWebsites={localWebsites.length}
        categoryCounts={categoryCounts}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            categoryCounts={categoryCounts}
          />
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
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

        {filteredWebsites.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400">
              {activeCategory
                ? `No websites found in the "${activeCategory}" category`
                : "No websites found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebsites.map((website) => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        )}

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