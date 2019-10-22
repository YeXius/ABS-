import Mock from 'mockjs'  //引入Mock
import Home from './homeData'

Mock.mock('http://www.abs.com/home','get',Home)

export default Mock;