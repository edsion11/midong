const count  ={
    state:{
        count:0
    },
    mutations:{
        ADD(){
            console.log("add")
        }
    }
}
export default {
    namespaced:true,
    ...count
}