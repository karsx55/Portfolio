export const email = "kartikvermaaa01@gmail.com";
export const github = "https://github.com/kartik-555";
export const linkedin = "https://www.linkedin.com/in/kartik555";

export type Project = {
  id: string;
  title: string;
  category: "Agents & AI" | "Machine learning";
  type: string;
  description: string;
  detail: string;
  focus: string;
  tags: string[];
  url: string;
  visual: "voice" | "knowledge" | "socket" | "forecast" | "detect";
};

export const projects: Project[] = [
  {
    id: "01",
    title: "AI Receptionist",
    category: "Agents & AI",
    type: "VOICE & AUTOMATION",
    description:
      "Exploring a more natural front desk through voice AI and conversational automation.",
    detail:
      "An exploration of AI-powered reception: connecting conversational intelligence with the everyday task of helping people get the information they need. The source repository documents the implementation and its current scope.",
    focus: "Voice interaction · conversational workflows · backend integration",
    tags: ["Voice AI", "Python", "Automation"],
    url: `${github}/AI_receptionist`,
    visual: "voice",
  },
  {
    id: "02",
    title: "Knowledge, connected.",
    category: "Agents & AI",
    type: "RETRIEVAL & INTELLIGENCE",
    description:
      "An AI knowledge-base assistant connecting questions with the information behind the answers.",
    detail:
      "The AI-Powered Knowledge Base Assistant investigates how language models can work with a dedicated knowledge source. It reflects my interest in retrieval-augmented generation, document processing, and grounded responses. Explore the repository for implementation details.",
    focus: "Knowledge retrieval · document context · question answering",
    tags: ["LLMs", "Knowledge base", "AI assistant"],
    url: `${github}/AI-Powered-Knowledge-Base-Assistant`,
    visual: "knowledge",
  },
  {
    id: "03",
    title: "A conversation, live.",
    category: "Agents & AI",
    type: "REAL-TIME SYSTEMS",
    description:
      "WebSocket conversations that explore the connection between AI agents and real-time communication.",
    detail:
      "FastAgent-WS brings together my interest in agent systems and persistent, bidirectional communication. This project explores WebSocket-based conversations; the repository is the record of the actual code and available capabilities.",
    focus: "WebSocket communication · agent conversations · backend systems",
    tags: ["WebSockets", "Agents", "Real-time"],
    url: `${github}/FastAgent-WS`,
    visual: "socket",
  },
  {
    id: "04",
    title: "Finding the next signal.",
    category: "Machine learning",
    type: "TIME-SERIES FORECASTING",
    description:
      "Looking for patterns over time with recurrent neural networks and LSTM models.",
    detail:
      "A time-series analysis project using LSTM and RNN approaches. It explores sequential data and forecasting, extending my backend work into the models that interpret data. Model code and experiments are available in the repository.",
    focus: "Sequential data · LSTM · recurrent neural networks",
    tags: ["LSTM", "RNN", "Time series"],
    url: `${github}/TimeSeriesAnalysis_LSTM_RNN`,
    visual: "forecast",
  },
  {
    id: "05",
    title: "Reading between profiles.",
    category: "Machine learning",
    type: "PATTERN DETECTION",
    description:
      "A machine-learning exploration of the patterns behind fake account detection.",
    detail:
      "Fake Account Detection explores a practical classification problem: identifying patterns that may distinguish authentic accounts from suspicious ones. See the repository for the dataset handling, model choices, and limitations of the experiment.",
    focus: "Classification · account patterns · applied machine learning",
    tags: ["Classification", "ML", "Data"],
    url: `${github}/Fake_Account_Detection`,
    visual: "detect",
  },
];

export const skills = [
  {
    number: "01",
    name: "Python & FastAPI",
    label: "THE FOUNDATION",
    text: "API design and backend services, with Django and Django REST Framework also in the toolkit.",
  },
  {
    number: "02",
    name: "LangChain & LangGraph",
    label: "THE ORCHESTRATION",
    text: "Agent workflows, tool usage, memory, and prompt orchestration for multi-step AI systems.",
  },
  {
    number: "03",
    name: "LLMs & retrieval",
    label: "THE INTELLIGENCE",
    text: "RAG pipelines, document ingestion, embeddings, vector search with FAISS, and prompt engineering.",
  },
  {
    number: "04",
    name: "Azure & Docker",
    label: "THE INFRASTRUCTURE",
    text: "Cloud services including Azure Service Bus and Blob Storage, with containerized backend deployments.",
  },
  {
    number: "05",
    name: "Machine learning",
    label: "THE EXPERIMENTS",
    text: "TensorFlow, Keras, PyTorch, Scikit-learn, YOLO, and OpenCV for forecasting and detection work.",
  },
  {
    number: "06",
    name: "Data & databases",
    label: "THE RAW MATERIAL",
    text: "MongoDB, PostgreSQL, NumPy, and Pandas for storing, preparing, and working with application data.",
  },
];
