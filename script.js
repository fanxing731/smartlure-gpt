async function getRecommendation() {
  const weather = document.getElementById("weather").value;
  const temperature = document.getElementById("temperature").value;
  const location = document.getElementById("location").value;

  const prompt = `Suggest the best fishing lure for the following conditions:\n
  Weather: ${weather}, Temperature: ${temperature}°C, Location: ${location}.\n
  Use knowledge of local fish and proven techniques. Reply in one paragraph.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  document.getElementById("result").innerText =
    data.choices?.[0]?.message?.content || "No response.";
}
