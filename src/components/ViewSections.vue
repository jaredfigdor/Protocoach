<template>

<div id ="view-sections">

    <ul class="collection with-header">
        <li class="collection-header">
            <h5>{{name}} : {{section}}</h5>
        </li>
        <li class="collection-item">Section Id#: {{section_id}}</li>
        <li class="collection-item">Status: {{status}}</li>
        <li class="collection-item">Name: {{name}}</li>
        <li class="collection-item">Section: {{section}}</li>
        <li class="collection-item">Title: {{title}}</li>
     
    </ul>
    <router-link to="/" class ='btn grey'>Back</router-link>
    <button @click="deleteSection" class ='btn red'>Delete</button>

    <div class="fixed-action-btn">
    <router-link v-bind:to="{name: 'edit-sections', params: {section_id: section_id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
    </router-link>
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
     title: null
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
            })
        })
    },
    deleteSection (){
        if(confirm('Are you sure')){
        db.collection('volumes').where('section_id', '==', this.$route.params.section_id).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete()
                this.$router.push('/')
            })
        })
        }
    }
}

}


</script>

<style>
.h4 {
    font-size: small;
}

</style>