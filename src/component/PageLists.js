import {AiOutlineCar,AiOutlineOrderedList} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'
import {FcAbout, FcContacts} from 'react-icons/fc'

const LISTS = [{
    name: 'carslist',
    title: 'Cars List',
    // component: (key) => <CarsList key={key} />,
    path: '/cars',
    icon: <AiOutlineCar  size={30} />
  },
  {
    name: 'bilinglist',
    title: 'Billing List',
    // component: (key) => <BillingList key={key} />,
    path: '/billing',
    icon: <RiBillLine  size={30} />
  },
  {
    name: 'todolist',
    title: 'Todo List',
    // component: (key) => <h2 key={key}>Not yet created</h2>,
    path: '/todo',
    icon: <AiOutlineOrderedList  size={30} />
  },
  {
    name: 'about',
    title: 'About',
    // component: (key) => <h2 key={key}>About Me Page</h2>,
    path: '/about',
    icon: <FcAbout  size={30} />
  },
  {
    name: 'contact',
    title: 'Contact Us',
    // component: (key) => <h2 key={key}>Contact us</h2>,
    path: '/contact',
    icon: <FcContacts  size={30} />
  },
]

export default LISTS