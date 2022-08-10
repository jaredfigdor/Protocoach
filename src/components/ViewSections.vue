<template>
<div class="containment">
<div id ="view-sections">

    <h5>  Section {{this.section_id}} : {{this.title}}



    </h5>

<div class="row">
<form @submit.prevent="updateSection" class="col-s12">
<div class="col s3">
    <div class="input-field">
        <input disabled type="text" v-model="section_id" required>
         <span class="helper-text">Section ID#</span>
    </div>
   
</div>
<div class="col s3">
    <div class="input-field">
        <input disabled type="text" v-model="status" required>
         <span class="helper-text">Status</span>
    </div>
   
</div>

<div class="row">
    <div class="input-field col s3">
        <input disabled type="text" v-model="record" required>
         <span class="helper-text">Record #</span>

    </div>
</div>

<div class="row">
    <div class="input-field col s9">
        <input disabled type="text" v-model="section" required>
         <span class="helper-text">Title</span>
    </div>

</div>
<div class="row">
    <div class="input-field col s9">
        <input disabled type="text" v-model="title" required>
         <span class="helper-text">Name</span>
    </div>

</div>
<div class="row">
    <div class="input-field col s6">
          <p><label for="policyarea">Policy</label></p>
  <textarea disabled id="policyarea" name="policyarea" rows="15" cols="30">{{policy}}</textarea>
  <br>
          
         
    </div>
   
</div>
<div class="row">
    <div class="input-field col s6">
          <p><label for="modarea">Modification</label></p>
  <textarea disabled id="modarea" name="modarea" rows="15" cols="30">{{modification}}</textarea>
  <br>
          
         
    </div>
   
</div>
<div class="buttons">
<router-link to="/" class ='btn grey'>Back</router-link>



<router-link v-bind:to="{name: 'edit-sections', params: {section_id: section_id}}" class="waves-effect waves-light btn red">
    <i class= "fa fa-unlock"></i> Unlock
</router-link>
</div>

</form>
</div>

</div>
</div>



</template>

<script>

import db from './firebaseInit'
export default {

name: 'view-sections',
data () {
    return {
     section_id: null,
     name: null,
     policy: null,
     section: null,
     status: null,
     title: null,
     record: null,
     modification: null
    }
},
beforeRouteEnter(to, from, next) {
    db.collection('volumes').where('section_id','==', to.params.section_id).get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            next(vm => {
                vm.section_id = doc.data().section_id
                vm.name = doc.data().name
                vm.section = doc.data().section
                vm.status = doc.data().status
                vm.title = doc.data().title
                vm.policy = doc.data().policy
                vm.record = doc.data().record
                vm.modification = doc.data().modification
                
            })
        })
    }),
     M.textareaAutoResize($('#textarea1'));
},
watch: {
    '$route': 'fetchData'
},
methods: {
    fetchData () {
        db.collection('volumes').where('section_id', '==', this.$route.params.section_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.section_id = doc.data().section_id
                this.name = doc.data().name
                this.section = doc.data().section
                this.status = doc.data().status
                this.title = doc.data().title
                this.policy = doc.data().policy
                this.record = doc.data().record
                this.modification = doc.data().modification
            })
        })
    }
 
}

}


</script>

<style>


.container {
    display: flex;
    justify-content: center;
}

#view-sections {
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