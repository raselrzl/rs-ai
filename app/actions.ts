import { dataModel } from "./utils/data";

export async function askQuestion(question: string) {
  const lower = question.toLowerCase().trim();

  // Try to find an exact match
  const entry = dataModel.find(item =>
    item.questions.some(q => q.toLowerCase().trim() === lower)
  );

  if (entry) {
    return {
      found: true,
      question,
      answer: entry.answer,
      suggestions: entry.questions.filter(q => q.toLowerCase().trim() !== lower),
    };
  }

  // No match — return fallback
  const fallback = dataModel[0];
  return {
    found: false,
    question,
    answer: "I don't know that one. Try one of these questions:",
    suggestions: fallback.questions,
  };
}
