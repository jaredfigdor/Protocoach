<template>

<div id ="edit-section">

    <h4>Edit Section : {{this.section_id}}</h4>

<div class="row">
<form @submit.prevent="updateSection" class="col s12">

<div class="row">
    <div class="input-field">
        <input disabled type="text" v-model="section_id" required>
      
    </div>
    <label>Section ID #</label>
</div>

<div class="row">
    <div class="input-field">
        <input type="text" v-model="record" required>

    </div>
    <label>Record #</label>
</div>
<div class="row">
    <div class="input-field">
        <input type="text" v-model="section" required>

    </div>
    <label>Section Name</label>
</div>
<div class="row">
    <div class="input-field">
        <input type="text" v-model="title" required>

    </div>
    <label>Section Title</label>
</div>
<div class="row">
    <div class="input-field">
        <textarea id="textarea1" class="materialize-textarea"></textarea>
          

    </div>
     <label>Policy</label>
</div>
<button type="submit" class="btn">Submit</button>
<router-link to="/" class="btn grey">Cancel</router-link>
</form>
</div>

</div>


</template>

<script>
import db from './firebaseInit'
export default {

name: 'edit-sections',
data () {
    return {
    section_id: null,
     name: null,
     policy: null,
     section: null,
     status: null,
     title: null,
     record: null
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
                vm.islocked = doc.data().islocked
                vm.record = doc.data().record
                
            })
        })
    })
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
                
            
            })
        })
    },
    updateSection () {
        db.collection('volumes').where('section_id', '==', this.$route.params.section_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.update({
                section_id: this.section_id,
                name: this.name ,
                policy: this.section,
                status: this.status ,
                title: this.title,
                policy: this.policy,
                islocked: this.islocked,
                record: this.record
              })
              .then(() => {
                this.$router.push({name: 'view-sections', params: {section_id: this.section_id} })
              })
            })
        })
    }
}

}


</script>