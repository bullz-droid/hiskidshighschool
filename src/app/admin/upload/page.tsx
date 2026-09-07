"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";

export default function AdminUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setStatus(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: "Photo uploaded successfully to Cloudinary! It will appear on the gallery page shortly.",
        });
        setFile(null);
        setPreview(null);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "Failed to upload image. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-beige-light flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-6">
        <div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-maroon hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to School Gallery
          </Link>
          <h2 className="font-serif font-bold text-3xl text-brand-ink">
            Upload School Photos
          </h2>
          <p className="text-sm text-brand-ink-muted mt-1 leading-relaxed">
            Minimalistic Admin Portal — Upload photos directly to your Cloudinary storage for the main gallery.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-card border border-brand-beige-border">
          <form onSubmit={handleUpload} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-brand-ink mb-2">
                Select Photo
              </label>
              
              <div className="relative border-2 border-dashed border-brand-beige-border hover:border-brand-maroon rounded-xl p-6 text-center transition-colors bg-brand-beige/50 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {preview ? (
                  <div className="space-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={preview}
                      alt="Upload Preview"
                      className="max-h-48 mx-auto rounded-lg object-cover shadow-sm"
                    />
                    <p className="text-xs text-brand-ink-muted truncate font-mono">
                      {file?.name}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mx-auto">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div className="text-xs text-brand-ink font-semibold">
                      Click or Drag photo here to upload
                    </div>
                    <p className="text-[11px] text-brand-ink-muted">
                      PNG, JPG, WEBP up to 10MB
                    </p>
                  </div>
                )}
              </div>
            </div>

            {status && (
              <div
                className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                  status.type === "success"
                    ? "bg-brand-green-deep/10 border border-brand-green-deep/20 text-brand-green-dark"
                    : "bg-brand-maroon/10 border border-brand-maroon/20 text-brand-maroon"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-4 h-4 text-brand-green-deep flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                )}
                <span className="leading-snug">{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={!file || uploading}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs shadow transition-all ${
                !file || uploading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-brand-maroon hover:bg-brand-maroon-light text-white shadow-md hover:scale-[1.01]"
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>{uploading ? "Uploading to Cloudinary..." : "Upload Photo Now"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
