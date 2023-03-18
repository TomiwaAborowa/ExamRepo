<script setup>
import { ref, watchEffect, onMounted, onUnmounted } from 'vue';
import LoadingRepos from './LoadingRepos.vue';
import { useThemeStore } from '../stores/theme';
import { RouterLink } from 'vue-router';

const store = useThemeStore();



let id;


const datas = ref(null);
const Repos = ref(null);


// eslint-disable-next-line no-undef
const props = defineProps(['name']);

watchEffect(async () => {
  const res = await fetch(`https://api.github.com/repos/tomiwaaborowa/${props.name}`);
  datas.value = await res.json();
});

onMounted(() => {
  id = setTimeout(() => {
    if (datas.value !== null) {
      Repos.value = datas.value;
    }
  }, 3000);
});

onUnmounted(() => clearTimeout(id));

</script>
<template>
  <LoadingRepos v-if="Repos === null" />
  <section :class="{ repoDetails: true }" v-else>
    <section :class="{ header: true }">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
        class="octicon octicon-repo color-fg-muted mr-2">
        <path :fill="store.color"
          d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z">
        </path>
      </svg>
      <pre>{{ name.toUpperCase() }}</pre>
    </section>

    <section :class="{ arrange: true }">

      <section>
        <a :href="Repos.html_url" target="_blank">
          <button type="button" class="btn btn-outline-primary btn-lg">
            Run Repo..
          </button>
        </a>
      </section>
    </section>

    <section :class="{ prevLink: true }">
      <RouterLink to="/"><button class="btn btn-outline-success btn-lg">Go Home</button></RouterLink>


    </section>

  </section>
</template>
<style>
.repoDetails {
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
}

pre {
  font-weight: 90px;
}

svg {
  margin-right: 10px;
}
</style>