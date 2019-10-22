import Mock from 'mockjs'  //引入Mock
import Home from './homeData'
import List from './listData'

Mock.mock('http://www.abs.com/home','get',Home)  //首页数据
Mock.mock('http://www.abs.com/list','get',List)  //list商品数据

export default Mock;