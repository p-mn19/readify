import { auth } from "@clerk/nextjs/server";

export const BRAND_COLOR = "#212a3b";
export const BRAND_COLOR_HOVER = "#3d485e";

const sampleBooks = [
    {
        _id: 1,
        title: "Clean Code",  
        author: "Robert C. Martin",
        slug: "clean-code",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 2,
        title: "The Pragmatic Programmer",      
        author: "Andrew Hunt and David Thomas",
        slug: "the-pragmatic-programmer",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 3,
        title: "Brave New World",
        author: "Aldous Huxley",
        slug: "brave-new-world",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 4,
        title: "To Kill a Mockingbird",     
        author: "Harper Lee",
        slug: "to-kill-a-mockingbird",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 5,
        title: "1984",  
        author: "George Orwell",
        slug: "1984",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 6,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        slug: "the-great-gatsby",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 7,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        slug: "to-kill-a-mockingbird",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 8,
        title: "The Catcher in the Rye",    
        author: "J.D. Salinger",
        slug: "the-catcher-in-the-rye",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 9,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkein",
        slug: "the-lord-of-the-rings",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780544003415-L.jpg',
        coverColor:"#f8f4e9"
    },
    {
        _id: 10,
        title: "The Hobbit",
        author: "J.R.R. Tolkein",
        slug: "the-hobbit",
        coverURL:'https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg',
        coverColor:"#f8f4e9"
    }
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const ACCEPTED_PDF_TYPES = ['application/pdf'];
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
export const ASSISTANT_ID = process.env.NEXT_PUBLIC_ASSISTANT_ID!;

export const voiceOptions = {
    dave: { id: 'CYw3kZ02Hs0563khs1Fj', name: 'Dave', description: 'Young male, British-Essex, casual & conversational' },
    daniel: { id: 'onwK4e9ZLuTAKqWW03F9', name: 'Daniel', description: 'Middle-aged male, British, authoritative but warm' },
    chris: { id: 'iP95p4xoKVk53GoZ742B', name: 'Chris', description: 'Male, casual & easy-going' },
    rachel: { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel', description: 'Young female, American, calm & clear' },
    sarah: { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah', description: 'Young female, American, soft & approachable' },
};
export const voiceCategories = {
    male: ['dave', 'daniel', 'chris'],
    female: ['rachel', 'sarah'],
};
export const DEFAULT_VOICE = 'rachel';
export const VOICE_SETTINGS = {
    stability: 0.45, // Lower for more emotional, dynamic delivery (0.30-0.50 is natural)
    similarityBoost: 0.75, // Enhances clarity without distortion
    style: 0, // Keep at 0 for conversational AI (higher = more latency, less stable)
    useSpeakerBoost: true, // Improves voice quality
    speed: 1.0, // Natural conversation speed
};


export default sampleBooks;