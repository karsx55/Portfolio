"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutCards from "../components/AboutCards";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <div className="flex flex-col items-center h-screen mt-[10%] ">
            <div className="flex">
              <div className="w-40 h-40 rounded-full overflow-hidden border-2">
                <img
                  src="/profile.jpeg"
                  alt="Kartik Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[300%]">I am the one who knocks</h1>
            </div>
            <div className="flex flex-col ml-4 item-center w-[70%]">
              <h1 className="text-[150%] text-center text-gray-500">
                Curious and creative, I’m Kartik—a builder of cool and engaging
                experiences. I dive into new fields, master the craft, and move
                on to the next challenge. With a passion for solving problems, I
                craft realistic, innovative solutions that fit the context and
                turn intriguing ideas into reality.
              </h1>
            </div>
          </div>
        </section>
        <section className="mt-[-25%]">
          <h2 className="text-[200%] text-center">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Languages</h3>
              <p className="text-gray-500">Python, HTML/CSS, JavaScript</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Frameworks</h3>
              <p className="text-gray-500">Django, LangChain, Hugging Face, Transformers</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Machine Learning/AI Libraries</h3>
              <p className="text-gray-500">TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, Hugging Face Transformers</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Data Management</h3>
              <p className="text-gray-500">NumPy, Pandas, Pre-processing, VectorDB</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Version Control</h3>
              <p className="text-gray-500">Git</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">ML Techniques</h3>
              <p className="text-gray-500">Retrieval-Augmented Generation (RAG), Fine-Tuning, Transformer Architecture, Generative AI</p>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-[200%] text-center">Experience</h2>
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Freelance Developer</h3>
              <p className="text-gray-500">July 2024 - Present</p>
              <p>Worked on various projects for clients, building web applications and providing technical solutions.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Junior Python Developer at Spark Brains Pvt Ltd</h3>
              <p className="text-gray-500">July - December 2024</p>
              <p>Developed robust backend systems using Django, FastAPI, and PostgreSQL, building RESTful APIs with the Django REST Framework.</p>
              <ul className="list-disc list-inside text-gray-500">
                <li>Employee Management System: Integrated a Kanban board for task assignment (like Jira tickets).</li>
                <li>FNTX: A trading platform leveraging APIs and OAuth from IBKR Broker for stock market orders and account tracking.</li>
                <li>Applied AI techniques such as transfer learning, time-series forecasting, and object detection using TensorFlow, Keras, and YOLO, integrated with production web applications.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-[200%] text-center">Projects</h2>
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">AI-Powered-Knowledge-Base-Assistant</h3>
              <p className="text-gray-500">Developed an AI-powered knowledge base assistant leveraging Django, OpenAI API and FAISS to provide context-aware responses for user queries.</p>
              <a href="https://github.com/kartik-555/AI-Powered-Knowledge-Base-Assistant" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">Stock Price Prediction Using Yfinance, LSTM, and RNN</h3>
              <p className="text-gray-500">Implemented stock price prediction models using Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks to enhance forecasting accuracy.</p>
              <a href="https://github.com/kartik-555/Stock-Price-Prediction" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">CompassionNet | Crowd Funding WebApp</h3>
              <p className="text-gray-500">Developed Backend using Django framework, for functionality such as Role Based authentication System CURD operations for Features Like creating event, getting donations for event, Volunteer registrations and profile management.</p>
              <a href="https://github.com/kartik-555/CompassionNet" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-[200%] text-center">Education</h2>
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">B.E in COMPUTER SCIENCE and ENGINEERING</h3>
              <p className="text-gray-500">May 2024</p>
              <p>Chandigarh University, Mohali (CGPA: 7.75/10)</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">CLASS XII (PCM) — CBSE</h3>
              <p className="text-gray-500">March 2020</p>
              <p>Rk Public School, Deoband (Percentage: 83%)</p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <h3 className="text-[150%]">CLASS X — CBSE</h3>
              <p className="text-gray-500">March 2018</p>
              <p>The Doon Valley Public School, Deoband (Percentage: 81%)</p>
            </div>
          </div>
        </section>
        <section className="mt-16 mb-16">
          <h2 className="text-[200%] text-center">Certifications</h2>
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <p className="text-gray-500">Machine Learning, Coursera. Stanford University <a href="https://www.coursera.org/account/accomplishments/certificate/XXXXXX" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Link</a></p>
            </div>
            <div className="bg-gray-100 p-4 rounded w-[70%]">
              <p className="text-gray-500">Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning, Coursera. DeepLearning.ai <a href="https://www.coursera.org/account/accomplishments/certificate/YYYYYY" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Link</a></p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}