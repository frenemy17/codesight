import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const systemPrompt = `You are a code health auditor. Your job is to identify risks and give clear, actionable suggestions based on metadata.
Important: A higher score indicates *more* stress and *worse* code quality.`;

    const userPrompt = `
Analyze the following code file:

- File Name: ${body.fileName}
- Edit Count: ${body.edits}
- Bug Count: ${body.bugs}
- TODOs: ${body.todos}
- Lint Errors: ${body.lintErrors}
- Stress Score (0-100, higher is worse): ${body.score}

Give a 1–2 line summary of potential issues and suggestions for improvement. Be concise and helpful.`;

    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3-8b-instruct",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 100,
    });

    const insight = completion.choices[0]?.message.content ?? "No insight found.";
    return NextResponse.json({ insight });
  } catch (err) {
    console.error("❌ OpenRouter API Error:", err);
    return NextResponse.json({ insight: "Something went wrong!" }, { status: 500 });
  }
}
