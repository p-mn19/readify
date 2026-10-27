# Readify

Readify is a web app for building a personal library of PDF books and preparing them for conversational, voice-first reading experiences. Sign in, add a book with a cover and preferred assistant voice, and Readify stores the book metadata and searchable text segments for later interaction.


## Features

- Clerk-powered sign-in and user accounts
- Responsive library dashboard with book cards
- PDF upload validation (PDF only, up to 50 MB)
- Optional cover-image upload (JPEG, PNG, or WebP, up to 10 MB)
- PDF cover extraction and text segmentation utilities
- Five selectable assistant voice personas
- MongoDB models for books, text segments, and voice sessions
- Vercel Blob integration for uploaded files

## Tech stack

- [Next.js](https://nextjs.org/) 16 with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Clerk](https://clerk.com/) for authentication
- [MongoDB](https://www.mongodb.com/) and Mongoose for persistence
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for file storage
- [PDF.js](https://mozilla.github.io/pdf.js/) for client-side PDF processing
- React Hook Form, Zod, Radix UI, and Sonner

## Getting started

### Prerequisites

- Node.js 20.9 or later
- npm 10 or later
- A MongoDB database
- A Clerk application
- A Vercel Blob store (for uploads)

### Install

```bash
git clone <your-repository-url>
cd readify
npm install
```

### Configure environment variables

Create a `.env.local` file in the project root. Do not commit it.

```dotenv
# MongoDB
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Vercel Blob
BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."

# Reserved for the planned conversational assistant integration
NEXT_PUBLIC_ASSISTANT_ID="..."
```

If you use different Clerk routing or middleware settings, add the corresponding variables described in the [Clerk Next.js documentation](https://clerk.com/docs/quickstarts/nextjs).

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run lint
npm run build
npm run start
```

## How it is organized

```text
app/
  (root)/                 # Library dashboard and new-book page
  layout.tsx              # App shell, Clerk provider, navigation, and toasts
components/
  UploadForm.tsx          # Book-upload workflow
  FileUploader.tsx        # Reusable validated file input
  VoiceSelector.tsx       # Assistant-voice picker
database/
  models/                 # Book, book-segment, and voice-session schemas
lib/
  actions/                # Server actions for books and segments
  utils.ts                # Slug, PDF, and text-segmentation helpers
```

## Upload flow

1. A signed-in user selects a PDF, optional cover image, title, author, and voice persona.
2. Client-side validation checks the file types and size limits.
3. The PDF is parsed in the browser; its content is split into overlapping text segments intended for search and conversation context.
4. The PDF and cover are uploaded to Vercel Blob.
5. Book metadata and text segments are stored in MongoDB.

## Current implementation notes

The following pieces are intentionally not presented as complete yet:

- `parsePDFFile` contains the PDF setup and segmentation utility, but page rendering and text extraction must be completed for uploaded PDFs to produce real content.
- The client upload code expects a `POST /api/upload` handler for Vercel Blob token generation; that route is not currently in the repository.
- The `createBook` server action performs duplicate detection, but its database creation branch and the book detail route still need implementation.
- The home page currently displays sample book data; it is not yet loading a user-specific MongoDB library.

## Contributing

1. Create a branch from the current main branch.
2. Make your change with focused commits.
3. Run `npm run lint` and `npm run build`.
4. Open a pull request describing the behavior change and any environment/configuration updates.

## License

No license has been specified for this repository. Add a license before distributing or accepting external contributions.
