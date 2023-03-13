export default async function handler(req, res) {
  // extracting jwt from the header
  return res.json({ me: "Anna A" });
}
