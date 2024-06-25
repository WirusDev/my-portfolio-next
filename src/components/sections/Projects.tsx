"use client";
export default function Projects() {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
      <div className='card glass w-96'>
        <figure>
          <img
            src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            alt='car!'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className='card-actions justify-end'>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className='btn'
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              open modal
            </button>
            <dialog id='my_modal_4' className='modal'>
              <div className='modal-box w-11/12 max-w-5xl'>
                {/* . Content of the Modal . */}
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
                    {/* if there is a button, it will close the modal */}
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
