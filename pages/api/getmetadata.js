import { getLinkPreview } from 'link-preview-js';

export default async function handler(req, res) {
  const url = req.query.url;
  const data = await getLinkPreview(url)

  res.status(200).json({ ...data });
};
