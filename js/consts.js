const questions = [
  [
    "Как часто вы используете одноразовую пластиковую посуду?",
    ["Очень редко или никогда", "Иногда", "Регулярно"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Вы сортируете отходы дома?",
    ["Да, всегда", "Только иногда", "Нет, никогда"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Покупаете ли вы товары в упаковке, которая подлежит переработке?",
    ["Всегда стараюсь выбирать такую упаковку", " Иногда обращаю внимание на это", "Не задумываюсь об этом"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Используете ли вы многоразовые сумки для покупок?",
    ["Всегда беру с собой многоразовую сумку", " Иногда использую многоразовую сумку", "Обычно покупаю пластиковые пакеты"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Экономите ли вы воду и электроэнергию?",
    ["Стараюсь экономить везде, где возможно", "Иногда думаю об экономии", "Экономия ресурсов меня не интересует"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Какие источники энергии вы предпочитаете использовать?",
    ["Возобновляемые источники (солнечная энергия, ветер и др.)", "Традиционные источники (газ, уголь)", "Мне все равно, какой источник используется"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Есть ли у вас привычка выключать свет и электроприборы, когда они не используются?",
    ["Всегда выключаю", "Иногда забываю", "Редко помню об этом"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Часто ли вы покупаете органические продукты?",
    ["Я стараюсь покупать только органику", "Иногда выбираю органические продукты", "Никогда не покупал/а органические продукты"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Участвуете ли вы в акциях по посадке деревьев или уборке мусора?",
    ["Участвую регулярно", "Иногда принимаю участие", "Никогда не участвовал/а"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ],
  [
    "Сколько времени вы готовы потратить на дорогу пешком или на велосипеде вместо использования автомобиля?",
    ["Более 30 минут", "До 15 минут", "Предпочитаю автомобиль в любом случае"],
    [
      "this.score.high++",
      "this.score.medium++",
      "this.score.low++"
    ]
  ]
]