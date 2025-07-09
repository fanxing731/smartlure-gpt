export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;
  const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify(req.body)
  });
  const data = await gptRes.json();
  res.status(200).json(data);
}
