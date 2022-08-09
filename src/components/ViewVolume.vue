<template>

<div id ="view-volume">

    <h3>View Volume</h3>

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

name: 'view-volume',
data () {
    return {
     
    }
}

}


</script>