import { Link } from "lucide-react";
import React from "react";
import { BookCardProps } from "@/types";

const BookCard = ({ title, author, coverURL, slug, coverColor }: BookCardProps) => {
  return (
    <Link href={`/books/${slug}`}>
        <article className="book-card" >
            
        </article>
    </Link>
  );
};

export default BookCard;
