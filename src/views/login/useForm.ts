import {ref} from 'vue'

export const useForm = ()=>{
    const formData = ref({
        account:'',
        password:''
    })
    const _form = ref()
    const submit = async ()=>{
        try {
            await _form.value.validate()
            console.log('成功')
        }catch (e) {
            console.log('失败')
        }
    }
    return {
        formData,
        _form,
        submit
    }
}