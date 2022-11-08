import { Formula } from "@/classses/Formula";
import { Prop } from "@/classses/Prop";
import { Scientist } from "@/classses/Scientist";
import { createStore } from "vuex";

const store = createStore({
  state: function () {
    return {
      count: 0,
      scientists: [
        new Scientist(1, 'Пифагор', new Array(
          new Formula(
            1,
            'Теорема Пифагора',
            'a^2 + b^2 = c^2',
            'По этой теореме находят неизвестную сторону прямоугоьного треугольника.',
            [
              new Prop('Введите первый катет'),
              new Prop('Введите второй катет')
            ],
            function (a: number, b: number) {
              return Math.sqrt(a * a + b * b);
            })
        ))
      ]
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
});

export default store;