import Mock from 'mockjs'   //引入Mock
let homeData=Mock.mock({
    "lunbo":[
        "./imgs/images1/swiper/swiper1.png",
        "./imgs/images1/swiper/swiper2.png",
        "./imgs/images1/swiper/swiper3.png",
        "./imgs/images1/swiper/swiper4.png",
    ],
    "cates":[
        "./imgs/images1/swiper/cate1.png",
        "./imgs/images1/swiper/cate2.png",
        "./imgs/images1/swiper/cate3.png",
        "./imgs/images1/swiper/cate4.png",
    ],
    "shops|10":[
        { 
            "id|+1":1,
            "title|1":[
                "Carina轻温暖连帽鹅绒服-女士短款",
                "Bella水晶绒系列柔暖家居拖鞋",
                "Ester高鹏硅玻璃便携水壶",
                "Karlson卡尔森智能声波震动牙刷"
            ],
            "price|1":[199,29.9,399,79.9,499],
            "color|2":["菊粉色","蓝灰色","紫色","粉色","浅蓝色"]
        }
    ],
    "images":"@image('200x100','#ccc')"

})

export default homeData;