var webpack = require("webpack");

module.exports={
    //엔트리:묶어줄 모듈들이 있는 루트를 명시해준다.
    entry:'./src/index.js',
    //output은 그렇게 묶어준 모듈들을 path에 filename으로 저장한다.
    output:{
        path:__dirname+'/public',
        filename:'bundle.js'
    },
    devServer:{
        //hot : 코드가 수정될때마다 리로딩 
        hot:true,
        //inline : webpack-dev-server모듈을 같은 output에 넣어주겠냐?
        inline:true,
        //리로딩 될때 필요한 ip주소
        host:'0.0.0.0',
        port:3000,
        //인덱스파일 위치
        contentBase:__dirname+'/public/',
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    cacheDirectory:true,
                    //리엑트 문법을 자바스크립트 문법으로 변환해준다(웹브라우저가 읽을수있도록?)
                    presets:['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },

    //페이지 리로딩을 여기서 설정해준다.
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}