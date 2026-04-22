export async function POST(request) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const systemInstruction = `You are ElectEd, a friendly and knowledgeable election education assistant. Your role is to help users understand elections, voting processes, civic duties, and democratic systems around the world.

Guidelines:
- Keep responses concise (2-4 sentences for simple questions, up to a short paragraph for complex ones)
- Use plain, accessible language — explain jargon when you use it
- Be politically neutral — never endorse parties, candidates, or ideologies
- Cover topics like: voter registration, ballot types, election timelines, electoral systems (FPTP, PR, ranked choice), gerrymandering, campaign finance, civic rights, and election administration
- If asked about something unrelated to elections or civics, politely redirect: "I specialize in elections and civics! Ask me about voting, registration, or how elections work."
- Use emoji sparingly for warmth (🗳️ ✅ 📋)
- When relevant, remind users to check their local election authority for jurisdiction-specific rules`;

    // Build conversation history for Gemini
    const contents = [];

    // Add prior conversation history
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        });
      }
    }

    // Add current message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }],
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            topK: 40,
            maxOutputTokens: 512,
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errorData = await geminiRes.text();
      console.error("Gemini API error:", geminiRes.status, errorData);
      return Response.json(
        { error: "Failed to get response from AI" },
        { status: 502 }
      );
    }

    const data = await geminiRes.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't generate a response. Please try asking your question differently!";

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
