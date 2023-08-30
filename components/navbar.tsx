import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="font-sans flex items-center justify-between bg-white p-4">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-4">
              HOME
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
          <Link href="/about">
              <div className="mr-4">
                  ABOUT
              </div>
          </Link>
          <Link href="/projects">
              <div className="mr-4">
                  PROJECTS
              </div>
          </Link>
          <Link href="/experience">
              <div className="mr-4">
                  EXPERIENCE
              </div>
          </Link>
          <Link href="/contact">
              <div className="mr-4">
                  CONTACT
              </div>
          </Link>
        {/* theme switch button */}
      </div>
    </header>
  )
}
  
export default Navbar