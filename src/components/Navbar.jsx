import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div class="flex items-center justify-between relative bg-slate-800">
                <div class="px-4">
                    <a href="#Home" class="text-lg font-bold text-orange-500 block py-6 md:px-12">sandypratama</a>
                </div>
                <div class="flex items-center justify-between px-4">
                    <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
                        <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                    <nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul class="block lg:flex ">
                            <li class="group">
                                <a href="#Home" class="text-base text-slate-300 py-2 mx-8 flex  group-hover:text-orange-500">Beranda</a>
                            </li>
                            <li class="group">
                                <a href="#About" class="text-base text-slate-300 py-2 mx-8 flex  group-hover:text-orange-500">About</a>
                            </li>
                            <li class="group">
                                <a href="#Projects" class="text-base text-slate-300 py-2 mx-8 flex  group-hover:text-orange-500">Portfolio</a>
                            </li>
                            <li class="group">
                                <a href="#Client" class="text-base text-slate-300 py-2 mx-8 flex  group-hover:text-orange-500">Client</a>
                            </li>
                            <li class="group">
                                <a href="#Contact" class="text-base text-slate-300 py-2 mx-8 flex group-hover:text-orange-500">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

    </div>
  )
}

export default Navbar