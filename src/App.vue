
<template>
  <template>
	<div>
		<div v-for="( job, index ) in pending v-bind:key="'pending-'+index">
	           {{ job }}
               </div>
	</div>
</template>
</template>
<script setup>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('queue', {
            pending: 'pending',
            active: 'active',
            completed: 'completed'
        })
    },

    watch: {
        active(){
            this.processJob();
        }
    },

    methods: {
        processJob(){
            if( this.active.handler ){
                this.active.handler();
            }
        }
    }
}
</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
