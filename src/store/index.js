import { reactive } from "vue";
export const store = reactive({
  cards: [
    {
      id: 1,
      title: "Colors",
      description: "карточки для дальтоников",
      terms: [
        {
          name: "yellow",
          definition: "Жёлтый",
          completed: true,
        },
        {
          name: "Black",
          definition: "Чёрный",
          completed: true,
        },
        {
          name: "blue",
          definition: "синий",
          completed: true,
        },
        {
          name: "orange",
          definition: "оранжевый",
          completed: false,
        },
        {
          name: "orange",
          definition: "оранжевый",
          completed: false,
        },
        {
          name: "orange",
          definition: "оранжевый",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Colors2",
      terms: [
        {
          name: "yellow",
          definition: "Жёлтый",
          completed: true,
        },
        {
          name: "Black",
          definition: "Чёрный",
          completed: false,
        },
        {
          name: "blue",
          definition: "синий",
          completed: false,
        },
        {
          name: "orange",
          definition: "оранжевый",
          completed: false,
        },
      ],
    },
  ],
});
