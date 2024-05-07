import BardieTS from "bardie-ts";

const bard = new BardieTS();

export const askQuestion = async (options) => {
  try {
    const result = await bard.question(options);
    return result.content;
  } catch (error) {
    console.error("Error fetching text response:", error.message);
    throw new Error(error.message);
  }
};

export const askQuestionWithImage = async (options) => {
  try {
    const result = await bard.question(options);
    return result.content;
  } catch (error) {
    throw new Error(error.message);
  }
};
