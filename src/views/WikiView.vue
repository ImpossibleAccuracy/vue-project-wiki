<script lang="ts">
import { useStore } from "vuex";
import type { Scientist } from "@/classses/Scientist";

export default {
  data: function () {
    return {
      scientist: ({} as Scientist)
    }
  },
  created: function () {
    const store = useStore();

    const wikiId = Number(this.$route.params.wikiId);
    this.scientist = store.state
      .scientists
      .find(function (s: Scientist) {
        return s.id == wikiId;
      });
  }
}
</script>

<template>
  <main class="main">
    <div class="image-wrapper">
      <img class="image photo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sanzio_01_Pythagoras.jpg/250px-Sanzio_01_Pythagoras.jpg" />
    </div>
    <div class="content">
      <p class="text"><b>Пифаго́р Са́мосский</b> (др.-греч. Πυθαγόρας ὁ Σάμιος, лат. <i>Pythagoras</i>; около 570—490
        годов до н. э.) — древнегреческий философ, математик и мистик, создатель религиозно-философской школы
        пифагорейцев.</p>
      <p class="text">Античные биографии Пифагора содержат множество легенд. По наиболее распространённой версии,
        Пифагор родился на острове Самос. В молодости много путешествовал и учился (в различных легендах фигурируют
        египетские жрецы, халдеи, маги, Заратуштра и т. д.). По возвращении на Самос из-за разногласий с тираном
        Поликратом был вынужден эмигрировать в Италию. По прибытии в полис Кротон он создал собственную школу. Школу
        Пифагора сравнивают с прообразом христианских монастырей и масонских лож. Постепенно её политическое влияние
        возрастало. Она как таковая не находилась при власти. Речь шла о возросшем влиянии отдельных членов общества
        во властных структурах.</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  padding: 24px 128px;
  display: flex;

  .image-wrapper {
    width: 512px;

    .image {
      width: 100%;
      border-radius: 4px;
      box-shadow: var(--elevation);
    }
  }

  .content {
    width: 100%;
    margin-left: 24px;

    .text:not(:first-of-type) {
      margin-top: 1em;
    }
  }
}
</style>