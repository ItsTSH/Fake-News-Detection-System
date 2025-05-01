import React from "react";

export const TC = () => {
	return (
		<>
			<div className='p-10 dark:text-slate-300 font-bold text-4xl text-accent-1 pb-10 sticky  top-0  text-center'>
				Terms of Service
			</div>

			<div className='w-[90%] overflow-y-scroll relative p-4 border-white h-[78vh]  mx-auto dark:text-slate-400  sm:w-[60%] sm:overflow-hidden '>
				<span className='text-2xl'>
					These Terms and Conditions govern your relationship with the Fake News Detection System. Please read these Terms and
					Conditions carefully before using our Service.
				</span>
				<h1 className='text-2xl mt-2'>
					1. Acceptance of Terms
				</h1>
				<p className='text-xl text-clip pb-4 '>
					By accessing or using the Service, you agree to be bound by these
					Terms. If you disagree with any part of the terms, then you may
					not access the Service. Your use of the Service constitutes your
					acceptance of these Terms and your agreement to comply with them.
				</p>
				<h1 className='text-2xl '>
					2. Description of Service
				</h1>
				<p className='text-xl text-clip pb-4'>
					The Fake News Detection System service is designed to categorize news
					articles into "true" or "false" categories based on their
					content. This classification is determined using algorithms and
					natural language processing techniques.
				</p>
				<h1 className=' text-2xl  '>
					3. Accuracy of Classification
				</h1>
				<p className='text-xl text-clip pb-4'>
					While we strive to provide accurate classifications, we cannot
					guarantee the accuracy, reliability, or completeness of the
					classifications made by the Service. The classification results
					are based on automated analysis and may not always reflect the
					true nature of the news articles.
				</p>
				<h1 className=' text-2xl'>
					4. User Responsibilities
				</h1> 
				<p className='text-xl text-clip pb-4'>
					You agree to use the Service responsibly and not to misuse it in
					any way that could harm its functionality or interfere with the
					experience of other users. You are solely responsible for any
					consequences resulting from your use of the Service.
				</p>
				<h1 className=' text-2xl'>
					5. Contact Us
				</h1>
				<p className='text-xl text-clip pb-4'>
					If you have any questions about these Terms, please contact us.
					By using the Service, you agree to abide by these Terms and
					Conditions. If you do not agree with any part of these Terms,
					please do not use the Service.
				</p>
			</div>
		</>
	);
};

export default TC;