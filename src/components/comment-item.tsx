"use client";

import { Comment } from '@/lib/definitions';
import React, { useState, useEffect, useRef } from 'react';
import SmallModal from './ui/modal';

export default function CommentItem({
  comments,
}: {
  comments: Comment[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dropdownButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleDeleteClick = (commentId: string) => {
    setSelectedCommentId(commentId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCommentId(null);
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isClickInsideDropdown = dropdownRefs.current.some(
      (ref) => ref && ref.contains(event.target as Node)
    );

    if (!isClickInsideDropdown) {
      setOpenDropdownId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {comments.map((comment, index) => (
        <div key={comment.id} className="p-6 text-base bg-white border-t border-gray-200">
          <div>
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                  {comment.name}
                </p>
                <p className="text-sm text-gray-600">{new Date(comment.date).toLocaleString()}</p>
              </div>
              <div
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[index] = el;
                }}
              >
                <button
                  id={`dropdownCommentButton-${comment.id}`}
                  ref={(el) => {
                    dropdownButtonRefs.current[index] = el;
                  }}
                  onClick={() => toggleDropdown(`dropdownComment-${comment.id}`)}
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                <div
                  id={`dropdownComment-${comment.id}`}
                  className={`${
                    openDropdownId === `dropdownComment-${comment.id}` ? 'block' : 'hidden'
                  } absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow`}
                >
                  <ul
                    className="py-1 text-sm text-gray-700"
                    aria-labelledby={`dropdownCommentButton-${comment.id}`}
                  >
                    {/* <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        수정
                      </a>
                    </li> */}
                    <li onClick={() => handleDeleteClick(comment.id)} className="hover:bg-gray-100 cursor-pointer">
                      <span
                        className="block py-2 px-4"
                      >
                        
                        삭제
                      </span>
                      {isModalOpen && selectedCommentId === comment.id && (
                        <SmallModal commentId={comment.id} password={comment.password} onClose={handleCloseModal} />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
            <p className="text-gray-600" style={{ whiteSpace: 'pre-wrap' }}>{comment.message}</p>
          </div>
        </div>
      ))}
    </>
  );
}