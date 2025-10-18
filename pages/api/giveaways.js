import cloudinary from '../../cloudinary';

export default async function handler(req, res) {
  const { category = '', limit = 6, offset = 0 } = req.query;

  try {
    const folder = `giveaways/${category}`;

    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by('created_at', 'desc')
      .max_results(Number(limit) + Number(offset)) // Get enough results to support pagination
      .execute();

    const paginated = result.resources.slice(Number(offset), Number(offset) + Number(limit));

    res.status(200).json({
      images: paginated.map((image) => ({
        url: image.secure_url,
        public_id: image.public_id,
        folder: image.folder,
      })),
      total: result.total_count,
    });
  } catch (err) {
    console.error('Cloudinary fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch images from Cloudinary' });
  }
}
