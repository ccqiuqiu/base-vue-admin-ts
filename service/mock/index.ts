/**
 * Created by 熊超超 on 2018/9/26.
 */
import * as Mock from 'mockjs'

export const searchFlight = Mock.mock({
  data: [
    {
      "baseInfo":{
        "singleOrNot":"1",
        "returnType":"",
        "airline":"GY",
        "flightNo":"GY7134",
        "plane":"190",
        "planeType":"B",
        "modelSize":"小型机",
        "meal":"",
        "depDate":"2018-10-09",
        "arrDate":"2018-10-09",
        "tripType":"false",
        "duration":"40分钟",
        "lowest":"",
        "currency":"CNY",
        "changeStop":0,
        "changeStopInfo":""
      },
      "departAirPort":{
        "time":"15:30",
        "code":"WMT",
        "airCn":"茅台",
        "cityCn":"遵义",
        "terminal":""
      },
      "arriveAirPort":{
        "time":"16:10",
        "code":"KWE",
        "airCn":"龙洞堡",
        "cityCn":"贵阳",
        "terminal":"T1"
      },
      "uuidToken":"90cf321b-541c-4765-b56c-7c1b590925cd",
      "cabinInfo":[
        {
          "name":"抄底价",
          "cabin":"D",
          "discount":"1.0折",
          "totalPrice":"110.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"不可退改",
          "status":"A",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1、手提+托运行李总额总计20KG。\n2、手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3、托运行李每件尺寸不超过40X60X100厘米。\n4、超尺寸和超重的行李均需额外付逾重行李费。\n5、逾重费是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6、婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>不允许自愿变更</li><li>不允许自愿退票。退票仅退税费。</li><li>不允许自愿签转</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"100%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"100%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"100%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"100%"
            }
          ],
          "floatFlag":false
        },
        {
          "name":"自由飞",
          "cabin":"Z",
          "discount":"4.0折",
          "totalPrice":"430.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"退改费高",
          "status":"A",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1、手提+托运行李总额总计20KG。\n2、手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3、托运行李每件尺寸不超过40X60X100厘米。\n4、超尺寸和超重的行李均需额外付逾重行李费。\n5、逾重费是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6、婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>允许自愿变更。 航班离站时间前8小时(含)之前变更，每次收取各舱位对应票价30%变更费； 航班离站时间前8小时（不含）之后变更，每次收取各舱位对应票价50%变更费。</li><li>允许自愿退票。 航班离站时间前8小时（含）之前提出，按各舱位对应票价收取50%退票费； 航班离站时间前8小时（不含）之后提出，按各舱位对应票价收取100%退票费(即不得退票)。</li><li>不允许自愿签转</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"50%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"100%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"30%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"50%"
            }
          ],
          "floatFlag":false
        },
        {
          "name":"舒适行",
          "cabin":"W",
          "discount":"全价",
          "totalPrice":"1070.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"退改费低",
          "status":"3",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1.手提+托运行李总额总计20KG。\n2.手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3.托运行李每件尺寸不超过40x60x100厘米。\n4.超尺寸和超重的行李均需额外付逾重行李费。\n5.逾重费率是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6.婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>允许自愿变更。 航班起飞前2（含）小时之前变更不收取变更费； 航班起飞前2小时（不含）之后变更，收取舱位对应公布价的5%作为变更费。</li><li>允许自愿退票。 航班起飞前2小时（含）之前，收取舱位对应公布价的5%作为退票手续费； 航班起飞前2小时（不含）之后，收取舱位对应公布价的10%作为退票手续费。</li><li>不允许自愿签转</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前2小时（含）之前",
              "rate":"5%"
            },
            {
              "time":"离站前2小时（不含）之后",
              "rate":"10%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前2小时（含）之前",
              "rate":"免费"
            },
            {
              "time":"离站前2小时（不含）之后",
              "rate":"5%"
            }
          ],
          "floatFlag":false
        },
        {
          "name":"标准经济舱",
          "cabin":"Y",
          "discount":"全价",
          "totalPrice":"1070.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"退改费低",
          "status":"A",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1、手提+托运行李总额总计20KG。\n2、手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3、托运行李每件尺寸不超过40X60X100厘米。\n4、超尺寸和超重的行李均需额外付逾重行李费。\n5、逾重费是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6、婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>允许自愿变更。 在航班离站时间前8小时(含)之前或航班离站时间前8小时（不含）之后每次变更均收取各舱位对应票价5%变更费。</li><li>允许自愿退票。 航班离站时间前8小时（含）之前提出，按各舱位对应票价收取5%退票费； 航班离站时间前8小时（不含）之后提出，按各舱位对应票价收取10%退票费。</li><li>允许自愿签转。</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"5%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"10%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"5%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"5%"
            }
          ],
          "floatFlag":false
        }
      ],
      "coupQueryFligOutList":[
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"25",
            "Q":"25",
            "B":"25",
            "D":"25",
            "U":"25",
            "E":"25",
            "H":"25",
            "Z":"25",
            "L":"25"
          },
          "coupName":"返抵用券￥25"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"25",
            "Q":"25",
            "B":"25",
            "D":"25",
            "U":"25",
            "E":"25",
            "H":"25",
            "Z":"25",
            "L":"25"
          },
          "coupName":"返抵用券￥25"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        }
      ]
    },
    {
      "baseInfo":{
        "singleOrNot":"1",
        "returnType":"",
        "airline":"GY",
        "flightNo":"GY7144",
        "plane":"190",
        "planeType":"B",
        "modelSize":"小型机",
        "meal":"矿泉水",
        "depDate":"2018-10-09",
        "arrDate":"2018-10-09",
        "tripType":"false",
        "duration":"35分钟",
        "lowest":"",
        "currency":"CNY",
        "changeStop":0,
        "changeStopInfo":""
      },
      "departAirPort":{
        "time":"22:20",
        "code":"WMT",
        "airCn":"茅台",
        "cityCn":"遵义",
        "terminal":""
      },
      "arriveAirPort":{
        "time":"22:55",
        "code":"KWE",
        "airCn":"龙洞堡",
        "cityCn":"贵阳",
        "terminal":"T1"
      },
      "uuidToken":"90cf321b-541c-4765-b56c-7c1b590925cd",
      "cabinInfo":[
        {
          "name":"抄底价",
          "cabin":"D",
          "discount":"1.0折",
          "totalPrice":"110.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"不可退改",
          "status":"A",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1、手提+托运行李总额总计20KG。\n2、手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3、托运行李每件尺寸不超过40X60X100厘米。\n4、超尺寸和超重的行李均需额外付逾重行李费。\n5、逾重费是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6、婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>不允许自愿变更</li><li>不允许自愿退票。退票仅退税费。</li><li>不允许自愿签转</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"100%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"100%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"100%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"100%"
            }
          ],
          "floatFlag":false
        },
        {
          "name":"自由飞",
          "cabin":"Z",
          "discount":"4.0折",
          "totalPrice":"430.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"退改费高",
          "status":"A",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1、手提+托运行李总额总计20KG。\n2、手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3、托运行李每件尺寸不超过40X60X100厘米。\n4、超尺寸和超重的行李均需额外付逾重行李费。\n5、逾重费是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6、婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>允许自愿变更。 航班离站时间前8小时(含)之前变更，每次收取各舱位对应票价30%变更费； 航班离站时间前8小时（不含）之后变更，每次收取各舱位对应票价50%变更费。</li><li>允许自愿退票。 航班离站时间前8小时（含）之前提出，按各舱位对应票价收取50%退票费； 航班离站时间前8小时（不含）之后提出，按各舱位对应票价收取100%退票费(即不得退票)。</li><li>不允许自愿签转</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"50%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"100%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"30%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"50%"
            }
          ],
          "floatFlag":false
        },
        {
          "name":"舒适行",
          "cabin":"W",
          "discount":"全价",
          "totalPrice":"1070.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"退改费低",
          "status":"3",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1.手提+托运行李总额总计20KG。\n2.手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3.托运行李每件尺寸不超过40x60x100厘米。\n4.超尺寸和超重的行李均需额外付逾重行李费。\n5.逾重费率是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6.婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>允许自愿变更。 航班起飞前2（含）小时之前变更不收取变更费； 航班起飞前2小时（不含）之后变更，收取舱位对应公布价的5%作为变更费。</li><li>允许自愿退票。 航班起飞前2小时（含）之前，收取舱位对应公布价的5%作为退票手续费； 航班起飞前2小时（不含）之后，收取舱位对应公布价的10%作为退票手续费。</li><li>不允许自愿签转</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前2小时（含）之前",
              "rate":"5%"
            },
            {
              "time":"离站前2小时（不含）之后",
              "rate":"10%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前2小时（含）之前",
              "rate":"免费"
            },
            {
              "time":"离站前2小时（不含）之后",
              "rate":"5%"
            }
          ],
          "floatFlag":false
        },
        {
          "name":"标准经济舱",
          "cabin":"Y",
          "discount":"全价",
          "totalPrice":"1070.0",
          "currency":"CNY",
          "baggageQuota":"免费行李总额20KG",
          "refundChangemessage":"退改费低",
          "status":"A",
          "phyPrice":"1070.0",
          "baggageInfo":{
            "title":"行李限额规定",
            "content":"1、手提+托运行李总额总计20KG。\n2、手提行李限1件，每件总量不超过5公斤，尺寸不超过20x40x55厘米。\n3、托运行李每件尺寸不超过40X60X100厘米。\n4、超尺寸和超重的行李均需额外付逾重行李费。\n5、逾重费是以每公斤按旅行当日所乘航段经济舱公布票价的1.5%计算，以人民币元为单位，尾数四舍五入。\n6、婴儿票无免费行李额。"
          },
          "changeRefundInfo":{
            "title":"改期和退票规定",
            "content":"<ol><li>允许自愿变更。 在航班离站时间前8小时(含)之前或航班离站时间前8小时（不含）之后每次变更均收取各舱位对应票价5%变更费。</li><li>允许自愿退票。 航班离站时间前8小时（含）之前提出，按各舱位对应票价收取5%退票费； 航班离站时间前8小时（不含）之后提出，按各舱位对应票价收取10%退票费。</li><li>允许自愿签转。</li></ol>"
          },
          "refundInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"5%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"10%"
            }
          ],
          "changeInfo":[
            {
              "time":"离站前8小时（含）之前",
              "rate":"5%"
            },
            {
              "time":"离站前8小时（不含）之后",
              "rate":"5%"
            }
          ],
          "floatFlag":false
        }
      ],
      "coupQueryFligOutList":[
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"25",
            "Q":"25",
            "B":"25",
            "D":"25",
            "U":"25",
            "E":"25",
            "H":"25",
            "Z":"25",
            "L":"25"
          },
          "coupName":"返抵用券￥25"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7134",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"25",
            "Q":"25",
            "B":"25",
            "D":"25",
            "U":"25",
            "E":"25",
            "H":"25",
            "Z":"25",
            "L":"25"
          },
          "coupName":"返抵用券￥25"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"10",
            "Q":"10",
            "B":"10",
            "D":"10",
            "U":"10",
            "E":"10",
            "H":"10",
            "Z":"10",
            "L":"10"
          },
          "coupName":"返抵用券￥10"
        },
        {
          "airLine":"WMTKWE",
          "flightNo":"GY7144",
          "mathCabMap":{
            "P":"15",
            "Q":"15",
            "B":"15",
            "D":"15",
            "U":"15",
            "E":"15",
            "H":"15",
            "Z":"15",
            "L":"15"
          },
          "coupName":"返抵用券￥15"
        }
      ]
    }
  ]
})