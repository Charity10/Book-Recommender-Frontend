import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { bookData } from '../utils';



const BookDetails: React.FC = () => {
    const { id } = useParams();
    const book = bookData.find((b) => b.id === parseInt(id!)) || bookData[0];
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



                    {/* Book Details Section */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Cover */}
                        <div
                            className="w-full md:w-1/3 h-64 md:h-80 bg-gray-300"
                            style={{ backgroundColor: book.coverColor }}
                        ></div>

                        {/* Details */}
                        <div className="flex-1">
                            <p className="text-sm text-gray-500 mb-1">{book.category}</p>
                            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                            <p className="text-lg text-gray-700 font-medium mb-2">{book.author}</p>
                            <p className="text-yellow-500 mb-4">
                                {'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                {book.description} Lorem ipsum nunc rutrum arcu a placerat. Ut aliquet odio quam, consequat egestas nisi bibendum nec.
                            </p>
                            <button className="bg-yellow-400 px-5 py-2 rounded font-semibold text-sm hover:shadow-md transition">
                                Read now
                            </button>
                        </div>
                    </div>

                    {/* More Like This */}
                    <div className="mt-12">
                        <h2 className="text-xl font-semibold mb-4 text-yellow-500">MORE LIKE THIS</h2>
                        <div className="flex flex-col gap-4">
                            {bookData.slice(1).map((b) => (
                                <div
                                    key={b.id}
                                    className="flex items-start gap-4 bg-white p-4 shadow rounded-lg"
                                >
                                    <div
                                        className="w-20 h-28 bg-gray-300"
                                        style={{ backgroundColor: b.coverColor }}
                                    ></div>
                                    <div className="flex flex-col flex-1">
                                        <p className="text-md font-semibold">{b.title}</p>
                                        <p className="text-sm text-gray-600">{b.author}</p>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                                                {b.category}
                                            </p>
                                            <p className="text-yellow-500 text-sm">
                                                {'★'.repeat(b.rating)}{'☆'.repeat(5 - b.rating)}
                                            </p>
                                        </div>
                                        <button
                                            className="mt-2 bg-yellow-400 px-4 py-1 rounded text-sm font-medium w-fit"
                                            onClick={() => window.location.href = `/book/${b.id}`}
                                        >
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookDetails;