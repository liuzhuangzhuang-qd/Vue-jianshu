import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id: 2,
        title: '手绘',
        imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }],
    articleList: [{
        id: 1,
        title: '入秋后这样吃莲藕，健康又减脂',
        imgUrl: '//upload-images.jianshu.io/upload_images/12095765-8572c9fdd523606b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        desc: 'asjlkfjdafjkldajsf分解力卡司机灯笼裤罚款两大军阀'
    },{
        id: 2,
        title: '读了100本书后，我才悟出这个道理',
        imgUrl: '//upload-images.jianshu.io/upload_images/8952867-2e0d338f54716f90?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        desc: 'asjlkfjdafjkldajsf分解力卡司机灯笼裤罚款两大军阀'
    },{
        id: 3,
        title: '入秋后这样吃莲藕，健康又减脂',
        imgUrl: '//upload-images.jianshu.io/upload_images/12095765-8572c9fdd523606b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        desc: 'asjlkfjdafjkldajsf分解力卡司机灯笼裤罚款两大军阀'
    },{
        id: 4,
        title: '读了100本书后，我才悟出这个道理',
        imgUrl: '//upload-images.jianshu.io/upload_images/8952867-2e0d338f54716f90?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        desc: 'asjlkfjdafjkldajsf分解力卡司机灯笼裤罚款两大军阀'
    }],
    picList: [{
        id: 1,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },{
        id: 2,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },{
        id: 3,
        imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id: 4,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id: 5,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}