import React from 'react';

const categories = [
  { name: 'Popular Readings', isHeader: true },
  { name: 'Adventure', isHeader: false },
  { name: 'Business & Money', isHeader: false },
  { name: 'Self Development', isHeader: false },
  { name: 'Programming', isHeader: false },
  { name: 'Fiction', isHeader: true },
  { name: 'Adult', isHeader: false },
  { name: 'Children Stories', isHeader: false },
  { name: 'General Fiction', isHeader: false },
  { name: 'Literature Fiction', isHeader: false },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose, isMobile = true }) => {
  // Desktop sidebar (always visible)
  if (!isMobile) {
    return (
      <div className="w-80 p-4">
        <div 
          className="w-full h-full rounded-3xl p-6 md:p-8 overflow-y-auto"
          style={{ backgroundColor: '#D9D9D9' }}
        >
          {categories.map((category, index) => (
            <div key={index} className="mb-4">
              {category.isHeader ? (
                <h2 
                  className="font-bold text-lg md:text-xl mb-2 mt-4 first:mt-0"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#000000'
                  }}
                >
                  {category.name}
                </h2>
              ) : (
                <div 
                  className="text-gray-600 hover:font-semibold hover:text-black cursor-pointer transition-all duration-200 py-2 px-2 rounded-lg hover:bg-white hover:bg-opacity-50"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {category.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Mobile sidebar (overlay)
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full z-50
        w-80 p-4 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        bg-white
      `}>
      <div 
          className="w-full h-full rounded-3xl p-6 md:p-8 overflow-y-auto"
        style={{ backgroundColor: '#D9D9D9' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white shadow-md"
          aria-label="Close menu"
        >
          ✕
        </button>

        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            {category.isHeader ? (
              <h2 
                  className="font-bold text-lg md:text-xl mb-2 mt-4 first:mt-0"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: '#000000'
                }}
              >
                {category.name}
              </h2>
            ) : (
              <div 
                  className="text-gray-600 hover:font-semibold hover:text-black cursor-pointer transition-all duration-200 py-2 px-2 rounded-lg hover:bg-white hover:bg-opacity-50"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {category.name}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Sidebar;