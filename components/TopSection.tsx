import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopSection = () => {
    return (
        <section className="wrapper mb-10 md:mb-16">
            <div className="library-top-card">
                <div className="library-top-content">
                    <div className="library-top-text">
                        <h1 className="library-top-title text-4xl font-serif font-bold">Library</h1>
                        <p className="library-title-description">
                            Transform your books into interactive AI conversations.<br className="hidden md:block"/>
                            Upload PDFs and chat with your books using voice
                        </p>
                        <Link href="/books/new" className="library-cta-primary mt-4 flex items-center justify-center">
                            <span className="text-3xl font-light mb-1 mr-2">+</span>
                            <span className="text-[#212a3b]">Add a new book</span>
                        </Link>
                    </div>
                    
                    <div className="library-top-illustration-desktop">
                        <Image src="/assets/illustration.png" alt="vintage books" width={400} height={400} className="object-contain"/>
                    </div>

                    <div className="library-top-illustration">
                        <Image src="/assets/illustration.png" alt="vintage books" width={300} height={300} className="object-contain"/>
                    </div>
                    <div className="library-steps-card min-w-65 max-w-70">
                        <ul className="space-y-6">
                            <li className="library-step-item">
                                <div className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">1</div>
                                    <div className="flex flex-col">
                                        <h3 className="library-step-title text-lg font-bold">Upload pdf</h3>
                                        <p className="library-step-description text-gray-500">Add your book file</p>
                                    </div>
                            </li>
                            <li className="library-step-item">
                                <div className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">2</div>
                                    <div className="flex flex-col">
                                        <h3 className="library-step-title text-lg font-bold">AI processing</h3>
                                        <p className="library-step-description text-gray-500">we analyze your book content</p>
                                    </div>
                            </li>
                            <li className="library-step-item">
                                <div className="w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg">3</div>            
                                    <div className="flex flex-col">
                                        <h3 className="library-step-title text-lg font-bold">Voice chat</h3>
                                        <p className="library-step-description text-gray-500">Discuss with AI</p>
                                    </div>
                            </li>
                        </ul>
                    </div>

            </div>        
            </div>

        </section>

    )};

export default TopSection;