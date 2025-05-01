import React from 'react';
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const About = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">About Our Fake News Detection Project</h1>
        
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction to the Project</h2>
          <p className="text-gray-700 mb-4">
            The proliferation of fake news and misinformation in digital media has become a significant societal challenge, 
            affecting everything from public discourse to democratic processes. Our Fake News Detection project aims to address 
            this issue by providing users with an automated tool to analyze and assess the credibility of news content they encounter online.
          </p>
          <p className="text-gray-700">
            This project was developed to combat the rapid spread of misinformation by leveraging advances in natural language 
            processing and machine learning to distinguish between authentic and fabricated news content.
          </p>
        </section>

        {/* Proposed Solution Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proposed Solution</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-4">
              Our solution employs a custom BERT (Bidirectional Encoder Representations from Transformers) architecture to 
              analyze news content and determine its authenticity. Key aspects of our approach include:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
              <li>Implementation of a modified BERT base model with frozen layers before training</li>
              <li>Extensive dataset training to recognize linguistic patterns associated with fake news</li>
              <li>Classification system that provides confidence scores for each assessment</li>
              <li>User-friendly interface that explains the reasoning behind each classification</li>
              <li>Continuous model improvement through user feedback and new data incorporation</li>
            </ul>
          </div>
          <p className="text-gray-700">
            Our model has achieved a classification accuracy of 90%, making it a robust tool for identifying potential 
            misinformation in digital content.
          </p>
        </section>

        {/* System Architecture Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">System Architecture</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-2">Backend</h3>
              <p className="text-gray-700">
                We implemented our backend using FastAPI, a modern Python framework that enables high-performance API 
                development. Our backend includes comprehensive error handling, request validation, and secure API endpoints 
                for processing content analysis requests.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-purple-800 mb-2">ML Component</h3>
              <p className="text-gray-700">
                The core of our system is a custom BERT architecture specifically fine-tuned for fake news detection. 
                We froze the initial layers of the BERT base model and retrained the final layers on a curated dataset 
                of verified true and false news articles to optimize for classification accuracy.
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-yellow-800 mb-2">Frontend</h3>
              <p className="text-gray-700">
                Our frontend is built using Vite-React, providing a responsive and intuitive user interface. The design 
                focuses on clarity of information presentation, allowing users to easily submit content for analysis and 
                understand the assessment results.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">System Flow</h3>
            <p className="text-gray-700 mb-2">
              The system operates through the following process:
            </p>
            <ol className="list-decimal list-inside ml-4 text-gray-700">
              <li>User submits news content through the React frontend</li>
              <li>The FastAPI backend receives and preprocesses the content</li>
              <li>Preprocessed text is passed to the BERT model for analysis</li>
              <li>The model generates a classification prediction with confidence score</li>
              <li>Results are returned to the frontend via API</li>
              <li>User receives a detailed assessment with supporting information</li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-blue-800">How accurate is the fake news detection model?</h3>
              <p className="text-gray-700 mt-1">
                Our custom BERT model achieves approximately 90% classification accuracy on benchmarked datasets. However, 
                accuracy may vary depending on context, topic, and the evolution of misinformation tactics.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-800">What types of content can be analyzed?</h3>
              <p className="text-gray-700 mt-1">
                The system works best with news articles, blog posts, and longer-form content. It may be less effective with 
                very short social media posts, images without context, or highly specialized technical content.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-800">How does the BERT model identify fake news?</h3>
              <p className="text-gray-700 mt-1">
                The BERT model analyzes linguistic patterns, contextual inconsistencies, emotional manipulation tactics, and 
                other textual features that are commonly associated with fake news. It compares these patterns against what 
                it learned from training on thousands of verified articles.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-800">Is my submitted content stored or shared?</h3>
              <p className="text-gray-700 mt-1">
                We only temporarily process content for analysis. No full articles are permanently stored, though anonymized 
                features may be used to improve the model. We never share submitted content with third parties.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-800">Can the system be fooled?</h3>
              <p className="text-gray-700 mt-1">
                Like any ML system, ours has limitations. Highly sophisticated fake news that closely mimics legitimate 
                reporting styles may sometimes go undetected. We continuously update our model to address emerging 
                misinformation tactics.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-4">
            The Fake News Detection project represents an important step forward in combating online misinformation through 
            the application of advanced natural language processing techniques. By achieving 90% classification accuracy with 
            our custom BERT architecture, we've developed a practical tool that can help users navigate the increasingly complex 
            digital information landscape.
          </p>
          <p className="text-gray-700 mb-4">
            While no automated system can replace critical thinking and media literacy, our project provides valuable support 
            for users seeking to verify the credibility of news content. The combination of our robust backend (FastAPI), 
            powerful machine learning model (custom BERT), and intuitive frontend (Vite-React) creates a comprehensive solution 
            for fake news detection.
          </p>
          <p className="text-gray-700">
            We continue to refine our approach and welcome feedback from users to improve the system's effectiveness in the 
            ongoing fight against misinformation.
          </p>
        </section>

        {/* References Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">References</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
              <li>
                Devlin, J., Chang, M.W., Lee, K., & Toutanova, K. (2019). "BERT: Pre-training of Deep Bidirectional Transformers 
                for Language Understanding." <span className="italic">arXiv preprint arXiv:1810.04805</span>.
              </li>
              <li>
                Shu, K., Sliva, A., Wang, S., Tang, J., & Liu, H. (2017). "Fake News Detection on Social Media: 
                A Data Mining Perspective." <span className="italic">ACM SIGKDD Explorations Newsletter</span>, 19(1), 22-36.
              </li>
              <li>
                Titouan Parcollet & Mirco Ravanelli. (2021). "The Energy and Carbon Footprint of Training Modern Neural Networks." 
                <span className="italic">arXiv preprint arXiv:2104.10350</span>.
              </li>
              <li>
                FastAPI Documentation. (2021). <span className="italic">FastAPI</span>. https://fastapi.tiangolo.com
              </li>
              <li>
                React Documentation. (2021). <span className="italic">React</span>. https://reactjs.org/docs
              </li>
              <li>
                Vite Documentation. (2021). <span className="italic">Vite</span>. https://vitejs.dev/guide
              </li>
            </ul>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </>
  );
};

