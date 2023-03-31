import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    TextInput,
    ScrollView,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { COLORS, PADDING, MARGIN, RADIUS, FONTS, ICONSSIZE } from '../constants/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import Photo_page from '../screen/Photo_page'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';


export default function CommonDessert() {
    const [Common, setCommon] = useState(
        [
            {
                Image: require("../img/cccth.jpeg"),
                name: "بسبوسة محشيه",
                Elta7der: '5 min',
                Eltahy: "20 min",
                Elsouba: "40",
                components: "بيضتين\n1/2 كاس سكر\n1/2 كاس زيت\nعلبة قشطة\nفانيللا\nملعقه كبيره بيكنج باودر\nكاس ونصف سميد\nمكونات المهلبيه ع النار:\nكاسين ماء\n6 ملاعق حليب بودره\n4 ملاعق نشا\n4 حبات جبن كيري\nملعقتين سكر\nظرف دريم ويب + علبة قشطة قيمر",
                view: true,
                Step: "نخلط مقادير البسبوسة ونصب ثلث الكمية بصينية الفرن وتدخل حتى الاستواء.\nنخلط جميع مقادير المهلبيه عدا الدريم ويب والقشطة الى ان تثقل ثم نطفئ النار ونضع القشطة والدريم ويب ونخلط حتى يمتزج ثم تصب فوق البسبوسه.\nنضيف حليب سائل الى ماتبقى من خليط البسبوسه حتى يكون شبه سائل ويوزع فوق المهلبيه ويدخل الفرن من الأعلى حتى يشقر وتخرج وتصب شيره او حليب محلى ثم تبرد جيداً وتقدم.",
                time: "25 min",
                video: "https://www.youtube.com/watch?v=xUMtd9exdBM"
            },
            {
                Image: require("../img/54th.jpeg"),
                name: "ام علي",
                Elta7der: '10 min',
                Eltahy: "40 min",
                Elsouba: "60",
                components: "8 شرائح بف باستري اي نوع موجود\nخليــط الحليــب \n4 اكواب حليب سايل اي نوع ندى اوالمراعي\n1 علبة قشطة\n1/3 كوب حليب مكثف محلى\nخلــط المكســرات \n1 ملعقة كبيره زبدة\n2 او اكثر لوز مجروش - بندق مجروش\n3 ملاعق جوز هند \nللوجــه (فستق مجروش)\nللتغطيــة\n1 قشطة (لونا او المراعي او اي نوع)\n1 دريب ويب\n2 ملعقه كبيره حليب سائل (ملاحظة) الحيب للتغطيه يسهل عملية دمج القشطة والدريم ويب اذا تبينها ثقيله حطي ملعقتين حليب واذا خفيفه نوعاً ما زودي شوي من كمية الحليب )",
                view: true,
                Step: "ندخل البف باستري بالفرن على درجة حراره ١٨٠ من تحت حتى تأخذ اللون الذهبي ثم من الاعلى ثم نطلعها ونتركهاا تبرد وبعد ماتبرد نقصصها ااتقطيع صغير (ملاحظة البف يتحمر بسرعه اذا كان الفرن مسبق التشغيل) ثم يتم توزيع البف باستري بصينيه او صواني فخار كميةمتوسطة حتى نضع خليط المكسرات ونضع الباقي من البف باستري\nنأخذ (خليط المكسرات) بقلايه ونذوب الزبدة ونحمر المكسرات عليهاا بعد ماتتحمّر المكسرات مع الزبدة نضيف الجوز الهند بعدهاا اوزع خليط المسكرات على البف اللي وزعته بالصواني ثم نرجع نضع باقي البف باستري\nنخلط الحليب - مع القشطة - وحليب النستله المحلى مع بعض ثم نضعه على النار حتى تغلي ونصبة في على البف باستري الموزع بالتساوي ونسيقه فيه\nنخلط القشطة والدريم ويب والحليب مع بعض الى ان تتجانس ونوزعه على الوجه\nثم نضع الصينية داخل الفرن من الأعلى فقــط للتحمير وتأخذ التغطيه اللون الذهبي ",
                time: "50 min",
                video: "https://www.youtube.com/watch?v=PHPZllvsypo"
            }, {
                Image: require("../img/110cbf893a9f3a68f23dccb19d2dd6e8_w750_h500.jpg"),
                name: "السينابون",
                Elta7der: '10 min',
                Eltahy: "50 min",
                Elsouba: "25",
                components: "- طحين : 4 اكواب\n- حليب : نصف كوب (دافئ)\n- خميرة : 4 ملعقة صغيرة\n- سكر : ملعقة كبيرة\n- الزبدة : ربع كوب\n- البيض : 1 حبة\n- سكر : ربع كوب\n- ملح : ملعقة صغيرة",
                view: true,
                Step: "ضعي الخميرة على الحليب الدافئ وملعقة السكر في كوب، وقلبي جيداً.\nضعي كل المكونات الأخرى في وعاء كبير الحجم، وقلبي جيداً.\nأضيفي كوب الخميرة والحليب على مكونات عجينة السينابون، ثم اعجني العجينة جيداً حتى تصبح ناعمة الملمس.\nاتركي العجينة حتى تختمر، ثم شكليها واحشيها.",
                time: "1 h",
                video: "https://www.youtube.com/watch?v=uz1r7fhg9A8"
            },
            {
                Image: require("../img/cf82378b48898b67305548b733e72ea7_w750_h500.jpeg"),
                name: "كنافة بالمهلبية",
                Elta7der: '10 min',
                Eltahy: "50 min",
                Elsouba: "25",
                components: "- عجينة الكنافة الشعر : 400 غراماً\n- سكر : 5 ملاعق كبيرة\n- الزبدة : 60 غراماً\n- الزبدة : 5 ملاعق كبيرة (للمهلبية)\n- دقيق : نصف كوب (للمهلبية)\n- حليب : 4 اكواب (سائل / للمهلبية)\n- كريمة : نصف كوب (سائلة للحلويات / للمهلبية)\n- حليب بودرة : 2 ملعقة كبيرة (للمهلبية)\n- سكر : نصف كوب (للمهلبية)",
                view: true,
                Step: "في قدر على النار نضع الزبدة والسكر وننتظر حتى تذوب الزبدة ثم نضع الكنافة ونستمر بالتقليب حتى يتغير لونها ويصبح أشقر ثم نضعها جانباً.\nفي قدر آخر على النار نضع الزبدة ونتركها حتى تذوب ثم نزود الدقيق ونحرك حتى تصبح عجينة ثم نضيف جميع كمية الحليب بالتدريج مع التحريك باستمرار.\nنضيف السكر والحليب البودرة والكريمة السائلة على خليط الحليب ونستمر بالتحريك حتى يسخن الخليط ويثخن.\nفي بايركس نضع طبقة أولى من الكنافة ونرصها جيداً ثم نضع كمية المهلبية ثم نضع على الوجه طبقة أخرى من الكنافة ونتركها جانباً حتى تبرد ثم ندخلها الثلاجة لمدة ٤ ساعات.\nتزين بالفستق الحلبي والحليب المكثف المحلى.",
                time: "1 h",
                video: "https://www.youtube.com/watch?v=IenYZRMfwzQ"
            },
            {
                Image: require("../img/baalawa-choco.jpg"),
                name: "البقلاوة بالشوكولاتة",
                Elta7der: '10 min',
                Eltahy: "50 min",
                Elsouba: "30",
                components: "- طحين : 1 كيلو\n- ملح : 25 غراماً\n- السمنة : 25 غراماً\n- الماء : 600 غراماً\n- الكاكاو : 50 غم\n- النشاء : 100 غراماً\n- كاجو : 1 كيلو (مفروم ناعم)\n- النشاء : 100 غراماً",
                view: true,
                Step: "1. يخلط الطحين مع الماء والملح بشكل جيد، ومن ثم يضاف إلى العجينة السمنة والكاكاو، وتخلط العجينة مرّة أخرى حتى تصبح متماسكة.\n2. تقطّع العجينة الى 13 قطعة، ونضع على كل قطعة القليل من النشاء (المذوّب بالماء).\n3. ترقّ كل عجينة على حدة على شكل رغيف من الخبز، وتوضع فوق بعضها (وبين كل طبقة من العجين نرشّ القليل من النشاء حتى لا تلتصق ببعضها) ويجب ألا ننسى حشو الطبقات بالكاجو المفروم.\n4. توضع العجينة في صينية كبيرة وتقطّع إلى قطع صغيرة ومتجانسة، ويوضع عليها السمنة وتدخل إلى الفرن على درجة حرارة 200 مئوية حتى يصبح لونها ذهبياً.\n5. عندما تخرج من الفرن، نرشّ عليها القطر وتقدّم عندما تبرد.",
                time: "1 h",
                video: "https://www.youtube.com/watch?v=yjGdMMBaZ1o"
            },
            {
                Image: require("../img/009c0351d12fbec8a9d304db2a97ee47_w750_h500.jpg"),
                name: "بلح الشام",
                Elta7der: '5 min',
                Eltahy: "25 min",
                Elsouba: "30",
                components: "- لتحضير العجينة :\nدقيق : كوب وثلثا الكوب\nالبيض : 5 حبات\nالماء : كوب وثلث\nالزيت النباتي : ثلث كوب\n- لتحضير القطر :\nالماء : كوب ونصف\nسكر : 3 اكواب\nعصير الليمون : 2 ملعقة صغيرة (حامض)\nماء الزهر : ملعقة كبيرة\n- الزيت النباتي : 4 اكواب (للقلي)",
                view: true,
                Step: "لتحضير القطر: ضعي الماء والسكر في قدر على النار واتركيهم حتى الغليان، ثمّ خففي النار، أضيفي عصير الليمون الحامض وماء الزهر واتركيهم لدقيقتين إضافيتين، ثم ارفعي القطر عن النار ودعيه ليبرد.\nلتحضير العجينة: ضعي الماء في قدر مع الزيت النباتي واتركيهما حتى الغليان.\nأضيفي الدقيق واعجني المكونات بملعقة خشبية حتى تتماسك.\nارفعي القدر عن النار واتركي العجينة حتى تبرد.\nأضيفي البيض، واحدة تلو الأخرى، مع التقليب.\nسخّني الزيت في مقلاة عميقة.\nضعي العجينة في كيس حلويات ذي رأس عريض وشكّليها على هيئة أصابع طويلة، وحمّريها في الزيت الساخن ثمّ ارفعيها عن النار.\nضعي بلح الشام في القطر البارد، ثمّ ارفعيه منه وقدّميه.",
                time: "30 min",
                video: "https://www.youtube.com/watch?v=wDuGXAZa4rM"
            },
            {
                Image: require("../img/0849c2d982feb7746395b9aefc19ae95_w750_h500.png"),
                name: "كريب بالنوتيلا بدون بيض",
                Elta7der: '10 min',
                Eltahy: "30 min",
                Elsouba: "30",
                components: "- حليب : نصف كوب\n- الماء : ثلاث أرباع الكوب\n- الزبدة : 3 ملاعق كبيرة (مذابة)\n- الفانيليا : ملعقة صغيرة\n- طحين : كوب\n- سكر : ملعقة كبيرة\n- ملح : ربع ملعقة صغيرة\n- الزيت النباتي : ملعقة كبيرة\n- شوكولاتة نيوتيلا : نصف كوب\n- بندق : ربع كوب (مفروم خشن)",
                view: true,
                Step: "في وعاء متوسط الحجم، ضعي الحليب، الماء، الزبدة والفانيليا ثم اخلطي المكونات حتى تتجانس.\nاخلطي في وعاء آخر كل من الدقيق، السكر والملح لتتداخل المكونات جيداً.\nأضيفي مزيج الحليب إلى الخليط ثم اخفقي المكونات جيداً بواسطة خفاق يدوي حتى تحصلي على مزيج متجانس.\nغطي وعاء المزيج ثم أدخليه لمدة ساعتين إلى الثلاجة.\nحمي مقلاة غير لاصقة على النار، اسكبي مقدار ملعقتان كبيرتان في الوسط ثم اتركي العجينة حتى تظهر فقاعات على وجهها.\nاقلبي العجينة على الجهة الثانية ثم اتركيها حتى تصبح ذهبية اللون.\nأعيدي الكرة حتى انتهاء الكمية.\nادهني الشوكولاتة النوتيلا على الكريب وزيني بالبندق وقدميه",
                time: "40 min",
                video: "https://www.youtube.com/watch?v=N6mV52NZwjc"
            },
            {
                Image: require("../img/6ee204c5e7eb449d46886057bfd8fdaa_w750_h500.jpg"),
                name: "كنافة بالمكسرات",
                Elta7der: '10 min',
                Eltahy: "30 min",
                Elsouba: "50",
                components: "- لتحضير الكنافة :\nعجينة كنافة : 500 غراماً\nالزبدة : ربع كوب (أو سمن)\nسكر البودرة : ملعقة صغيرة\n- لتحضير الحشوة :\nمكسرات : حسب الرغبة (لوز، بندق، فول سوداني أو أي نوع من المكسرات)\nالقرفة : ملعقة صغيرة (مطحونة)\nسكر : ملعقة صغيرة\nجوز الهند : ملعقة كبيرة\nزبيب : حسب الرغبة\n- لتحضير الشيرة :\nسكر : كوبان ونصف\nالماء : 3 اكواب\nالزبدة : ملعقة صغيرة (أو سمن)\nالفانيليا : رشّة",
                view: true,
                Step: "لتحضير الكنافة: حمّي الفرن على حرارة 200 درجة مئوية.\nفي وعاء، افركي الكنافة جيداً.\nأضيفي إليها الزبدة (أو السمن) المذوّبة والسكر ووزعيها جيداً.\nلتحضير الحشوة: في وعاء آخر، اخلطي جميع المكسرات معاً.\nأضيفي فوقها السكر والقرفة وجوز الهند والزبيب.\nادهني صينية بالزيت ثم ضعي فيها نصف كمية الكنافة.\nضعي فوق الكنافة مزيج المكسرات ثمّ طبقة من كمية الكنافة المتبقية.\nأدخلي الصينية إلى الفرن إلى أن يصبح وجه الكنافة ذهبيّ اللوّن.\nلتحضير الشيرة (القطر): في قدر، ضعي السكر والماء والزبدة (أو السمن) والفانيليا.\nاتركي المزيج على النار إلى أن يغلي.\nضعي الشيرة جانباً حتى تبرد.\nأخرجي صينية الكنافة فوراً من الفرن وهي لا تزال ساخنة، واسكبي عليها الشيرة وقدّميها.",
                time: "40 min",
                video: "https://www.youtube.com/watch?v=wpjyQyf-Mh8"
            },
            {
                Image: require("../img/4b30d44fc3e59d1e825b724c6047d702_w750_h500.jpg"),
                name: "كب كيك كوكيز",
                Elta7der: '10 min',
                Eltahy: "30 min",
                Elsouba: "30",
                components: "- طحين : كوب وثلاثة ارباع الكوب\n- ملح : نصف ملعقة صغيرة\n- بيكنج صودا : ملعقة صغيرة\n- الزبدة : نصف كوب (مذابة)\n- سكر : نصف كوب (أبيض)\n- زبدة الفول السوداني : نصف كوب\n- السكر البني : نصف كوب\n- البيض : 1 حبة (مخفوق)\n- مستخلص الفانيليا : ملعقة صغيرة\n- حليب : 2 ملعقة كبيرة",
                view: true,
                Step: "حمّي الفرن على درجة حرارة 180 مئوية.\nفي وعاء، نخلّي الطحين، والملح، والبيكنج صودا، واتركيه جانباً.\nاخفقي الزبدة مع السكر، وزبدة الفول السوداني، والسكر البني، جيداً حتى تتجانس المكونات.\nأضيفي البيض، والفانيليا، والحليب مع الخفق باستمرار.\nأضيفي خليط الطحين واستمري في الخفق.\nاصنعي من الخليط كرات متساوية في الحجم، وضعي كل واحدة في كوب من أكواب قالب ميني مافن غير مدهون.\nاخبزي القالب في الفرن لمدة 8 دقائق.\nأخرجي القالب من الفرن، واتركيه جانباً حتى يبرد ثم قدميه",
                time: "40 min",
                video: "https://www.youtube.com/watch?v=DojBA7kGbZ0"
            },

            {
                Image: require("../img/cd69ebce4a01358cf8aa3a9b0c035949_w750_h500.jpg"),
                name: "زبدة الفول السوداني",
                Elta7der: '5 min',
                Eltahy: "20 min",
                Elsouba: "30",
                components: "- الفول السوداني : 2 كوب (غير مملح)",
                view: true,
                Step: "حمّي الفرن على درجة حرارة 180 مئوية.\nحضري صينية فرن ووزعي بها الفول السوداني، ثم أدخلي الصينية إلى الفرن لمدة 10 دقائق حتى يصبح الفول ذهبي اللون.\nفي وعاء الخلاط الكهربائي، ضعي الفول السوداني وهو دافئ دون أي إضافات، ثم اطحنيه حتى يصبح ناعم القوام.\nاحفظي زبدة الفول السوداني في وعاء زجاجي لحين الاستخدام",
                time: "25 min",
                video: "https://www.youtube.com/watch?v=0U8J8-dLm34"
            },
            {
                Image: require("../img/bc0ab7efdd9f05b3cb96d4b91c6d8700_w750_h500.jpg"),
                name: "كيك الشوكولاتة بكريمة الفدج",
                Elta7der: '10 min',
                Eltahy: "90 min",
                Elsouba: "50",
                components: "- دقيق : كوبان وثلث الكوب\n- سكر : ثلاث أرباع الكوب\n- الزبدة : ثلاث أرباع الكوب (مذوبة)\n- زيت الذرة : نصف كوب\n- الكريما الحامضة : نصف كوب (ساور كريم)\n- السكر البني : ثلث كوب\n- الكاكاو : ربع كوب (خام)\n- البيض : 3 حبات\n- الفانيليا : ملعقة كبيرة (سائلة)\n- بيكنج بودر : 2 ملعقة صغيرة\n- بيكنج صودا : ملعقة صغيرة\n- ملح : نصف ملعقة صغيرة\n- رقائق الشوكولاته : ثلاث أرباع الكوب\n- سكر البودرة : كوب وثلاثة ارباع الكوب\n- الزبدة : كوب (بدرجة حرارة الغرفة)\n- الفانيليا : ملعقة كبيرة (سائلة)",
                view: true,
                Step: "1. لتحضير الفدج: على بخار مائي، ضعي رقائق الشوكولاتة، وقلبيها حتى تذوب، ثم ارفعيها واتركيها جانباً.\n2. في وعاء كبير، ضعي الزبدة، واخفقيها بالمضرب الكهربائي لمدة 3 دقائق.\n3. أضيفي السكر تدريجياً، مع الاستمرار بالخفق، حتى يصبح القوام كالكريمة.\n4. أضيفي الفانيليا والشوكولاتة، واخفقي حتى تختلط المكونات تماماً، ثم ضعيها في الثلاجة لحين تحضير الكيك.\n5. لتحضير الكيك: سخني الفرن عند درجة حرارة 180.\n6. في وعاء كبير، ضعي الدقيق والسكر بنوعيه والكاكاو والبيكنج باودر وبيكربونات الصودا والملح، وقلبي جيداً.\n7. في وعاء آخر، ضعي البيض والساور كريم والفانيليا، واخفقي بالمضرب الكهربائي، حتى تختلط المكونات.\n8. في وعاء آخر، ضعي الزيت والزبدة المذابة، واخفقي بالمضرب الكهربائي، حتى يختلطا تماماً.\n9. أضيفي خليط الدقيق إلى الزيت، واخفقي جيداً، ثم أضيفي خليط البيض واخفقي جيداً.\n10. صبي العجين في صينية مدهونة بالزبدة ومرشوشة بالقليل من الكاكاو.\n11. ضعي الصينية في الفرن لمدة 45 – 50 دقيقة، ثم أخرجيها واتركيها تبرد تماماً.\n12. اقطعي الكيك بالعرض من المنتصف، ثم ضعي ربع كمية الفدج في المنتصف، ثم زينيها من الأعلى والجوانب بباقي الفدج.",
                time: "1 h 40 min",
                video: "https://www.youtube.com/watch?v=eWOT3n6eSOc"
            },
            {
                Image: require("../img/flkth.jpeg"),
                name: "القطايف بالمكسرات",
                Elta7der: '5 min',
                Eltahy: "25 min",
                Elsouba: "25",
                components: "- للقطر :\nالماء : كوب\nسكر : 2 كوب\nعصير الليمون : ملعقة كبيرة\n- الجوز : نصف كيلو (مفروم)\n- زبيب : ربع كيلو\n- سكر : ملعقة كبيرة\n- القرفة : ملعقة صغيرة (مطحونة)\n- الزبدة : ملعقة كبيرة\n- القطايف : حسب الحاجة\n- الزيت : غزير (للقلي)",
                view: true,
                Step: "اخلطي الجوز مع الزبيب في طبق، وأضيفي السكر، والقرفة المطحونة.\nأضيفي الزبدة، وقلبي المكونات جيداً حتى تتجانس.\nاحشي القطايف بالحشوة.\nلتحضير القطر: في قدر صغيرة على النار صبي الماء، ثم أضيفي السكر، واتركي المكونات لتغلي وعند الغليان أضيفي عصير الليمون.\nسخني زيت غزير في مقلاة على النار، واقلي حبات القطايف حتى تتحمر، وانقليها فوراً للقطر البارد.\nقدمي القطايف ساخناً أو دافئاً",
                time: "30 min",
                video: "https://www.youtube.com/watch?v=sEzUAeiuFZ0"
            },
            {
                Image: require("../img/dddfgghth.jpeg"),
                name: "المهلبية بالمكسرات",
                Elta7der: '10 min',
                Eltahy: "50 min",
                Elsouba: "25",
                components: "- القشطة : 600 ملليلتر\n- حليب : كوب\n- الشوكولاتة البيضاء : 180 غم\n- السكر الناعم : ربع كوب\n- جيلاتين : 6 ورقات (أو 3 ملعقة صغيرة من الجيلاتين)\n- ماء الورد : ملعقة كبيرة (أو الورد)",
                view: true,
                Step: "1. ضعي الحليب والقشطة في قدر على النار وأضيفي الورد وحبات الهيل.\n2. ثم أضيفي السكر، وحركي حتى الغليان.\n3. ثم أضيفي الشوكولاتة البيضاء والجيلاتين.\n4. صفي المزيج بالمصفاة.\n5. وصبي خليط المهلبية بأطباق التقديم.",
                time: "1 h",
                video: "https://www.youtube.com/watch?v=iMclG8Jt36E"
            },
            {
                 Image: require("../img/884972e5a924823e4c6fa80c6b6ddf3b_w750_h500.jpg"),
                name: "كنافة بالمانجو",
                Elta7der: '10 min',
                Eltahy: "30 min",
                Elsouba: "50",
                components: "- الكنافة : 500 غراماً\n- شيرة : كوب\n- سمن : 500 غراماً (مذوب)\n- عصير المانغو : 3 اكواب\n- كريمة : 3 اكواب (مخفوقة)\n- مانغو : 4 حبات (مقشرة ومقطعة مكعبات)",
                view: true,
                Step: "1. اخلطي عجينة الكنافة مع السمن المذوب جيداً ثم افردي الكنافة في الصينية وأدخليها الفرن على حرارة 180 درجة لمدة 20 دقيقة حتى تتحمص.\n2. ازيلي الكنافة من الفرن وقطعيها باليد حتى تصبح مفتتة.\n3. ضعي في طبق زجاجي عميق للتقديم طبقة من الكنافة المفتتة.\n4. أضيفي عصير المانجو وكمية من الكريمة المخفوقة وكمية من المانجو.\n5. ضعي فوقها طبقة من الكنافة وأعيدي الكرة لعمل طبقتين أو ثلاث حسب الرغبة.\n6. أدخلي الطبق للثلاجة لحين التقديم.",
                time: "40 min",
                video: "https://www.youtube.com/watch?v=D-UjCw-tmCs"
            },

        ]
    )
    const [star, setstar] = useState(
        [
            {
                Image: require("../img/6ee204c5e7eb449d46886057bfd8fdaa_w750_h500.jpg"),
                name: "كنافة بالمكسرات",
                Elta7der: '10 min',
                Eltahy: "30 min",
                Elsouba: "50",
                components: "- لتحضير الكنافة :\nعجينة كنافة : 500 غراماً\nالزبدة : ربع كوب (أو سمن)\nسكر البودرة : ملعقة صغيرة\n- لتحضير الحشوة :\nمكسرات : حسب الرغبة (لوز، بندق، فول سوداني أو أي نوع من المكسرات)\nالقرفة : ملعقة صغيرة (مطحونة)\nسكر : ملعقة صغيرة\nجوز الهند : ملعقة كبيرة\nزبيب : حسب الرغبة\n- لتحضير الشيرة :\nسكر : كوبان ونصف\nالماء : 3 اكواب\nالزبدة : ملعقة صغيرة (أو سمن)\nالفانيليا : رشّة",
                view: true,
                Step: "لتحضير الكنافة: حمّي الفرن على حرارة 200 درجة مئوية.\nفي وعاء، افركي الكنافة جيداً.\nأضيفي إليها الزبدة (أو السمن) المذوّبة والسكر ووزعيها جيداً.\nلتحضير الحشوة: في وعاء آخر، اخلطي جميع المكسرات معاً.\nأضيفي فوقها السكر والقرفة وجوز الهند والزبيب.\nادهني صينية بالزيت ثم ضعي فيها نصف كمية الكنافة.\nضعي فوق الكنافة مزيج المكسرات ثمّ طبقة من كمية الكنافة المتبقية.\nأدخلي الصينية إلى الفرن إلى أن يصبح وجه الكنافة ذهبيّ اللوّن.\nلتحضير الشيرة (القطر): في قدر، ضعي السكر والماء والزبدة (أو السمن) والفانيليا.\nاتركي المزيج على النار إلى أن يغلي.\nضعي الشيرة جانباً حتى تبرد.\nأخرجي صينية الكنافة فوراً من الفرن وهي لا تزال ساخنة، واسكبي عليها الشيرة وقدّميها.",
                time: "40 min",
                video: "https://www.youtube.com/watch?v=wpjyQyf-Mh8"
            },
            {
                Image: require("../img/flkth.jpeg"),
                name: "القطايف بالمكسرات",
                Elta7der: '5 min',
                Eltahy: "25 min",
                Elsouba: "25",
                components: "- للقطر :\nالماء : كوب\nسكر : 2 كوب\nعصير الليمون : ملعقة كبيرة\n- الجوز : نصف كيلو (مفروم)\n- زبيب : ربع كيلو\n- سكر : ملعقة كبيرة\n- القرفة : ملعقة صغيرة (مطحونة)\n- الزبدة : ملعقة كبيرة\n- القطايف : حسب الحاجة\n- الزيت : غزير (للقلي)",
                view: true,
                Step: "اخلطي الجوز مع الزبيب في طبق، وأضيفي السكر، والقرفة المطحونة.\nأضيفي الزبدة، وقلبي المكونات جيداً حتى تتجانس.\nاحشي القطايف بالحشوة.\nلتحضير القطر: في قدر صغيرة على النار صبي الماء، ثم أضيفي السكر، واتركي المكونات لتغلي وعند الغليان أضيفي عصير الليمون.\nسخني زيت غزير في مقلاة على النار، واقلي حبات القطايف حتى تتحمر، وانقليها فوراً للقطر البارد.\nقدمي القطايف ساخناً أو دافئاً",
                time: "30 min",
                video: "https://www.youtube.com/watch?v=sEzUAeiuFZ0"
            },
            {
                Image: require("../img/dd850b85666ae50c645ad350edae99b7_w750_h500.jpg"),
                name: "قطايف بالفستق الحلبي",
                Elta7der: '10 min',
                Eltahy: "25 min",
                Elsouba: "40",
                components: "- القطايف : 500 غراماً\n- فستق حلبي : نصف كوب (مفروم ناعم)\n- ماء الزهر : ملعقة كبيرة\n- سكر البودرة : ملعقة كبيرة\n- شيرة : 2 كوب\n- السمنة : 2 ملعقة كبيرة (مذابة)\n- مستكة : ربع ملعقة صغيرة (مطحونة)",
                view: true,
                Step: "اخلطي الفستق الحلبي مع المستكة والسكر البودرة وماء الزهر.\nاحشي حبات القطايف بكمية وافرة من المزيج.\nادهني صينية فرن بالقليل من السمن.\nادهني القطايف المحشية بالسمن المذاب بواسطة فرشاة.\nأدخلي الصينية للفرن على حرارة 180 درجة لمدة 25 دقيقة حتى تصبح القطايف ذهبية اللون ومقرمشة.\nضعي القطايف الساخنة في القطر البارد وقدميها ساخنة.",
                time: "1 h",
                video: "https://www.youtube.com/watch?v=1lu_tCNbzsw"
            },
            {
                Image: require("../img/kollaj.jpg"),
                name: "الكلاج بالقشطة",
                Elta7der: '5 min',
                Eltahy: "25 min",
                Elsouba: "25",
                components: "- عجينة الكلاج : 12 حبة\n- القشطة : 1 كيلو (طازجة)\n- حليب : نصف لتر (طازج)\n- فستق حلبي : حسب الرغبة (للزينة)\n- سكر : كوبان (القطر)\n- الماء : كوب (القطر)\n- ماء الزهر : ملعقة (القطر)\n- ماء الورد : ملعقة (القطر)\n- عصير الليمون : ربع ملعقة (القطر)",
                view: true,
                Step: "1. تفرد عجينة الكلاج على طاولة التحضير وتضاف القشطه الطازجة  حوالي 80 غرام في وسط العجينة  وتغلق العجينة من اليمين واليسار وتلف بشكل مستطيل. وتلف باقي الكمية بنفس الطريقة.\n2. في وعاء يسكب الحليب الطازج ثم تغمس قطع الكلاج بالحليب لمدة نصف دقيقة وتقلى بزيت حامي حتى تحمر وتأخذ لونا ذهبيا. ترفع قطع الكلاج المقلية من النار وتضاف إلى القطر البارد وتترك لمدة عشر دقائق.\n3. تصفى قليلا من القطر وتزيين بالفستق وتقدم ساخنة.\n4. القطر: يوضع السكر والماء على النار ويترك ليغلي قليلا يضاف عصير الحامض وماء الزهر والورد ويترك على حده ليبرد.",
                time: "30 min",
                video: "https://www.youtube.com/watch?v=9WRZoRISal4"
            },
            {
                Image: require("../img/dddfgghth.jpeg"),
                name: "المهلبية بالمكسرات",
                Elta7der: '10 min',
                Eltahy: "50 min",
                Elsouba: "25",
                components: "- القشطة : 600 ملليلتر\n- حليب : كوب\n- الشوكولاتة البيضاء : 180 غم\n- السكر الناعم : ربع كوب\n- جيلاتين : 6 ورقات (أو 3 ملعقة صغيرة من الجيلاتين)\n- ماء الورد : ملعقة كبيرة (أو الورد)",
                view: true,
                Step: "1. ضعي الحليب والقشطة في قدر على النار وأضيفي الورد وحبات الهيل.\n2. ثم أضيفي السكر، وحركي حتى الغليان.\n3. ثم أضيفي الشوكولاتة البيضاء والجيلاتين.\n4. صفي المزيج بالمصفاة.\n5. وصبي خليط المهلبية بأطباق التقديم.",
                time: "1 h",
                video: "https://www.youtube.com/watch?v=iMclG8Jt36E"
            },
            {
                Image: require("../img/884972e5a924823e4c6fa80c6b6ddf3b_w750_h500.jpg"),
                name: "كنافة بالمانجو",
                Elta7der: '10 min',
                Eltahy: "30 min",
                Elsouba: "50",
                components: "- الكنافة : 500 غراماً\n- شيرة : كوب\n- سمن : 500 غراماً (مذوب)\n- عصير المانغو : 3 اكواب\n- كريمة : 3 اكواب (مخفوقة)\n- مانغو : 4 حبات (مقشرة ومقطعة مكعبات)",
                view: true,
                Step: "1. اخلطي عجينة الكنافة مع السمن المذوب جيداً ثم افردي الكنافة في الصينية وأدخليها الفرن على حرارة 180 درجة لمدة 20 دقيقة حتى تتحمص.\n2. ازيلي الكنافة من الفرن وقطعيها باليد حتى تصبح مفتتة.\n3. ضعي في طبق زجاجي عميق للتقديم طبقة من الكنافة المفتتة.\n4. أضيفي عصير المانجو وكمية من الكريمة المخفوقة وكمية من المانجو.\n5. ضعي فوقها طبقة من الكنافة وأعيدي الكرة لعمل طبقتين أو ثلاث حسب الرغبة.\n6. أدخلي الطبق للثلاجة لحين التقديم.",
                time: "40 min",
                video: "https://www.youtube.com/watch?v=D-UjCw-tmCs"
            },
            {
                Image: require("../img/c7a0a60c91ebac9bd353c0ea4df20e58_w750_h500.jpg"),
                name: "بان كيك بالشوكولاتة",
                Elta7der: '5 min',
                Eltahy: "30 min",
                Elsouba: "20",
                components: "- حليب : كوب\n- البيض : 1 حبة\n- الزبدة : 2 ملعقة كبيرة (مذوبة)\n- طحين : كوب\n- بودرة الكاكاو : نصف كوب\n- سكر : ربع كوب\n- بيكنج صودا : نصف ملعقة صغيرة\n- ملح : نصف ملعقة صغيرة\n- سكر البودرة : 3 ملاعق كبيرة",
                view: true,
                Step: "1. اخلطي الحليب والبيض والزبدة المذوبة في عاء حتى تمتزج المكونات جيداً.\n2. اخلطي الطحين والكاكاو البودرة والسكر والبيكنج صودا والملح في وعاء آخر.\n3. أضيفي خليط الحليب والبيض لخليط الطحين والكاكاو وحركي حتى تمتزج المكونات.\n4. سخني مقلاة على نار متوسطة.\n5. ضعي كمية من خليط البان كيك وحمريها لمدة دقيقتين على كل وجه.\n6. زيني البان كيك بالسكر البودرة أو الفواكة أو المربى حسب الرغبة.",
                time: "35 min",
                video: "https://www.youtube.com/watch?v=xOYp_CWgk7E"
            },

        ]
    )

    const [IconSearch, setIconSearch] = useState(true)
    const [search, setsearch] = useState("")

    const ref = React.useRef(null)
    const [animationDisplay, setanimationDisplay] = useState(false)

    const makesearch = (searchText) => {
        let list = Common
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
        setCommon(list)
        count = 0
    }
    const navigation = useNavigation();


    return (
        <>
            <View style={{ backgroundColor: COLORS.pramary, flex: 1 }}>
                <ScrollView>
                    <View style={styles.Header}>
                        <View>
                            <View style={{}}>
                            </View>

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
                                        placeholder={'البحث عن الحلويات...'}
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

                        <View style={styles.BoxView}>
                            <View style={styles.Headerstarred}>
                                <Text style={styles.textHeaderstarred}>
                                    الشائع
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("All", {
                                            name: Common
                                        })
                                    }
                                    }>
                                    <Text style={styles.textHeaderstarred2}>
                                        رؤية الكل
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", width: width, }}>
                                <ScrollView horizontal={true}>
                                    {animationDisplay ? (
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
                                            {Common.map((item, index) => (
                                                item.view ? (

                                                    <View style={styles.Box}>
                                                        <Image source={item.Image} style={styles.ImageTabs2}
                                                            resizeMode={"cover"} />
                                                        <View style={styles.TextViewBox}>
                                                            <Text style={styles.TextBox}>
                                                                {item.name}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.TextTimeBox}>
                                                            <Text style={styles.TimeBox}>
                                                                {item.time}
                                                            </Text>
                                                            <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                                                        </View>
                                                        <View style={styles.OptionBox}>
                                                            <TouchableOpacity
                                                                onPress={() => {
                                                                    navigation.navigate("Photo_page", {
                                                                        name: item
                                                                    })
                                                                }
                                                                }
                                                                style={styles.OptionButtonBox}>
                                                                <Text style={styles.OptionTimeBox}>
                                                                    الطريقة
                                                                </Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity onPress={() => {
                                                                navigation.navigate("WbeView", {
                                                                    name: item
                                                                })
                                                            }
                                                            } style={styles.OptionButtonBox}>
                                                                <Text style={styles.OptionTimeBox}>
                                                                    الفيديو
                                                                </Text>
                                                            </TouchableOpacity>

                                                        </View>


                                                    </View>
                                                ) : (null)

                                            ))}
                                        </>
                                    )
                                    }

                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.starred}>
                            <View style={styles.Headerstarred}>
                                <Text style={styles.textHeaderstarred}>
                                    المميزة
                                </Text>
                                {/* <Text style={styles.textHeaderstarred2}>
                                    رؤية الكل
                                </Text> */}
                            </View>
                            {star.map((item, index) => (
                                <View style={styles.Boxstarred}>
                                    <View style={styles.ViewImage}>
                                        <Image source={item.Image} resizeMode={"cover"} style={styles.Imagestarred} />
                                    </View>
                                    <View style={styles.BoxTextStarred}>
                                        <View style={{ width: width / 2, alignItems: "center" }}>
                                            <Text style={[styles.textHeaderstarred, { fontSize: FONTS.h2 }]}>
                                                {item.name}
                                            </Text>
                                        </View>
                                        <View style={[styles.TextTimeBox, { justifyContent: "center" }]}>
                                            <Text style={styles.TimeBox}>
                                                {item.time}
                                            </Text>
                                            <Ionicons name='md-time' style={{ alignSelf: "center" }} size={ICONSSIZE.smIcon} color={COLORS.ButtonWhite} />
                                        </View>
                                        <View style={styles.OptionBox}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    navigation.navigate("Photo_page", {
                                                        name: item
                                                    })
                                                }
                                                }
                                                style={styles.OptionButtonBox}>
                                                <Text style={styles.OptionTimeBox}>
                                                    الطريقة
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                navigation.navigate("WbeView", {
                                                    name: item
                                                })
                                            }
                                            } style={styles.OptionButtonBox}>
                                                <Text style={styles.OptionTimeBox}>
                                                    الفيديو
                                                </Text>
                                            </TouchableOpacity>

                                        </View>

                                    </View>
                                </View>
                            ))}

                        </View>
                    </View>
                    <View style={{ height: 55 }}></View>

                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    Header: {
        backgroundColor: COLORS.pramary,
        alignItems: "center",
        flex: 1,
    },
    nameStackView: {
        width: width / 1.05,
        height: height / 12,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginVertical: MARGIN.xsMargin
    },
    textnameStackView: {
        fontSize: FONTS.h3,
        color: COLORS.orange,
        fontFamily: "Vazirmatn-VariableFont_wght"
    },
    SearchView: {
        width: width / 1.05,
        height: height / 9,
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: MARGIN.xsMargin
    },
    SearchTextheader: {
        fontSize: FONTS.h3,
        color: COLORS.orange,
        alignSelf: "flex-start"
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

    BoxView: {
        width: width,
        backgroundColor: COLORS.pramary,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: PADDING.xsPadding,
        alignItems: "center",
        justifyContent: "space-around"
    },
    Box: {
        width: width / 2.1,
        alignItems: "center",
        // height: height / 15,
        justifyContent: "space-around",

        margin: MARGIN.xsMargin,
        padding: PADDING.lgPadding,
        borderRadius: RADIUS.xxsRadius,
        backgroundColor: COLORS.pramary50
    },
    starred: {
        width: width,

    },
    Headerstarred: {
        width: width / 1.05,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
    },
    textHeaderstarred: {
        fontSize: FONTS.h1,
        color: COLORS.ButtonWhite,
        fontFamily: "Generator Black"
    },
    textHeaderstarred2: {
        fontSize: FONTS.h5,
        color: COLORS.gray,
        fontFamily: "Generator Black"
    },
    Boxstarred: {
        width: width / 1.05,
        alignSelf: "center",
        borderRadius: RADIUS.smRadius,
        backgroundColor: COLORS.pramary50,
        flexDirection: "row",
        marginVertical: MARGIN.xsMargin
    },
    ViewImage: {
        width: width / 2.5,
        height: height / 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RADIUS.xxsRadius
    },
    Imagestarred: {
        width: width / 3,
        height: height / 6,
        borderRadius: RADIUS.xxsRadius

    },
    BoxTextStarred: {
        width: width / 1.9,
        // height: height / 6,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: RADIUS.smRadius,

    },
    textDetelsstarred: {
        fontSize: FONTS.h5,
        color: COLORS.grayICon,
        fontFamily: "Generator Black"
    },
    Dessercommon: {
        height: height / 2.2,
        width: width / 1.05,
    },
    DessercommonHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    TextCommon: {
        fontSize: FONTS.h3,
        color: COLORS.orange,
        alignSelf: "flex-start"
    },
    Image: {
        width: 35,
        height: 35
    },
    Dessercommon2: {
        width: width / 2,
        alignItems: "flex-end"
    },
    DessertCommon: {
        height: height / 2.4,
        width: width,
        justifyContent: "center"
    },
    ButtonTabs: {
        width: width / 2,
        height: height / 2.5,
        backgroundColor: COLORS.orange50,
        borderColor: COLORS.ButtonWhite,
        borderEndWidth: 5,
        borderRadius: RADIUS.xlRadius,
        alignItems: "center",
        marginHorizontal: MARGIN.xsMargin,
    },
    ImageTabs: {
        width: width / 2.1,
        height: height / 5,
        borderTopRightRadius: RADIUS.xlRadius,
        borderTopLeftRadius: RADIUS.xlRadius,
    },
    TextTabs: {
        fontSize: FONTS.h4,
        color: COLORS.white,
    },
    TabsofTabs: {
        width: width / 2,
        height: height / 6,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RADIUS.x5lRadius,

    },
    the_Two_button: {
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.xsRadius,
        flexDirection: "row",
        padding: PADDING.xsPadding,
        alignItems: 'center',
        justifyContent: "center",
    },
    ViewBoth: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: width / 2,
    },
    Dessert: {
        width: width / 1.05,
        alignItems: "center",
    },
    DessercommonHeader1: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width / 1.05

    },
    DessertMain: {
        margin: MARGIN.xsMargin,
        width: width / 2.4,
        height: height / 2.5,
        backgroundColor: COLORS.grayFont,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: RADIUS.lgRadius,
    },
    ImageTabs2: {
        width: width / 2.4,
        height: height / 5,
        borderRadius: RADIUS.xxsRadius,
    },
    TextViewBox: {
        width: width / 2.4,
        alignItems: "flex-start"
    },
    TextBox: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        textAlign: "left"
    },
    TextTimeBox: {
        width: width / 2.4,
        alignItems: "center",
        flexDirection: "row",
    },
    TimeBox: {
        fontSize: FONTS.h4,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    },
    OptionBox: {
        width: width / 2.4,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    OptionButtonBox: {
        width: width / 6,
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.smRadius,
        alignItems: "center",
        justifyContent: "center",
    },
    OptionTimeBox: {
        fontSize: FONTS.h5,
        color: COLORS.white,
        fontFamily: "Generator Black",
        alignSelf: "center",
        marginHorizontal: 2
    },
    TextTabs2: {
        fontSize: FONTS.h6,
        color: COLORS.white,
    },
    TabsofTabs2: {
        width: width / 2.6,
        height: height / 7.5,
        backgroundColor: COLORS.gray,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RADIUS.xlRadius,
    },
    the_Two_button2: {
        backgroundColor: COLORS.orange,
        borderRadius: RADIUS.xlRadius,
        flexDirection: "row",
        width: width / 6,
        height: height / 18,
        alignItems: 'center',
        justifyContent: "center",
    },
    ViewBoth2: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: width / 2.6,
    },

});
