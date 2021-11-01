/* This example requires Tailwind CSS v2.0+ */
import { Fragment, Component } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  XIcon,
} from '@heroicons/react/outline'
import logo from '../image/logo.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

class Example extends Component {
  render() {
    return (
      <Popover className="relative bg-red-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <div className="flex justify-start items-center lg:w-0 lg:flex-1 justify-center h-20">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-16"
                      src={logo}
                      alt=""
                      onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode();
                      }.bind(this)}
                    />
                  </a>
                </div>
                <form action="/" method="get" className="ml-8 my-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-white rounded-md shadow-sm text-base font-medium bg-white">
                  <input
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="s"
                    className="ml-20 inline-flex items-center justify-center px-20 "
                  />
                  <button type="submit" className="inline-flex items-center justify-center px-3">검색</button>
                </form>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900">
                    로그인
                  </a>
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-white rounded-xl shadow-sm text-base font-medium text-white hover:bg-black"
                  >
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
    );
  }
}

export default Example;
