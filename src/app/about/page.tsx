'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function About() {
  const [isRunningOpen, setIsRunningOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Why am I running? section */}
        <div className="mb-8">
          <button
            onClick={() => setIsRunningOpen(!isRunningOpen)}
            className="w-full flex justify-between items-center bg-[#E31837] text-white p-4 rounded-lg hover:bg-[#c41430] transition-colors"
          >
            <h2 className="text-2xl font-bold">Why I am running</h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                isRunningOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isRunningOpen && (
            <div className="mt-4 p-6 bg-white shadow-lg rounded-lg prose max-w-none">
              <p>I am putting my name forward as a candidate for the Ontario Liberal Party nomination in Ottawa West-Nepean because I care deeply about Ontario&apos;s public education and healthcare systems.</p>
              
              <p>The next election isn&apos;t just about changing governments; it&apos;s about protecting the fundamental values of creating opportunities for all that define our province. I am running to give a voice to the thousands in our community who have been ignored and to present a vision for a stronger, more compassionate Ontario.</p>
              
              <h3 className="font-bold mt-4">Restoring and Defending Public Services</h3>
              <ul>
                <li><strong>Public Health Crisis:</strong> With 2.5 million Ontarians lacking a family doctor and the public health system stretched to its breaking point, the status quo under Doug Ford&apos;s government is unsustainable. As your Liberal candidate, I will be the voice that highlights the dangers of privatization and offers solutions to rebuild and expand the public healthcare system.</li>
                <li><strong>Public Education:</strong> The erosion of funding and support for Ontario&apos;s public schools under the Doug Ford Conservatives has put the system at risk. We Liberals have historically stood for equitable and high-quality public education, and as a candidate with a clear vision I can address the growing concerns about underfunding and privatization in education.</li>
              </ul>

              <h3 className="font-bold mt-4">Challenging the Ford Government&apos;s Track Record</h3>
              <ul>
                <li><strong>Healthcare Privatization:</strong> Doug Ford&apos;s push for private clinics and services not only undermines the single-payer system but also increases wait times for public services by draining off healthcare workers. As your Liberal candidate I will challenge this narrative with evidence-based plans to expand access to care.</li>
                <li><strong>Cuts and Deficiencies:</strong> The Ford government&apos;s cuts to education and healthcare have left teachers, nurses, and other public sector workers overworked and undervalued. As a member of the Liberal team, I will promote the reversal of these cuts and I will put forward policies that prioritize the public good.</li>
              </ul>

              <h3 className="font-bold mt-4">Offering a Vision of Hope and Renewal</h3>
              <p>As your Ontario Liberal candidate in OWN, I promote these bold plans:</p>
              <ul>
                <li>Expand public healthcare (e.g., more nurse practitioners, increasing residency spots for family doctors, and incentivizing medical professionals to work in under-served areas).</li>
                <li>Strengthen public education by investing in schools, reducing class sizes, and supporting teachers and staff.</li>
              </ul>
              <p>By focusing on a forward-looking, hopeful message, we can re-energize voters.</p>

              <h3 className="font-bold mt-4">Uniting Progressives to Fight Privatization</h3>
              <p>I believe the Ford government&apos;s privatization agenda provides a rallying point to unite progressive voters, labour unions, healthcare advocates, educators, and others who are deeply concerned about the future of Ontario&apos;s public services. As your Liberal candidate, I can build this coalition and ensure a broad, united front against the Doug Ford Conservatives.</p>
            </div>
          )}
        </div>

        {/* Biography section */}
        <div>
          <button
            onClick={() => setIsBioOpen(!isBioOpen)}
            className="w-full flex justify-between items-center bg-[#E31837] text-white p-4 rounded-lg hover:bg-[#c41430] transition-colors"
          >
            <h2 className="text-2xl font-bold">Biography</h2>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                isBioOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isBioOpen && (
            <div className="mt-4 p-6 bg-white shadow-lg rounded-lg prose max-w-none">
              <p>A proud lifelong Liberal, Warsame is deeply committed to the values of equality, compassion, and progress that define the Liberal Party. His professional career, spanning over two decades, has been dedicated to empowering the less fortunate, both here at home and internationally, to access quality education and build brighter futures.</p>

              <p>Warsame&apos;s work with the United Nations Migration Agency and his extensive experience in refugee protection have made him a steadfast advocate for human rights and education. Whether through supporting students, assisting refugees, or advancing programs that promote opportunity, Warsame has consistently championed those most in need.</p> 
              <br />

              <p>A graduate of the University of Guelph, Warsame has a strong academic foundation in agricultural economics, coupled with a deep understanding of rural Ontario. His expertise is vital for fostering innovation, supporting local farmers, and driving sustainable growth in agribusiness and rural communities across the province.</p>

              <p>Warsame is also an engaged community leader. He served as a proud board member of the Ottawa West–Nepean Provincial Liberal Association and has demonstrated a passion for building connections through sport. An avid soccer organizer and player, Warsame spent several years as a member of the steering committee for the Soccer Collaboration Cup in Ottawa, fostering inclusivity and teamwork through the beautiful game.</p>

              <p>Warsame lives in Nepean with his wife, son, and daughter. His passion for creating meaningful change stems from his unwavering belief in the power of education, economic empowerment, and community building to transform lives. With a strong sense of purpose and a deep commitment to Liberal values, Warsame is ready to stand up for others and build a more inclusive, equitable, and prosperous future for all Ontarians.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}