import { personas } from "./personas.js";

function detectPersona(messages) {
  const firstMessage = messages[0]?.content?.toLowerCase() || "";

  if (firstMessage.startsWith("andre")) {
    return personas.andre;
  }

  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    const persona = detectPersona(messages);
    const finalMessages = persona
      ? [persona, ...messages]
      : messages;

    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: finalMessages,
          temperature: 0.6,
        }),
      }
    );

    const data = await response.json();

    res.status(200).json({
      reply: data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro ao comunicar com a IA",
      details: error.message,
    });
  }
}
