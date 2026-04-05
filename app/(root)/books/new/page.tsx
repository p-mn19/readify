import UploadForm from "@/components/UploadForm";
import { Upload } from "lucide-react";
import React from "react";  
const Page = () => {
    return ( 
        <main className="wrapper container">
            <div className="mx-auto max-w-180 space-y-10">
                <section className="flex flex-col gap-6">
                    <h1 className="page-title-xl">Add a new book</h1>
                    <p className="subtitle">Upload your book in PDF format to start an interactive AI conversation with it.</p>
                </section>
                <UploadForm />
            </div>

        </main>
    );
}
export default Page;