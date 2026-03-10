import Image from 'next/image';
import { readdir } from 'fs/promises';
import path from 'path';

export default async function GalleryPage() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = await readdir(imagesDir);
  const imageFiles = files
    .filter((file) => /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b));

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageFiles.map((file) => (
            <div key={file} className="rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="relative w-full aspect-square bg-gray-200">
                <Image
                  src={`/images/${encodeURIComponent(file)}`}
                  alt="Waterproofing project photo"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-primary-900 hover:bg-primary-800 text-white font-bold rounded-lg transition-all duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
