<script setup lang="ts">
import store from "./store";
import { RouterLink, RouterView } from "vue-router";

const scientists = store.state.scientists;
</script>

<template>
  <header class="header">
    <div class="logo">
      <router-link :to="{ name: 'home' }" class="logo-text">logo</router-link>
    </div>

    <ul class="menu menu-header">
      <li class="menu-item" v-for="s of scientists">
        <span class="menu-item-title" v-text="s.name"></span>
        <ul class="submenu">
          <li class="menu-item sub-menu-item">
            <router-link :to="{ name: 'wiki', params: { wikiId: s.id } }" class="link">
              Вики
            </router-link>
          </li>

          <li class="menu-item sub-menu-item" v-for="f of s.formulas">
            <router-link :to="{ name: 'formula', params: { wikiId: s.id, formulaId: f.id } }" class="link">
              {{ f.title }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 64px;
  box-shadow: var(--elevation);
  background-color: var(--primary);
  transition: .1s ease-in-out top;

  .logo {
    width: 100%;

    .logo-text {
      cursor: pointer;
      user-select: none;
      color: inherit;
      font-size: 2rem;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  .menu {
    width: 100%;
    display: flex;
    padding: 8px 0;

    .menu-item {
      cursor: pointer;
      position: relative;
      height: 100%;
      padding: 8px 24px;
      white-space: nowrap;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      &:hover {
        background-color: var(--color-background-soft);

        .submenu {
          display: block;
        }
      }
    }
  }

  .submenu {
    position: absolute;
    left: 0;
    top: 100%;
    display: none;
    min-width: 100%;
    overflow: hidden;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: var(--color-background-soft);

    .sub-menu-item {
      padding: 0;

      &:hover {
        background-color: var(--color-background-mute);
      }

      .link {
        display: block;
        color: inherit;
        padding: 8px 24px;
        text-decoration: none;
      }
    }
  }
}
</style>