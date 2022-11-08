<script lang="ts">
import { useStore } from "vuex";
import type { Formula } from '@/classses/Formula';
import type { Prop } from '@/classses/Prop';
import type { Scientist } from '@/classses/Scientist';

export default {
  data: function () {
    return {
      formula: ({} as Formula)
    }
  },
  created: function () {
    const store = useStore();

    const wikiId = Number(this.$route.params.wikiId);
    const formulaId = Number(this.$route.params.formulaId);

    const scientist = store.state
      .scientists
      .find(function (s: Scientist) {
        return s.id == wikiId;
      });

    const formula = scientist.formulas
      .find(function (f: Formula) {
        return f.id == formulaId;
      });

    this.formula = formula;
  },
  computed: {
    result: function () {
      const values = this.formula.inputs
        .map(function (prop: Prop) {
          return prop.value;
        });

      return this.formula.calc.apply(null, values);
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <main class="main">
    <h2 class="title" v-text="formula.title"></h2>
    <p class="description" v-text="formula.description"></p>
    <span class="formula-text" v-text="formula.text"></span>

    <div class="container">
      <div class="form">
        <label class="input-container" v-for="i of formula.inputs">
          <span v-text="i.label"></span>
          <input v-model="i.value" type="number" class="input" min="1">
        </label>
      </div>

      <div class="result">
        <span class="title">Результат:</span>
        <span class="content" v-text="result"></span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  padding: 28px 0;

  .formula-text {
    display: block;
    margin: 8px 0;
    font-weight: bold;
    font-size: 1.2em;
  }

  .container {
    display: flex;
    padding: 16px;
    margin-top: 16px;
    border-radius: 3px;
    box-shadow: var(--elevation);
    background-color: var(--color-background-soft);

    .form,
    .result {
      width: 100%;
    }

    .result {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .content {
        font-size: 1.5em;
        font-weight: bold;
      }
    }

    .input-container {
      width: 70%;

      &:not(:first-of-type) {
        margin-top: 8px;
      }
    }

  }
}
</style>