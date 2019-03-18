<template>
  <div class="grid">
    <main class="content">
      <v-logo class="logo" :width="logoSize" :height="logoSize" />
      <h1 class="title">
        <span class="green-1">Nuxt</span>
        <span class="green-3">Stack</span>
      </h1>
      <div v-if="$installer.canInstall" class="callout">
        <v-button text="Install PWA" @click="$installer.prompt" />
      </div>
    </main>
    <footer v-if="$installer.hasInstalled" class="footer">
      Installed PWA
    </footer>
  </div>
</template>

<script>
import VButton from "~/components/button/button.vue"
import VLogo from "~/assets/logo.svg"

export default {
  staticData: () => ({
    logoSize: 240
  }),
  components: {
    VButton,
    VLogo
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  min-height: 100vh;
  grid-template-columns:
    [bleed-start footer-start]
    minmax(2rem, 1fr)
    [content-start]
    auto
    [content-end]
    minmax(2rem, 1fr)
    [bleed-end footer-end];
  grid-template-rows:
    [bleed-start]
    minmax(2rem, 1fr)
    [content-start]
    auto
    [content-end]
    minmax(2rem, 1.2fr)
    [footer-start]
    auto
    [footer-end bleed-end];
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: content;
}

.title {
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.callout {
  margin-top: 4rem;
}

.footer {
  grid-area: footer;
  padding: 1em 2em;
  background: $green-1;
  text-align: center;
  color: $white;
}
</style>
