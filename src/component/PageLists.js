import {AiOutlineCar,AiOutlineOrderedList} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'
import {FcAbout, FcContacts,FcNews} from 'react-icons/fc'

const LISTS = [
  {
    name: 'news',
    title: 'NewsApp',
    // component: (key) => <h2 key={key}>Contact us</h2>,
    path: '/news',
    icon: <FcNews  size={30} />,
    toolTip: 'Latest News'
  },
  {
    name: 'carslist',
    title: 'Cars List',
    // component: (key) => <CarsList key={key} />,
    path: '/cars',
    icon: <AiOutlineCar  size={30} />,
    toolTip: 'Display/Add/Edit/Delete Cars'
  },
  {
    name: 'bilinglist',
    title: 'Billing List',
    // component: (key) => <BillingList key={key} />,
    path: '/billing',
    icon: <RiBillLine  size={30} />,
    toolTip: 'Display/Add/Edit/Delete Billing for Restaurant'
  },
  {
    name: 'todolist',
    title: 'Todo List',
    // component: (key) => <h2 key={key}>Not yet created</h2>,
    path: '/todo',
    icon: <AiOutlineOrderedList  size={30} />,
    toolTip: 'Display/Add/Complete Todo Lists'
  },
  {
    name: 'about',
    title: 'About',
    // component: (key) => <h2 key={key}>About Me Page</h2>,
    path: '/about',
    icon: <FcAbout  size={30} />,
    toolTip: 'About me'
  },
  {
    name: 'contact',
    title: 'Get in touch',
    // component: (key) => <h2 key={key}>Contact us</h2>,
    path: '/contact',
    icon: <FcContacts  size={30} />,
    toolTip: 'Get in touch with me'
  },
]

export default LISTS