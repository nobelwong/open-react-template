import Image from "next/image";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";
import Summary from "@/public/images/summary_dark.png";
import Building from "@/public/images/building.png";
import Prompt from "@/public/images/prompt_dark.png";

export default function Zigzag() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20 border-t border-gray-800">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
							unlocks optimisation
						</div>
						{/* <h1 className="h2 mb-4">One product, unlimited solutions</h1> */}
						<h1 className="h2 mb-4">
							Gateway to Exergenics' Chilled Water Plant Optimisation
						</h1>
						<p className="text-xl text-gray-400">
							Plant calibration is the first step to unlocking Exergenics' suite
							of Chilled Water Plant Optimisation, including dynamic condenser
							water temperature optimisation and reset, Chiller Staging setpoint
							and equipment Load Balancing.
						</p>
					</div>

					{/* Items */}
					<div className="grid gap-20">
						{/* 1st item */}
						<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
							{/* Image */}
							<div
								className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
								data-aos="fade-up"
							>
								<Image
									className="max-w-full mx-auto md:max-w-none h-auto"
									src={Building}
									width={540}
									height={405}
									alt="Features 01"
								/>
							</div>
							{/* Content */}
							<div
								className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
								data-aos="fade-right"
							>
								<div className="md:pr-4 lg:pr-12 xl:pr-16">
									<div className="font-architects-daughter text-xl text-purple-600 mb-2">
										More speed. Less spend
									</div>
									<h3 className="h3 mb-3">
										Calibrate your Chilled Water Plant in 7 steps
									</h3>
									<p className="text-xl text-gray-400 mb-4">
										Configure your chilled water plant with your existing
										knowledge, documentation and expertise.
									</p>
									<ul className="text-lg text-gray-400 -mb-2">
										<li className="flex items-center mb-2">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Customise</span>
										</li>
										<li className="flex items-center mb-2">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Excepteur sint occaecat</span>
										</li>
										<li className="flex items-center">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Amet consectetur adipiscing elit</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* 2nd item */}
						<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
							{/* Image */}
							<div
								className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
								data-aos="fade-up"
							>
								<Image
									className="max-w-full mx-auto md:max-w-none h-auto"
									src={Prompt}
									width={540}
									height={405}
									alt="Features 02"
								/>
							</div>
							{/* Content */}
							<div
								className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
								data-aos="fade-left"
							>
								<div className="md:pl-4 lg:pl-12 xl:pl-16">
									<div className="font-architects-daughter text-xl text-purple-600 mb-2">
										Less thinking. More calibrating
									</div>
									<h3 className="h3 mb-3">Intuitive prompts based forms</h3>
									<p className="text-xl text-gray-400 mb-4">
										Designed to create a simple, user friendly and structured
										way of gathering plant information that covers the majority
										of existing chilled water plant setups.
									</p>
									<ul className="text-lg text-gray-400 -mb-2">
										<li className="flex items-center mb-2">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Simplicity</span>
										</li>
										<li className="flex items-center mb-2">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Tailored experience</span>
										</li>
										<li className="flex items-center">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Progress Tracking</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* 3rd item */}
						<div className="md:grid md:grid-cols-12 md:gap-6 items-center">
							{/* Image */}
							<div
								className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
								data-aos="fade-up"
							>
								<Image
									className="max-w-full mx-auto md:max-w-none h-auto"
									src={Summary}
									width={540}
									height={405}
									alt="Features 03"
								/>
							</div>
							{/* Content */}
							<div
								className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
								data-aos="fade-right"
							>
								<div className="md:pr-4 lg:pr-12 xl:pr-16">
									<div className="font-architects-daughter text-xl text-purple-600 mb-2">
										More speed. Less spend
									</div>
									<h3 className="h3 mb-3">
										Overview of your Chilled Water Plant
									</h3>
									<p className="text-xl text-gray-400 mb-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
									<ul className="text-lg text-gray-400 -mb-2">
										<li className="flex items-center mb-2">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Duis aute irure dolor in reprehenderit</span>
										</li>
										<li className="flex items-center mb-2">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Excepteur sint occaecat</span>
										</li>
										<li className="flex items-center">
											<svg
												className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
											</svg>
											<span>Amet consectetur adipiscing elit</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
