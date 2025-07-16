import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Job Work - Shree Cement",
  description: "Job Work Services at Shree Cement",
}

const JobWorkPage = () => {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <section className="pt-28 pb-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <nav className="text-sm" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">
                <span className="text-gray-500">Job Work</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Job Work Services</h1>
          <p className="text-lg text-gray-600">Providing reliable and efficient job work solutions.</p>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Job Work Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <Image
                src="/images/job-work-1.jpg" // Replace with your image path
                alt="Service 1"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Precision manufacturing services tailored to your specifications.</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <Image
                src="/images/job-work-2.jpg" // Replace with your image path
                alt="Service 2"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Assembly</h3>
              <p className="text-gray-600">Efficient and accurate assembly services for various components.</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <Image
                src="/images/job-work-3.jpg" // Replace with your image path
                alt="Service 3"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Packaging</h3>
              <p className="text-gray-600">Secure and reliable packaging solutions for your products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Why Choose Shree Cement for Job Work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Expertise and Experience</h3>
              <p className="text-gray-600">
                Leverage our extensive experience in the cement industry for high-quality job work services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">State-of-the-Art Facilities</h3>
              <p className="text-gray-600">
                Benefit from our advanced facilities and equipment for efficient and precise job execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Customized Solutions</h3>
              <p className="text-gray-600">
                We tailor our services to meet your specific requirements and deliver optimal results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Commitment to Quality</h3>
              <p className="text-gray-600">
                We adhere to strict quality standards to ensure the highest level of satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">Contact us today to discuss your job work requirements.</p>
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default JobWorkPage
