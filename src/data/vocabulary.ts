export interface VocabularyItem {
  id: number;
  word: string;
  phonetic: string;
  translation: string;
  example: string;
  exampleTranslation: string;
  category: string;
  imageUrl: string;
  type?: 'word' | 'sentence';
}

export const VOCABULARY_LIST: VocabularyItem[] = [
  {
    id: 1,
    word: "watermelon",
    phonetic: "/ˈwɔːtərmelən/",
    translation: "西瓜",
    example: "Watermelon is a popular fruit to eat in the hot summer.",
    exampleTranslation: "西瓜是炎热夏天里很受欢迎的水果。",
    category: "Fruit",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    word: "cabbage",
    phonetic: "/ˈkæbɪdʒ/",
    translation: "卷心菜",
    example: "My mother often buys a large cabbage to make salad for dinner.",
    exampleTranslation: "我妈妈经常买一个大卷心菜做晚餐沙拉。",
    category: "Vegetable",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    word: "mutton",
    phonetic: "/ˈmʌtn/",
    translation: "羊肉",
    example: "Some people in northern China like eating mutton in winter to keep warm.",
    exampleTranslation: "中国北方的一些人喜欢在冬天吃羊肉来保暖。",
    category: "Meat",
    imageUrl: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    word: "cookie",
    phonetic: "/ˈkʊki/",
    translation: "曲奇饼",
    example: "Would you like some chocolate cookies with your glass of milk?",
    exampleTranslation: "你想喝牛奶时配一些巧克力曲奇吗？",
    category: "Snack",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    word: "onion",
    phonetic: "/ˈʌnjən/",
    translation: "洋葱",
    example: "Onions are very healthy, but they can make you cry when you cut them.",
    exampleTranslation: "洋葱非常健康，但切的时候会让你流泪。",
    category: "Vegetable",
    imageUrl: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 6,
    word: "dumpling",
    phonetic: "/ˈdʌmplɪŋ/",
    translation: "饺子",
    example: "Making dumplings together is a traditional way for families to celebrate festivals.",
    exampleTranslation: "一起包饺子是家庭庆祝节日的传统方式。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 7,
    word: "coffee",
    phonetic: "/ˈkɒfi/",
    translation: "咖啡",
    example: "My father usually drinks a cup of black coffee before he goes to work.",
    exampleTranslation: "我父亲通常在上班前喝一杯黑咖啡。",
    category: "Drink",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 8,
    word: "bean",
    phonetic: "/biːn/",
    translation: "豆",
    example: "Green beans are full of vitamins and they are good for our health.",
    exampleTranslation: "绿豆富含维生素，对我们的健康有好处。",
    category: "Vegetable",
    imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 9,
    word: "chip",
    phonetic: "/tʃɪp/",
    translation: "炸薯条/薯片",
    example: "It is not a good habit to eat too many potato chips while watching TV.",
    exampleTranslation: "看电视时吃太多薯片不是个好习惯。",
    category: "Snack",
    imageUrl: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 10,
    word: "salad",
    phonetic: "/ˈsæləd/",
    translation: "沙拉",
    example: "I would like to order a vegetable salad with some olive oil.",
    exampleTranslation: "我想点一份加了橄榄油的蔬菜沙拉。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 11,
    word: "porridge",
    phonetic: "/ˈpɒrɪdʒ/",
    translation: "粥",
    example: "Many Chinese people prefer to have a bowl of hot porridge for breakfast.",
    exampleTranslation: "许多中国人早餐更喜欢喝一碗热粥。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 12,
    word: "waiter",
    phonetic: "/ˈweɪtə(r)/",
    translation: "男服务员",
    example: "The waiter in this restaurant is very friendly and he serves us quickly.",
    exampleTranslation: "这家餐厅的服务员非常友好，上菜很快。",
    category: "People",
    imageUrl: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 13,
    word: "taste",
    phonetic: "/teɪst/",
    translation: "品尝/味道",
    example: "The soup tastes a bit salty, so you should add some water to it.",
    exampleTranslation: "这汤尝起来有点咸，所以你应该加点水。",
    category: "Verb/Noun",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 14,
    word: "something",
    phonetic: "/ˈsʌmθɪŋ/",
    translation: "某事/某物",
    example: "I am very hungry now, so I want to find something delicious to eat.",
    exampleTranslation: "我现在很饿，所以我想找点好吃的东西吃。",
    category: "Pronoun",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 15,
    word: "dish",
    phonetic: "/dɪʃ/",
    translation: "菜肴",
    example: "Beijing Roast Duck is one of the most famous dishes in China.",
    exampleTranslation: "北京烤鸭是中国最著名的菜肴之一。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 16,
    word: "choice",
    phonetic: "/tʃɔɪs/",
    translation: "选择",
    example: "There are many different kinds of food on the menu for you to make a choice.",
    exampleTranslation: "菜单上有许多不同种类的食物供你选择。",
    category: "Noun",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 17,
    word: "meal",
    phonetic: "/miːl/",
    translation: "餐",
    example: "We should have three regular meals every day to stay healthy.",
    exampleTranslation: "我们每天应该吃三顿正餐以保持健康。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 18,
    word: "pork",
    phonetic: "/pɔːrk/",
    translation: "猪肉",
    example: "Pork is the most common meat used in Chinese cooking.",
    exampleTranslation: "猪肉是中国烹饪中最常用的肉类。",
    category: "Meat",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 19,
    word: "strawberry",
    phonetic: "/ˈstrɔːberi/",
    translation: "草莓",
    example: "I like to pick fresh strawberries in the garden during the spring.",
    exampleTranslation: "我喜欢在春天去花园摘新鲜的草莓。",
    category: "Fruit",
    imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 20,
    word: "menu",
    phonetic: "/ˈmenjuː/",
    translation: "菜单",
    example: "Could you please show me the menu? I want to see what they have today.",
    exampleTranslation: "请给我看一下菜单好吗？我想看看他们今天有什么菜。",
    category: "Dining",
    imageUrl: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 21,
    word: "customer",
    phonetic: "/ˈkʌstəmə(r)/",
    translation: "顾客",
    example: "The shop is very busy today because there are many customers buying things.",
    exampleTranslation: "这家店今天非常忙，因为有很多顾客在买东西。",
    category: "People",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 22,
    word: "serve",
    phonetic: "/sɜːrv/",
    translation: "服务/上菜",
    example: "This restaurant is famous because they serve the best beef noodles in town.",
    exampleTranslation: "这家餐厅很有名，因为他们供应镇上最好的牛肉面。",
    category: "Verb",
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 23,
    word: "waitress",
    phonetic: "/ˈweɪtrəs/",
    translation: "女服务员",
    example: "The waitress is writing down the names of the dishes we ordered.",
    exampleTranslation: "女服务员正在写下我们点的菜名。",
    category: "People",
    imageUrl: "https://images.unsplash.com/photo-1574966739982-2b783bc21927?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 24,
    word: "sir",
    phonetic: "/sɜː(r)/",
    translation: "先生",
    example: "Good morning, sir. How can I help you today?",
    exampleTranslation: "早上好，先生。今天我能为您做点什么？",
    category: "People",
    imageUrl: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 25,
    word: "pear",
    phonetic: "/peə(r)/",
    translation: "梨",
    example: "Pears are very sweet and juicy, and they are good for your throat.",
    exampleTranslation: "梨又甜又多汁，对你的喉咙有好处。",
    category: "Fruit",
    imageUrl: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 26,
    word: "sugar",
    phonetic: "/ˈʃʊɡə(r)/",
    translation: "糖",
    example: "Don't put too much sugar in your tea, because it is not good for your teeth.",
    exampleTranslation: "茶里不要放太多糖，因为对牙齿不好。",
    category: "Ingredient",
    imageUrl: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 27,
    word: "fish and chips",
    phonetic: "/fɪʃ ænd tʃɪps/",
    translation: "炸鱼薯条",
    example: "Fish and chips is a very traditional and popular meal in the UK.",
    exampleTranslation: "炸鱼薯条是英国非常传统且受欢迎的餐食。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 28,
    word: "full of energy",
    phonetic: "/fʊl əv ˈenədʒi/",
    translation: "充满活力",
    example: "After a good night's sleep, I feel full of energy and ready for school.",
    exampleTranslation: "睡了一场好觉后，我感到精力充沛，准备好去上学了。",
    category: "Phrase",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 29,
    word: "Beijing roast duck",
    phonetic: "/ˌbeɪˈdʒɪŋ rəʊst dʌk/",
    translation: "北京烤鸭",
    example: "When you visit Beijing, you must try the famous Beijing roast duck.",
    exampleTranslation: "当你访问北京时，你必须尝尝著名的北京烤鸭。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 30,
    word: "hot pot",
    phonetic: "/hɒt pɒt/",
    translation: "火锅",
    example: "Eating hot pot with friends is a great way to enjoy a cold evening.",
    exampleTranslation: "和朋友一起吃火锅是享受寒冷夜晚的好方法。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 31,
    word: "beef noodles",
    phonetic: "/biːf ˈnuːdlz/",
    translation: "牛肉面",
    example: "A large bowl of beef noodles is enough to make me feel full.",
    exampleTranslation: "一大碗牛肉面足以让我感到饱了。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 32,
    word: "go with",
    phonetic: "/ɡəʊ wɪð/",
    translation: "搭配/伴随",
    example: "I think this red tie goes very well with your white shirt.",
    exampleTranslation: "我认为这条红领带和你的白衬衫很搭。",
    category: "Verb Phrase",
    imageUrl: "https://images.unsplash.com/photo-1594932224828-b4b059b6f6ee?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 33,
    word: "too many",
    phonetic: "/tuː ˈmeni/",
    translation: "太多",
    example: "There are too many new words in this lesson for me to remember.",
    exampleTranslation: "这节课有太多的新单词，我记不住。",
    category: "Phrase",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 34,
    word: "soup",
    phonetic: "/suːp/",
    translation: "汤",
    example: "I like to have some hot soup before the main course.",
    exampleTranslation: "我喜欢在主菜之前喝点热汤。",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 36,
    word: "— What ___________ ___________ ___________ ___________ ___________?\n— ___________ ___________ Gongbao chicken?",
    phonetic: "",
    translation: "“您想点什么菜?”“宫保鸡丁怎么样?”",
    example: "— What [would] [you] [like] [to] [order]?\n— [How] [about] Gongbao chicken?",
    exampleTranslation: "“您想点什么菜?”“宫保鸡丁怎么样?”",
    category: "Phrase",
    imageUrl: "https://images.unsplash.com/photo-1512058560560-697d125d7a42?auto=format&fit=crop&q=80&w=400",
    type: "sentence"
  },
  {
    id: 37,
    word: "— ___________ ___________ a chicken and cabbage salad?\n— That ___________ ___________.",
    phonetic: "",
    translation: "“来一份鸡肉卷心菜沙拉怎么样?”“听起来不错。”",
    example: "— [How] [about] a chicken and cabbage salad?\n— That [sounds] [good].",
    exampleTranslation: "“来一份鸡肉卷心菜沙拉怎么样?”“听起来不错。”",
    category: "Phrase",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
    type: "sentence"
  },
  {
    id: 38,
    word: "— ___________ ___________ ___________ ___________ ___________ ___________ with your meal?\n— Noodles, please!",
    phonetic: "",
    translation: "“您用餐时想要米饭还是面条?”“请给我面条!”",
    example: "— [Would] [you] [like] [rice] [or] [noodles] with your meal?\n— Noodles, please!",
    exampleTranslation: "“您用餐时想要米饭还是面条?”“请给我面条!”",
    category: "Phrase",
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=400",
    type: "sentence"
  },
  {
    id: 39,
    word: "— ___________ ___________ ___________ ___________, juice or coffee?\n— No, thanks. ___________ ___________ ___________ ___________ ___________ ___________ ___________.",
    phonetic: "",
    translation: "“你想要哪一种，果汁还是咖啡?”“不用了，谢谢。我想喝杯茶。”",
    example: "— [Which] [would] [you] [like], juice or coffee?\n— No, thanks. [I’d] [like] [a] [cup] [of] [tea].",
    exampleTranslation: "“你想要哪一种，果汁还是咖啡?”“不用了，谢谢。我想喝杯茶。”",
    category: "Phrase",
    imageUrl: "https://images.unsplash.com/photo-1544787210-2281403b2f57?auto=format&fit=crop&q=80&w=400",
    type: "sentence"
  },
  {
    id: 40,
    word: "— What do you usually have ___________ ___________?\n— I usually ___________ ___________ ___________ ___________.",
    phonetic: "",
    translation: "“你早餐通常吃什么?”“我通常吃面包和喝牛奶。”",
    example: "— What do you usually have [for] [breakfast]?\n— I usually [have] [bread] [and] [milk].",
    exampleTranslation: "“你早餐通常吃什么?”“我通常吃面包和喝牛奶。”",
    category: "Phrase",
    imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=400",
    type: "sentence"
  }
];
