<template>
  <div class="grid">
    <main class="content">
      <h1 class="title">Nuxt Stack</h1>
      <v-logo class="logo" :width="logoSize" :height="logoSize" />
      <div v-if="$installer.canInstall" class="callout">
        <button @click="$installer.prompt">Install PWA</button>
      </div>
    </main>
    <footer v-if="$installer.hasInstalled" class="footer">
      Installed PWA
    </footer>
  </div>
</template>

<script>
import VLogo from "~/assets/logo.svg"

export default {
  staticData: () => ({
    logoSize: 16 * 10
  }),
  components: {
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
    minmax(2rem, 1fr)
    [footer-start]
    auto
    [footer-end bleed-end];
}

.content {
  grid-area: content;

  .title {
    text-transform: uppercase;
    max-width: 400px;
    margin: 0;
  }

  .callout {
    margin-top: 4rem;
  }
}

.footer {
  grid-area: footer;
  padding: 0.75em 1.5em;
  background: $green-1;
  text-align: center;
  color: $white;
}
</style>
