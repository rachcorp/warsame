'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function About() {
  const [isRunningOpen, setIsRunningOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Why am I running? section */}
        <div className="mb-6">
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
            <div className="mt-4 p-6 bg-white shadow-lg rounded-lg">
              <div className="text-gray-900 space-y-4">
                <p className="text-base leading-relaxed">
                  I am putting my name forward as a candidate for the Ontario Liberal Party nomination in Ottawa West-Nepean because I care deeply about Ontario&apos;s public education and healthcare systems.
                </p>
                
                <p className="text-base leading-relaxed">
                  The next election isn&apos;t just about changing governments; it&apos;s about protecting the fundamental values of creating opportunities for all that define our province.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Restoring and Defending Public Services</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-base"><span className="font-semibold">Public Health Crisis:</span> With 2.5 million Ontarians lacking a family doctor...</li>
                  <li className="text-base"><span className="font-semibold">Public Education:</span> The erosion of funding and support...</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Challenging the Ford Government&apos;s Track Record</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-base"><span className="font-semibold">Healthcare Privatization:</span> Doug Ford&apos;s push for private clinics and services not only undermines the single-payer system but also increases wait times for public services by draining off healthcare workers...</li>
                  <li className="text-base"><span className="font-semibold">Cuts and Deficiencies:</span> The Ford government&apos;s cuts to education and healthcare have left teachers, nurses, and other public sector workers overworked and undervalued...</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Offering a Vision of Hope and Renewal</h3>
                <p className="text-base leading-relaxed">
                  As your Ontario Liberal candidate in OWN, I promote these bold plans:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-base">Expand public healthcare (e.g., more nurse practitioners, increasing residency spots for family doctors, and incentivizing medical professionals to work in under-served areas).</li>
                  <li className="text-base">Strengthen public education by investing in schools, reducing class sizes, and supporting teachers and staff.</li>
                </ul>
                <p className="text-base leading-relaxed">
                  By focusing on a forward-looking, hopeful message, we can re-energize voters.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Uniting Progressives to Fight Privatization</h3>
                <p className="text-base leading-relaxed">
                  I believe the Ford government&apos;s privatization agenda provides a rallying point to unite progressive voters, labour unions, healthcare advocates, educators, and others who are deeply concerned about the future of Ontario&apos;s public services. As your Liberal candidate, I can build this coalition and ensure a broad, united front against the Doug Ford Conservatives.
                </p>
              </div>
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
            <div className="mt-4 p-6 bg-white shadow-lg rounded-lg">
              <div className="text-gray-900 space-y-4">
                <p className="text-base leading-relaxed">
                  A proud lifelong Liberal, Warsame is deeply committed to the values of equality, compassion, and progress that define the Liberal Party. His professional career, spanning over two decades, has been dedicated to empowering the less fortunate, both here at home and internationally, to access quality education and build brighter futures.
                </p>

                <p className="text-base leading-relaxed">
                  Warsame&apos;s work with the United Nations Migration Agency and his extensive experience in refugee protection have made him a steadfast advocate for human rights and education. Whether through supporting students, assisting refugees, or advancing programs that promote opportunity, Warsame has consistently championed those most in need.
                </p> 
                <br />

                <p className="text-base leading-relaxed">
                  A graduate of the University of Guelph, Warsame has a strong academic foundation in agricultural economics, coupled with a deep understanding of rural Ontario. His expertise is vital for fostering innovation, supporting local farmers, and driving sustainable growth in agribusiness and rural communities across the province.
                </p>

                <p className="text-base leading-relaxed">
                  Warsame is also an engaged community leader. He served as a proud board member of the Ottawa West–Nepean Provincial Liberal Association and has demonstrated a passion for building connections through sport. An avid soccer organizer and player, Warsame spent several years as a member of the steering committee for the Soccer Collaboration Cup in Ottawa, fostering inclusivity and teamwork through the beautiful game.
                </p>

                <p className="text-base leading-relaxed">
                  Warsame lives in Nepean with his wife, son, and daughter. His passion for creating meaningful change stems from his unwavering belief in the power of education, economic empowerment, and community building to transform lives. With a strong sense of purpose and a deep commitment to Liberal values, Warsame is ready to stand up for others and build a more inclusive, equitable, and prosperous future for all Ontarians.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}