<template>

<div id ="dashboard">

    <ul class="collection with-header">
        <li class="collection-header">
           <h5>Volume 1 - Administrative Policies</h5> 
        </li>
        <li v-for="volume in volumes" v-bind:key="volume.id" class="collection-item">
        <div class="chip">{{volume.section_id}}</div>
        
         {{volume.section}} : {{volume.title}}

        <router-link class="secondary-content" 
        
        v-bind:to="{name: 'view-sections', params: {section_id: volume.section_id}}">
        <i class="fa fa-eye"></i>
        
        </router-link>
        
        </li>
    </ul>



<div class="fixed-action-btn">
    <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
    </router-link>
</div>
    
</div>


</template>

<script>
import db from './firebaseInit'
export default {

name: 'dashboard',
data () {
    return {
     volumes: []
    }
},
created () {
    db.collection('volumes').orderBy('section_id').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            console.log(doc.data())
            const data = {
                'id': doc.id,
                'volumes': doc.data().volume,
                'name': doc.data().name,
                'section': doc.data().section,
                'islocked': doc.data().islocked,
                'section_id': doc.data().section_id,
                'title' : doc.data().title,
                'policy' : doc.data().policy,
                'modification' : doc.data().modification

            }
            this.volumes.push(data)
        })
    })
}

}


</script>

<style>


li.collection-header {

text-align: center;    
    width: 600px;
}





</style>