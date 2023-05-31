<script setup>
  useHead({
      title: "The Daily Broadcast",
      htmlAttrs: {
        lang: "en"
      }
    });
  </script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <div id="settings-container"></div>
  <div id="notifications-container"></div>
</template>
