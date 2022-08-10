<template>
<div class="containment">
<div id ="new-section">

    <h4>New Section</h4>
<div class="row">
<form @submit.prevent="saveSection" class="col-s12">
<div class="col s3">
    <div class="input-field">
        <input  type="text" v-model="section_id" required>
         <span class="helper-text">Section ID#</span>
    </div>
   
</div>
<div class="col s3">
    <div class="input-field">
        <input  type="text" v-model="status" required>
         <span class="helper-text">Status</span>
    </div>
   
</div>

<div class="row">
    <div class="input-field col s3">
        <input type="text" v-model="record" required>
         <span class="helper-text">Record #</span>

    </div>
</div>

<div class="row">
    <div class="input-field col s9">
        <input type="text" v-model="section" required>
         <span class="helper-text">Title</span>
    </div>

</div>
<div class="row">
    <div class="input-field col s9">
        <input type="text" v-model="title" required>
         <span class="helper-text">Name</span>
    </div>

</div>

<div class="row">
    <div class="input-field col s6">
          <p><label for="policyarea">Policy</label></p>
  <textarea  id="policyarea" name="policyarea" rows="15" cols="30">{{policy}}</textarea>
  <br>
          
         
    </div>
   
</div>
<div class="row">
    <div class="input-field col s6">
          <p><label for="modarea">Modification</label></p>
  <textarea  id="modarea" name="modarea" rows="15" cols="30">{{modification}}</textarea>
  <br>
          
         
    </div>
   
</div>
<div class="buttons">
<button type="submit" class="btn">Submit</button>
<router-link to="/" class="btn grey">Cancel</router-link>
</div>
</form>
</div>
</div>
</div>

</template>

<script>
import db from './firebaseInit'
export default {

name: 'new-section',
data () {
    return {
    section_id: null,
     name: null,
     policy: null,
     section: null,
     status: null,
     islocked: null,
     title: null,
     modification: null
    }
},
methods: {
    saveSection () {
        db.collection('volumes').add({
                section_id: this.section_id, 
                name: this.name ,
                policy: this.section,
                status: this.status ,
                title: this.title,
                policy: this.policy,
                islocked: this.islocked,
                modification: this.modification
        })
        .then(docRef => this.$router.push('/'))

    }
}

}


</script>

<style>
.container {
    display: flex;
    justify-content: center;
}

#new-section {
    text-align:center;
    justify-content: center;
    width: 1000 px;
}

form.col-s12 {
    width: 900px;
   padding-left: 175px;
    text-align: center;
    justify-content: center;
}

textarea {
    width: 550px;
     border:solid 1px green !important; 
    
}

input {
    text-align: center;
}

label {

    text-align: center;
    padding-left: 185px;
    font-size: larger;
    font-weight: 700;
}

span {
    
    font-weight: 700;
    
}

.buttons {
    padding-left: 200px;
}



</style>