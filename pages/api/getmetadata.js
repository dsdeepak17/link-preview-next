import { getLinkPreview } from 'link-preview-js';

export default async function handler(req, res) {
  try {
    const url = req.query.url;
    const data = await getLinkPreview(url)

    return res.status(200).json({ ...data });
  } catch (err) {

    return res.status(err.status || 500).json({ err });
  }
};
