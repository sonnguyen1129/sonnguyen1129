<template>
  <div class="hello">
    <h1>Hello fen</h1>
    <div>
      <label for="">Nhập tên: </label>
      <input v-model="name" />
      <button type="submit" @click="submit">Xác nhận</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class GuessName extends Vue {
  @Prop() private msg?: string;
  private name: string = '';

  private submit() {
    if (!this.name) {
      alert("Vui lòng nhập tên.");
    }
    else {
      alert("Bạn tên là: " + this.name);
    }
  }
}
</script>

<style scoped lang="scss">
</style>
