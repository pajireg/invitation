'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { deleteComment } from '@/lib/actions';

interface SmallModalProps {
  commentId: string;
  password: string;
  onClose: () => void;
}

const SmallModal: React.FC<SmallModalProps> = ({ commentId, password, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(true)

  const handleSubmit = async () => {
    if (password === inputValue) {
      await deleteComment(commentId);
      setOpen(false);
      onClose();
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <Dialog open={open} onClose={() => { setOpen(false); onClose(); }} className="fixed inset-0 z-10 overflow-y-auto">
      <DialogBackdrop className="fixed inset-0 bg-gray-600 bg-opacity-15 transition-opacity" />
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
          <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  정말 삭제하시겠습니까?
                </DialogTitle>
                <div className="mt-2">
                <div className="relative my-6">
                    <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium"> 비밀번호 <svg width="7"
                            height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                fill="#EF4444" />
                        </svg>
                    </label>
                    <input type="text" id="password" name="password" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                        className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal border border-gray-300 rounded-lg rounded-t-lg placeholder-gray-400 focus:outline-none "
                        placeholder="비밀번호" required />
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <form>
              <button
                type="button"
                onClick={() => { handleSubmit(); }}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                삭제
              </button>
            </form>
            <button
              type="button"
              data-autofocus
              onClick={() => { setOpen(false); onClose(); }}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              취소
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default SmallModal;