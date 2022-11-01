<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon src="/assets/img/home.svg" />
        </ion-tab-button>
          
        <ion-tab-button tab="listkolam" href="/tabs/listkolam">
          <ion-icon src="/assets/img/fish.svg" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
});
</script>

<style scoped>
  ion-tab-bar {
    background-color: #252836;
    border-radius: 15px 15px 0px 0px;
  }
  ion-tab-button {
    background-color: #252836;
  }
</style>
