import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";
import firebaseApp from './firebaseConfig';

const vertexAI = getVertexAI(firebaseApp);

const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });
export default model;
