import { dataModel } from "@/app/utils/data";

export default function getRoomSuggestions() {
  const suggestions: string[] = [];

  dataModel.forEach((room) => {
    if (room.questions?.length > 0) {
      const randomIndex = Math.floor(Math.random() * room.questions.length);
      suggestions.push(room.questions[randomIndex]);
    }
  });

  return suggestions;
}