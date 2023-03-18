import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
import LottieView from 'lottie-react-native';


export default function AllDrink() {
    const [Food, setFood] = useState(
        [
            {
                Image: require("../img/coklemone.jpg"),
                name: "عصير ليمون",
                view: true,
                time: "15 min",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "10",
                components: "2 ليمون كبير\nماء\n2 معلقه سكر\nحفنه نعناع\nثلج\nماء بارد",
                Step: "نقوم بعصر كمية من نعصر الليمون ثم نصب عصيره ف الخلاط\nنضع مقدار النعناع والسكر والماء البارد ونخلط ف الخلاط ثم نصب ف الكاس مع الثلج",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=g0KnsicH7kU"

            },
            {
                Image: require("../img/lemonandkewe.jpeg"),
                name: "عصير الكيوي و التوت والليمون",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "15",
                components: "كوبين عصير كيوي بالليمون\nكوب عصير ليمون\nتوت اسود الكمية حسب الرغبه",
                view: true,
                Step: "نخلط جميع المكونات ونقدمها ونزينها بالليمون و النعناع و التوت",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=3UwC4xNvk68"


            },
            {
                Image: require("../img/greepfrot.jpeg"),
                name: "عصير الجريب فروت مع البرتقال و الليمون",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "20",
                components: "حبة جريب فروت\nحبة برتقال\n½ حبة ليمون اصفر\n½ حبة ليمون اخضر (ممكن الاستغناء عنة)\nسكر حسب الرغبة (انا ما استعملت السكر)",
                view: true,
                Step: "في عصارة البرتقال قومي بعصر جميع المكونات. صبي الخليط في اكواب التقديم و اضيفي السكر الي الاكواب حسب الرغبة و حركي جيداً. يقدم وبالف هنا و شفا",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=4N8CVW2LcNA"


            },
            {
                Image: require("../img/lemonandganzabl.jpeg"),
                name: "عصير الليمون بالزنجبيل 'الصحي'",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "25",
                components: "3 حبات ليمون أخضر متوسطة الحجم\n1/4 كوب زنجبيل طازج مبشور\nكوب ماء بارد",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و نقشر الليمون و نقطعه بالنص و نستخرج البذور\nو نبشر الزنجبيل بعدها نضع كل المكونات بالخلاط ونخلطها لمدة خمس دقائق\n",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=8TIfFbO-5lI"


            },
            {
                Image: require("../img/lemonandorange.jpeg"),
                name: "عصير البرتقال والليمون",
                Elta7der: '5 min',
                Eltahy: "20 min",
                Elsouba: "25",
                components: "2 حبة برتقال\n2 حبة ليمون\n1 كوب سكر",
                view: true,
                Step: "نقشر حبات الليمون والبرتقال\nتقطع وتزال البذور\nتخلط في الخلاط الكهربائي ثم تصفى\nيعاد العصير الى الخلاط مع مكعبات الثلج\nتصب في اكواب التقديم ويقدم بارد",
                time: "25 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=lBu65ME2WmQ"


            },
            {
                Image: require("../img/sahlab.jpeg"),
                name: "سحلب",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "70",
                components: "1/2 لتر حليب\n5 ملاعق بودرة سحلب\nملعقة سكر",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و بريق يوضع فيه الحليب وهو بارد ثم يضاف السحلب ويحرك ثم يوضع السكر\nنولع عليه النار هادئة مع التحريك لمدة 10 دقائق حتى يثقل قليلاً\nيوضع في كاس ويزين بالقرفه والفستق وبالعافيه",
                time: "15 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=fBSsdfLotpE"


            },
            {
                Image: require("../img/88.jpeg"),
                name: "Hot chocolate مشروب الشوكولاتة",
                Elta7der: '5 min',
                Eltahy: "20 min",
                Elsouba: "50",
                components: "3/4 كوب شوكولاتة بودرة\n4 اكواب حليب سائل\n1 كوب سكر\nملعقة صغيرة نشاء ذرة",
                view: true,
                Step: "اضف الماء و معلقه ملح اضف الماء و معلقه ملح اضف الماء و توضع جميع المكونات في قدر على نار هادئة مع التقليب المستمر لكي لاتحترق الى ان تبدأ بالغليان",
                time: "25 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=38xZdDygW04"


            },
            {
                Image: require("../img/55.jpeg"),
                name: "عصير فراولة و توت ",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "25",
                components: "1 كوب فراولة مجمده\n1/2 كوب توت مجمد\n1/2 كوب سكر\n1 كوب ماء ",
                view: true,
                Step: "في الخلاط : نخلط جميع المكونات ",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=4uKOb4OFrVE"
            },
            {
                Image: require("../img/555.jpeg"),
                name: "سموزي الفرااوله",
                Elta7der: '5 min',
                Eltahy: "20 min",
                Elsouba: "30",
                components: "كيس فراوله مجمدة\n ظرف كريم شانتيه\n سكر حسب الرغبة\n فانيليا\nحليب",
                view: true,
                Step: "نخلطهم في الخلاط ونستمتع بأحلى فراوله واذا حابنو يكون تقيل نضيف مكعبات ثلج ونخلطه",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=r3Ycl293l_U"
            },
            {
                Image: require("../img/tamr.jpeg"),
                name: "مشروب التمر والحليب",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "10",
                components: "10 حبات تمر\nكوبين حليب\nسكر\nحبة موز",
                view: true,
                Step: "ناتي بالخلاط الكهربائي نضع الموز التمر والحليب سكر ونخلط جيد",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=pvYp6JmpP78"
            },
            {
                Image: require("../img/sa.jpeg"),
                name: "مشروب السّحلب الشتوي",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "50",
                components: "1 كوب ماء\n3 م حليب بودرة\n2 م نشا\n2 م سكر\n1 م ص فانليا\n1 م ص قرفة\n1 م مكسرات مجروشة\n1 م ص جوز الهند",
                view: true,
                Step: "نضع الحليب والسكر والنشا في إناء ونحرّك جيّدا.\nيرفع على النار مع التحريك بين فترة وإخرى ويترك على النار حتى يتكثف المزيج.\nيصب في أكواب التقديم ويزيّن بالقرفة والمكسرات وجوز الهند.",
                time: "20 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=CgUTsEiF824"
            },
            {
                Image: require("../img/ddh.jpeg"),
                name: "مشروب الزنجبيل بالزعفران",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "40",
                components: "ملعقة صغيرة زنجبيل مطحون\nسكر حسب الرغبة\nكمشة زعفران\nربع علبة حليب سائل مبخر\n لتر ماء مغلي",
                view: true,
                Step: "نضع الحليب والسكر والنشا في إناء ونحرّك نضع كل المقادير في براد الشاي\n نصب فوقها الماء المغلي ونتركها خمس دقائق وبالعافية",
                time: "15 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=N2XhBxidLjo"
            },
            {
                Image: require("../img/dddh.jpeg"),
                name: "موهيتو السڤن اب",
                Elta7der: '5 min',
                Eltahy: "5 min",
                Elsouba: "10",
                components: "ملعقة صغيرة زنجبيل علبة سڤن اب\nتوت مشكل حسب الرغبة\n2 نعناع طازج\nمكعبات ثلج\nنكهة حسب الرغبة\nفراولة مقطعة",
                view: true,
                Step: "بالكاس ثلج و نكهة\nنضيف النعناع و التوت\nنضع السڤن اب و نقدمه بااارد",
                time: "10 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=2t1IXAe4li4"
            },
            {
                Image: require("../img/ffth.jpeg"),
                name: "عصير التفاح والكيوي والموز والعنب",
                Elta7der: '10 min',
                Eltahy: "10 min",
                Elsouba: "40",
                components: "1 تفاح اخضر\n1 موز\n1 كيوي\n½ كوب من العنب اخضر\n1 كوب من الحليب الطازج\n1 ملعقه من العسل",
                view: true,
                Step:"اول نقطلع التفاح ونقطع الموز ونقطع الكيوي انضيفهم في الخلاط\nانضيف 1كوب الحليب طازج انضيف 1ملعقه العسل وانخلطه في امكانك تضيفي الماء ان حبيتي وايقدم بارد في العافية",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=SXPOHoGuU5Y"
            },
            {
                Image: require("../img/dgkth.jpeg"),
                name: "عصير افوكادو",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "25",
                components: "2 حبات افوكادو\n2 حبات موز\nكاستين حليب\nعسل على الحسب تحلية\nثلج",
                view: true,
                Step:"في الخلاط أضيف جميع المكونات واخلطهم جيدا واصب على الكاسات وتقدم بالهناء والشفاء ",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=UbvKV3SACe4"
            },
            {
                Image: require("../img/ddddddth.jpeg"),
                name: "عصير البطيخ",
                Elta7der: '5 min',
                Eltahy: "5 min",
                Elsouba: "20",
                components: "1/2 بطيخه\n كوب ثلج",
                view: true,
                Step:"نخلص البطيخ في الخلاط\nنضعه الثلج في الاكواب ونضيف عصير البطيخ عليه",
                time: "10 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=ZYoh_n549y0"
            },
            {
                Image: require("../img/flkfoth.jpeg"),
                name: "عصير الرمان والتوت ",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "25",
                components: "2 حبة من الرمان\n1/2 كاس من التوت او عصير توت\nماء بارد\n2 ظرف سكر سيتفيا\n1 ملعقة كبيره ماء الورد او الزهر",
                view: true,
                Step:"اول نقشر الرمان ونشيل الحبوب وانضيف في الخلاط انضيف حبات توت نص كوب وانضيف الماء بارد\nانضيف السكر 2ظرف ستيفيا و1ملعقة ماء الورد او الزهر بمكانكم تضيفون السكر العادي حبيت يكون العصير الصحي وانصفيه ويكون بارد ",
                time: "15 min",
                categortType: 2,
                video: "https://www.youtube.com/shorts/12m0aMEPYnI"
            },
            {
                Image: require("../img/6545th.jpeg"),
                name: "مشروب الكركديه",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "60",
                components: "كوب ونصف من زهورات الكركديه\nكوب سكر\nملعقه ماء الورد\nليتر ماء ساخن للنقع\nعند التقديم\nمكعبات ثلج وبعض الزهورات المغسوله\nمكعبات ثلج",
                view: true,
                Step:"تغسل زهورات الكركديه لازالة الاتربه ونحضر باقي المكونات ونضع زهورات الكركديه المغسوله بوعاء ونضع عليها السكر وماء الورد\nنصب عليها لتر ماء مغلي وننقعها ساعتين ونضعها بالثلاج احط منه مكعبات ابرزها في الفريزر عشان تكون مكعبات ثلج استخدمها اثناء التقديم واطلع الكركديه من الثلاجه واصفيه واضع مكعبات الثلج في كاس التقديم واسكب عليها مشروب الكركديه",
                time: "15 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=GnzaI9oXVLQ"
            },
            {
                Image: require("../img/dsdth.jpeg"),
                name: "عصير موز بالفرولة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "20",
                components:"6 حبات فراولة\n2 حبة موز\nكوب حليب\nثلج مجروش\n2 م ك ايسكريم ڤانيلا\nعسل او سكر حسب الرغبة",
                view: true,
                Step:"اخلط جميع المكونات في الخلاط واقدمه باكواب وبالعافية",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=xOkfvKtvPdY"
            },
            {
                Image: require("../img/xxth.jpeg"),
                name: "عصير التين الشوكي والفراولة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "40",
                components:"5 حبات تين الشوكي\n2 م سكر\n6 حبات فراولة\n1 م عصير ليمون\n5 مكعبات ثلج",
                view: true,
                Step:"تقشر حبة التين وتعصر في تلخلاط الكهربائيوتصقى من البذور ويعاد في الخلاط\nيضاف الفراولة والسكر والثلج وتعصر معا",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=xdA88hQZ3Mc"
            },
            {
                Image: require("../img/vvth.jpeg"),
                name: "موهيتو الفراولة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "40",
                components:"100 جرام فراولة مجمده او طازجة و يفضل طازجه\n1/4 حزمه نعناع\nليمونه مقطعه ارباع\nسيروب الفراولة او نكهة فراوله او فيمتو\nسفن اب او مياه معدنيه\nملعقة سكر",
                view: true,
                Step:"نضع الفراوله مع النعناع مع الليمون مع السكر في هاون و نقوم بهرسهم مع بعض حتى تنزل موية الفراوله مع الليمون و النعناع\n نضع في جك العصير. سيروب الفراوله. مع مكونات الخطوه الاولى كاملة\n ونضع عليها المياه المعدنيه. او سفن اب حسب الكميه المرغوب فيها و بالعافيه.",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=43MyQOYyofs"
            },
            {
                Image: require("../img/txch.jpeg"),
                name: "عصير مانجا",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"3 حبات من ثمرة المانجو\nكوب ماء\nسكر او عسل حسب الرغبة",
                view: true,
                Step:"جميع المكونات في الخلاط وبالعافية",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=NVDt5Mb77Mw"
            },
            {
                Image: require("../img/ddssth.jpeg"),
                name: "عصير الافوكادو والمانجا",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"1 افوكادو\n1 مانجا\nربع كوب لوز\nملعقتين عسل\n3 اكواب حليب",
                view: true,
                Step:"نقطع الفواكه\nنضيف جميع المكونات و نخلط و يقدم باردا و بالعافية",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=Y2azMnxKDnI"
            },
            {
                Image: require("../img/tdvh.jpeg"),
                name: "عصير المانجا والفراولة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"كوبين فراولة مجمدة مقطعة\nكوب مانجا مجمدة\n1/3 كوب عصير البرتقال",
                view: true,
                Step:"تُخلط جميع المكونات في الخلاط ثم تُقدم في كأس وبالعافية مقدما ",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=9ePJjmJdVNg"
            },
            {
                Image: require("../img/bdcxvth.jpeg"),
                name: "عصير مانجا وجوافه",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"3 مانجو زاكيه\n3 جوافه\n١ افوكادو مستويه\n2 كاس حليب\n1 كاس ماء\n1 ظريف كريم شانتيه(دريم ويب)\nسكر حسب الرغبه",
                view: true,
                Step:"نخلط جميع المكونات بالخلاط ونتحكم بسمك العصير اذا تحبوا اخف زيدوا ماء ونصفيه جيدا من بذور الجوافه\nيوضع بالثلاجه لوقت التقديم. وبالعااافيه",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=KiRJHtwGez8"
            },
            {
                Image: require("../img/tvvvvh.jpeg"),
                name: "هوت شوكلت الاوريو",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"كوب ونص حليب\nمغلف اوريو مكسر فيه 4 حبات\nملعقة اكل شوكولاته بالجيكيه او جالكسي او نوتيلا او نسكويك حسب المتوفر\nملعقه صغيرة نسكافيه",
                view: true,
                Step:"نخلط جميع المقادير\nنضعها على النار مع التحريك المستمر لحد مايثقل قوامها ونقدمها",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=8TpU14ll1I8"
            },
            {
                Image: require("../img/aasth.jpeg"),
                name: "قهوة اسبريسو",
                Elta7der: '5 min',
                Eltahy: "10 min",
                Elsouba: "25",
                components:"4 ملاعق كبيرة (40 جم) قهوة مطحونة\n 2 كوب (500 مل) ماء مغلي\n وعاء به مكبس للقهوة (وعاء كبس القهوة)",
                view: true,
                Step:"ضعي القهوة في الوعاء، ثم صبي الماء المغلي، واتركيه جانبًا لمدة أربع دقائق.\n اضغطي على المكبس لأسفل حتى يمنع القهوة من التحرك، ويثبتها في الأسفل. صبي الإسبريسو في أكواب التقديم، وقدميها ساخنة",
                time: "20 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=TpZ2uVtMoVU"
            },
            {
                Image: require("../img/5f086508b8d56.jpg"),
                name: "القهوة التركي بالشوكولاتة",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "40",
                components:"⅔ كوب (166.6 مل) ماء\n. ½ 1 ملعقة كبيرة (15 جم) قهوة تركي\n. ملعقة صغيرة (5 جم) كاكاو\n. ملعقة صغيرة (5 جم) شوكولاتة مبشورة\n. سكر حسب الرغبة",
                view: true,
                Step:"ضعي الماء والقهوة والكاكاو والسكر والشوكولاتة في كنكة (ركوة)، وقلبي المكونات حتى تذوب\n. ضعي القهوة على نار هادئة، حتى تقترب من الغليان\n. ارفعي القهوة عن النار حتى تهدأ قليلًا، ثم أعيديها مرة أخرى حتى تظهر فقاعات على أطراف الكنكة، ويصبح لها وجه\n. ارفعي القهوة عن النار، وصبيها في الفناجين، وقدميها ساخنة",
                time: "20 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=zftgNcNZpgA"
            },
            {
                Image: require("../img/5f0865f6dccdc.jpg"),
                name: "الكابتشينو",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"¼ كوب (37.5 جم) قهوة سريعة الذوبان\n. ¼ كوب (50 جم) سكر\n. 3 ملاعق كبيرة (45 مل) ماء.\n كوب (250 مل) حليب خالي الدسم\n. كاكاو وقرفة للزينة",
                view: true,
                Step:"ضعي السكر والقهوة والماء في وعاء كبير، واخفقيها بالمضرب اليدوي لمدة ثلاث إلى خمس دقائق، حتى يتكون لديكِ خليط ناعم كالكريمة\n. ضعي الحليب على نار متوسطة، واخفقيه باستمرار حتى يغلي، وتتكون لديكِ رغوة كثيفة. وزعي الكابتشينو على كوبين، ثم وزعي الحليب بالرغوة الخاصة به، وقلبيه برفق حتى تمتزج المكونات، ثم قدميه. زيني الكابتشينو ببودرة الكاكاو والقرفة",
                time: "20 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=hiUSTyAeTSI"
            },
            {
                Image: require("../img/5f0867c5bc87c.jpg"),
                name: "اللاتيه",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"¼ كوب (37.5 جم) قهوة سريعة الذوبان\n. ¾ كوب (180 مل) ماء\n. ¾ كوب (180 مل) حليب",
                view: true,
                Step:"على نار متوسطة، ضعي القهوة والماء، واتركيهما حتى يغلي الخليط\n. على نار متوسطة، سخني الحليب، وقلبي باستمرار بالمضرب اليدوي، حتى يغلي وتتكون رغوة\n. صبي الحليب والقهوة في الأكواب بكميات متساوية، وقدميها ساخنة مع السكر",
                time: "20 min",
                categortType: 1,
                video: "https://www.youtube.com/watch?v=as0hCOWyWcs"
            },
            {
                Image: require("../img/5f086849804b5.jpg"),
                name: "موكا فرابتشينو المثلج",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"كوب (200 جم) ثلج\n. ¾ كوب (185 مل) ماء\n. ½ 1 كوب (375 مل) حليب\n. 9 ملاعق كبيرة (112.5 جم) رقائق شوكولاتة (شيبس)\n. 9 ملاعق كبيرة (135 مل) صوص شوكولاتة\n. 3 ملاعق صغيرة (15 جم) قهوة سريعة الذوبان\n. 2 ملعقة صغيرة (10 جم) فانيليا سائلة\n. كريمة مخفوقة للتزيين.",
                view: true,
                Step:"أذيبي القهوة في الماء، ثم ضعيها في الخلاط الكهربائي\n. أضيفي الثلج وست ملاعق من صوص الشوكولاتة، والحليب، ورقائق الشوكولاتة، والفانيليا، واخفقي لمدة دقيقة\n. زيني أكواب التقديم من الداخل بباقي صوص الشوكولاتة، ثم صبي الفرابتشينو، وزينيه من الأعلى بالكريمة المخفوقة وصوص الشوكولاتة",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=1wW6PS1S9gE"
            },
            {
                Image: require("../img/5f086a082e0f1.jpg"),
                name: "كراميل فرابتشينو المثلج",
                Elta7der: '5 min',
                Eltahy: "15 min",
                Elsouba: "25",
                components:"كوب (200 جم) ثلج\n. ¾ كوب (180 مل) ماء\n. ¾ كوب (180 مل) حليب مكثف ومحلى\n. ½ 1 كوب (375 مل) حليب\n. 9 ملاعق كبيرة (135 مل) صوص كراميل\n. 2 ملعقة صغيرة (10 جم) قهوة سريعة الذوبان",
                view: true,
                Step:"أذيبي القهوة في الماء، ثم ضعيها في الخلاط الكهربائي\n. أضيفي الثلج والحليب المكثف وست ملاعق من الكراميل والحليب، واخفقي لمدة دقيقة\n. زيني أكواب التقديم من الداخل بباقي صوص الكراميل، ثم صبي الفرابتشينو، وقدميه",
                time: "20 min",
                categortType: 2,
                video: "https://www.youtube.com/watch?v=qi7QxVSwtuw"
            },
        ])

    const [Category, SetCategory] = useState(
        [
            {
                id: 1,
                name: "مشروبات ساخنه",
                img: require("../img/hot.png"),
                choose: false,
                contant: "burgeeeerrrr",
                view: false,
            }
            ,
            {
                id: 2,
                name: "مشروبات بارده",
                img: require("../img/ddkdth.png"),
                choose: false,
                contant: "pizzzzzaaaa",
                view: false,
            }
           
        ]
    )

    const [IconSearch, setIconSearch] = useState(true)
    const [search, setsearch] = useState("")




    const ref = React.useRef(null)
    const [animationDisplay, setanimationDisplay] = useState(false)

    const makesearch = (searchText) => {
        let list = Food
        let count = 0

        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
                count++

            }
        }
        if (count == list.length) {
            setanimationDisplay(true)
        }

        // 
        if (count != list.length) {
            setanimationDisplay(false)

        }
        setFood(list)
        count = 0
    }


    const [CategoryReturn, setCategoryReturn] = useState([])
    const [showView, setshowView] = useState(true)
    const [indexName, setindexName] = useState()

    const chooseCategory = (index) => {
        let list = Category
        let arr = Food
        if (list[index].choose == true) {
            setshowView(true)
            list[index].choose = false

        }
        else {

            for (let i = 0; i < list.length; i++) {
                list[i].choose = false
            }
            list[index].choose = true
            setshowView(false)
            var ret = []
            for (let i = 0; i < arr.length; i++) {
                if (list[index].id == arr[i].categortType) {
                    //  let newObj={
                    //   Image: arr[i].Image,
                    //   name: arr[i].name,
                    //   view: arr[i].view,
                    //   time: arr[i].time,
                    //   Elta7der: arr[i].Elta7der,
                    //   Eltahy: arr[i].Eltahy,
                    //   Elsouba: arr[i].Elsouba,
                    //   components: arr[i].components,
                    //   Step: arr[i].Step,

                    //   }
                    //   ret.push(newObj)
                    ret.push(arr[i])
                }

            }
            // console.log(ret)
            setCategoryReturn(ret)
            // ret = []
        }
        setCategoryReturn(ret)
        SetCategory(list)
        setindexName(index)

    }

    const navigation = useNavigation();

    return (
        <>
            <View style={{ backgroundColor: COLORS.pramary, flex: 1 }}>
                <ScrollView>
                    <View style={styles.Header}>
                        <View>
                            <View></View>
                            {IconSearch ? (
                                <>
                                    <Animatable.View
                                        animation='slideInLeft' >
                                        <TouchableOpacity
                                            onPress={() => {

                                                setIconSearch(false);
                                            }}>
                                            <Ionicons name='ios-search-circle' size={60} color={COLORS.orange} />
                                        </TouchableOpacity>

                                    </Animatable.View>
                                </>
                            ) : (
                                <Animatable.View style={styles.SearchTextView}
                                    animation='flipInY' >
                                    <TextInput style={styles.SearchTextInput}
                                        placeholder={'البحث عن الأكلات...'}
                                        placeholderTextColor={COLORS.grayFont}
                                        onChangeText={(value) => {
                                            makesearch(value)

                                            setsearch(value)
                                        }}


                                        value={search} />
                                    <TouchableOpacity onPress={() => {
                                        setIconSearch(true);
                                    }}>

                                        <Ionicons name='search' size={ICONSSIZE.xlIcon} color={COLORS.pramary} />
                                    </TouchableOpacity>

                                </Animatable.View>
                            )}
                        </View>

                        <View style={styles.category_View}>
                            <ScrollView horizontal>
                                {Category.map((Category, index) =>
                                    <TouchableOpacity style={Category.choose ? styles.category_chosen_Box : styles.category_Box}
                                        onPress={() =>
                                            chooseCategory(index)

                                        }
                                    >
                                        <Image source={Category.img} style={{ width: width / 5, height: height / 12, resizeMode: "contain" }} />
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </View>
                        {showView ? (
                            <View style={styles.food_View}>
                                <View style={styles.Headerstarred}>
                                    <Text style={styles.textHeaderstarred}>
                                        الوصفات
                                    </Text>
                                    {/* <Text style={styles.textHeaderstarred2}>
رؤية الكل
</Text> */}
                                </View>
                                {animationDisplay ?
                                    (
                                        <>
                                            <View style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", width: width, height: height / 1.8 }}>
                                                <LottieView
                                                    ref={this.ref}
                                                    source={require("../lottie/search_empty.json")}
                                                    loop={true}
                                                    autoPlay={true}
                                                    speed={1.5}
                                                // style={{ alignSelf: "center" }}
                                                />
                                            </View>
                                        </>
                                    ) : (
                                        <>
                                            {Food.map((item, index) =>
                                                item.view ? (
                                                    <View style={styles.meal_View}>
                                                        <Image source={item.Image} style={styles.meal_image}
                                                            resizeMode={"cover"} />
                                                        <View style={{ width: width / 2.4, height: height / 12,alignItems: "flex-start", justifyContent: "center" }}>
                                                            <Text style={styles.meal_name}>
                                                                {item.name}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.view_time}>
                                                            <Text style={styles.text_time}>
                                                                {item.time}
                                                            </Text>
                                                            <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                                                        </View>
                                                        <View style={styles.option_view}>
                                                            <TouchableOpacity
                                                                onPress={() => {
                                                                    navigation.navigate("Photo_page", {
                                                                        name: item
                                                                    })
                                                                }
                                                                }
                                                                style={styles.button_option}>
                                                                <Text style={styles.button_text}>
                                                                    الطريقة
                                                                </Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity onPress={() => {
                                                                navigation.navigate("WbeView", {
                                                                    name: item
                                                                })
                                                            }
                                                            }
                                                                style={styles.button_option}>
                                                                <Text style={styles.button_text}>
                                                                    الفيديو
                                                                </Text>
                                                            </TouchableOpacity>

                                                        </View>


                                                    </View>

                                                ) : (
                                                    null
                                                )



                                            )}
                                        </>
                                    )}



                            </View>
                        ) : (
                            <View style={styles.food_View}>
                                <View style={styles.Headerstarred}>
                                    <Text style={styles.textHeaderstarred}>
                                        {Category[indexName].name}
                                    </Text>
                                    {/* <Text style={styles.textHeaderstarred2}>
                  رؤية الكل
                </Text> */}
                                </View>
                                {CategoryReturn.map((items, index) =>
                                    <View style={styles.meal_View}>
                                        <Image source={items.Image} style={styles.meal_image}
                                            resizeMode={"cover"} />
                                                        <View style={{ width: width / 2.4, height: height / 12,alignItems: "flex-start", justifyContent: "center" }}>
                                            <Text style={styles.meal_name}>
                                                {items.name}
                                            </Text>
                                        </View>
                                        <View style={styles.view_time}>
                                            <Text style={styles.text_time}>
                                                {items.time}
                                            </Text>
                                            <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                                        </View>
                                        <View style={styles.option_view}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate("Photo_page", {
                                                        name: items
                                                    })
                                                }
                                                }
                                                style={styles.button_option}>
                                                <Text style={styles.button_text}>
                                                    الطريقة
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button_option}>
                                                <Text style={styles.button_text}>
                                                    الفيديو
                                                </Text>
                                            </TouchableOpacity>

                                        </View>


                                    </View>





                                )}
                            </View>
                        )}

                    </View>
                    <View style={{ height: 55 }}></View>
                </ScrollView>
            </View>


        </>
    )

}


const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.pramary,
        alignItems: "center",
        flex: 1,

    },

    SearchTextView: {
        backgroundColor: COLORS.white,
        width: width / 1.1,
        // height: height / 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.smRadius,
        marginVertical: MARGIN.xxsMargin,

        // borderWidth: 1,
        // borderColor: COLORS.orange,
        // paddingHorizontal: PADDING.xsPadding,
        // fontSize: FONTS.h,
        flexDirection: "row"

    },
    SearchTextInput: {
        // backgroundColor: COLORS.white,
        width: width / 1.4,
        // height: height / 17,
        alignItems: "center",
        alignSelf: "center",
        // backgroundColor:COLORS.black,
        color: COLORS.black,
        justifyContent: "flex-end",
        fontFamily: "Generator Black",
        // borderRadius: RADIUS.lgRadius,
        // borderWidth: 2,
        // borderColor: COLORS.orange,
        paddingHorizontal: PADDING.smPadding,
        fontSize: FONTS.h4
        // marginVertical: MARGIN.xsMargin

    },
    category_View: {
        height: height / 10,
        width: width / 2,
        alignItems:"center",
        alignSelf:"flex-start",
        // backgroundColor:"#000",
        flexDirection: "row",
        marginTop: MARGIN.xxsMargin
    },
    category_Box: {
        width: width / 4.5,
        height: height / 11,
        padding: PADDING.xsPadding,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.pramary50,
        marginLeft: 5,
        borderRadius: RADIUS.xsRadius
    },
    category_chosen_Box: {
        width: width / 4.5,
        height: height / 11,
        padding: PADDING.xsPadding,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.warning,
        marginLeft: 5,
        borderRadius: RADIUS.xsRadius
    }
    ,
    food_View: {
        width: width,
        backgroundColor: COLORS.pramary,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: PADDING.xsPadding,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: MARGIN.xxsMargin
    }
    ,
    Headerstarred: {
        width: width / 1.05,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center"
    },
    textHeaderstarred: {
        fontSize: FONTS.h1,
        color: COLORS.ButtonWhite,
        // fontWeight: "bold",
        fontFamily: "Generator Black"
    },
    textHeaderstarred2: {
        fontSize: FONTS.h5,
        color: COLORS.gray,
        // fontWeight: "bold",
        fontFamily: "Generator Black"
    },
    meal_View: {
        width: width / 2.1,
        // height:height/2.5,
        alignItems: "center",
        marginVertical: MARGIN.xxsMargin,
        padding: PADDING.lgPadding,
        borderRadius: RADIUS.xxsRadius,
        backgroundColor: COLORS.pramary50
    },
    meal_image: {
        width: width / 2.4,
        height: height / 5,
        borderRadius: RADIUS.xxsRadius,
    },
    meal_name: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        textAlign: "left"
    }
    ,
    view_time: {
        width: width / 2.4,
        alignItems: "center",
        flexDirection: "row",
    },
    text_time: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    }
    ,
    option_view: {
        width: width / 2.4,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    button_option: {
        width: width / 6,
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        alignItems: "center",
        justifyContent: "center",
    },
    button_text: {
        fontSize: FONTS.h5,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    }
});
