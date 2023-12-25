import React from 'react'

export default function HeaderSearch() {
  return (
      <div className='search-image'>
          <input type="search" placeholder='Ürün adı veya SKU girin' className='search-i' />
          <span className='search-img'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <g fill="none" fill-rule="evenodd">
                      <circle cx="9" cy="9" r="8" fill="#FFF" />
                      <path fill="#490E6F" d="M8.821 17.677c2.107 0 4.03-.739 5.556-1.978l4.03 4.037a.914.914 0 0 0 .658.264.924.924 0 0 0 .658-1.583l-4.055-4.012a8.804 8.804 0 0 0 1.975-5.566C17.643 3.958 13.693 0 8.82 0 3.95 0 0 3.958 0 8.839c0 4.88 3.95 8.838 8.821 8.838zm0-15.83c3.844 0 6.978 3.14 6.978 6.992 0 3.851-3.134 6.992-6.978 6.992s-6.978-3.14-6.978-6.992 3.134-6.992 6.978-6.992z" />
                  </g>
              </svg>
          </span>
      </div>
  )
}
