<template>
  <div id="app">
    <el-card style="background:violet;">
      <table>
      <tr>
      <td><h3>Category:</h3></td>
      <td><input type="text" v-model="data.category"></td>
      </tr>
      <tr>
      <td><h3>Title of the Passage:</h3></td>
      <td><textarea v-model="data.question"/></td>
      </tr>
      <tr>
         <td><h3>Sentences in Correct order </h3></td>
      </tr>
      <tr v-for="i in data.opt" :key="i">    
          <td>
            <textarea v-on:keyup.enter="addinput(i)" style="width:100%" v-model="data.correct_answers[i-1]"/>
          </td>
      </tr>
      <h5 style="color:red" >*After writing the answer press enter to generate a new box</h5>
      </table>
      <br>
      <el-button style="background-color:#b300b3;" type="success" v-on:click="add()">Add Question</el-button>&emsp;
      <el-button style="background-color:#b300b3;" type="success" v-on:click="navigate()">Go to your Quiz page</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: {
        opt: 1,
        category: "",
        type: "mtf",
        difficulty: "medium",
        question: "",
        correct_answers: [""],
        correct: [""]
      },
      arr: []
    };
  },

  methods: {
    add() {
      for (var i = 0; i < this.data.opt; i++) {
        this.data.correct[i] = this.data.correct_answers[i];
      }
      this.arr.push({
        category: this.data.category,
        type: this.data.type,
        difficulty: this.data.difficulty,
        question: this.data.question,
        correct_answers: this.data.correct_answers,
        correct: this.data.correct
      });
      this.data.opt = 1;
      this.data.category = "";
      this.data.question = "";
      this.data.correct_answers = [""];
      this.data.correct = [""];
      console.log(this.arr);
      const data = JSON.stringify(this.arr);
      window.localStorage.setItem("sen", data);
      const obj = JSON.parse(window.localStorage.getItem("sen"));
      console.log(obj);
    },
    navigate() {
      this.$router.push("/sen");
    },
    addinput(i) {
      if (this.data.correct_answers[i] !== "") {
        if (this.data.opt === i) {
          this.data.opt = this.data.opt + 1;
        }
      }
    }
  }
};
</script>

