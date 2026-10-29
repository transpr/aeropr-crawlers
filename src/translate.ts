// Mistral API translation: non-English releases -> English.

const MISTRAL_KEY = process.env.MISTRAL_API_KEY ?? "";

export async function translateToEnglish(text: string): Promise<string> {
  if (!MISTRAL_KEY || !text.trim()) return text;
  const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${MISTRAL_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistral-small-latest",
      messages: [
        {
          role: "system",
          content:
            "Translate the following press release to English. Output ONLY the translation, no commentary. Preserve structure and factual accuracy.",
        },
        { role: "user", content: text.slice(0, 12000) },
      ],
      temperature: 0.2,
    }),
  });
  if (!res.ok) {
    console.error(`Mistral API ${res.status}: ${(await res.text()).slice(0, 200)}`);
    return text;
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? text;
}
