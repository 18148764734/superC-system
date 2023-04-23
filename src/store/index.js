import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            pdf: false,
            
            watermark: true,
            user_name: '测试用户1',
            phone: '18148764734',
            name:'阿白',
            sex:'',
            yangli:'',
            yingli:'',
            time:'',
            bazi:{
                nianZhu:'',
                yueZhu:'',
                riZhu:'',
                shiZhu:'',
            },
            dayunTime:'',
            token : '',
            result: {

                partOne: {
                    title: "第一部分：基础信息",
                    qianYan: "",
                    endMessage: null,
                    messageList: [],
                    shenSha: {
                        title: "",
                        qianYan: "",
                        endMessage: null,
                        messageList: [
                            "\n",
                            "\n",
                            "\n",
                            "\n",
                            "\n",
                            "\n",
                            "",
                            ""
                        ]
                    }
                },
                partTwo: {
                    title: "第二部分：“时间坐标”里隐藏的命运信息",
                    qianYan: "",
                    endMessage: null,
                    messageList: []
                },
                partThree: {
                    title: "第三部分",
                    qianYan: "",
                    endMessage: null,
                    messageList: []
                },
                partFour: {
                    title: "第四部分",
                    qianYan: "您一生的“财运如何？工作如何？事业如何？子女如何？婚姻情感如何？社会地位如何？会得什么大病？会否短命？会否入狱？……”等各个方面的命运层次的高低，是由你出生前母亲十月怀胎时大部分时间居住的孕期环境中最远70米范围内的事物布局情况以及自己最亲近的有血缘关系的已去世的祖先坟墓周围最远150米范围内与你的“时间坐标”关系密切的那些方向上的事物砂水特性及其这些事物的能量大小决定的。这些决定你某一方面命运好坏和命运质量层次高低的环境中的砂水事物，如果吉利，则你命运的这一方面就好，吉利的能量越大，你在这一方面的命运层次就越高；如果不吉利，则你在这一方面的命运就坏，不吉利的能量越大，你在这一方面的命运层次就越低。你的“时间坐标和空间事物坐标”如果完美的统一，你的命运质量层次就会很高，否则你就会在某一方面成为烂命，甚至所有命运方面都是烂命。你出生以后又会在不同的“时间和空间”坐标位置，你的命运也又会在这个后天的“时空坐标”影响下发生一定程度上的方向性和质量性的改变，但这种改变绝对不会是从根本上把先天命运改掉，而只是一种波动性的变化，就如同先天命运是坦克，后天时空再好也不能把坦克变成大型飞机，但后天好的时空环境可以优化坦克的各种性能和延长使用寿命。\n一句话，先天“时空坐标”决定一个人的命运质量层次，后天“时空坐标”是在先天的质量层次这个平台上在一定程度上强化（或削弱）先天质量，但这种影响只是波动性的，绝对不是根本性的。\n一个人先天的“时空坐标”决定了这个人各个方面命运的层次高低和质量好坏，这个人后天生存的“时空坐标”只是波动性地影响这个人先天命运的层次高低和质量好坏，切记是“波动性”的影响，不是本质上的影响。\n通过把你的“时间坐标”和“空间环境事物坐标”两个系统完美合一进行分析，可以发现你一生命运的方方面面主要表现为：",
                    endMessage: "如果你想真正了解自己各个方面的命运情况，你可以亲自去考察一下祖先坟墓最远150米范围内和自己出生前母亲十月怀胎期间大部分时间居住的地方70米范围内的环境，根据我们给你的“空间事物坐标”所指示的方向，逐个观察一下砂水的情况，你就会对自己一生中各个方面的命运层次高低和质量好坏做出一个准确的判断了。然后再考察一下自己当下居住工作环境中和出生以后祖坟环境变化以后，这些方向上的砂水情况，就可以准确地判断出祖坟环境变化以后和自己入住这新的工作环境以后，各个命运方面会有什么起伏变化和波动变化程度的大小了。（如果你自己不会看，可以联系我们……，通过微信视频和图片，我们的专家级老师会给你做个准确判断，可以帮助你真正了解自己的命运特点，为改造自己的命运提供科学准确的方法）\n特别强调一下，先天的命运质量好 坏和层次高低，只要我们出生了，就无法改变。这如同一个产品一旦出厂了，其根本的质量层次就将无法从根本上改变一样。通过选择使用环境和使用方法，通过适当的改装，让这个产品的性能得到大幅度提升，这是绝对没有任何问题的，但绝对不可能把坦克改造成航天飞机。人的命运也是这样，通过调整一个人的“后天生存环境、运动方向、生存习惯……”等方法可以在很大程度上波动性的对这个人的命运质量和层次进行提升，但永远无法彻底从根本上把一个人的命运层次无限度提升。",
                    messageList: []
                },
                partFive: {
                    title: "第五部分  “身体特征坐标”里隐藏的命运信息\n一个人的命运，不是由他的出生时间决定的，时间只是对人事物发生发展变化过程中不同状态的一个标志性符号。在客观生活中，同一时间，这个世界上不是只人类出生，牛、驴、骡、马、蚊子、苍蝇、臭虫、老鼠……也都会在这一时间出生。而这些同一时间出生的不同种类的有生命的动物，它们的命运绝对不是一样的。这就说明，决定这些动物生命质量层次的绝对不是“出生时间”。那么，决定这些动物命运质量层次的原因有什么呢？第一，是这些动物出生前的孕期环境决定了这些动物是什么类型是什么质量层次（孕期环境中就包括它们的母亲是个什么类型的东西，对被生育出的动物来说，母亲的身体就是它们出生前的环境的一部分，出生前母亲居住生存的自然环境也是这些动物出生前环境的一部分）；第二，这些动物出生后去到了什么方向的什么样的环境里生存（如果是去到了不适合自己生存的方向和环境中，那么这个动物很快就会死掉。如北极熊跑到赤道上，也许不用半天就热死了，但如果是跑到了赤道这个方向上的雪山上那就不会短命而亡；热带鱼如果养到冰水里最多半天也就死掉了……）。人的命运和其它动物的命运在本质上是一致的，对于人来说，这个人出生前的孕期环境才是决定这个人各方面命运层次和质量的根本因素，这个人出生后的生存空间环境是对这个人先天孕期环境决定的这个人的各个方面命运层次高低和质量好坏的后天的波动性影响，后天环境永远也不能从根本上把这个人的命运进行翻转式的改变。出生时间，只是一个产品的出厂日期而已，虽然通过出厂时间可以判断一个产品在某一时间点质量是否有问题，但绝对不是时间决定了这个产品的质量，决定这个产品质量的是产品的运动方向和存储环境。如果把一袋消毒杀菌良好的牛奶放到真空无菌环境中，也许一万年也不会变质。而如果把它放在太阳底下暴晒，也许三天就臭了。人的命运也是这样，通过出生时间这个“时间坐标”是可以大概判断出同一时间出生的这一批人在某一时间点时共有的命运变化情况，但绝对不能精准的区分开同一时间出生的这一批人中每一个人的具体的命运变化（这就如同通过出厂时间绝对无法判断一万袋牛奶在一年以后每一袋牛奶的质量情况一样，那些放在冰箱中的牛奶即使过了保质期，但仍然可能没有任何质量问题，而那些放在太阳底下暴晒的牛奶，则可能早已变质甚至因变质发胀把包装袋都撑的爆炸了）。因此，要想精准判断一个人各方面命运的变化走向情况，就必须把这个人的“时间坐标”和“运动方位坐标”和“空间事物坐标”以及“身体特征坐标”至少三位一体完美统一后，才能做出客观理性的符合真实情况的判断。这就如同判断一袋牛奶出厂后的质量变化情况，只有通过把这袋牛奶的“出厂时间”和“运动方向”和“放在什么环境里”三个方面的问题统一在一起，才能准确地判断出一年后这袋牛奶的质量情况。除了这一方法，如果单纯依靠看出厂时间来判断这袋牛奶的质量，你就有可能完全判断错误，甚至会因为喝了这袋牛奶而送了自己的小命。为什么，因为有人用注射器往牛奶里注射了毒药，而你根本没去看这个环境事物中的注射器和毒药，你只是通过看出厂时间判断牛奶好坏。明白了这个道理，你就知道吕文艺老师创立的这个“时空人坐标”理论技术体系的科学性和真理性了。\n在生活中，你也许看到过市场上有“方形的西瓜、方形的南瓜、方形的苹果……”等等各种形状的水果，你也看到过所有的“植物盆景”中那些植物的形态都不是那些植物原本应该长成的基因所决定的那种形态。为什么会这样呢？你也许说，把“西瓜、南瓜、苹果……”放到方形的容器里让它从小往大长就可以了；把“植物的枝干用铁丝扭捆，绑成我们想要的形态”，它长着长着就长成那特殊的形态了。但你想过吗？造成这个结果的是这些水果和盆景植物的种植时间吗？答案绝对是“不是”。但种植这些水果和盆景植物的时间真的与让它们长成什么形状没有一点关系吗？答案肯定是“有关系”。为什么这么说呢？因为如果是等到这些水果成熟了再放到方形盒子里，这些水果还能变成方形吗？如果是等到这些盆景植物长成了参天大树再去用铁丝捆一下绑一下，还能变成我们想要的那种形态吗？因此说，人的命运发展变化也是这样，人出生后在不同的环境中，不同环境里的能量对人的作用方式不同，作用的力度不同，就会造成人的身体的同一部位长的形态也不同。生活中，一个人出生后，如果整天用手指头顶着前额，顶上二十年，这个人的前额被手指顶的部位肯定会有个坑，而如果不顶就不会有这个坑；整天在工地上搬砖头的人手上都有老茧，而长时间不搬时手上的老茧慢慢就没有了；整天跑步的人腿上的肌肉就比不跑的人发达的多。所以说，当我们知道了一个人的出生时间这个“时间坐标”后，就可以通过把这个人的“时间坐标”和“身体特征坐标”完美统一的方法，精准地判断出这个人“生存环境的状态是什么和各个方面的命运发展变化走向是什么”。简单地说，就是相同时间出生的人，即使是同性别双胞胎，其身体特征也并不是完全相同，即使是一生出来完全一样，也随着出生以后两个人的生活环境不同，生活方式不同，去的方向不同，接触的人不同……从而导致这对双胞胎的命运出现巨大的差异性，这些不同，本质上都是不同能量的作用方式和不同能量的作用强度对人产生的不同结果。因此通过把同时出生的同性别双胞胎身体上同一部位的形态特征（高矮、胖瘦、大小、软硬、颜色……）的差异性这个“身体特征坐标”和他们出生时间的“时间坐标”完美合一，就可以精准地判断出这一对双胞胎在同一个命运方面（如财运、或官运、或婚姻……）会有什么重大的不同。同时出生的同性别双胞胎的命运差别都可以用这一方法准确区分开，那么那些只是出生时间相同（时间坐标相同）而“身体特征坐标”完全不同的同性别人的命运差异性就更容易区分了。利用吕文艺老师创立的“时空人坐标”这一理论技术体系，可以把出生时间相同（“时间坐标”相同）的同性别中全中国1500多人（乃至全世界10000人）“谁比谁钱多？谁比谁官大？谁比谁的配偶漂亮优秀？谁会短命？谁会长寿？谁比谁寿命长？谁会蹲监狱？谁不会蹲监狱？谁比谁蹲监狱的时间长？谁会有子女？谁会绝后？谁会得肺癌？谁会得肝癌？谁会被人杀？谁会自杀？……”等等方面进行“从1到1500乃至到10000”的顺序性排队。通过对一个人的“身体特征坐标”和“时间坐标”的合一分析，可以对这个人命运的某些方面进行准确地定性判断。\n通过对你的“身体特征坐标”和“时间坐标”的合一分析，可以发现你的“身体特征坐标”里隐藏着如下命运信息：\n\n1、“身体特征坐标”中身高对一个人命运上的影响：\n“时间坐标”相同的人，身高不同，命运就必定会有巨大的差别，这种差别，在幼儿乃至青少年时代就都会表现的淋漓尽致。“时间坐标”相同的人，如果个子高，身体里才具有读书成绩好的能量，那么这些人在读书的过程中，高个子的一定比标准个子和小个子的那些孩子读得好，标准身高那个孩子一定比小个子的那些孩子读得好。“时间坐标”相同的人，如果小个子的身体里有大车祸之灾的能量，那么这些“时间坐标”相同的人中，那些个子越小的人车祸的灾越大，车祸的次数越多，而那些个子非常非常高的人却一辈子都不一定会发生一次车祸。“时间坐标”相同的人，如果小个子的身体里充满了当大官的能量，那么哪怕是从幼儿园开始直到进入社会，那些小个子的人去到哪儿都会有官职，而且个子越小官越大，直到成为国家元首，而那些高个子的人则一生在普通人阶层甚至连普通人阶层都达不到……。“时间坐标”相同的人，因为身高不同，他们整体命运的层次高低也就被彻底分别开来。身高是一个人命运层次质量的平台，其它身体部位的特征只是在身高所决定的这个命运层次平台上波动性的补充（或减少）。这就如同，身高决定了一个人的平台是“航母”还是“小木船”，而身体的其他部位特征则相当于这“航母”和“小木船”平台上装备了什么设备\n。\n",
                    qianYan: "2、“身体特征坐标”中臀部特征对你命运的影响：\n在相学上，臀部的形态代表着一个人的财富状况和配偶的情况。在人的一生命运中，臀部的形态在没有人为手术干预的情况下，其形态特征一生具有稳定性。因此当把一个人的“时间坐标”和其“身体特征坐标”中的臀部完美统一后，可以对这个人一生的财富状况和配偶状况进行准确地判断。据报道，东北一位女领导本来官运亨通，但花了几十万把臀部整形后，却被判入狱失去所有财富。当代社会，人们都希望自己变得美丽帅气，都想通过外科手术整形而重塑自己的外貌形象。但事实上，有人通过整形让自己的命运变得很好，而有许多人因为整形把自己搞的身败名裂家破人亡甚至残疾短命。这其中的原因，表象看起来是因为医学整形的技术问题和被整形者自己的思想问题所导致，但从命运的根本上讲，从人是物体这一物理学特性去分析，则可以十分准确地知道：同样是整鼻子，有人在命运上适合，有人就绝对不适合；同样是整下巴，有人在命运上适合，有人就绝对不适合。适合整哪个部位的人，整形后各种好事从天而降；不适合整哪个部位的人，整形后各种祸事也是从天而降。美容整形机构为了赚钱，根本不会考虑具体每一个人的具体的命运情况与身体部位特征之间的关系性，都是用一套忽悠人的话术忽悠想整形的人。因此，整形美容不是坏事，我们也坚决支持，但前提是必须应该明确清楚自己什么身体部位适合整形成什么形态才是吉利的，整成了什么形态就会倒大霉甚至家破人亡。然后才能决定“是否整形，整什么部位，整成什么形态”，如此整形才具有绝对能通过整形把自己命运变好的100%概率。单纯听信骗子们说的“整什么部位好，整成什么形态就是美”这些对每一个人都这么说的“套路话术”，就至少有50%的概率会因为整形而让自己变的倒霉，通过整形把自己命运整坏的例子在你的身边也不少，甚至很多，只是大家不知道“整形会让自己命运的某一方面变坏”这一科学原理和道理，所以整形后“离婚了、得癌症了、破产了、死儿子了、死配偶了、自己残疾了……”这些事大家认为与整形好像没有关系。这里给大家科普一下：整眉毛眼睛会有50%的概率把好好的贵人运气整没了；整鼻子会有50%的概率把财运整没了，把癌症死亡之伤病整出来；整嘴唇会有50%的概率把子女的运气整坏了；整下巴会有50%的概率把社会地位整差了；整乳房会有50%的概率把婚姻整坏了；整肚皮会有50%的概率把钱财整破耗了；整大腿会有50%的概率把你一生中最重要的那个人（那件好事）整没了；整小腿会有50%的概率把儿子的好运甚至命给整没了并把自己的社会地位名气整没了；整大臂会有50%的概率把子女的伤灾大病灾整出来；整耳朵会有50%的概率把情感生活整的一塌糊涂；整臀部会有50%的概率把配偶（或自己的财富地位）整没了；整腰部和脖子会有50%的概率把自己的寿命整没了。\n就如同为了漂亮把坦克的外壳换成有机玻璃；为了漂亮把汽车的方向盘换成个圆形的彩色水晶球……，其整形的结果是什么，不用我说，你也知道。其实人也是这样，有的人的生命体征质量特点就是坦克，只有粗壮结实才有价值才有寿命；有些人的生命体征质量特点就是火箭，必须体态纤细才能飞上天空，如果整形成粗壮就可能飞不上天空了；有些人的生命体征质量特点就是像飞机一样身体两侧有伸出去的翼才适合飞行，如果非要去了机翼整形成无翼，那么飞机就不能飞行了……物同此理，人同此理，有的人命中只有是扁平鼻子才能发大财，整成高鼻子就等着破财吧；有的人命中只有是单眼皮才能旺自己事业成功，整成双眼皮后狗屁事业也没有了；有的人命中只有是方下巴才能找上当大官的配偶，整形成尖下巴后婚变了离异了找了个垃圾人；有的人命中乳房只有小才能长命百岁，把乳房整大了结果得癌症过几年死掉了……不再举例说明了，如果你足够智慧，料想你应该彻底明白这一道理了。明白了这一道理，你将更容易理解这个通过把你的“时间坐标”和“身体特征坐标”完美合一后判断你一生的命运特点的科学方法的真理性。\n一个人的耳朵，在命运上代表着和你长期有两性关系的那个人和你之间的命运关系，一方面指配偶，另一方面指长期的情人。你和这两个人之间的命运关系究竟如何，通过你自己的“时间坐标”和“耳朵的典型特点”就可以进行准确地分析判断。真理性的科学的理论，绝对不是社会上江湖骗子们讲的那些“耳朵白净、不软不硬、耳大垂珠、珠拱口角”就大吉大利和“扇风耳、黑焦耳、鼠耳……”就不吉利主破败的胡说八道之诈骗套路。现实中耳朵黑焦的大富豪大官多得是，耳朵白净不软不硬垂珠拱口的讨饭的也很多。因此，如果你听信江湖骗子们忽悠而乱整形，真的会把自己整向死亡。祝福你能通过吕文艺老师的“时空坐标”理论技术体系获得真理性改变命运的好方法。如果你的身体特征长成了对你的命运很吉利的形状，那么即便这个部位长的很丑很难看，你也千万绝对不要改变这个身体部位的形状，因为命好才是真的好，外表好看了没有好命了，外表的好看就没有任何价值了。命好才是真的好，外表好命不好那是真的不好\n！\n",
                    endMessage: null,
                    messageList: []
                },
                partSix: {
                    title: "第六部分 您“时间坐标”里隐藏的生命短板信息",
                    qianYan: "通过你“时间坐标”系统的先天命运分析，可以准确地判断出，决定你生命长度的那个先天不足的身体器官是什么？我们把它叫做“生命短板”。\n生命短板，是指决定一个人生死的那一个最最重要的身体部位和身体器官。所有的人，最终都因那个生命短板的器官和身体部位出现伤病而死亡。\n有的人，只有一个生命短板，这种人，只要保护好这个这个生命短板所代表的身体部位和器官，就一定能长命百岁；有的人，有两个生命短板，这种人相对来说就不容易寿达天年；有三个（或三个以上）生命短板的人大多是大难不死的长寿之人；没有生命短板的人，不会有很多人能活到他所在地区的人均寿命那个岁数，没有生命短板，并不是一件好事，而是说明身体的没一个器官都可能随时转化为生命短板，因为每一个器官都不强大，只是一种平衡状态而已，除非他的生存“空间事物坐标”系统和他的“运动方位坐标”系统正好能化解他没有生命短板的问题，除此之外，不会有什么变数。\n任何一个人，只要他生命短板所代表的那个身体部位和器官不出现伤病，那么这个人的其他器官或身体部位即使出现了天大的伤病，也只是个伤病而已，也绝对不会把命丢掉。比如一个人的大脑如果不是生命短板，那么即便这个人脑袋中枪了，也只是个枪伤而已，也绝对不会因大脑受伤而死亡；如果一个人的大脑是生命短板，这个人也许因感冒发烧就会引发了脑炎而死亡。一个人如果肝脏是生命短板，而肺脏不是生命短板，那么这个人即使从15岁开始就得了肺癌，也只要癌症转移不到肝脏，那么他绝对可以活到七八十岁。有病而不要命的器官叫健康短板，不叫生命短板，健康短板哪怕从一出生就有大病，只要生命短板不出问题，这个人依然可以活到八九十岁。\n了解自己身体里的生命短板，保护好生命短板那个身体部位和器官，你必然能够长命百岁。预测的目的不是为了让人知道，而是为了让人通过调整自己而提前把问题解决掉。\n如何保护好自己的生命短板？通过30万例的大数据“自然科学、严谨逻辑论证、客观事实统计”的研究分析，我们发现：通过调整祖先和自己的存在环境，调整自己的运动方向，调整自己的生活习惯的方方面面，就完全可以把某一器官（或某一身体部位）的伤病进行十分有效的控制，不但可以防止恶化发展，还可以逐步恢复其正常功能。\n同年同月同日同时辰同性别（同父母）的“五同六同生人”其实命运中各个方面的差异性十分巨大，但生命短板是一种造物主对人的命运的先天设计缺陷，所有“五同六同生人”在这一关乎生命长短的先天设计上，没有任何差别，唯一的差别就是因“五同六同生人”的生存环境、运动方向、生活习惯不同而产生的最终寿命长短的差异性。如都是短命，有人在国人平均寿命之内不远处死亡，而有人在距离国人平均寿命数之内很远就死亡；如同样是长命，有人在国人平均寿命处死亡，而有人活到了90岁以上。知道了自己的生命短板，就可以有针对性地进行生存环境和生活习惯以及运动方位的调整而延长自己的生命短板。我们通过你的“时间坐标”系统推论出的你的生命短板结论，是我们在调查研究了众多医院医生提供的近30万人份资料后结合“吕文艺时空人理论技术体系”建立的科学的预测模型的推论。在这个层面上，预测的准确率完全可以达到99%以上，失误率绝对在万分之一以内。“吕文艺时空人”理论是建立在“自然科学性、严谨的逻辑性、客观事实性”三大平台上具有“原理上真理性、结论上精准性、解决问题上实用效果良好性”的自然科学预测学理论技术体系。\n那么，决定你生命长度的生命短板到底是什么呢？\n",
                    endMessage: null,
                    messageList: []
                },
                partSeven: {
                    title: "第七部分  您的“时间坐标”里隐藏的婚姻信息",
                    qianYan: "婚姻生活，是一个人一生中最重要的一个命运方面，婚姻的稳定和幸福，不仅仅对婚姻双方的个人命运有十分重大的影响，对于子女的影响也十分巨大，健康快乐幸福的家庭生活，能让家庭中每一个人充满自信与希望，能对社会产生正能量的影响，有助于减少社会不安定因素……\n当今社会，人们的婚姻观虽然异彩纷呈，但从本质上讲，所有真正想进入婚姻的人，都还是希望自己的婚姻生活能带给自己“财务上的自由、社会地位的提升、身体心理上的平安、执子之手与子偕老、子孙贤孝安康有成就”。不同的人，因为先天禀赋不同，后天存在条件环境不同，因此，不同的人的身体里充满的婚姻吉与凶的能量性质和能量的多少并不相同。在这种情况下，不同的人，只有寻找到那个身体里能量的性质和能量的数量与自己身体里的能量性质和能量数量有良好匹配性的人，才能保证自己的婚姻能带给自己所期望的那个美好的结果。任何方面的不匹配，都会导致婚姻从“斗争、斗殴、分居、离异、短命、破产、沦为底层、身体大伤大病、残障、问题子女……”中的一个方面乃至全部方面出现严重问题。因为人的命运是物质和能量性的，并不是心理精神性的，因此，在了知了人的命运的物质和能量性的优势与缺陷后，就可以有针对性地利用这个世界上的物质和能量来强化自己命运的优势性，利用这个世界上的物质和能量来消除自己命运的缺陷性。如此，人的命运就必然会有一个巨大的改变（虽然这种变化并不能把一个玻璃杯变成金杯，但通过一定的处理改造，也完全可以让这个玻璃杯的质量和价值有大幅度的提升，命运的改造实质上就是这个道理）。在婚姻这一方面，不同“时间坐标”系统的人，都会有不同的优势和缺陷，扬长避短解决婚姻问题，必将会让婚姻生活的幸福指数大幅度上升。婚姻幸福的唯一要素就是男女双方“身体里充满的婚姻信息能量具有良好的匹配性”这一“门当户对”的特点，而不是男女双方家庭之间和男女双方在相关能力性情等方面的“门当户对”。\n通过对你“时间坐标”系统的分析，我们发现：\n",
                    endMessage: null,
                    messageList: []
                },
                partEight: {
                    title: "第八部分  “时空坐标”里隐藏的特殊命运信息\n",
                    qianYan: "每一个人，都是特定“时空环境”里的产物，特定的“时空环境”会催生出具有特定先天质量特征的人。具有特定先天质量特征的人，又会因其在后天不同的特定“时空环境”中生存，从而受到不同“时空环境”中不同方位来的不同能量类型、不同能量的作用方式、不同能量的作用强度的能量影响，而让先天身体里固有的“不同的能量类型、不同的能量聚合方式、不同的能量强度”的能量存在状态发生改变，而这种改变就必然会导致一个人的命运呈现出完全不同的吉凶状态。比如住在同一个房间里的双胞胎六同生人（同年同月同日同时辰同父母同性别）也因他们在房间里各自长时间所在原点位置的不同（空间坐标不同）而发生“一人残疾另一人健康无恙；一人学习好，另一人学习很差；一人结婚生子，另一人却打光棍；一人长寿，另一人短命；一人得肝癌，另一人得肺癌；一人发大财，另一人却破产跑路……”这些命运上的巨大差异（坐标点不同，受到空间环境中来自四面八方的能量影响也不同）。六同（五同）生人长大后，再加上运动方向的不同，那么命运的差异性就会表现的更加巨大。因此，每一个人的命运都会具有强烈的独特性。这种独特性除了表现在“财富的多少、官职的大小、事业的大小、婚姻的好坏、子女的优劣”这些基本命运方面外，更重要的差异性还会表现在“有没有残疾？哪个身体部位残疾？有什么灾难？有什么疾病？哪一个身体器官生病受伤就会丧命？什么时间段会做什么职业？发什么性质的财更容易？发什么性质的财很难？发什么性质的财一定因财招灾？发什么财就不会因财招灾？会不会蹲监狱？会不会被杀？会不会杀人？会不会自杀？……”这些方面。\n在你先天“时间坐标”的平台上，通过结合你的后天“时空坐标”可以发现，你的命运中隐藏着以下信息，这些信息在你的运动方位没有切换（大角度变化）的情况下（如从正东15°范围内变化到正东偏东北那个15°范围内；从东偏东北的15°范围内变化到东北偏东那个15°范围内……），就一定会在你的身上变现为客观事实。而如果你的运动方位发生了大角度切换，那么你“时空坐标”里隐藏的信息就会有新的变化，而“时空坐标”变化后新的命运信息则是由新的“时空坐标”决定的，如果想了解新的变化情况，就必须重新进入系统输入变化后的信息要素才能做出准确的判断。你“时空坐标”系统里隐藏的这些特殊信息，在运动方位没有变化之前，都会变现为真正的事实，只是因为有些事情吉凶程度比较小，你有可能会忘记这些曾经发生过的事情，从而错认为这些判断的事情没有发生。人生命运，各有不同，人生命运，在一定的范围内，都可以通过改变后天的“时空坐标”而让命运发生一定程度的改变。改变命运的方法，最重要的就是改变自己“时空坐标”点的位置。人去什么方向，表面看是人自己的决定，但从物理学的角度讲，则人之所以去某一方向，是因为这个人的身体受到了来自生存环境中的某一方向的强大能量的推动或吸引而产生的运动，心理只不过是人的身体受到来自生存环境中的某一方向的强大能量刺激后做出的反应而已。一个人的身体如果没有受到特定能量的刺激影响，这个人就不会有特定的心理想法产生。因此，一个人的运动方向实质上反映的是这个人运动之前生存环境中对应方位上有强大的砂水能量。也因此通过对一个人运动方向的分析，就可以判断出一个人生存环境中对应方向上的砂水吉凶情况。\n当你在祖先（或父亲和母亲居住地）的这些方位长时间生活工作（学习），在自己住家的这些方位去工作（学习），经常去这些方位娱乐休闲，那么你的身体里就会慢慢地积累出发生特定事情的能量，从而让你发生特定的事情（而如果你离开了这个方位“如迁移祖坟、长辈去世、父母搬迁、自己变换工作单位或住处”，那么你所发生的特定性质的事情就会发生变化，变化的结果就是由新的方位能量所决定，而与这个方位所决定的特定事情就没有什么关系了，如果想了解运动方位变化对你的命运产生的特异性影响，你就需要重新进入系统输入变化后的方位信息进行再次预测，如果你对方向不太理解，可以咨询我们的客服专家），以下结论都是基于大数据的科学分析，因此具有准确的反证特点：\n",
                    endMessage: null,
                    messageList: [
                        "",
                    ]
                },

                map: {}
            },
            dayunresult: {
                    partOne:{
                        bigTitle:"“10年周期命运变化”预测报告",
                        bigTitle1:"第一部分",
                        b2Title:"这个10年周期“时间坐标”对您命运变化的影响",
                        preFace:"人的命运，由先天命运变化预测报告》时必须明白这一道理。",
                        p2Face:"“时间坐标”后的结果展开。在这一系变化主要表现为：",
                        tip:"人身上。",
                        endMessage:null,
                        messageList1:["1","2","3"],
                        messageList2:["\\n"],
                        messageList3:["\\\n"],
                        messageList4:null
                    },
                    partTwo:{
                        bigTitle:"“10年周期命运变化”预测报告",
                        bigTitle1:"第一部分",
                        b2Title:"这个10年周期“时间坐标”对您命运变化的影响",
                        preFace:"人的命运，由先天命运变化预测报告》时必须明白这一道理。",
                        p2Face:"“时间坐标”后的结果展开。在这一系变化主要表现为：",
                        tip:"人身上。",
                        endMessage:null,
                        messageList1:["","",""],
                        messageList2:["\\n"],
                        messageList3:["\\\n"],
                        messageList4:null
                    },
                    partThree:{
                        bigTitle:"“10年周期命运变化”预测报告",
                        bigTitle1:"第一部分",
                        b2Title:"这个10年周期“时间坐标”对您命运变化的影响",
                        preFace:"人的命运，由先天命运变化预测报告》时必须明白这一道理。",
                        p2Face:"“时间坐标”后的结果展开。在这一系变化主要表现为：",
                        tip:"人身上。",
                        endMessage:null,
                        messageList1:["","",""],
                        messageList2:["\\n"],
                        messageList3:["\\\n"],
                        messageList4:null
                    },
                    partFour:{
                        bigTitle:"“10年周期命运变化”预测报告",
                        bigTitle1:"第一部分",
                        b2Title:"这个10年周期“时间坐标”对您命运变化的影响",
                        preFace:"人的命运，由先天命运变化预测报告》时必须明白这一道理。",
                        p2Face:"“时间坐标”后的结果展开。在这一系变化主要表现为：",
                        tip:"人身上。",
                        endMessage:null,
                        messageList1:["","",""],
                        messageList2:["\\n"],
                        messageList3:["\\\n"],
                        messageList4:null
                    },
                    partFive:{
                        bigTitle:"“10年周期命运变化”预测报告",
                        bigTitle1:"第一部分",
                        b2Title:"这个10年周期“时间坐标”对您命运变化的影响",
                        preFace:"人的命运，由先天命运变化预测报告》时必须明白这一道理。",
                        p2Face:"“时间坐标”后的结果展开。在这一系变化主要表现为：",
                        tip:"人身上。",
                        endMessage:null,
                        messageList1:["","",""],
                        messageList2:["\\n"],
                        messageList3:["\\\n"],
                        messageList4:null
                    },
                    "map": {}
        }

    }
},
    mutations: {
    setToken(state, token) {
        state.token = token
    },
    setresult(state, result) {
        state.result = result
    },

},
    actions: {
    loginok({ commit }, token) {
        commit('setToken', token)
    }
}
})

export default store