import React from 'react'

const Footer = () => {
  const footerLinks = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["Help Centre", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
    ["Media Centre", "Terms of Use", "Contact Us"]
  ]

  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-10">
      
      {/* Top Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Contact */}
      <p className="mb-6 text-sm">
        Questions? Call{" "}
        <a href="tel:000-800-919-1694" className="underline hover:text-white">
          000-800-919-1694
        </a>
      </p>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {footerLinks.map((column, i) => (
          <ul key={i} className="space-y-3">
            {column.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Language Selector */}
      <div className="mt-8">
        <select className="bg-black border border-gray-600 text-gray-300 px-3 py-1 rounded">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
      </div>

      {/* Branding */}
      <p className="mt-6 text-sm">WatchWave India</p>
    </footer>
  )
}

export default Footer
