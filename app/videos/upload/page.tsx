'use client';
 
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import React, { useState, useRef } from 'react';
 
export default function AvatarUploadPage() {
  const inputCategoryRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const renderHTML = (rawHTML: string, elementTag?: string) =>
    React.createElement(elementTag || "div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  return (
    <>
      <h1>Upload Your Video</h1>
 
      <form
        onSubmit={async (event) => {
          setBlob(null);
          event.preventDefault();
 
          if (!inputFileRef.current?.files) {
            throw new Error('No file selected');
          }
 
          const file = inputFileRef.current.files[0];
 
          setIsLoading(true);
          const newBlob = await upload(`${inputCategoryRef.current?.value}-${file.name}`, file, {
            access: 'public',
            handleUploadUrl: '/api/videos/upload',
          });
 
          setIsLoading(false);
          setBlob(newBlob);
        }}
      >
        <div className="flex flex-col gap-1 font-sans">
          <input name="category" placeholder="Entre le nom de la categorie (obligatoire)" ref={inputCategoryRef} type="text" className="rounded-sm bg-neutral-900 text-white border-solid border-neutral-700" required/>
          <input name="file" className="text-white" ref={inputFileRef} type="file" required />
          <button className="rounded-sm text-white bg-neutral-700 h-12" type="submit">
            {isLoading ? "Chargement..." : "Upload"}
          </button>
        </div>
      </form>
      {blob && (
        <div className="flex flex-col gap-1">
          <div className="text-white font-sans">
            Video url (save it): {renderHTML(blob.url)}
          </div>
          <div className="text-white font-sans">
            Video link: <a href={blob.url}>Click here</a>
          </div>
        </div>
      )}
    </>
  );
}