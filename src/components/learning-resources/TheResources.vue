<template>
    <base-card>
        <base-button 
        @click="setSelectedTab('stored-resources')" 
        :mode="storedResourcesButtonMode"
        >Stored Resources</base-button>

        <base-button 
        @click="setSelectedTab('add-resource')" 
        :mode="addResourceButtonMode"
        >Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components:{
        StoredResources,
        AddResource,
    }, 
    data(){
        return{
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'Vue Official Guide Documentation.',
                    link: 'http://www.vuejs.org'
                },

                {
                    id: 'google-guide',
                    title: 'Google',
                    description: 'Google Official Guide Documentation',
                    link: 'http://www.google.com'
                },

                {
                    id: 'youtube-guide',
                    title: 'Youtube',
                    description: 'Youtube Official Guide Documentation',
                    link: 'http://www.youtube.com'
                },
            
            ],
        }
    },
    provide() {
        return{
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    computed: {
        storedResourcesButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },

        addResourceButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    }, 
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addResource(title, description, link){
            const newResource = {
                id: new Date().toISOString,
                title: title,
                description: description,
                link: link
            }
            this.storedResources.unshift(newResource)
            this.selectedTab = 'stored-resources'

        },
        removeResource(resId){
            //this.storedResources = this.storedResources.filter((res) => res.id !== resId)
            //console.log(this.storedResources.length)
            const resIndex = this.storedResources.findIndex(res => res.id === resId)
            this.storedResources.splice(resIndex,1)
        }
    }
}
</script>