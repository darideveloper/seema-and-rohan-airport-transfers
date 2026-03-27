import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="question border border-gold rounded-lg mb-4 overflow-hidden bg-white shadow-sm transition-all duration-300">
      <div 
        className="title flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold uppercase text-black">
          {question}
        </h3>
        <svg 
          className={clsx(
            "w-6 h-6 fill-black transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
          clipRule="evenodd" 
          fillRule="evenodd" 
          strokeLinejoin="round" 
          strokeMiterlimit="2" 
          viewBox="0 0 24 24"
        >
          <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/>
        </svg>
      </div>
      <div 
        className={clsx(
          "answer-wrapper transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-100 p-5 pt-0" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="text-black text-lg leading-relaxed">
          {answer}
        </div>
      </div>
    </article>
  )
}

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
}
