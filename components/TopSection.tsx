import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopSection = () => {
    return (
        <section className="wrapper mb-10 md:mb-16">
            <div className="library-top-card">
                <div className="library-top-card-content">
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
                    

            </div>        
            </div>

        </section>

    )};

export default TopSection;