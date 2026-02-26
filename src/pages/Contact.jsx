import img from "../assets/images/contact-img.jpeg";
import PagesHeader from "../components/PagesHeader";

function Contact() {
  return (
    <div className="bg-[var(--karas_paper)] overflow-hidden relative py-10">
      <PagesHeader
        title="Contact Us"
        description=" We would like to hear from you!"
      />
      <main>
        <div className="relative z-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="w-full h-[300px] lg:h-auto">
                <img src={img} className="w-full h-full" alt="" />
              </div>

              <div className="p-6 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3b2a6d] mb-8">
                  Contact Karas for Trusted Pet Care
                </h2>
                <div className="border-[0.2px] border-[#D6D6D6] border-dashed mb-4"></div>

                <form className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Branch/Department
                      </label>

                      <div className="relative">
                        <select
                          defaultValue=""
                          className="w-full appearance-none bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 pr-12 outline-none focus:ring focus:ring-purple-400"
                        >
                          <option value="" disabled>
                            Select branch or department
                          </option>
                          <option value="jlt">Karas Vet JLT</option>
                          <option value="business-bay">
                            Karas Vet Business Bay
                          </option>
                          <option value="management">Management</option>
                        </select>

                        {/* Custom Arrow */}
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2  text-sm">
                          <svg
                            aria-hidden="true"
                            class="e-font-icon-svg e-fas-angle-down w-2.5 fill-current"
                            viewBox="0 0 320 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                          </svg>{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Tell Your Subject"
                      className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Message"
                      className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
              <p className="font-heading text-[var(--karas_aubergine)] font-bold text-2xl">
                Follow our Social Media
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.instagram.com/karasvetdxb/"
                  className="bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white hover:-translate-y-2 transition duration-300 p-4 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-facebook-f fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/karas-vet-clinic/"
                  target="_blank"
                  className="bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white  hover:-translate-y-2 transition duration-300 p-4 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-linkedin-in fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Contact;
