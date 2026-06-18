import { FormEvent } from 'react'

function App() {
  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Login submitted')
  }

  const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Registration submitted')
  }

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-[#111] px-8 py-4 flex justify-between items-center border-b-2 border-[#333] sticky top-0 z-50">
        <a href="/" className="text-yellow-500 font-bold text-xl tracking-widest no-underline">
          CHASECASE
        </a>
        <div className="flex gap-6">
          <a href="#benefits" className="text-white no-underline font-normal hover:underline hover:font-bold hover:text-yellow-500 transition-all">
            Benefits
          </a>
          <a href="#designs" className="text-white no-underline font-normal hover:underline hover:font-bold hover:text-yellow-500 transition-all">
            Design
          </a>
          <a href="#account" className="text-white no-underline font-normal hover:underline hover:font-bold hover:text-yellow-500 transition-all">
            Sign Up
          </a>
          <a href="#shop" className="text-white no-underline font-normal hover:underline hover:font-bold hover:text-yellow-500 transition-all">
            Shop
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-gradient-to-b from-[#111] to-[#0d0d0d] py-24 px-8 text-center border-b border-[#222]">
        <h1 className="text-7xl text-white mb-4 uppercase tracking-wider font-black">
          <span className="text-yellow-500">ChaseCase</span>
        </h1>
        <p className="text-4xl text-white font-bold max-w-3xl mx-auto mb-4 tracking-wide">
          Display your cards in fashion!
        </p>
        <p className="text-xl text-[#aaa] max-w-2xl mx-auto mb-10 leading-relaxed">
          Get our most advanced and modern design! Engineered layouts for raw cards, protective slabs, and multi-card dynamic displays.
        </p>
        <a
          href="#account"
          className="inline-block bg-yellow-500 text-black px-16 py-5 font-bold text-2xl rounded no-underline uppercase tracking-wide hover:bg-[#e6c200] transition-colors"
        >
          Sign Up Now
        </a>
      </section>

      {/* Account Section */}
      <section id="account" className="bg-[#111] py-16 px-5 border-b border-[#222]">
        <div className="max-w-4xl mx-auto flex gap-10 flex-wrap">
          {/* Login Column */}
          <div className="flex-1 min-w-[300px] bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
            <h3 className="mt-0 text-yellow-500 uppercase text-xl border-b border-[#333] pb-3 mb-6">
              Login to Continue
            </h3>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="login-user" className="block mb-1 text-sm text-[#ccc]">
                  Username or Email Address
                </label>
                <input
                  type="text"
                  id="login-user"
                  required
                  placeholder="Username"
                  className="w-full p-3 bg-[#0d0d0d] border border-[#444] rounded text-white focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="login-pass" className="block mb-1 text-sm text-[#ccc]">
                  Password
                </label>
                <input
                  type="password"
                  id="login-pass"
                  required
                  placeholder="Password"
                  className="w-full p-3 bg-[#0d0d0d] border border-[#444] rounded text-white focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black border-none p-3 font-bold rounded cursor-pointer uppercase hover:bg-[#e6c200] transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Registration Column */}
          <div className="flex-1 min-w-[300px] bg-[#1a1a1a] border border-[#333] rounded-lg p-8">
            <h3 className="mt-0 text-yellow-500 uppercase text-xl border-b border-[#333] pb-3 mb-6">
              New to ChaseCase?
            </h3>
            <p className="text-sm text-[#aaa] leading-relaxed mb-5">
              Create a free collector account to download custom 3D files, submit your own prism and frame designs, and track your print orders.
            </p>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label htmlFor="reg-email" className="block mb-1 text-sm text-[#ccc]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="reg-email"
                  required
                  placeholder="Email Address"
                  className="w-full p-3 bg-[#0d0d0d] border border-[#444] rounded text-white focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="reg-pass" className="block mb-1 text-sm text-[#ccc]">
                  Create Password
                </label>
                <input
                  type="password"
                  id="reg-pass"
                  required
                  placeholder="Password"
                  className="w-full p-3 bg-[#0d0d0d] border border-[#444] rounded text-white focus:border-yellow-500 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black border-none p-3 font-bold rounded cursor-pointer uppercase hover:bg-gray-200 transition-colors"
              >
                Create An Account
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-4xl mx-auto py-10 px-5">
        <h2 className="text-yellow-500 text-center mt-10 uppercase tracking-wide text-3xl">
          Product Benefits
        </h2>
        <ul className="bg-[#161616] border-2 border-[#222] rounded-lg p-5 list-none mt-8">
          <li className="my-4 text-base leading-relaxed">
            <strong className="text-yellow-500">Perfect Alignment:</strong> Designed to hold standard Pokémon cards and slabs at the ideal viewing angle.
          </li>
          <li className="my-4 text-base leading-relaxed">
            <strong className="text-yellow-500">Premium Protection:</strong> Sturdy base prevents stands from tipping over and damaging your cards.
          </li>
          <li className="my-4 text-base leading-relaxed">
            <strong className="text-yellow-500">Sleek Display:</strong> Minimalist design ensures the focus stays entirely on your card's artwork.
          </li>
        </ul>
      </section>

      <hr className="border border-[#222] my-12" />

      {/* Community Creations Section */}
      <section id="designs" className="max-w-4xl mx-auto py-10 px-5 pb-20">
        <h2 className="text-yellow-500 text-center mt-10 uppercase tracking-wide text-3xl">
          Community Creations
        </h2>
        <p className="text-center text-[#aaa] mb-8">
          Thingiverse-style layout for user-shared creations.
        </p>

        <div className="bg-[#1a1a1a] border-2 border-[#333] rounded-lg w-80 p-4 mx-auto">
          <div className="bg-black h-52 rounded flex items-center justify-center mb-4">
            <span className="text-[#666]">[ 3D Rotatable Model Player ]</span>
          </div>
          <h4 className="my-4 text-yellow-500 text-lg">Neon Gengar Prism Stand</h4>
          <p className="m-0 text-xs text-[#aaa]">By: MasterCollector99</p>

          <div className="my-4 text-xs">
            <span className="bg-[#333] px-2 py-1 rounded mr-1">💡 Lights</span>
            <span className="bg-[#333] px-2 py-1 rounded">💎 Prisms</span>
          </div>

          <button className="w-full bg-yellow-500 text-black border-none p-3 font-bold rounded cursor-pointer uppercase hover:bg-[#e6c200] transition-colors">
            Order This Print
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
