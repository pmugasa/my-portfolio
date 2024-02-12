import { useState } from 'react'
import { Github, Twitter } from 'lucide-react'
import emailJs from '@emailjs/browser'
//components
import Card from './components/Card'

//initialize emailJS
emailJs.init(import.meta.env.VITE_PUBLIC_KEY)

const App = () => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const DATA = [
    {
      title: 'Authentication App',
      src: 'https://vercel.com/pmugasa/authentication-app-frontend/deployments?filterBranch=main',
      demo: 'https://authentication-app-frontend-six.vercel.app/',
      tech: ['react', 'firebase'],
      img: '/assets/auth.png',
    },
    {
      title: 'Image uploader',
      src: 'https://github.com/pmugasa/image-uploader-backend',
      demo: 'https://image-uploader-ub2f.onrender.com/',
      tech: ['react', 'express-js', 'mongodb'],
      img: '/assets/image-uploader.png',
    },
    {
      title: 'My Unsplash',
      src: 'https://github.com/pmugasa/my-unsplash-backend/tree/main',
      demo: 'https://my-unsplash-3mwb.onrender.com/',
      tech: ['react', 'express-js', 'mongodb'],
      img: '/assets/my-unsplash.png',
    },
    {
      title: 'World Countries',
      src: 'https://github.com/pmugasa/world-countries/tree/main',
      demo: 'https://world-countries-blush.vercel.app/',
      tech: ['react', 'tailwindcss'],
      img: '/assets/world-countries.png',
    },
    {
      title: 'DealDash eCommerce',
      src: 'https://github.com/pmugasa/deal-dash',
      demo: 'https://deal-dash.vercel.app',
      tech: ['react', 'firebase', 'tailwindcss'],
      img: '/assets/dealdash.png',
    },

    {
      title: 'Fiber Landing Page',
      src: 'https://github.com/pmugasa/fiber-landing-page',
      demo: 'https://fiber-landing-page-olive.vercel.app/',
      tech: ['react', 'tailwindcss'],
      img: '/assets/Fiber.png',
    },
  ]
  const technologies = [
    { name: 'HTML', img: '/assets/icons8-html.svg' },
    { name: 'CSS', img: '/assets/icons8-css.svg' },
    { name: 'Javascript', img: '/assets/icons8-javascript.svg' },
    { name: 'Tailwindcss', img: '/assets/icons8-tailwindcss.svg' },
    { name: 'React', img: '/assets/icons8-react.svg' },
    { name: 'Firebase', img: '/assets/icons8-firebase.svg' },
    { name: 'Node Js', img: '/assets/icons8-node-js.svg' },
    { name: 'Git', img: '/assets/icons8-git.svg' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await emailJs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          email: email,
          message: msg,
        }
      )

      setEmail('')
      setMsg('')
      setIsLoading(false)
    } catch (error) {
      alert('ERROR:', error)
    }
  }
  return (
    <>
      <div className='w-full '>
        <header>
          <nav className='sm:mx-12 p-6 text-white border-b-gray-600'>
            <div className='flex font-bold w-full p-2 '>
              <div className='space-x-8 '>
                <a
                  href='#projects'
                  className='hover:cursor-pointer hover:text-blue-500'
                >
                  projects
                </a>
                <a
                  href='#contact'
                  className='hover:cursor-pointer hover:text-blue-500'
                >
                  contact
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className=' text-white'>
          {/*hero section*/}
          <section className='text-center h-72 sm:h-[500px]  flex flex-col items-center justify-center'>
            <h1 className='font-extrabold text-3xl sm:text-4xl'>
              Hi, I'm <span className='text-blue-400'>Pete</span>
            </h1>
            <p className='font-normal my-4 text-sm sm:text-lg'>
              Self-taught Fullstack Developer
            </p>
          </section>
          {/*technologies*/}
          <section
            id='projects'
            className=' flex flex-col items-center justify-center pt-8 sm:mt-20 sm:mb-8 sm:h-40'
          >
            <h2 className='font-bold text-3xl text-center mb-8 sm:mb-20'>
              Technologies 👨🏾‍💻
            </h2>
            <img src='' />
            <div className=' flex items-center justify-center'>
              {technologies.map((t) => {
                return (
                  <div key={t.name} className='group'>
                    <img
                      src={t.img}
                      className='h-10 w-10 hover:h-20 hover:w-20 hover:cursor-pointer'
                    />
                    <p className='hidden group-hover:block text-center text-xs font-bold'>
                      {t.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/*projects*/}
          <section
            id='projects'
            className=' flex flex-col items-center justify-center mt-24 sm:mt-0 lg:mt-32 sm:h-screen'
          >
            <h2 className='font-bold text-3xl text-center pb-8'>Projects ⚒️</h2>
            <div className='pt-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-2  lg:grid-cols-3 lg:gap-4'>
              {/*card*/}
              {DATA.map((project) => (
                <Card key={project.title} project={project} />
              ))}
            </div>
          </section>

          {/*contact form*/}
          <section
            id='contact'
            className='sm:h-[500px] flex flex-col items-center justify-center mt-24  mb-10 sm:mt-0'
          >
            <h2 className='font-bold text-3xl text-center pb-8'>
              Get in touch 📞
            </h2>
            <div className='w-full mt-8 flex items-center justify-center'>
              <div className='my-2  h-80 w-80 p-4 border border-gray-600 bg-gray-700  rounded-md flex flex-col'>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor='email' className='text-sm'>
                      Email
                    </label>
                    <input
                      required
                      value={email}
                      type='text'
                      id='email'
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='name@example.com'
                      className='w-full focus:outline-none bg-gray-600 h-10 p-4 text-sm rounded-md border border-gray-500 focus:border focus:border-blue-500'
                    />
                  </div>
                  <div className='h-32 mt-2'>
                    <label htmlFor='msg' className='text-sm'>
                      Message
                    </label>
                    <textarea
                      id='msg'
                      value={msg}
                      required
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder='Your message here...'
                      className='w-full h-full focus:outline-none bg-gray-600 p-4 text-sm rounded-md border border-gray-500 focus:border focus:border-blue-500 resize-none'
                    ></textarea>
                  </div>
                  {isLoading === true ? (
                    <button
                      disabled
                      type='button'
                      className='w-full mt-10 rounded-md py-1.5 border border-gray-600 text-blue-500 font-bold text-sm hover:border-2'
                    >
                      <svg
                        aria-hidden='true'
                        role='status'
                        className='inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600'
                        viewBox='0 0 100 101'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                          fill='currentColor'
                        />
                        <path
                          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                          fill='#1C64F2'
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      type='submit'
                      className='w-full mt-10 rounded-md py-1.5 border border-blue-500 text-blue-500 font-bold text-sm hover:border-2'
                    >
                      Submit
                    </button>
                  )}
                </form>
              </div>
            </div>
          </section>
        </main>{' '}
      </div>
      <footer className='w-full flex items-center justify-center p-4'>
        <div className=' font-bold text-white space-x-4'>
          <p>Made with ❤️ by Pete</p>
          <div className='flex items-center justify-center space-x-4 pt-4'>
            <a
              className='hover:cursor-pointer'
              href='https://twitter.com/pete_zw'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Twitter color='#ffffff' absoluteStrokeWidth />
            </a>
            <a
              href='https://github.com/pmugasa'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:cursor-pointer'
            >
              <Github color='#ffffff' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
