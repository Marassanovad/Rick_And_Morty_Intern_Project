import { createRouter, createWebHistory } from 'vue-router';
import CharacterList from '../components/CharacterList.vue';
import CharacterDetail from '../components/CharacterDetail.vue';
import EpisodeList from '../components/EpisodeList.vue';
import EpisodeDetail from '../components/EpisodeDetail.vue';
import LocationList from '../components/LocationList.vue';
import LocationDetail from '../components/LocationDetail.vue';

const routes = [
  { path: '/', component: CharacterList },
  { path: '/characters', component: CharacterList },
  { path: '/characters/:id', component: CharacterDetail, props: true },
  { path: '/episodes', component: EpisodeList },
  { path: '/episodes/:id', component: EpisodeDetail, props: true },
  { path: '/locations', component: LocationList },
  { path: '/locations/:id', component: LocationDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
