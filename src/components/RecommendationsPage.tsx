import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';
import BookCard from './BookCard';
import { bookData } from '../utils';

interface PageProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}


const RecommendationsPage: React.FC<PageProps> = ({viewMode, onViewModeChange,}) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: '#F9F9F9',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {/* Header */}
      <Header 
        onMobileMenuToggle={toggleMobileMenu}
      />
      
      {/* Main Content Area */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar isMobile={false} />
        </div>
        
        {/* Mobile Sidebar */}
        <Sidebar 
          isOpen={isMobileMenuOpen} 
          onClose={closeMobileMenu}
          isMobile={true}
        />
        
        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 md:ml-4">
          {/* Mobile View Toggle */}
          <div className="md:hidden flex justify-end mb-4">
            <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-gray-300 shadow-md' 
                    : 'bg-transparent hover:bg-gray-100'
                }`}
                aria-label="Grid view"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-gray-300 shadow-md' 
                    : 'bg-transparent hover:bg-gray-100'
                }`}
                aria-label="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Recommendations Title */}
          <div className='flex justify-between items-start'>
                 <h1 
            className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-left"
            style={{ 
              color: '#FFD900',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            RECOMMENDATIONS
          </h1>
           {/* View Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-lg transition-all duration-200 ${
              viewMode === 'grid' 
                ? 'bg-gray-300 shadow-md' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label="Grid view"
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-lg transition-all duration-200 ${
              viewMode === 'list' 
                ? 'bg-gray-300 shadow-md' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label="List view"
          >
            <List size={20} />
          </button>
        </div>
          </div>
         
          
          {/* Books Grid */}
          <div className={`
            transition-all duration-300 ease-in-out
            ${viewMode === 'grid' 
              ? 'grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8' 
              : 'flex flex-col gap-4 md:gap-6'
            }
            max-w-6xl
          `}>
            {bookData.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                rating={book.rating}
                coverColor={book.coverColor}
                viewMode={viewMode}
              />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="flex justify-center mt-8 md:mt-12">
            <button 
              className="px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold text-black transition-all duration-200 hover:shadow-md hover:scale-105"
              style={{ 
                backgroundColor: '#D9D9D9',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;