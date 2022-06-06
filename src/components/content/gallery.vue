
<template>
<div class="gallery">
    <div v-for="(item,idx) in 15" :key=idx>
        <img :src="require('@/assets/gallery/img_' + idx + '.png' )"/>
    </div>
</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
.gallery{
    display:inline-block;
    margin:20px;
}
.gallery div{
    display:inline-block;
    width:32%;
    margin-right:15px;
    margin-bottom:11px;
}
.gallery div:nth-child(3n){
  margin-right:0
}
.gallery div img{
    width:100%;
    height:100%;
}
</style>