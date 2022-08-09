<template>

<div id ="new-section">

    <h3>New Section</h3>
<div class="row">
<form @submit.prevent="saveSection" class="col s12">

<div class="row">
    <div class="input-field col s12">
        <input type="text" v-model="section_id" required>
        <label>Section ID#</label>
    </div>
</div>

<div class="row">
    <div class="input-field col s12">
        <input type="text" v-model="name" required>
        <label>Name</label>
    </div>
</div>
<div class="row">
    <div class="input-field col s12">
        <input type="text" v-model="section" required>
        <label>Section</label>
    </div>
</div>
<div class="row">
    <div class="input-field col s12">
        <input type="text" v-model="title" required>
        <label>Title</label>
    </div>
</div>
<div class="row">
    <div class="input-field col s12">
        <input type="text" v-model="policy" required>
        <label>Policy</label>
    </div>
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

name: 'new-section',
data () {
    return {
    section_id: null,
     name: null,
     policy: null,
     section: null,
     status: null,
     islocked: null,
     title: null
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
                islocked: this.islocked
        })
        .then(docRef => this.$router.push('/'))

    }
}

}


</script>