import Link from 'next/link'

export default function Footer() {
  const links = [
    { name: 'English Carpet Bowls', href: 'http://www.englishcarpetbowls.com/' },
    { name: 'Eastern Counties CBA', href: '#' },
    { name: 'Bedfordshire CBA', href: 'http://www.englishcarpetbowls.com/beds/index.html' },
    { name: 'Cambridgeshire CBA', href: '#' },
    { name: 'Essex CBA', href: '#' },
    { name: 'Hertfordshire CBA', href: 'http://www.englishcarpetbowls.com/herts/index.html' },
    { name: 'Suffolk CBA', href: 'http://www.carpetbowls.org/suffolk' },
  ]

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Any issues or anything that you would like to be included please email:{' '}
              <a 
                href="mailto:Norfolkcarpetbowls19@gmail.com" 
                className="text-green-400 hover:text-green-300 underline"
              >
                Norfolkcarpetbowls19@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Related Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-green-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Norfolk Carpet Bowls Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
