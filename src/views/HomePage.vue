<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <h1 class="section-title">Home</h1>
      <div class="status">
        <ion-grid>
  
          <ion-row>
            <ion-col>
              <ion-card color="dark" class="status-card">
                <ion-card-header>
                  <ion-card-subtitle>Kolam</ion-card-subtitle>
                  <ion-card-title>10</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
  
            <ion-col>
              <ion-card color="dark" class="status-card">
                <ion-card-header>
                  <ion-card-subtitle>Kolam Aktif</ion-card-subtitle>
                  <ion-card-title>8</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
          </ion-row>
  
          <ion-row>
            <ion-col>
              <ion-card color="dark" class="status-card">
                <ion-card-header>
                  <ion-card-subtitle>Ikan Hidup</ion-card-subtitle>
                  <ion-card-title>182 <span>Ekor</span></ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
  
            <ion-col>
              <ion-card color="dark" class="status-card">
                <ion-card-header>
                  <ion-card-subtitle>Ikan Mati</ion-card-subtitle>
                  <ion-card-title>89 <span>Ekor</span></ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
          </ion-row>
  
          <ion-row>
            <ion-col>
              <ion-card color="dark" class="status-card">
                <ion-card-header>
                  <ion-card-subtitle>Pakan 2022</ion-card-subtitle>
                  <ion-card-title>109 <span>Kg</span></ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
  
            <ion-col>
              <ion-card color="dark" class="status-card">
                <ion-card-header>
                  <ion-card-subtitle>Total Pakan</ion-card-subtitle>
                  <ion-card-title>223 <span>Kg</span></ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-col>
          </ion-row>
  
        </ion-grid>
      </div>

      <div>
        <h1 class="section-title">TOTAL BERAT IKAN</h1>
        <ion-slides>
          <ion-slide>
            <div class="card-slide">
              <div>
                <img src="/assets/img/lele.png" alt="">
              </div>
              <h3>LELE</h3>
              <h4>200KG</h4>
            </div>
            <div class="card-slide">
              <div>
                <img src="/assets/img/nilamerah.png" alt="">
              </div>
              <h3>Nila Merah</h3>
              <h4>200KG</h4>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="card-slide">
              <div>
                <img src="/assets/img/lele.png" alt="">
              </div>
              <h3>LELE</h3>
              <h4>200KG</h4>
            </div>
            <div class="card-slide">
              <div>
                <img src="/assets/img/nilamerah.png" alt="">
              </div>
              <h3>Nila Merah</h3>
              <h4>200KG</h4>
            </div>
          </ion-slide>
        </ion-slides>
      </div>

      <div>
        <h1 class="section-title">KUALITAS AIR</h1>
        <ion-slides>
          <ion-slide>
            <div class="card-air">
              <h2>pH</h2>
              <p>Normal <span>6 Kolam</span></p>
              <p class="cus-mt">Abnormal <span>6 Kolam</span></p>
            </div>
            <div class="card-air">
              <h2>DO</h2>
              <p>Normal <span>6 Kolam</span></p>
              <p class="cus-mt">Abnormal <span>6 Kolam</span></p>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="card-air">
              <h2>pH</h2>
              <p>Normal <span>6 Kolam</span></p>
              <p class="cus-mt">Abnormal <span>6 Kolam</span></p>
            </div>
            <div class="card-air">
              <h2>DO</h2>
              <p>Normal <span>6 Kolam</span></p>
              <p class="cus-mt">Abnormal <span>6 Kolam</span></p>
            </div>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonCard  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent, IonPage, IonGrid, IonRow, IonCol, IonCard
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
.status-card {
  border-radius: 10px;
  margin: -1px;
}
.status-card ion-card-subtitle {
  font-size: 25px;
  font-weight: bold;
}
.status-card ion-card-title {
  font-size: 30px;
  font-weight: 700;
}
.status-card ion-card-title span {
  font-size: 15px;
}
.section-title {
  margin-left: 12px;
  font-weight: bold;
  margin-top: 20px;
}
ion-slide {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 12px;
}
.card-slide {
  background-color: #fff;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  color: #000;
  text-align: left;
  padding: 20px;
}
.card-slide div {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-slide h3 {
  font-size: 20px;
  font-weight: bold;
}
.card-slide h4 {
  font-size: 25px;
  font-weight: bold;
  margin-top: -2px;
  color: #2C96F1;
}
.card-air {
  text-align: left;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  padding: 10px 20px;
}
.card-air h2 {
  font-weight: 700;
  font-size: 35px;
}
.card-air p{
  font-size: 15px;
  font-weight: bold;
}
.cus-mt {
  margin-top: -15px;
}
.card-air p span {
  color: #2C96F1;
}
</style>
