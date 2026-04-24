'use client';
import React,{useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Upload,ImageIcon} from "lucide-react";
import {UploadSchema} from "@/lib/validations/upload";
import {BookUploadFormValues} from "@/types";
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ACCEPTED_PDF_TYPES,ACCEPTED_IMAGE_TYPES,DEFAULT_VOICE} from "@/lib/constants";
import FileUploader from "./FileUploader";
import VoiceSelector from "./VoiceSelector";
import LoadingOverlay from "./LoadingOverlay";
import {useAuth,useUser} from "@clerk/nextjs";
import {checkBookExists,createBook,saveBookSegments} from "@/lib/actions/book.actions";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {useAuth,useUser} from "@clerk/nextjs";
import {parsePDFFiles} from "@/lib/utils";
import {upload} from "@vercel/blob/client";
const UploadForm = () => {
    return ( 
        <>
        </>
    );
} 
export default UploadForm;