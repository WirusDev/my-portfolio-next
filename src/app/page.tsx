import Image from "next/image";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
const HomePage = () => {
  return (
    <div>
      <main className='p-4'>
        <div role='tablist' className='tabs tabs-lifted tabs-lg'>
          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab'
            aria-label='Projects'
            defaultChecked
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-base-300 rounded-box p-6 '
          >
            <Projects />
          </div>

          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab'
            aria-label='Timeline'
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-base-300 rounded-box p-6'
          >
            <Timeline />
          </div>

          <input
            type='radio'
            name='my_tabs_2'
            role='tab'
            className='tab'
            aria-label='Blog'
          />
          <div
            role='tabpanel'
            className='tab-content bg-base-100 border-base-300 rounded-box p-6'
          >
            Tab content 3
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
