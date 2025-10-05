// pages/api/giveaways.js
import { list } from '@vercel/blob';

export default async function handler(req, res) {
  const { category = '', limit = 6, offset = 0 } = req.query;

  try {
    const prefix = `giveaways/${category}/`;

    const { blobs } = await list({
      prefix,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const paginated = blobs.slice(Number(offset), Number(offset) + Number(limit));

    res.status(200).json({
      images: paginated.map((blob) => ({
        url: blob.url,
        pathname: blob.pathname,
      })),
      total: blobs.length,
    });
  } catch (err) {
    console.error('Error fetching blobs:', err);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
