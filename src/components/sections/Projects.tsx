"use client";
import Image from "next/image";
import React from "react";

export default function Projects() {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_4"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
      <div className='card glass w-96'>
        <figure>
          <Image
            src='/images/Prod.jpg'
            alt='car!'
            width={200}
            height={200}
            className='w-full'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className='card-actions justify-end'>
            <button className='btn' onClick={openModal}>
              open modal
            </button>
            <dialog id='my_modal_4' className='modal'>
              <div className='modal-box w-11/12 max-w-5xl'>
                {/* Content of the Modal */}
                <div className='mockup-code m-4 h-[500px] w-fit'>
                  <pre data-prefix='$'>
                    <code>npm i daisyui</code>
                  </pre>
                  <pre data-prefix='>' className='text-warning'>
                    <code>installing...</code>
                  </pre>
                  <pre data-prefix='>' className='text-success'>
                    <code>Done!</code>
                  </pre>
                </div>
                <div className='modal-action'>
                  <form method='dialog'>
                    <button className='btn'>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
