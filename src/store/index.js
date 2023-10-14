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
        },
        {
          name: "Black",
          definition: "Чёрный",
        },
        {
          name: "blue",
          definition: "синий",
        },
        {
          name: "orange",
          definition: "оранжевый",
        },
        {
          name: "orange",
          definition: "оранжевый",
        },
        {
          name: "orange",
          definition: "оранжевый",
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
        },
        {
          name: "Black",
          definition: "Чёрный",
        },
        {
          name: "blue",
          definition: "синий",
        },
        {
          name: "orange",
          definition: "оранжевый",
        },
      ],
    },
  ],
});
