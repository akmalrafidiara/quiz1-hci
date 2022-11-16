<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <div class="kolam-header">
        <h1>Kolam</h1>
        <div>
          <img src="/assets/img/sorting.svg" alt="">
          <img src="/assets/img/sort.svg" alt="">
        </div>
      </div>
      <div class="status">
        <ion-grid>

          <ion-row v-for="(pond, index) in ponds" v-bind:key="index">
            <ion-col>
              <div class="card-pond">
                <div class="header-pond">
                  <h3>{{pond.alias}}</h3>
                  <p :class="[ pond.isActive == 1 ? 'green' : 'red' ]">{{pond.status}}</p>
                </div>
                <div>
                  <div class="content-pond">
                    <img src="/assets/img/calendar.svg" alt="">
                    <p>{{ date(pond.build_at) }}</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/alarm.svg" alt="">
                    <p>{{ findDay(pond.build_at) }} Hari</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/fish.svg" alt="">
                    <p>{{pond.fish_alive != null ? pond.fish_alive : 0}} Ekor</p>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>
  
        </ion-grid>
      </div>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button href="/pondregistration" style="background: #6C5ECF!important; border-radius: 50%;">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon  } from '@ionic/vue';
import { defineComponent, onMounted, ref } from 'vue';
import { add } from 'ionicons/icons';
import axios from 'axios';

export default defineComponent({
  name: 'PondsPage',
  components: {
    IonContent, IonPage, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon
  },
  methods: {
    date(date: string) {
      const d = new Date(date);
      const month = d.getMonth() + 1;
      const day = d.getDate();
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    },
    findDay(date: string) {
      const d = new Date(date);
      const diff = new Date().getTime() - d.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    },
  },
  setup() {
    const ponds = ref();
    let day;
    onMounted(async () => {
      const response = await axios.get('http://jft.web.id/fishapi/api/ponds')
      ponds.value = response.data
      console.log(response.data)
    });
    return {
      add, ponds
    }
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
* {
  font-family: 'Poppins', sans-serif;
}
ion-content{
  --ion-background-color:#1F1D2B;
}
.section-title {
  margin-left: 12px;
  font-weight: bold;
  margin-top: 20px;
}
.kolam-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 12px;
  font-weight: bold;
}
.kolam-header img {
  width: 30px;
}
.kolam-header img:nth-child(2) {
  filter: invert(100%);
}
.card-pond {
  background-color: #fff;
  color: #000;
  width: 100%;
  padding: 20px 15px;
  border-radius: 15px;
  margin-bottom: 20px;
}
.header-pond {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;
  border-bottom: 3px solid #333;
}
.header-pond h3 {
  font-weight: bold;
  font-size: 25px;
  width: 60%;
}
.header-pond p {
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
}
.content-pond {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: -20px;
}
.content-pond img {
  height: 30px;
}
.green {
  background-color: #1B7C1A;
}
.red {
  background-color: #952229;
}
.blue {
  background-color: #952229;
}

</style>
