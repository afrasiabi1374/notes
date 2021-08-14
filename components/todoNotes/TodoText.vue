<template>
<div>
                  <h2 class="titleTitr">text:</h2>

                  <textarea name="" id="" cols="50" rows="20" style="margin-left:20px"  :value="toText" ></textarea>
</div>
</template>

<script>
export default {
props:['toText']
}
</script>

<style>
.titleTitr{
    margin-left: 30px;
}
</style>