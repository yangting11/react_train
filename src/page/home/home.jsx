import React from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
 
// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/parallel';
import 'echarts/lib/component/singleAxis';
import 'echarts/lib/component/brush';
 
import 'echarts/lib/component/title';
 
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';
 
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
 
import 'echarts/lib/component/timeline';
import 'echarts/lib/component/toolbox';
 
import 'zrender/lib/vml/vml';
class Home extends React.Component{
    state={
        data: ['Sunny', 'Cloudy', 'Showers'],
    }
    componentWillMount(){
        if(localStorage.getItem('username')!="yangting11"){
            window.location.href="/"
        }
    }
    getOption(){
        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56'
                    }
                }
            },
            grid:{
              y2:80,
              y:80
            },
            xAxis: [
                {
                    axisLine:{
                        show:false,
                    },
                    splitLine:{
                        show:false
                    },
                    axisTick:{
                        show:false
                    },
                    type: 'category',
                    boundaryGap: true,
                    axisLabel:{
                        interval:0,  //确保横坐标的刻度数据都会显示
                        formatter: function (value,index) {
                            // return 'yt' + '\n{warnValue|}'; 
                            return '{value1|yt}'+'\n{'+ value.split(',')[0] +'|}'+'\n你好'
                            return '{' + value.split(',')[0] + '| }\n{value|' + value.split(',')[0] + '}'
                        },   
                        rich: {
                            //这里的rich，下面有解释
                            value1: {
                                height:15,
                                // lineHeight: 20,
                                align: 'center'
                            },
                            sunny: {
                            //这里的warnValue对应上面的标签名
                                height: 15,
                                lineHeight:20,
                                align: 'center',
                                backgroundColor: {
                                    image: 
                                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg'  	//这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                                }
                            },
                            Cloudy: {
                                //这里的warnValue对应上面的标签名
                                    height: 10,
                                    align: 'center',
                                    backgroundColor: {
                                        image: 
                                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg'  	//这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                                    }
                                },
                                Showers: {
                                    //这里的warnValue对应上面的标签名
                                        height: 10,
                                        align: 'center',
                                        backgroundColor: {
                                            image: 
                                            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg'  	//这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                                        }
                                    },
                        }
                  
                    },     
                    
                    data: [ 'sunny,1,2', 'sunny,2,3', 'sunny,3,4','sunny,4,5' ,'sunny,4,5']
                },
                {
                    axisLine:{
                        show:false,
                    },
                    splitLine:{
                        show:false
                    },
                    axisTick:{
                        show:false
                    },
                    type: 'category',
                    boundaryGap: true,
                    axisLabel:{
                        interval:0,
                        formatter: function (value,index) {
                            // return 'yt' + '\n{warnValue|}'; 
                            return 'yt'+'\n{'+ value.split(',')[0] +'|}'+'\n你好'
                        },   
                        rich: {
                            //这里的rich，下面有解释
                            sunny: {
                            //这里的warnValue对应上面的标签名
                                height: 10,
                                align: 'center',
                                backgroundColor: {
                                    image: 
                                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg'  	//这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                                }
                            },
                            Cloudy: {
                                //这里的warnValue对应上面的标签名
                                    height: 10,
                                    align: 'center',
                                    backgroundColor: {
                                        image: 
                                        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg'  	//这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                                    }
                                },
                                Showers: {
                                    //这里的warnValue对应上面的标签名
                                        height: 10,
                                        align: 'center',
                                        backgroundColor: {
                                            image: 
                                            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg'  	//这个warnImg是上面定义的图片var warnImg = "img/warn.png";
                                        }
                                    },
                        }
                  
                    },     
                    
                    data: [ 'sunny,1,2', 'sunny,2,3', 'sunny,3,4','sunny,4,5','sunny,4,5'  ]
                }
            ],
            yAxis: [
                {
                    show:false,
                    type: 'value',
                    scale: true,
                    name: '价格',
                    max: 30,
                    min: 0,
                    boundaryGap: [0, 0]
                },
                {
                    show:false,
                    type: 'value',
                    scale: true,
                    name: '预购量',
                    max: 1200,
                    min: 0,
                    boundaryGap: [0, 0]
                }
            ],
            series: [
                {
                    name:'最高气温',
                    color:'orange',
                    type:'line',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data:(function (){
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push(Math.round(Math.random() * 1000));
                        }
                        return res;
                    })()
                },
                {
                    name:'最低气温',
                    type:'line',
                    color:'#2196F3',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data:(function (){
                        var res = [];
                        var len = 0;
                        while (len < 10) {
                            res.push((Math.random()*10 + 5).toFixed(1) - 0);
                            len++;
                        }
                        return res;
                    })()
                }
            ]
        };
        
        return option        
    }
    render(){
        return(
            // rgba(50,82,119,0.8)
            <div>
                <ReactEchartsCore
                echarts={echarts}
                style={{width:'480px',height:'300px'}}
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
                />

            </div>
        )
    }
}
export default Home