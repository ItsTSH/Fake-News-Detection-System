import React from 'react';
import { Header } from '../components/header'
import { Footer } from '../components/footer'
const TC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
        <Header />
        <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-6">Last Updated: May 1, 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to the Fake News Detection tool. These Terms and Conditions govern your use of our web application 
            and services. By accessing or using our service, you agree to be bound by these Terms. If you disagree 
            with any part of the terms, you may not access the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Definitions</h2>
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700 space-y-2">
            <li><strong>"Service"</strong> refers to the Fake News Detection web application.</li>
            <li><strong>"User"</strong> refers to the individual accessing or using the Service.</li>
            <li><strong>"Content"</strong> refers to text, images, or other material submitted to the Service for analysis.</li>
            <li><strong>"Analysis"</strong> refers to the automated assessment of content credibility provided by our system.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Service Description</h2>
          <p className="text-gray-700 mb-4">
            Our Fake News Detection tool uses machine learning algorithms to analyze and assess the credibility 
            of news content. The Service provides an automated analysis that estimates the likelihood of submitted 
            content being factual or misleading.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Important Notice:</strong> Our Service provides analysis based on machine learning models with 
              approximately 90% accuracy. The analysis should be used as a supplementary tool and not as a definitive 
              determination of factual accuracy. We recommend users verify information through multiple reliable sources.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            By using our Service, you agree to:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700 space-y-2">
            <li>Use the Service only for lawful purposes and in accordance with these Terms.</li>
            <li>Not submit content that infringes upon intellectual property rights of others.</li>
            <li>Not attempt to interfere with, compromise, or disrupt the Service.</li>
            <li>Not use the Service to distribute malware or other harmful content.</li>
            <li>Not attempt to reverse-engineer the machine learning algorithms.</li>
            <li>Not automate submissions or create excessive load on our systems.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Content Submission and Privacy</h2>
          <p className="text-gray-700 mb-4">
            When you submit content for analysis:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700 space-y-2">
            <li>You retain all ownership rights to your content.</li>
            <li>You grant us permission to analyze the content for the purpose of providing the Service.</li>
            <li>We may store anonymized features extracted from submitted content to improve our algorithms.</li>
            <li>We do not permanently store full articles or attribute content to specific users.</li>
            <li>We do not share submitted content with third parties except as required by law.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            For more information about how we handle your data, please refer to our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The Service, including its software, algorithms, design, and content created by us, is owned by the 
            Fake News Detection Project and protected by intellectual property laws. Our Service may use open-source 
            components subject to their respective licenses.
          </p>
          <p className="text-gray-700">
            The BERT model architecture is based on research by Google and is used in accordance with applicable 
            licensing terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-gray-700 mb-4">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND. WE DO NOT 
            GUARANTEE THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY ANALYSIS PROVIDED.
          </p>
          <p className="text-gray-700">
            We disclaim all warranties, express or implied, including but not limited to merchantability, fitness for 
            a particular purpose, and non-infringement. No advice or information obtained from the Service shall create 
            any warranty not expressly stated in these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            IN NO EVENT SHALL THE FAKE NEWS DETECTION PROJECT, ITS CREATORS, DEVELOPERS, OR PARTNERS BE LIABLE FOR ANY 
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF 
            THE SERVICE.
          </p>
          <p className="text-gray-700">
            Our liability is limited to the maximum extent permitted by law. You specifically acknowledge that we shall 
            not be liable for user content or the defamatory, offensive, or illegal conduct of any third party.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Service Modifications</h2>
          <p className="text-gray-700">
            We reserve the right to modify, suspend, or discontinue the Service, temporarily or permanently, at any time 
            without notice. We may also update these Terms from time to time. Your continued use of the Service following 
            any changes constitutes your acceptance of such changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without 
            regard to its conflict of law provisions. Any legal action or proceeding arising out of these Terms shall be 
            brought exclusively in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              Fake News Detection Project<br />
              Email: contact@fakenewsdetection.example.com<br />
              Address: [Your Address]
            </p>
          </div>
        </section>

        <div className="mt-8 border-t pt-6">
          <p className="text-gray-600 text-center">
            © {currentYear} Fake News Detection Project. All rights reserved.
          </p>
        </div>
      </div>
        </div>
        <Footer />
    </>
  );
};

export default TC;