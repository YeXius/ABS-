<template>
    <div class='header'>
        <h4>{{title}}</h4>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:""
        }
    }
}
</script>

<style>
    .header {
        width: 100%;
        height: 1rem;
        /* border-bottom: 1px solid #000; */
        box-sizing: border-box;
        padding-left: .34rem;
        display:flex;
        align-items: center;
    }
    .header h4{
        font-family: "楷体";
        font-size: .4rem;
    }
</style>