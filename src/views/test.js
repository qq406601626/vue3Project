import {ref,onMounted} from 'vue'
const useName = ()=>{
    const name = ref('zhangsan')
    onMounted(()=>{
        name.value = 'lisi'
    })
    return {
        name
    }
}
export  default useName


