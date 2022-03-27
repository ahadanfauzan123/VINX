import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { productState } from '../../atom/productAtom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Templates() {
  const [product, setProduct] = useRecoilState(productState)
  const router = useRouter()
  let [categories] = useState({
    portofolio: [
      {
        id: 1,
        img: 'https://brasilnft.art.br/pytsycky/2021/10/Bored-Ape-8817-PNG.png',
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    shop: [
      {
        id: 1,
        img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        img: 'https://brasilnft.art.br/pytsycky/2021/10/Bored-Ape-8817-PNG.png',
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    blog: [
      {
        id: 1,
        img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
    main: [
      {
        id: 1,
        img: 'https://brasilnft.art.br/pytsycky/2021/10/Bored-Ape-8817-PNG.png',
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        img: 'https://brasilnft.art.br/pytsycky/2021/10/Bored-Ape-8817-PNG.png',
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
    resume: [
      {
        id: 1,
        img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
        title: 'ahadesign portofolio',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        img: 'https://blocktrends.com.br/wp-content/uploads/2021/12/bored-ape-8585.jpg',
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
  <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-barTheme justify-center items-center mx-auto rounded-full max-w-4xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-color rounded-full',
                  'focus:outline-none focus:ring-2 ring-offset-4 ring-offset-green-400 ring-green-300 ring-opacity-50',
                  selected
                    ? 'bg-green-400 shadow transition-all duration-150 ease-in'
                    : 'text-color hover:bg-white/[0.12] hover:text-gray-400'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-cardTheme rounded-xl p-3',
                'focus:outline-none focus:ring-0 ring-offset-0 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul className='flex flex-wrap'>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md space-y-2"
                  >
                    <div className=' flex w-[250px] h-[175px] bg-gray-500 rounded-xl'>
                      <img src={post.img} alt="" className='object-cover w-full h-full rounded-xl' />
                    </div>
                    <h3 className="text-sm font-medium leading-5 truncate w-[240px]">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-400">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>
                    {/* {() => setProduct(post.title)} */}

                    <a
                      href={`/SinggleProduct`}
                      type='button'
                      onClick={() => setProduct(post)}
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-0'
                      )}
                    />
                  </li>
                ))}
              </ul>
              {/*  */}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
  )
}
