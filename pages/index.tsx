import type { NextPage } from 'next'
import Link from 'next/link'
import Heading from '../components/heading'

interface ButtonLinkProp {
  title: string
  link: string
}

const ButtonLink: React.FC<ButtonLinkProp> = ({ title, link }) => (
  <Link href={link}>
    <a className='mx-auto'>
      <button className='bg-blue-500 w-28 rounded-md p-1 text-white hover:bg-blue-700 font-bold'>
        {title}
      </button>
    </a>
  </Link>
)
const Home: NextPage = () => {
  return (
    <div className='flex flex-col min-h-[90vh] text-gray-700 pb-3'>
      <p className='bg-zinc-100 rounded-md p-2 text-center m-5'>
        你好， 我主要从事软件开发和算法设计。
      </p>
      <h3 className='md:text-xl m-4 text-left'>
        Bruce -- (Python开发 / AI算法 / 上位机开发 / 视觉应用 / Qt开发 / C++开发
        / 通信开发 / APP开发)
      </h3>
      <Heading title={'作品'} />
      <p className='m-4'>
        Bruce是一个软件开发人员，主要从事应用软件开发，AI人工智能软件开发，工业软件开发，通信软件开发，web前后端以及APP开发等等,
        主要使用PYTHON, JAVASCRIPT, TYPESCRIPT, C++, C#, GO。
      </p>
      <ButtonLink link={'/work'} title={'作品'} />
      <Heading title={'内容'} />
      <div className='m-4 ml-5'>
        <p>
          <strong className='pr-10'>AI算法设计:</strong>
          使用Python以及Numpy, Scipy, Pandas,
          Scikit-learn，pytorch做数据分析，数据建模，机器学习，深度学习。
        </p>
        <p>
          <strong className='pr-3'>桌面开发:</strong>上位机开发, 工业软件开发,
          通信软件开发, socket通信, 图像处理，qt, opencv等等
        </p>
        <p>
          <strong className='pr-3'>web开发:</strong>
          前端Reactjs, ReactNative, 后端FastAPI, Django开发，Flask,
          Openstack二次开发等待
        </p>
        <p>
          <strong className='pr-4'>APP开发:</strong>使用ReactNative开发跨平台APP
        </p>
      </div>
      <Heading title={'我 ♥'} />
      <p className='m-4 ml-10'>
        写程序，读闲书，看无聊电视剧, 跑步, 打篮球, 设计算法。
      </p>
      <Heading title={'其他链接'} />
      <p className='my-4 ml-10 text-sm'>
        <a href='https://github.com/bruceunx'>@github</a>
      </p>
      <p className='ml-10 text-sm'>
        <a href='https://blog.csdn.net/bruceunx'>@csdn</a>
      </p>
      <ButtonLink link={'/blog'} title={'最新博客'} />
    </div>
  )
}

export default Home
