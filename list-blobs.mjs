import { put } from '@vercel/blob';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve('.env.local') });

const token = process.env.BLOB_READ_WRITE_TOKEN;

if (!token) {
  console.error('❌ Token is missing!');
  process.exit(1);
}

const upload = async () => {
  try {
    const filePath = './hello.txt';
    fs.writeFileSync(filePath, 'Hello from Vercel Blob!'); // Create test file

    const fileStream = fs.createReadStream(filePath);

    const { url } = await put('giveaways/Test/hello.txt', fileStream, {
      access: 'public',
      token,
    });

    console.log('✅ Uploaded! Blob URL:', url);
  } catch (err) {
    console.error('❌ Upload failed:', err.message);
  }
};

upload();
