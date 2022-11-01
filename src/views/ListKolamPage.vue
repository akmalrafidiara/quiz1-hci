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

          <ion-row>
            <ion-col>
              <div class="card-pond">
                <div class="header-pond">
                  <h3>Alpha</h3>
                  <p class="green">Aktif</p>
                </div>
                <div>
                  <div class="content-pond">
                    <img src="/assets/img/calendar.svg" alt="">
                    <p>01-09-2022</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/alarm.svg" alt="">
                    <p>90 Hari</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/fish.svg" alt="">
                    <p>200 Ekor</p>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <div class="card-pond">
                <div class="header-pond">
                  <h3>Beta</h3>
                  <p class="red">Tidak Aktif</p>
                </div>
                <div>
                  <div class="content-pond">
                    <img src="/assets/img/calendar.svg" alt="">
                    <p>01-09-2022</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/alarm.svg" alt="">
                    <p>90 Hari</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/fish.svg" alt="">
                    <p>200 Ekor</p>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <div class="card-pond">
                <div class="header-pond">
                  <h3>Charlie</h3>
                  <p class="green">Aktif</p>
                </div>
                <div>
                  <div class="content-pond">
                    <img src="/assets/img/calendar.svg" alt="">
                    <p>01-09-2022</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/alarm.svg" alt="">
                    <p>90 Hari</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/fish.svg" alt="">
                    <p>200 Ekor</p>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <div class="card-pond">
                <div class="header-pond">
                  <h3>Delta</h3>
                  <p class="green">Aktif</p>
                </div>
                <div>
                  <div class="content-pond">
                    <img src="/assets/img/calendar.svg" alt="">
                    <p>01-09-2022</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/alarm.svg" alt="">
                    <p>90 Hari</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/fish.svg" alt="">
                    <p>200 Ekor</p>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <div class="card-pond">
                <div class="header-pond">
                  <h3>Epsilon</h3>
                  <p class="green">Aktif</p>
                </div>
                <div>
                  <div class="content-pond">
                    <img src="/assets/img/calendar.svg" alt="">
                    <p>01-09-2022</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/alarm.svg" alt="">
                    <p>90 Hari</p>
                  </div>
                  <div class="content-pond">
                    <img src="/assets/img/fish.svg" alt="">
                    <p>200 Ekor</p>
                  </div>
                </div>
              </div>
            </ion-col>
          </ion-row>
  
        </ion-grid>
      </div>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button style="background: #6C5ECF!important; border-radius: 50%;">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { add } from 'ionicons/icons';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent, IonPage, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon
  },
  setup() {
    return {
      add
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
}
.header-pond p {
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 20px;
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

</style>
